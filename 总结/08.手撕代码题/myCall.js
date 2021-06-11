//作用 改变原函数this的指向一个obj
//办法 在obj里面新建一个boj.fn = this（function）；然后调用；最后删除
//
Function.prototype.myCall = function(obj,...prop){
  obj = obj ? obj : window
  obj.fn = this
  let res = obj.fn(prop)
  delete obj.fn
  return res
  

}





function fun1(){
  console.log(this.name)
}
fun1()
let obj = {
  name:'tz'
}
fun1.myCall(obj)
