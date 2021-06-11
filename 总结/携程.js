function convert(nameA, nameB) {
  if(nameB === nameA) return 1
  let count = 0
  if(nameA.length == nameB.length){
      for(let i = 0; i < nameA.length; i++){
          if(nameB[i] != nameA[i]){
              count++
          }
      }
      
  }else{
      if(nameA.length < nameB.length) [nameA, nameB] = [nameB, nameA]
      console.log(nameA)
      for(let i = 0; i < nameA.length; i++){
          if(nameB[i-count] != nameA[i]){
              // i++
              count++
              console.log(count)
          }
      }
  }
  if( count > 1 ) return 0
  return 1

}
console.log(Math.ceil(4/2))

// console.log(convert('', 'ab'))






function calRedBall(box, num) {
  if(num == 0 || num > box.length) return 0
  else if(num == 1) {
      let res = 0
      box.forEach((val, index) => {
          let mid = val
          console.log(mid)
          box.forEach((val1, index1) => {
              if(index1 != index) mid *= 1 - val1
          })
          res += mid
      })
      return res * 10000
  }
if(box.length == num) return box.reduce((pre, val) => pre * val, 1) * 10000
  
  

}
// function A(n, m){  // 代表m个中选出n个
//   let array = []
//   for(let i=0; i<m;i++) array.push(i)
//   let array1 = array.splice(0, n)
//   let res = []
//   // console.log(arr, arr1)
//   res.push(JSON.parse(JSON.stringify(array1)))
//   function get(arr, arr1){
//     console.log(arr, arr1)
//     if(arr.length == 0) return;
//     while(arr.length > 0){
//       let mm = JSON.parse(JSON.stringify(arr))
//       let mm1 = JSON.parse(JSON.stringify(arr1))
//       mm1.push(mm.pop())
//       mm1.shift()
//       res.push(mm1)
//       get(mm, mm1)

//     }
//   }
//   get(array, array1)

//  return res
// }

// console.log(A(2, 5))
// console.log(calRedBall([0.4, 0.6],1))
function a(){}
var a = 1
// function a(){}
console.log(a)

