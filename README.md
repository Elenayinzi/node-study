# node-study-瑞安 达尔(Ryan Dahl)
## 命令行窗口
### 常用指令：
    1.dir 列出当前目录下的所有文件

    2.cd 目录名 进入到指定的目录

    3.md 目录名 创建一个文件夹

    4.rd 目录名 删除一个文件夹

### 目录：
    .:表示当前目录

    ..:表示上一级目录
### 环境变量：
    1.path

    2.当我们在命令行窗口打开一个文件或者调用一个程序时，系统先在当前目录下寻找文件程序，如果找到了则直接打开，如果没有找到则会依次到环境变量path中的路径中寻找，直到找到为止，没有找到则报错
## 进程：负责为程序的运行提供必备的环境
## 线程：计算机中最小的计算单位，线程负责执行进程中的程序
   1.单线程:js是单线程的

   2.多线程：java
## Node.js-主线程是单线程，服务端"语言"(nodejs是一个平台或运行时，js可在node环境下进行编程)，实现了js在浏览器之外的平台工作的场景，
   1.简介：是一个能在服务端运行js的开放源代码，跨平台js运行环境；

   2.用途：轻量级、高性能的web服务器;前后端js同构开发;便捷高效的前端工程化;
   
   3.node执行js文件: node 文件名.js
### Nodejs架构，js是无法直接操作底层硬件设置的
    1.Natives modules 核心层:该层由js实现，提供应用程序可直接调用的库，eg:fs, path, http, net, process等模块

    2.Node C/C++ Bindings Builtin modules"胶水层"：是核心层与硬件通信的桥梁，实现eg文件读写等操作

    3.底层：
        V8：执行js代码，提供桥梁接口

        libuv：事件循环，事件列队，异步IO

        第三方模块：c-ares(DNS), http parser, zlib(compression)

    4.硬件层：CPU/RAM/DISK OS
### B/S 架构,brower/service，IO(读写)是计算机操作过程中最缓慢的环节
    1.客户端-->(请求)-->服务器-->(IO处理)-->数据库

    2.客户端<--(响应)<--服务器<--(IO处理)<--数据库
### Reactor模式，单线程完成多线程工作
### nodejs基于Reactor模式下实现异步IO，事件驱动，nodejs更适用于IO密集型高并发请求
### IO类型：阻塞IO,非阻塞IO,期望实现无须主动判断的非阻塞IO，Nodejs实现了异步非阻塞IO
### 轮询的含义：重复调用IO操作，判断IO是否结束，常用的轮询技术有: read, select,poll,kqueue,event ports
### 异步IO的需要及作用
    1.IO是应用程序的瓶颈所在

    2.异步IO提高性能无采原地等待结果返回

    3.IO操作属于操作系统级别，平台都有对应的实现

    4.Nodejs单线程配合事件驱动架构及libuv实现了异步IO
### Nodejs事件驱动架构，事件驱动架构是软件开发中的通用模式
### Nodejs主线程是单线程，单线程实现高并发，异步非阻塞IO配合事件回调通知
### Nodejs实现web API服务
    1.npm init -y -y:yes,省去询问的过程

    2.安装ts,npm install typescript

    3.安装第三方工具ts-node: npm i ts-node -D

    4. express基于nodejs的web应用框架： 安装 npm i express, koa.js,egg.js也是；

    5.express是js编写的，不支持ts语法，安装@types/express: npm i @type/express -D
### Nodejs全局对象 global,是全局变量的宿主
### Nodejs全局变量，常见全局变量
    1.__filename: 返回正在执行脚本文件的绝对路径

    2.__dirname: 返回正在执行脚本文件所在目录

    3.timer类函数: 执行顺序与事件循环间的关系

    4.process: 提供与当前进程互动的接口

    5.require: 实现模块的加载

    6.module,exports: 处理模块的导出
### 全局变量-process
    1.获取进程信息

    2.执行进程操作
### 全局变量-path：用于处理文件/目录的路径，常用API：
    1. basename() 获取路径中基础名称

    2. dirname() 获取路径中目录名称

    3. extname() 获取路径中扩展名称

    4. isAbsolute() 获取路径是否为绝对路径

    5. join() 拼接多个路径片段

    6. resolve() 返回绝对路径

    7. pasre() 解析路径

    8. format() 序列化路径

    9. normalize() 规范话路径
### 全局变量-Buffer 缓冲区，让js可以操作二进制，Buffer是nodejs的内置类
    1.实现nodejs平台下的二进制数据操作

    2.流操作，流操作配合管道实现数据分段传输

    3.Buffer，是一片内存空间

    4.不占用V8堆内存大小的内存空间

    5.内存的使用由Node来控制，由V8的GC回收

    6.一般配合Stream流使用，充当数据缓冲区
### 核心模块-fs,
    1.nodejs内置核心模块

    2.提供文件系统操作的API

    3.权限位，标识符，操作符

    4.文件操作API:
        (1)readFile:从指定文件中读取数据
        (2)writeFile:向指定文件中写入数据
        (3)appendFile:追加的方式向指定文件中写入数据
        (4)copyFile:将某个文件中的数据拷贝至另一个文件
        (5)watchFile:对指定文件进行监控

