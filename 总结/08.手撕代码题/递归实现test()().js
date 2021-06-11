let agr = []
function test(){
  
  agr = [...agr ,...arguments]
  console.log(agr)
  // function fun(){
    
    if(agr.length < 3) return test
    else{
      let sum = 0
      for(let i=0;i<agr.length;i++){
        console.log(sum,agr[i],i)
        sum += agr[i]
      }
      // console.log(sum)
      return sum
    }
  // }

}


console.log(test(1)(2)(3))