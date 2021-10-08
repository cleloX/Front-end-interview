Array.prototype.filter = function (callbackfn){
  let res = []
  const _this = Array.from(this)
  for(let i = 0; i < _this.length; i++){
    if(callbackfn(_this[i], i, _this)){
      res.push(_this[i])
    }
  }
  return res
}

// console.log(Array.prototype.filter);


console.log([12,44,14,2,345,34,65,47,99].filter((item) => item > 30));
// console.log(Array.prototype.filter((item) => item > 30, [12,44,14,2,345,34,65,47,99]));