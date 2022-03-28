
//1.资源： cpu 内存
//console.log(process.memoryUsage())
//console.log(process.cpuUsage())

//2.运行环境： 运行目录 node环境 cpu架构 用户环境 系统平台
//console.log(process.cwd())
//console.log(process.version)
//console.log(process.versions)
//console.log(process.arch)
//console.log(process.env.NODE_ENV)
//console.log(process.env.path)
//console.log(process.env.HOME) //win USERPROFILE
//console.log(process.platform)

//3.运行状态：启动参数，PID, 运行时间
//console.log(process.argv)
//console.log(process.argv0)  // win execArgv
//console.log(process.execArgv)
//console.log(process.pid)   //ppid
// setTimeout(() => {
//     console.log(process.uptime())
// },3000)

//4.事件
// process.on('exit', (code) =>{
//     console.log('exit ' + code)
//     // setTimeout(() => {     //异步代码不会执行
//     //     console.log(89089)
//     // },3000)
// })

// process.on('beforeExit', (code) =>{
//     console.log('beforeExit ' + code)
//     // setTimeout(() => {   //异步代码会执行
//     //     console.log(123)
//     // },3000)
// })

// //process.exit()
// console.log('代码执行完了')

//5. 标准的输出，输入 错误

// console.log = function(data) {
//     process.stdout.write('--12' + data + '\n')
// }
// console.log(11)
// console.log(22)
// const fs = require('fs')
// fs.createReadStream('test.txt').pipe(process.stdout)

//process.stdin.pipe(process.stdout)
// process.stdin.setEncoding('utf-8')
// process.stdin.on('readable', () => {
//     let chunk = process.stdin.read()
//     if (chunk !== null) {
//         process.stdout.write('data' + chunk)
//     }
// })