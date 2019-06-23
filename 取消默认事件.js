//取消事件冒泡
function stopBubble(e){
    var e = e || window.event;
    // var target = e.target || e.srcElement;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}

//取消默认事件
function cancelHandler(e){
    var e = e || window.event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}