Function.prototype.myBind = function(obj){
  let _this = this
  return function(){
    _this.call(obj)
  }
}
function fun1(){
  console.log(this.name)
}
fun1()
let obj = {
  name:'tz'
}
let fun2 = fun1.myBind(obj)
fun2()