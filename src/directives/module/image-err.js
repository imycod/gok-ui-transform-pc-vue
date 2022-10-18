/**
 * V220 * 施义煌 * 2021-12-28
 * 图片加载错误是显示指定的默认图片，防止出现图片裂开的情况
 */
// 图片不存在时显示的默认图片
const defaultTypes = ['class', 'course', 'avatar', 'company', 'activity', 'jobCompany', 'jobAvatar'];
const defaultImg = (type) => {
  console.log('defaultImg---->',type);

  switch (type) {
    // 班课
    case 'class':
      return 'https://gok-static.goktech.cn/edu/images/class-default.png';
      break;
    // 课程
    case 'course':
      return 'https://gok-static.goktech.cn/edu/images/class-default.png';
      break;
    // 头像
    case 'avatar':
      return 'https://gok-static.goktech.cn/edu/images/avatar-default.jpg';
      break;
    case 'company':
      return 'https://gok-static.goktech.cn/edu/default/company.png';
      break;
    case 'jobCompany':
      return 'https://gok-static.goktech.cn/edu/default/job-company.png';
      break;
      // 国科推荐官
    case 'jobAvatar':
      return 'https://gok-static.goktech.cn/edu/default/job-avatar-default.png';
      break;
    // 活动默认图
    case 'activity':
      return 'https://gok-static.goktech.cn/edu/images/activity-default.png';
      break;
      // 默认
    default:
      return 'https://gok-static.goktech.cn/edu/images/err-default.svg';
  }
}
/**
 * 判断一个图片地址是否真实存在此图片
 * @param {String} url 图片地址
 * @returns Promise
 */
const imgIsExist = function (url) {
  return new Promise((r, j) => {
    const img = new Image();
    img.onload = function () { if (this.complete == true) r(url) }
    img.onerror = function () { r(undefined) }
    img.src = url;
  })
}

/**
 * 设置元素图片
 * @param {Object} el 元素
 * @param {String} url 图片地址
 * @param {Boolean} child 是否检查子元素，只有父节点不是图片的情况下才检测子元素的img标签
 */
const setDomImg = function (el, url, child) {
  const tagName = el.tagName;
  const elChild = el.querySelector('img');
  // 如果是图片标签
  if (tagName === 'IMG') {
    el.setAttribute('src', url);
  } else {
    if (child && elChild) {
      elChild.setAttribute('src', url);
      return
    }
    // 不是图片标签
    el.style.backgroundImage = `url(${url})`;
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundSize = 'contain';
    el.style.backgroundPosition = 'center center';
  }
}

export default {
  inserted: (el, binding, vnode) => {
    const url = binding.value;
    const modifiers = binding.modifiers;
    let type = '';
    for (const key in modifiers) defaultTypes.includes(key) && (type = key);
    if (!url) {
      setDomImg(el, defaultImg(type), modifiers.child);
      return
    }
    imgIsExist(url).then(res => {
      setDomImg(el, res || defaultImg(type), modifiers.child);
    })
  },
  update: (el, binding, vnode) => {
    const url = binding.value;
    const modifiers = binding.modifiers;
    let type = '';
    for (const key in modifiers) defaultTypes.includes(key) && (type = key);
    if (!url) {
      setDomImg(el, defaultImg(type), modifiers.child);
      return
    }
    imgIsExist(url).then(res => {
      setDomImg(el, res || defaultImg(type), modifiers.child);
    })
  }
}
