import queue
import random
import threading
import time

from threading import Lock

import cv2
from flask import Flask, Response
from flask_socketio import SocketIO

from twilio_api import twilio
from yolov import process_frame, cl, safe
from mysql import *

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
app.config['SECRET_KEY'] = 'secret!'
# 定义一个全局变量thread，用于存储线程对象
thread = None
# 定义一个锁，用于线程同步
thread_lock = Lock()

timesheep = None


class VideoCapture:

    def __init__(self, name):
        self.cap = cv2.VideoCapture(name)
        self.q = queue.Queue()
        t = threading.Thread(target=self._reader)
        t.daemon = True
        t.start()

    def _reader(self):
        while True:
            ret, frame = self.cap.read()
            if not ret:
                break
            if not self.q.empty():
                try:
                    self.q.get_nowait()
                except queue.Empty:
                    pass
            self.q.put(frame)

    def read(self):
        return self.q.get()


@app.route('/video/<device_name>')
def video_feed(device_name):
    rtsp_url = find_device_name(device_name)
    try:
        rtsp_url = int(rtsp_url)
    except ValueError:
        rtsp_url = rtsp_url
    return Response(gen(rtsp_url), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/person')
def feed():
    return Response(gen(0), mimetype='multipart/x-mixed-replace; boundary=frame')


def gen(device_name):
    camera = VideoCapture(device_name)
    while True:
        image = camera.read()
        processed_frame = process_frame(image, device_name)
        ret, jpeg = cv2.imencode('.jpg', processed_frame)
        frame = jpeg.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/underwaterEnvironment')
def underwaterEnvironment():
    return Response(gen(0), mimetype='multipart/x-mixed-replace; boundary=frame')


# 定义一个事件处理函数test_connect，当客户端连接时触发
@socketio.on('connect')
def test_connect():
    # 获取全局变量thread的值
    global thread
    # 使用锁，防止多线程并发问题
    with thread_lock:
        # 如果thread为None，则创建一个新的线程
        if thread is None:
            thread = socketio.start_background_task(target=background_thread)


@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')


# 登录
@socketio.on('login')
def handle_login(data):
    username = data['username']
    password = data['password']

    if login(username, password):
        socketio.emit('login_Success')
    else:
        socketio.emit('login_Error')


# 注册
@socketio.on('register')
def handle_register(data):
    username = data['username']
    password = data['password']
    allow = data['allow']

    if register(username, password, allow):
        socketio.emit('register_Success')
    else:
        socketio.emit('register_Error')


# 添加设备
@socketio.on('add_device')
def add_device(data):
    # 处理添加设备的逻辑
    device_name = data['name']
    device_lng = data['lng']
    device_lat = data['lat']
    device_place = data['place']
    device_account = data['account']
    update_device(device_name, device_lng, device_lat, device_place, device_account)
    socketio.emit('data_device', get_device_info())


# 删除设备信息
@socketio.on('delete')
def delete(data):
    # 处理添加设备的逻辑
    delete_device(data)
    socketio.emit('data_device', get_device_info())


# 发送设备信息
@socketio.on('show')
def show():
    socketio.emit('data_device', get_device_info())


# 发送地图按钮信息
@socketio.on('map')
def show():
    devices = find_device_lnt()
    device_list = [[device[0].strip(), device[1], device[2]] for device in devices]
    socketio.emit('map_button', device_list)


# 取消预警
@socketio.on('cancelWarning')
def cancelWarning(data):
    # 处理添加设备的逻辑
    cancel_warning(data)


# 通知预警信息
@socketio.on('sendWarning')
def cancelWarning(data):
    tel = int(get_phone_by_location(data))
    twilio(tel, data)


# 发送地图按钮信息
@socketio.on('warning')
def show():
    devices = find_device_lnt()
    device_list = [[device[0].strip(), device[1], device[2]] for device in devices]
    socketio.emit('warning_button', device_list)


# 添加负责人信息
@socketio.on('add_person')
def add_account(data):
    name = data['name']
    tel = data['phone']
    add_principal(name, tel)
    socketio.emit('data_person', get_principal())


# 发送负责人信息
@socketio.on('account_person')
def send_account():
    socketio.emit('data_person', get_principal())


# 发送负责人信息——设备管理
@socketio.on('account_person_device')
def send_account_device():
    socketio.emit('send_account_device_name', get_principal_names())


# 发送历史七天预警
@socketio.on('history_warning')
def send_history_warning():
    warning = [{'date': date_str, 'value': value} for date_str, value in get_case_plastic()]
    socketio.emit('send_history_warning', warning)


def background_thread():
    global timesheep
    timearray = []
    data_y = []
    while True:
        current_date = datetime.now().strftime('%Y-%m-%d')
        today_active_count, today_alert_count, total_active_count, total_alert_count, today_case_plastic = find_data(
            current_date)
        statisticValue = today_active_count  # 今天活跃
        statisticValue1 = int(total_active_count)  # 总活跃
        statisticValue2 = today_alert_count  # 今天预警
        statisticValue3 = today_case_plastic  # 垃圾预警
        if cl() == 0:
            if safe() is not None:
                timesheep = safe()
                socketio.emit('table', {'data': {'time': timesheep}})
            statisticValue2 += 1
        elif cl() == 2:
            statisticValue3 += 1
        statisticValue += random.randint(100, 150) - random.randint(25, 70)
        socketio.sleep(1)
        t = time.strftime('%M:%S', time.localtime())
        timearray.append(t)
        update_data(current_date, statisticValue, statisticValue2)
        data_y.append(statisticValue)

        socketio.emit('security_warning', get_warning_info())  # 发送安全预警
        socketio.emit('case_warning', get_case_warning())  # 发送垃圾预警
        socketio.emit('out_warning', get_warning_places())
        socketio.emit('server_data',
                      {'data': [t, statisticValue, statisticValue1, statisticValue2, timearray, data_y,
                                statisticValue3]})


if __name__ == '__main__':
    socketio.run(app)
