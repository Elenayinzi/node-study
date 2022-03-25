//console.log(global)

//console.log(__filename)
//console.log(__dirname)

//console.log(this)

//默认情况下this是空对象，和global并不是一样的

//console.log(this === global)

(function () {
    console.log(this === global)
})()