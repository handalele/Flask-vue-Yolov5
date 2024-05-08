import os
import cv2
from flask import Flask
from yolov5 import YOLOv5

from mysql import update_data_waring, find_device_place, find_id, update_case_waring, find_case
from datetime import datetime, timedelta

global fileflag
# 载入本地模型
model_path = 'runs/train/exp/weights/best.pt'

model = YOLOv5(model_path)

name = None
personframe = None
timesheep = None
has_saved = False  # 标记是否已经保存了帧
count_person = find_id() + 1
count_case = find_case() + 1
last_save_time = None  # 上次保存图像的时间
save_interval = timedelta(seconds=1)


def process_frame(frame, device_name):
    global name, last_save_time, personframe, timesheep, count_person, count_case
    try:
        res = model.predict(frame)
        new_frame = frame.copy()  # 创建一个新的帧副本
        save_dir_person = 'vue\\vuetest\\public\\image\\person'
        save_dir_case = 'vue\\vuetest\\public\\image\\case'
        for *xyxy, conf, cls in res.xyxy[0]:
            label = f'{model.model.names[int(cls)]} {conf:.2f}'
            cv2.rectangle(new_frame, (int(xyxy[0]), int(xyxy[1])), (int(xyxy[2]), int(xyxy[3])), (0, 0, 255), 2)
            cv2.putText(new_frame, label, (int(xyxy[0]), int(xyxy[1]) - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.0,
                        color=(0, 0, 255),
                        thickness=2)

            name = int(cls)  # 输出检测的类别名称
            current_time = datetime.now()
            if name == 0 or name == 2:
                if last_save_time is None or (current_time - last_save_time) >= save_interval:
                    timesheep = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    if name == 0:
                        save_path = os.path.join(save_dir_person, f'{device_name}_{count_person}.jpg')
                        if not os.path.exists(save_dir_person):
                            os.makedirs(save_dir_person)
                        cv2.imwrite(save_path, new_frame)
                        image_path = os.path.join('/image/person', f'{device_name}_{count_person}.jpg')
                        update_data_waring(count_person, device_name, timesheep, find_device_place(device_name),
                                           image_path)
                        count_person += 1
                        last_save_time = current_time
                    elif name == 2:
                        save_path = os.path.join(save_dir_case, f'{device_name}_{count_case}.jpg')
                        if not os.path.exists(save_dir_case):
                            os.makedirs(save_dir_case)
                        cv2.imwrite(save_path, new_frame)
                        image_path = os.path.join('/image/case', f'{device_name}_{count_case}.jpg')
                        update_case_waring(count_case, device_name, timesheep, find_device_place(device_name),
                                           image_path)
                        count_case += 1
                        last_save_time = current_time
        return new_frame
    except KeyError as e:
        print(f"KeyError: {e}")
        return frame


def cl():
    if name is not None:
        return name


def safe():
    if personframe is not None:
        return timesheep
