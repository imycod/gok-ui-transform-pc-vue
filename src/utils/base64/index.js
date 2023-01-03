import cryptoJs from 'crypto-js'


export default {
    /**
     * base64加密
     */
    encrypt(value) {
        const base64Str = cryptoJs.enc.Base64.stringify(cryptoJs.enc.Utf8.parse(value)).replace(/=/g, '');
        return base64Str;
    },

    /**
    * base64解密
    */
    parse(value) {
        if (!value) { return false }
        const fillNum = (4 - value.length % 4);
        // 构建完整的base64字符串，字符串长度不是4的倍数的话末尾用【=】填充
        fillNum && (value += '==='.substring(0, fillNum));
        return (cryptoJs.enc.Base64.parse(value)).toString(cryptoJs.enc.Utf8);
    }
}