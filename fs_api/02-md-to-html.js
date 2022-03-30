const fs = require('fs')
const path = require('path')
// npm i marked -D
const { marked } = require('marked')
const browserSync = require('browser-sync')

/**
 * 01读取md 和css 内容
 * 02将上述读取出来的内容替换占位符，生成一个最终需要展示的html字符串
 * 03将上述的html字符写入指定的html文件中
 * 04监听md文档内容的变化，然后更新html内容
 * 05使用browser-sync 来实时显示html内容 npm i browser-sync -D
 */
// node ./02-md-to-html.js index.md
let mdPath = path.join(__dirname,process.argv[2])
let cssPath = path.resolve('index.css')
let htmlPath = mdPath.replace(path.extname(mdPath),'.html')

fs.watchFile(mdPath, (curr,prev) => {
    if(curr.mtime !== prev.mtime) {
        fs.readFile(mdPath, 'utf-8',(err, data) => {
            // md --> html
            let htmlStr = marked(data)
            console.log(htmlStr)
            fs.readFile(cssPath, 'utf-8',(err, data) => {
                let retHtml = temp.replace('{{content}}',htmlStr).replace('{{style}}',data)
                // 将上述的内容写入到指定的html文件中，用于在浏览器中进行展示
                fs.writeFile(htmlPath,retHtml,(err) => {
                    console.log('html 生成成功了')
                })
            })
        })
    }
})

browserSync.init({
    browser: '',
    server: __dirname,
    watch: true,
    index: path.basename(htmlPath)
})

const temp = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title></title>
            <style>
                .markdown-body {
                    box-sizing: border-box;
                    min-width: 200px;
                    min-width: 1000px;
                    margin: 0 auto;
                    padding: 45px;
                }
                @media (max-width: 750px) {
                    .markdown-body {
                        padding: 15px;
                    }
                }
                {{style}}
            </style>
        </head>
        <body>
            <div>
                {{content}}
            </div>
        </body>
    </html>
`