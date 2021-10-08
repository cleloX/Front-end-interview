// console.log(-0 === +0) // true
// console.log(0 === -0);
// console.log(0 === +0);
// console.log(NaN === NaN); // false

function is(a,b){
  if(a === b){
    return 1/a === 1/b
  }else{
    return a !== a && b !== b
  }
}

// console.log(1/-0);

console.log(is(0,-0));
// console.log(1/-0, 1/+0);