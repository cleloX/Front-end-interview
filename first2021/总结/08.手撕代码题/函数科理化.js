function add(){
  let agr = []
  return function test(){
    
    agr = [...agr ,...arguments]

      if(agr.length < 3) return test
      else{
        let sum = 0
        for(let i=0;i<agr.length;i++){
          sum += agr[i]
        }
        // console.log(sum)
        return sum
      }
    // }

  }
}

const aaa = add()


console.log(aaa(1)(2)(3))