var manageCookie = {
    setCookie: function (name, value, data) {
        document.cookie = name + '=' + value + ';max-age=' + data; 
        return this;
    },
    removeCookie: function (name) {
        this.setCookie(name, '', -1); 
        return this;
    },
    getCookie: function (name, callback) {
        var allCookieArr = document.cookie.split('; ');
        var len = allCookieArr.length;
        for(var i = 0; i < len; i++) {
            var itemCookieArr = allCookieArr[i].split('=');
            if(itemCookieArr[0] == name) {
                callback(itemCookieArr[1]);
                return this; 
            } 
        }
        callback(undefined);
        return this;
    }
}