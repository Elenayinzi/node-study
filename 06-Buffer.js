//创建Buffer
//alloc
// const b1 = Buffer.alloc(10)
// console.log(b1)

//allocUnsafe
// const b2 = Buffer.allocUnsafe(10)
// console.log(b2)

//from
// const b3 = Buffer.from('1')  //默认utf8编码
// console.log(b3)
// const b4 = Buffer.from('中') //默认utf8编码，一个汉字3个字节
// console.log(b4)
// const b5 = Buffer.from([1,2,3])
// console.log(b5)
// const b6 = Buffer.from([1,2,'中'])
// console.log(b6)

const b6 = Buffer.from([0xe4,0xb8,0xad])
console.log(b6)
console.log(b6.toString())

// const b6 = Buffer.from('中')
// console.log(b6)
// console.log(b6.toString())