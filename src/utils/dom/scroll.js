/**
 * @description: 页面回到顶部
 * @param {*} origen
 * @param {*} distance
 * @return {*}
 */
export function resetScrollDistance(origen='Y',distance=0) {
  if (origen==='Y'){
    document.body.scrollTop = document.documentElement.scrollTop = distance
  }
  if (origen==='X'){
    document.body.scrollLeft = document.documentElement.scrollLeft = distance
  }
}
