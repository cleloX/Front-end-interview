Array.prototype.map = function(callbackfn, thisArg){
  console.log('thisArg', thisArg);
  const res = []
  this.forEach((value, index, arr) => {
    res.push(callbackfn.call(this, value, index, arr))
  })
  return res
}

console.log(['1','12','12','qw22'].map(item => parseInt(item)));