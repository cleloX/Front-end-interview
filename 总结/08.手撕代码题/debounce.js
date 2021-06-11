function debounce(fun,wait){
  let timer = null
  if(timer) clearTimeout(timer)
  else{
    timer = setTimeout(function(){
      fun()
    },wait)
  }
}