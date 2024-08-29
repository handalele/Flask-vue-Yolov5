# 项目介绍
本项目整体使用前后端分离的方式进行构建，数据库选择MySQL;服务端使用Flask微型web框架+移植的Yolov5检测算法进行构建，将yolov5集成到服务端;客户端使用Vue3框架+WebSocket——Element Plus进行web页面构建。客户端发送检测请求，同时提供已经被存入数据库中摄像头的地址（本设计中指摄像头的rtsp地址），服务端接收到请求后，通过传回的摄像头地址在数据库中进行查询，找到对应摄像头的rtsp地址，把地址传给yolov5检测方法中，通过opencv-python库方法读取视频流，之后视频流会被yolov5进行逐帧检测，检测结果再次返回给服务端进行流式返回给客户端，直到摄像头不再被访问，即客户端关闭视频检测窗口，整个请求完成。Flask作为微型web服务框架，其响应请求的时间非常快，解决了短时间内大量数据的涌入而导致的其他用户无法正常访问的问题。受益于Flask框架的蓝图功能，项目结构也会非常清晰明了，能够减少在开发过程中一些不必要的时间损失，这也使得我们有更多的时间去应用都算法训练中去。Web客户端使用的是vue和Element Plus两个框架进行搭建，两者都有一个共同的特点，即快速开发。Vue把网页分为多个组件，针对不同的组件，可以使其有不同的功能，同时也避免的代码的冗余。Element Plus为前端提供了一套完善的元素组件，只需一些简单的类html标签即可完成一个美观的网页，项目开发时间被进一步压缩。
# 首页
![image](https://github.com/user-attachments/assets/2b9f6595-a78f-49a3-94f4-648f3e4648d4)
# 预警通知
![image](https://github.com/user-attachments/assets/37429278-22ef-41d1-8fa1-c01e14b0250f)
# 垃圾预警
![image](https://github.com/user-attachments/assets/353cb86e-65b9-4301-b800-251c02caf1ed)
# 安全预警
![image](https://github.com/user-attachments/assets/4f4c6a6b-f1b4-444d-89f2-a112fee68eb2)
# 垃圾实时检测
![image](https://github.com/user-attachments/assets/106302ea-3eba-4d1b-8620-771789ee0fa3)
# 溺水检测
![image](https://github.com/user-attachments/assets/f19bc257-42b5-4d7a-bee3-51f76a39c0f3)




