const DAY_TIME = 1000 * 60 * 60 * 24;// 毫秒*60秒*60分*小时 一天有效时长

export default {
    // 设置 localStorage
    set(key, item, delay = '') {
        let setItem = {
            ...item, // 缓存的数据
            effectiveTime: delay,
            setTime: new Date().getTime() // 存入时间，距离 1970.1.1日的毫秒数
        }
        let stroageItem = {}
        try {
            stroageItem = JSON.stringify(setItem)
        } catch {
            stroageItem = setItem
        }
        localStorage.setItem(key, stroageItem)
    },
    get(key) {
        let getItem = localStorage.getItem(key)
        if (!getItem) return null
        getItem = JSON.parse(getItem)
        if (getItem.setTime && getItem.effectiveTime) {
            let currentTime = new Date().getTime()
            // 判断是否已经过期了
            if (currentTime - getItem.setTime > getItem.effectiveTime) {
                localStorage.removeItem(key)
                return false
            } else {
                return getItem
            }
        } else {
            return getItem
        }
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}