const path = require('path');

const postcssPxToViewport = {
    base: {
        unitToConvert: "px", // 要转化的单位
        viewportWidth: 750, // UI设计稿的宽度
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        // viewportUnit: 'rem', // 指定需要转换成的视窗单位，建议使用 rem
        // fontViewportUnit: 'rem', // 字体使用的视口单位
        selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        include: [/mobile/],
        landscape: false // 是否处理横屏情况
    },
    normalTest: {
        unitToConvert: 'px', //需要转换的单位，默认为"px"
        viewportWidth: 2000, // 视窗的宽度，对应设计稿的宽度
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用 rem
        fontViewportUnit: 'vw', // 字体使用的视口单位

        // viewportWidth: 1599.96, // 视窗的宽度，对应设计稿的宽度
        // viewportUnit: 'rem', // 指定需要转换成的视窗单位，建议使用 rem
        // fontViewportUnit: 'rem', // 字体使用的视口单位

        unitPrecision: 6, // 指定`px`转换为视窗单位值的小数后 x位数
        // viewportHeight: 1334, //视窗的高度，正常不需要配置
        propList: ['*'], // 能转化为 rem的属性列表
        selectorBlackList: [], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, // 允许在媒体查询中转换
        replace: true, //是否直接更换属性值，而不添加备用属性
        exclude: [/node_modules/], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        include: [],
        landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: 'rem', //横屏时使用的单位
        // landscapeWidth: 1134 //横屏时使用的视口宽度
    }
}

module.exports = (config) => {
    const loaderContext = config.webpackLoaderContext
    const designWidth = loaderContext.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750

    return {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            // 'postcss-px-to-viewport-with-include':postcssPxToViewport.base
            'postcss-pxtorem': {
                rootValue: 12,
                propList: ['*'],
                selectorBlackList: ['no-wrapper'],
                exclude: (file) => {
                    return !file.includes('mobile');
                },
                replace: true,
                mediaQuery: false,
                minPixelValue: 0,
            },
        }
    }
}

