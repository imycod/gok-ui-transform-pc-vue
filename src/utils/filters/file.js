/**
 * 文件大小格式
 * @param {Number} value
 */
export const fileSizeFormat = size => {
  // console.log('size-----',size);
  const num = 1024.00; // byte
  if (size < num) {
    return size + 'B';
  }
  if (size < Math.pow(num, 2)) {
    return (size / num).toFixed(2) + 'K';
  } // KB
  if (size < Math.pow(num, 3)) {
    return (size / Math.pow(num, 2)).toFixed(2) + 'M';
  } // M
  if (size < Math.pow(num, 4)) {
    return (size / Math.pow(num, 3)).toFixed(2) + 'G';
  } // G
  return (size / Math.pow(num, 4)).toFixed(2) + 'T';
}
