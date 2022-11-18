/**
 * 剩余时间
 */
export const surplusTime = (time) => {
  if (time == 0) {
    return '-'
  }
  var now = new Date().getTime()
  var diffTime = parseInt(time) - now
  var result = '';
  // 定义变量 d,h,m,s保存倒计时的时间
  var d, h, m;
  if (diffTime > 0) {
    d = Math.floor(diffTime / 1000 / 60 / 60 / 24);
    h = Math.floor(diffTime / 1000 / 60 / 60 % 24);
    m = Math.floor(diffTime / 1000 / 60 % 60);
    // s = Math.floor(diffTime / 1000 % 60);
  }
  if (d > 0) {
    result += d + '天';
  }
  if (h > 0) {
    result += h + '小时';
  }
  if (m > 0) {
    result += m + '分';
  }
  return result;
}



// 时长转换
export  const durationChange = (value) => {
  console.log("value",value);
  // 传进来的是秒
  let theTime = parseInt(value);
  let result = '';
  if (theTime > 3600) {
    result += parseInt(theTime / 3600) + '小时';
    theTime = theTime % 3600;
  }
  if (theTime > 60) {
    result += parseInt(theTime / 60) + '分';
    theTime = theTime % 60;
  }
  result += theTime + '秒';
  return result;
}

// 时长转换全【自动换算版】
export const durationChangeAll = (value) => {
  console.log("value",value);
  // 传进来的是毫秒
  let theTime = parseInt(value);
  theTime =  theTime / 1000
  let result = '';
  if (theTime > 86400) {
    result += parseInt(theTime / 86400) + '天';
    theTime = theTime % 86400;
  }
  if (theTime > 3600) {
    result += parseInt(theTime / 3600) + '小时';
    theTime = theTime % 3600;
  }
  if (theTime > 60) {
    result += parseInt(theTime / 60) + '分';
    theTime = theTime % 60;
  }
  return result;
}
