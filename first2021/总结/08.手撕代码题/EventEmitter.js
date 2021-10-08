function EventEmitter(){
  this.events = new Map()
  this.triggerCallBack = (callBack, once = false) => ({callBack, once})
}

EventEmitter.prototype.addListenner = function (evenName, callBack){
  if(typeof callBack !== 'function'){
    new Error('error callBack')
  }
  const event = this.events.get(evenName)
  if(!event){
    this.events.set(evenName, [this.triggerCallBack(callBack)])
  }else{
    event.push(this.triggerCallBack(callBack))
  }
}

EventEmitter.prototype.once = function (evenName, callBack){
  if(typeof callBack !== 'function'){
    throw new Error('error callBack')
  }
  const event = this.events.get(evenName)
  if(!event){
    this.events.set(evenName, [this.triggerCallBack(callBack, true)])
  }else{
    event.push(this.triggerCallBack(callBack, true))
  }
}



EventEmitter.prototype.emit = function (evenName, ...args){
  const event = this.events.get(evenName)
  if(!event){
    throw new Error(`${evenName} is not found!!!`)
  }else{
    let removeList = []
    event.forEach((obj, index) => {
      obj.callBack.apply(this,args)
      if(obj.once){
        removeList.push(index)
      }
    })
    removeList.forEach(index => {
      event.splice(index, 1)
    })
  }
}









const ee = new EventEmitter()
ee.addListenner('a', (a) => console.log(a))
ee.addListenner('a', (a) => console.log(a))
ee.once('a', () => console.log(3))
console.log(ee);

ee.emit('a', 99)
console.log(ee);