from contextlib import closing
from datetime import datetime

import pymysql


class DatabaseConnection:
    def __init__(self, host, port, user, passwd, db, charset):
        self.host = host
        self.port = port
        self.user = user
        self.passwd = passwd
        self.db = db
        self.charset = charset

    def __enter__(self):
        self.connection = pymysql.connect(
            host=self.host,
            port=self.port,
            user=self.user,
            passwd=self.passwd,
            db=self.db,
            charset=self.charset
        )
        return self.connection

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.connection:
            self.connection.close()


# 注册信息
def register(username, password, allow_number):
    # 建立数据库连接
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                select_sql = "SELECT allow_number FROM allow WHERE allow_number = %s"
                cursor.execute(select_sql, (allow_number,))

                result = cursor.fetchone()
                # 根据查询结果判断 allow_number 是否在表中
                if result:
                    sql = "INSERT INTO user (username, password) VALUES (%s, %s)"
                    cursor.execute(sql, (username, password))
                    connection.commit()
                    return True
                else:
                    return False
    except Exception as e:
        print("General Exception: register", e)
        return False


# 检验登录
def login(username, password):
    # 建立数据库连接
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                select_sql = "SELECT * FROM user WHERE username = %s AND password = %s"
                cursor.execute(select_sql, (username, password))

                result = cursor.fetchone()
                # 根据查询结果判断 allow_number 是否在表中
                if result:
                    return True
                else:
                    return False
    except Exception as e:
        print("General Exception: login ", e)
        return False


# 获取历史七天的预警数据
def get_case_plastic():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:
            with closing(connection.cursor()) as cursor:
                sql = 'SELECT date,alert_count FROM data_total ORDER BY date DESC  LIMIT 8;'
                cursor.execute(sql)
                results = cursor.fetchall()
                # 返回结果列表，每个元素是一个包含date和case_plastic的字典
                return results
    except Exception as e:
        print("General Exception: get_case_plastic", e)
        return []  # 或者可以抛出一个异常


# 更新数据
def update_data(date, active_count, alert_count):
    # 建立数据库连接
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                # 检查日期是否已存在
                sql = "SELECT * FROM data_total WHERE date = %s"
                cursor.execute(sql, date)
                result = cursor.fetchone()

                if result is None:
                    # 如果不存在，插入新记录
                    insert_sql = "INSERT INTO data_total (date, active_count, alert_count) VALUES (%s, %s, %s)"
                    cursor.execute(insert_sql, (date, active_count, alert_count))
                else:
                    # 如果存在，更新记录
                    update_sql = "UPDATE data_total SET active_count = %s, alert_count = %s WHERE date = %s"
                    cursor.execute(update_sql, (active_count, alert_count, date))

                    # 提交事务
                connection.commit()
    except Exception as e:
        print("General Exception: 1", e)
        # 处理其他类型的异常


# 查找数据
def find_data(date):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                # 查询当前日期的active_count和alert_count
                sql_today = "SELECT active_count, alert_count,case_plastic FROM data_total WHERE date = %s"
                cursor.execute(sql_today, date)
                today_result = cursor.fetchone()
                # 查询active_count和alert_count的总和
                sql_totals = (
                    "SELECT SUM(active_count) AS total_active_count, SUM(alert_count) AS total_alert_count FROM "
                    "data_total")
                cursor.execute(sql_totals)
                totals_result = cursor.fetchone()

                # 返回结果
                if today_result:
                    if today_result[0] is not None:
                        today_active_count = today_result[0]
                    else:
                        today_active_count = 0

                    if today_result[1] is not None:
                        today_alert_count = today_result[1]
                    else:
                        today_alert_count = 0
                    if today_result[2] is not None:
                        today_case_plastic = today_result[2]
                    else:
                        today_case_plastic = 0
                else:
                    today_active_count = 0
                    today_alert_count = 0
                    today_case_plastic = 0
                total_active_count = int(totals_result[0]) if totals_result else 0  # 返回的是decimal类型
                total_alert_count = int(totals_result[1]) if totals_result else 0

                return today_active_count, today_alert_count, total_active_count, total_alert_count,today_case_plastic
    except Exception as e:
        print("General Exception: 2", e)
        # 处理其他类型的异常


# 添加安全预警信息
def update_data_waring(count, device_name, time, place, image):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:
            with closing(connection.cursor()) as cursor:
                update_sql = "INSERT INTO data_warning(id,device,time,place, image) VALUES (%s, %s, %s, %s, %s)"
                cursor.execute(update_sql, (count, device_name, time, place, image))
                connection.commit()
    except Exception as e:
        print("General Exception: 3", e)
        # 处理其他类型的异常


# 添加垃圾预警信息
def update_case_waring(count, device_name, time, place, image):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:
            with closing(connection.cursor()) as cursor:
                update_sql = "INSERT INTO case_warning(id,device,time,place, image) VALUES (%s, %s, %s, %s, %s)"
                cursor.execute(update_sql, (count, device_name, time, place, image))
                connection.commit()
    except Exception as e:
        print("General Exception: 3", e)
        # 处理其他类型的异常


# 返回预警信息数
def find_id():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                find_sql = "SELECT COUNT(*) FROM data_warning"
                cursor.execute(find_sql)
                sum = cursor.fetchone()[0]
        return sum
    except Exception as e:
        print("General Exception: 3.1", e)

# 返回垃圾预警信息数
def find_case():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                find_sql = "SELECT COUNT(*) FROM case_warning"
                cursor.execute(find_sql)
                sum = cursor.fetchone()[0]
        return sum
    except Exception as e:
        print("General Exception: 3.1", e)

# 获取安全预警信息
def get_warning_info():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                find_sql = "SELECT * FROM data_warning"
                cursor.execute(find_sql)
                warning_info = cursor.fetchall()
                devices_list = []
                for row in warning_info:
                    device = {
                        'id': row[0],
                        'device': row[1],
                        'time': row[2],
                        'place': row[3],
                        'image': row[4]
                    }
                    devices_list.append(device)
        return devices_list
    except Exception as e:
        print("General Exception: 4", e)
        # 处理其他类型的异常


# 获取垃圾预警信息
def get_case_warning():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                get_case_sql = "SELECT * FROM case_warning"
                cursor.execute(get_case_sql)
                warning_info = cursor.fetchall()
                devices_list = []
                for row in warning_info:
                    device = {
                        'id': row[0],
                        'device': row[1], 'time': row[2],
                        'place': row[3],
                        'image': row[4]
                    }
                    devices_list.append(device)
        return devices_list
    except Exception as e:
        print("General Exception: 4", e)
        # 处理其他类型的异常


# 获取待处理预警信息
def get_warning_places():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                SELECT = "SELECT place FROM data_warning WHERE flag = 0"
                cursor.execute(SELECT)  # 使用正确的 SQL 字符串
                warning_info = cursor.fetchall()
                places_list = [row[0] for row in warning_info]  # 直接构造包含 place 的列表
        return places_list
    except Exception as e:
        print("General Exception: 4.1", e)
        return []  # 在发生异常时返回一个空列表


# 取消预警
def cancel_warning(data):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                UPDATE = "UPDATE data_warning SET flag = 1 WHERE place = %s"
                cursor.execute(UPDATE, data)
                connection.commit()
                return True
    except Exception as e:
        print("General Exception: 4.2", e)
        return False


# 获取设备信息
def get_device_info():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                find_sql = "SELECT * FROM device"
                cursor.execute(find_sql)
                device_info = cursor.fetchall()
                devices_list = []
                for row in device_info:
                    device = {
                        'name': row[0],
                        'place': row[3],
                        'account': row[4]
                    }
                    devices_list.append(device)
                return devices_list
    except Exception as e:
        print("General Exception: 5", e)
        # 处理其他类型的异常


# 获取设备地点
def find_device_place(device_name):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                find_sql = "SELECT place FROM device WHERE name = %s"
                cursor.execute(find_sql, device_name)
                place = cursor.fetchone()
                return place[0]
    except Exception as e:
        print("General Exception: 6", e)
        # 处理其他类型的异常


# 获取设备经纬度信息
def find_device_lnt():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                find_sql = "SELECT place,lng,lat FROM device"
                cursor.execute(find_sql)
                places = cursor.fetchall()
                return places
    except Exception as e:
        print("General Exception: 6", e)
        # 处理其他类型的异常


# 获取设备名
def find_device_name(place):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:
            with closing(connection.cursor()) as cursor:
                find_sql = "SELECT name FROM device where place = %s"
                cursor.execute(find_sql, place)
                result = cursor.fetchone()
                if result:
                    # fetchone()返回一个元组，所以我们需要访问元组的第一个元素（即设备名）
                    return result[0]
                else:
                    return None  # 或者你可以抛出一个异常或返回一个默认值
    except Exception as e:
        print("General Exception: find_device_name", e)
        # 处理其他类型的异常


# 插入设备信息
def update_device(device_name, device_lng, device_lat, device_place, device_account):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                update_sql = "INSERT INTO device VALUES (%s,%s, %s, %s, %s)"
                cursor.execute(update_sql, (device_name, device_lng, device_lat, device_place, device_account))
                connection.commit()
    except Exception as e:
        print("General Exception: 7", e)
        # 处理其他类型的异常


# 删除设备信息
def delete_device(device_name):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                delete_sql = "DELETE FROM device WHERE name = %s"
                cursor.execute(delete_sql, device_name)
                connection.commit()
    except Exception as e:
        print("General Exception: 8", e)
        # 处理其他类型的异常


# 添加负责人信息
def add_principal(name, tel):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                add_sql = "INSERT INTO account VALUES (%s,%s)"
                cursor.execute(add_sql, (name, tel))
                connection.commit()
    except Exception as e:
        print("General Exception: 9", e)
        # 处理其他类型的异常


# 获取负责人负责区域信息
def get_principal():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                get_sql = """  SELECT  p.account_name AS responsible_name,  p.account_tel AS responsible_phone,  
            GROUP_CONCAT(d.place ORDER BY d.place SEPARATOR ', ') AS locations  
            FROM  account p  
            JOIN  device d ON p.account_name = d.account_name  
            GROUP BY  p.account_name, p.account_tel  
            """
                cursor.execute(get_sql)
                result = cursor.fetchall()
                principal_list = []  # 更改变量名以更好地反映内容
                for row in result:
                    principal = {
                        "responsible_name": row[0],
                        "responsible_phone": row[1],
                        "locations": row[2]  # 添加locations到字典中
                    }
                    principal_list.append(principal)
                return principal_list
    except Exception as e:
        print("General Exception: 10", e)
        return []  # 在发生异常时返回一个空列表而不是None


# 获取所有负责人姓名
def get_principal_names():
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:

            with closing(connection.cursor()) as cursor:
                get_sql = "  SELECT  account_name  FROM  account  "
                cursor.execute(get_sql)
                result = cursor.fetchall()
                principal_names = [row[0] for row in result]
                return principal_names
    except Exception as e:
        print("General Exception: 11", e)
        return []  # 在发生异常时返回一个空列表而不是None


# 获取负责人电话
def get_phone_by_location(place):
    try:
        with DatabaseConnection('localhost', 3306, 'root', 'root', 'watervue', 'utf8') as connection:
            with closing(connection.cursor()) as cursor:
                query_sql = """
                SELECT p.account_tel
                FROM account p
                INNER JOIN device l ON p.account_name = l.account_name
                WHERE l.place = %s
                """
                cursor.execute(query_sql, place)
                result = cursor.fetchone()  # 使用fetchone()获取第一个匹配的结果
                if result:
                    return result[0]  # 返回电话号码
                else:
                    return None  # 如果没有找到匹配的负责人，则返回None
    except Exception as e:
        print("General Exception: 11", e)
        return None
