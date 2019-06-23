function drag(elem) {
    var disX,
        disY;
    addEvent(elem, 'mousedown', function (e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(getStyle(elem, 'left'));
        disY = event.clientY - parseInt(getStyle(elem, 'top'));
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
    });
    function mouseMove(e) {
        var event = e || window.event;
        elem.style.left = event.clientX - disX + "px";
        elem.style.top = event.clientY - disY + "px";
    }
    function mouseUp(e) {
        var event = e || window.event;
        removeEvent(document, 'mousemove', mouseMove);
        removeEvent(document, 'mouseup', mouseUp);
    }
}

function addEvent(elem, type, handler) {
    if(elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    }else if(elem.attachEvent) {
        elem['temp' + type + handler] = handler;
        elem[type + handler] = function () {
            elem['temp' + type + handler].call(elem);
        };
        elem.attachEvent('on' + type, elem[type + handler]);
    }else{
        elem['on' + type] = handler;
    }
}
function getStyle(obj, styleProp) {
    if (obj.currentStyle) {
        return obj.currentStyle[styleProp];
    } else {
        return window.getComputedStyle(obj, null)[styleProp];
    }
}
function removeEvent(elem, type, handler) {
    if(elem.removeEventListener) {
        elem.removeEventListener(type, handler, false);
    }else if(elem.detachEvent) {
        elem.detachEvent('on' + type, handler);
    }else{
        elem['on' + type] = null;
    }
}