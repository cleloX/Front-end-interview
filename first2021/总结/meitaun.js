let hits = '5 13'.split(' ')[1]
let fxs = '13 31 10 9 20'.split(' ').map(val => parseInt(val))

function children(num){
    let str = ''
    for(let i = 1; i <= num; i++){
        if(num % i == 0) str += i
    }
    return str
}
let count = 0
fxs.forEach(val => {
    let string = children(val)
    string = string.split(hits)
    if(string.length > 1)
      count += string.length - 1

})

console.log('1515'.split('15').length)