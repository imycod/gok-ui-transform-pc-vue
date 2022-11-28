import cryptoJs from 'crypto-js'

export function base64Stringify (value) {
  return cryptoJs.enc.Base64.stringify(cryptoJs.enc.Utf8.parse(value)).replace(/=/g, '');
}

export function base64Parse (value) {
  if (!value) {
    return false
  }
  const fillNum = (4 - value.length % 4);
  // 构建完整的base64字符串，字符串长度不是4的倍数的话末尾用【=】填充
  fillNum && (value += '==='.substring(0, fillNum));
  return (cryptoJs.enc.Base64.parse(value)).toString(cryptoJs.enc.Utf8);
}
