export default {
  removeClass(el, className) {
    if (!this.hasClass(el, className)) return;
    let newClassName = el?.className.split(" ");
    let index = newClassName.findIndex((item) => {
      return item == className;
    });
    newClassName.splice(index, 1);
    el.className = newClassName.join(" ");
  },
  // 判断是否包括样式
  hasClass(el, className) {
    let reg = new RegExp("(^|\\s)" + className + "($|\\s)");
    return reg.test(el?.className);
  },
  // 添加样式
  addClass(el, className) {
    if (this.hasClass(el, className)) return;
    let newClassName = el?.className.split(" ");
    newClassName?.push(className);
    el.className = newClassName?.join(" ");
  },
  css(el, prop, num) {
    el.style[prop] = `${num}px`;
    el.style[prop] = `${num}px`;
  }
};