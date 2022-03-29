const fs = require('fs')
const path = require('path')

// readFile
// fs.readFile(path.resolve('data.txt'), 'utf-8',(err,data) => {
//     console.log(err)
//     if(!err) {
//         console.log(data)
//     }
// })

// writeFile
// fs.writeFile('data1.txt','hello node.js', (err) => {
//     if(!err) (
//         fs.readFile('data.txt','utf-8', (err,data) => {
//             console.log(data)
//         })
//     )
// })

// appendFile
// fs.appendFile('data.txt','你好node 前端',(err) => {
//     console.log('写入成功')
// })

// copyFile
// fs.copyFile('data.txt','test.txt',()=>{
//     console.log('拷贝成功')
// })

// watchFile
// fs.watchFile('data.txt',{interval: 20},(curr,prev) => {
//     if(curr.mtime !== prev.mtime) {
//         console.log('文件被修改了')
//         fs.unwatchFile('data.txt')
//     }
// })

