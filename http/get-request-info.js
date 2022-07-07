const http = require('http')

const server = http.createServer((req,res) => {
    //console.log('请求进来了')
    // 请求路径
    // 请求方式
    // http版本号
    // 请求头
    // 请求体数据获取
})

server.listen(1234,()=>{
    console.log('server is start.......')
})