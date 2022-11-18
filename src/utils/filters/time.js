import DAYJS from 'dayjs'

/**
 * 时间戳转日期格式
 * @param {String} value
 */
const timestampFormat = value => {
  return DAYJS(Number(value)).format('YYYY-MM-DD HH:mm:ss');
}
/**
 * 时间戳转日期格式 中文
 * @param {String} value
 */
const timestampFormatChinese = value => {
  return DAYJS(Number(value)).format('YYYY年MM月DD日 HH:mm');
}
/**
 * 时间戳转日期格式 小时:秒
 * @param {String} value
 */
const timeFormat = value => {
  return DAYJS(Number(value)).format('MM-DD HH:mm');
}
/**
 * 时间戳转日期格式 小时:秒
 * @param {String} value
 */
const timeminuteFormat = value => {
  return DAYJS(Number(value)).format('YYYY-MM-DD HH:mm');
}
/**
 * 时间戳转日期格式 日期
 * @param {String} value
 */
const dateFormat = value => {
  return DAYJS(Number(value)).format('YYYY-MM-DD');
}
/**
 * 时间戳转日期格式 年
 * @param {String} value
 */
const dateFormatYear = value => {
  return DAYJS(Number(value)).format('YYYY');
}
/**
 * 时间戳转日期格式 月
 * @param {String} value
 */
const dateFormatMonth = value => {
  return DAYJS(Number(value)).format('MM');
}
/**
 * 时间戳转日期格式 日
 * @param {String} value
 */
const dateFormatDate = value => {
  return DAYJS(Number(value)).format('DD');
}
/**
 * 时间戳转 小时:秒
 * @param {String} value
 */
const hourminuteFormat = value => {
  return DAYJS(Number(value)).format('HH:mm');
}
/**
 * 时间戳转 分钟
 * @param {String} value
 */
const minuteFormat = value => {
  console.log(value);
  return DAYJS(Number(value)).format('m');
}

/**
 * @description: 时间转化
 * @param {*} time ms
 * @return {*}
 */
const timeToDay = (time) => {
  let result = '';
  // 定义变量 d,h,m保存倒计时的时间
  let day, h, m, s;
  if (time > 0) {
    day = Math.floor(time / 1000 / 60 / 60 / 24);
    h = Math.floor(time / 1000 / 60 / 60 % 24);
    m = Math.floor(time / 1000 / 60 % 60);
    s = Math.floor(time / 1000 % 60);
  }
  if (day > 0) {
    result += day + '天';
  }
  if (h > 0) {
    result += h + '小时';
  }
  if (m > 0) {
    result += m + '分';
  }
  if (s > 0) {
    result += s + '秒';
  }
  return result;
}

/**
 * @description: 就业工资金额去尾椎
 * @return {*}
 */
const jobMoneyFormat = (salary) => {
  if (!salary) {
    return ''
  }
  return salary.replace('/月', '')
}

/**
 * @description: -改为.
 * @return {*}
 */
const timeFormatTemplate = (time) => {
  if (!time) {
    return ''
  }
  return time.replace('-', '.')
}

/**
 * 时间转化器
 */
const timeFormatCustom = (value, formatType, full) => {
  if (!value) return '';
  var timestamp = new Date(Number(value))
  var now = new Date()
  var Y = timestamp.getFullYear();
  var M = (timestamp.getMonth() + 1 < 10 ? '0' + (timestamp.getMonth() + 1) : timestamp.getMonth() + 1)
  var D = (timestamp.getDate() < 10 ? '0' + timestamp.getDate() : timestamp.getDate())
  var h = (timestamp.getHours() < 10 ? '0' + timestamp.getHours() : timestamp.getHours());
  var m = (timestamp.getMinutes() < 10 ? '0' + timestamp.getMinutes() : timestamp.getMinutes());
  var s = (timestamp.getSeconds() < 10 ? '0' + timestamp.getSeconds() : timestamp.getSeconds());
  var nowY = now.getFullYear();
  var nowM = (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1)
  var nowD = (now.getDate() < 10 ? '0' + now.getDate() : now.getDate())
  var date
  date = Y + '-' + M + '-' + D + '  ' + h + ':' + m + ':' + s

  if (formatType === 'Y-M-D') {
    if (full) { // 不区分今日/昨日
      date = Y + '-' + M + '-' + D
    } else {
      if (Y == nowY && M == nowM && D == nowD) {
        date = '今日'
      } else if (Y == nowY && M == nowM && D == nowD - 1) {
        date = '昨日'
      } else {
        date = Y + '-' + M + '-' + D
      }
    }
  } else if (formatType === 'Y-M') {
    date = Y + '-' + M
  } else if (formatType === 'h-m') {
    date = h + ':' + m
  } else if (formatType === 'h-m-s') {
    date = h + ':' + m + ':' + s
  } else if (formatType === 'M-D') {
    date = M + '-' + D
  } else if (formatType === 'Y-M-D-h-m') {
    date = Y + '-' + M + '-' + D + '  ' + h + ':' + m
  } else if (formatType === 'Y/M/D') {
    date = Y + '/' + M + '/' + D
  }else if (formatType === 'M/D') {
    date = M + '/' + D
  }
  return date
}
/*
 * @description:
 * @param {*} begin 开始时间
 * @param {*} end 结合时间
 * @return {*}
 */
function dateTimeFormat(begin, end,symbol='～') {
  const b = Number(begin)
  const e = Number(end)

  const beginY =DAYJS(b).year()
  const endY = DAYJS(e).year()
  const nY = DAYJS().year()

  if((beginY === endY) && (beginY ===nY) ) {
    return timeFormatCustom(b, 'M/D') + symbol + timeFormatCustom(e, 'M/D')
  }
  return timeFormatCustom(b, 'Y/M/D') + symbol + timeFormatCustom(e, 'Y/M/D')
}


export {
  timeFormatTemplate,
  jobMoneyFormat,
  minuteFormat,
  timestampFormatChinese,
  timeToDay,
  timestampFormat,
  timeFormat,
  timeminuteFormat,
  dateFormat,
  dateFormatYear,
  dateFormatMonth,
  dateFormatDate,
  hourminuteFormat,
  timeFormatCustom,
  dateTimeFormat,
}
