// function curry(fn, ...args) {
//   var length = fn.length;
//   args = args || [];
//   return function(...rest) {
//     var _args = [...args, ...rest];
//     return _args.length < length
//       ? curry(fn, _args)
//     : fn.apply(this, _args);
//   }
// }
// var fn = curry(function(a, b, c,d) {
//   return a+b+c+d
// });
// fn('a', 'b', 'c'); // abc
// fn('a', 'b')('c'); // abc
// fn('a')('b')('c'); // abc
// console.log(fn(1)(2,3))



function add(a,b,c,d){
  return a + b + c + d;
}
var currys = function(fn,args = []){
  var length = fn.length; //计算期望函数的参数长度
  console.log('//计算期望函数的参数长度',length,'----',fn)
  args =args; //利用闭包特性保存参数
  console.log('//利用闭包特性保存参数',args)
  return function(){
      newArgs = [].slice.call(arguments); //将自身函数参数赋给新参数
      console.log('//将自身函数参数赋给新参数',newArgs);
      [].push.apply(newArgs,args); //将上回保留的参数push进新的数组
      
      if(newArgs.length<length){ //判断当前函数的参数是否与期望函数参数一致
          return currys.call(this,fn,newArgs); //如果不够，递归调用
      }else{
          
          return fn.apply(this,newArgs); // 如果够，就执行期望函数
      }
  }
}
var addcurry = currys(add);
console.log(addcurry(1)(2)(45,5,5));