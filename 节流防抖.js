//节流（页面滚动、窗口调整、疯狂点击）
function throttle(method, delay) {
    var last = 0;
    return function () {
        var now = new Date().getTime();
        if (now - last > delay) {
            method.apply(this, arguments);
            last = now;
        }
    }
}
btn.onclick = throttle(fn, 200);



//防抖（实时搜索、拖拽）
function debounce(handle, delay) {
    var timer = null;
    return function () {
        var self = this;
        var arg = arguments;
        timer = setTimeout(function () {
            handle.apply(self, arg);
        }, delay)
    }
}
input.oninput = debounce(ajax, 500);