Object.prototype.cloneTo = function (target) {
    var target = target || {};
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            if (this.prop != "null" && typeof (this[prop]) == "object") {
                if (Object.prototype.toString.call(this[prop]) == "[object Array]") {
                    target[prop] = [];
                } else {
                    target[prop] = {};
                }
                this[prop].CloneTo(target[prop])
            } else {
                target[prop] = this[prop];
            }
        }
    }
    return target;
}

// function deepClone(origin, target) {
//     var target = target || {};
//     for (var prop in origin) {
//         if (origin.hasOwnProperty(prop)) {
//             if (origin.prop != "null" && typeof (origin[prop]) == "object") {
//                 if (Object.prototype.toString.call(origin[prop]) == "[object Array]") {
//                     target[prop] = [];
//                 } else {
//                     target[prop] = {};
//                 }
//                 deepClone(origin[prop],target[prop])
//             } else {
//                 target[prop] = origin[prop];
//             }
//         }
//     }
//     return target;
// }