//数组随机排序
function arrRandomSort( arr ) {
  let newArr = []
  while ( arr.length > 0 ) {
    let i = Math.floor( Math.random() * arr.length) 
    newArr.push( arr.splice( i , 1)[0] )
  }
  return newArr
}

//冒泡排序
function bubbleSort( arr ) {
  let len = arr.length
  for(let i = 0; i < len-1; i++){
    for(let j = 0; j < len- 1- i; j++){
      if(arr[j] > arr[j+1]){
        let tem = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tem
      }
    }
  }
  return arr
}

//数组去重  不区分数字和字符串
function removeRepeat( arr ) {
  let obj = {}, newArr = []
  for(let i = 0; i<arr.length; i++){
    obj[arr[i]] = typeof(arr[i])
  }
  for(let key in obj){
    newArr.push(key)
  }
  return newArr
}

//获取时间字符串
function getTimeString( date = newDate() ) {
  let time = new Date(date)
  let year = time.getFullYear()
  let month = string((time.getMonth()+1)).padStart(2,'0')
  let day = string(time.getDate()).padStart(2,'0')
  let hour = string(time.getHours()).padStart(2,'0')
  let minute = string(time.getMinutes()).padStart(2,'0')
  let second = string(time.getSeconds()).padStart(2,'0')
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

//下载
function download(url){
  fetch(url).then(res=>{
    return res.blob()
  }).then(res=>{
    let blobUrl = window.URL.createObjectURL(res)
    let a = document.createElement('a')
    a.href = blobUrl
    a.download = url.split('/').pop()
    a.click()
    a.remove()
  })
}