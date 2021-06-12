function Fun(){
  let arr = [...arguments]
  this.arg1 = arr[0]
  this.arg2 = arr[1]
}
Fun.prototype.test = function(){
  console.log('第一个参数'+this.arg1)
}

//1创建一个空对象
//2改变构造函数的指向
//3创建原型链_proto__的指向
//4返回
//5
function myNew(obj, ...props){
  let ob = {}
  ob.__proto__ = obj.prototype
  let res = obj.apply(ob,props)
  
  return typeof res === 'object' ? res : ob
}

let fun1 = myNew(Fun,11)
fun1.test()