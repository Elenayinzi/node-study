const EventEmitter = require('events')
const myEvent = new EventEmitter()
myEvent.on('事件1',() => {
    console.log('事件被执行了')
})
myEvent.emit('事件1')