// import TEST_TOPIC_TYPE from '@e/test-topic-type.js'
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
  console.log(value, DAYJS(Number(value)).format('YYYY年MM月DD日 HH:mm'));
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
 * 文件大小格式
 * @param {Number} value
 */
const fileSizeFormat = size => {
  // console.log('size-----',size);
  const num = 1024.00; // byte
  if (size < num) { return size + 'B'; }
  if (size < Math.pow(num, 2)) { return (size / num).toFixed(2) + 'K'; } // KB
  if (size < Math.pow(num, 3)) { return (size / Math.pow(num, 2)).toFixed(2) + 'M'; } // M
  if (size < Math.pow(num, 4)) { return (size / Math.pow(num, 3)).toFixed(2) + 'G'; } // G
  return (size / Math.pow(num, 4)).toFixed(2) + 'T';
}

// 考试题目类型
const topicTypeContent = (type, key = '') => {
  if (type === TEST_TOPIC_TYPE.SINGLE.value) {
    const typeObject = {
      title: '单选题',
      value: 'SINGLE',
      refer: 'SELECT'
    }
    if (key) {
      return typeObject[key]
    } else {
      return typeObject
    }
  }
  if (type === TEST_TOPIC_TYPE.MULTI.value) {
    const typeObject = {
      title: '多选题',
      value: 'MULTI',
      refer: 'SELECT'
    }
    if (key) {
      return typeObject[key]
    } else {
      return typeObject
    }
  }
  if (type === TEST_TOPIC_TYPE.TF.value) {
    const typeObject = {
      title: '判断题',
      value: 'TF',
      refer: 'TF'
    }
    if (key) {
      return typeObject[key]
    } else {
      return typeObject
    }
  }
  if (type === TEST_TOPIC_TYPE.FILL.value) {
    const typeObject = {
      title: '填空题',
      value: 'FILL',
      refer: 'WRITE'
    }
    if (key) {
      return typeObject[key]
    } else {
      return typeObject
    }
  }
  if (type === TEST_TOPIC_TYPE.ANSWER.value) {
    const typeObject = {
      title: '简答题',
      value: 'ANSWER',
      refer: 'WRITE'
    }
    if (key) {
      return typeObject[key]
    } else {
      return typeObject
    }
  }
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
export { timeFormatTemplate, jobMoneyFormat, minuteFormat, timestampFormatChinese, timeToDay, timestampFormat, timeFormat, timeminuteFormat, dateFormat, fileSizeFormat, topicTypeContent, dateFormatYear, dateFormatMonth, dateFormatDate, hourminuteFormat }
