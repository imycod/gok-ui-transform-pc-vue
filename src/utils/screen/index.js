export function useScale(container, pix = 1920) {
    if (container) {
        const devicewidth = document.documentElement.clientWidth;
        const scale = devicewidth / pix; // 分母——设计稿的尺寸
        container.style.zoom = scale; //放大缩小相应倍数
    }
}