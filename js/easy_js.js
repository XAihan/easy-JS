"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easy_js = void 0;
var easy_js = /** @class */ (function () {
    function easy_js() {
        this.author = "XAihan";
        this.version = "v1.0.0";
    }
    easy_js.test = function () {
        console.log("这里是测试方法");
    };
    easy_js.userAgent = window.navigator.userAgent.toLowerCase();
    //判断设备
    easy_js.isPSB = {
        /**
         * 判断Platform
         * @return {string} 返回平台信息
         */
        platform: function () {
            if (/Mobile|Android|webOS|Windows Phone|BlackBerry|SymbianOS|\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(easy_js.userAgent)) {
                return "Mobile";
            }
            else if (/Windows|Mac|Linux/i.test(easy_js.userAgent)) {
                return "PC";
            }
            console.log("未知：" + easy_js.userAgent);
            return easy_js.userAgent;
        },
        /**
         * 判断System
         * @return {string} 返回系统信息
         */
        system: function () {
            if (/Android/i.test(easy_js.userAgent) ||
                /Adr/i.test(easy_js.userAgent)) {
                return "Android";
            }
            if (/\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(easy_js.userAgent)) {
                return "iOS";
            }
            if (/BlackBerry/i.test(easy_js.userAgent)) {
                return "BlackBerry";
            }
            if (/SymbianOS/i.test(easy_js.userAgent)) {
                return "SymbianOS";
            }
            if (/Windows/i.test(easy_js.userAgent)) {
                return "Windows";
            }
            if (/Mac/i.test(easy_js.userAgent)) {
                return "Mac";
            }
            if (/Linux/i.test(easy_js.userAgent)) {
                return "Linux";
            }
            console.log("未知：" + easy_js.userAgent);
            return easy_js.userAgent;
        },
        /**
         * 判断浏览器
         * @return {string} 返回浏览器信息
         */
        browser: function () {
            if (/Huawei/i.test(easy_js.userAgent)) {
                if (/MicroMessenger/i.test(easy_js.userAgent)) {
                    return "WeChat";
                }
                else if (/pixel|statusbar/i.test(easy_js.userAgent)) {
                    return "HuaWei";
                }
                else {
                    return "QQBrowser";
                }
            }
            if (/MQQBrowser/i.test(easy_js.userAgent)) {
                return "QQBrowser";
            }
            if (/QQ/i.test(easy_js.userAgent)) {
                return "QQ";
            }
            if (/MicroMessenger/i.test(easy_js.userAgent)) {
                return "WeChat";
            }
            if (/WeiBo/.test(easy_js.userAgent)) {
                return "WeiBo";
            }
            if (/Chrome/i.test(easy_js.userAgent)) {
                return "Chrome";
            }
            if (/Firefox/i.test(easy_js.userAgent)) {
                return "Firefox";
            }
            if (/Safari/i.test(easy_js.userAgent)) {
                return "Safari";
            }
            if (/Edge/i.test(easy_js.userAgent)) {
                return "Edge";
            }
            if (window.ActiveXObject || "ActiveXObject" in window) {
                return "IE";
            }
            console.log("未知：" + easy_js.userAgent);
            return easy_js.userAgent;
        },
    };
    //操作cookie
    easy_js.cookie = {
        /**
         * 设置Cookie
         * @param {string} name 名称
         * @param {string} value 值
         * @param {number} day 天数
         * @param {string} domain 域名
         * @return {void}
         */
        set: function (name, value, day, domain) {
            if (day === void 0) { day = 0; }
            if (domain === void 0) { domain = "/"; }
            var time = "";
            if (day > 0) {
                time = new Date();
                time.setTime(time.getTime() + day * 24 * 60 * 60 * 1000);
                time = "expires=" + time.toGMTString() + ";";
            }
            document.cookie =
                name +
                    "=" +
                    encodeURIComponent(value) +
                    ";" +
                    time +
                    "path=" +
                    domain;
        },
        /**
         * 获取Cookie
         * @param {string} name 名称
         * @return {string|null} 返回value|null
         */
        get: function (name) {
            var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"), value = document.cookie.match(reg);
            if (value)
                return decodeURIComponent(value[2]);
            else
                return null;
        },
        /**
         * 删除Cookie
         * @param {string} name 名称
         * @param {string} domain 域名
         * @return {void}
         */
        del: function (name, domain) {
            if (domain === void 0) { domain = "/"; }
            var value = this.get(name), exp = new Date();
            exp.setTime(exp.getTime() - 1);
            if (value)
                document.cookie =
                    name +
                        "=" +
                        value +
                        ";expires=" +
                        exp.toGMTString() +
                        ";path=" +
                        domain;
        },
    };
    //操作rem
    easy_js.rem = {
        /**
         * 设置标准Rem
         * @param {number} psdWidth PSD宽度
         * @param {number} time 间隔时间
         * @param {boolean} scale 是否缩放
         * @return {void}
         */
        set: function (psdWidths, times, scales) {
            var psdWidth = psdWidths ? psdWidths : 750, time = times ? times : 300, scale = scales ? scales : false;
            easy_js.base.resizeWindow(function () {
                var width = document.documentElement.clientWidth, height = document.documentElement.clientHeight, fontSize = (width / psdWidth) * 100;
                if (fontSize > 100)
                    fontSize = 100;
                if (scale && width / height >= 0.75)
                    fontSize = 85;
                document.documentElement.style.fontSize = fontSize + "px";
                console.log(fontSize);
            }, time);
        },
        /**
         * 获取Rem
         * @return {number} Rem
         */
        get: function () {
            return parseInt($("html").css("font-size"));
        },
    };
    //操作url
    easy_js.url = {
        /**
         * 获取参数值
         * @param {string} name Url参数的key
         * @param {string} url Url
         * @return {string|null} 返回Url参数的value
         */
        getParam: function (name, url) {
            var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(&|$)", "i"), param = null;
            if (url) {
                url = url.split("?")[1];
            }
            else {
                url = window.location.search.substr(1);
            }
            param = url.match(reg);
            if (param)
                return decodeURIComponent(param[2]);
            else
                return null;
        },
        /**
         * 获取全部参数值
         * @param {string} url Url
         * @return {array|null} 返回Url参数数组
         */
        getAllParam: function (url) {
            var param = [];
            if (url) {
                url = url.split("?")[1];
            }
            else {
                url = window.location.search.substr(1);
            }
            var urlList = url.split("&");
            for (var i = 0; i < urlList.length; i++) {
                var p = urlList[i].split("=");
                if (p[0]) {
                    param[p[0]] = decodeURIComponent(p[1]);
                }
            }
            return param;
        },
        /**
         * 添加或修改参数
         * @param {object} object 参数一维对象
         * @param {string} url Url字符串
         * @return {string} 返回Url
         */
        addParam: function (object, url) {
            if (!url) {
                url = window.location.href;
            }
            var href = url.split("?")[0] || "", search = url.split("?")[1] || "", hash = url.split("#")[1] || "", param = "";
            if (!object)
                return url;
            if (hash)
                search = search.replace("#" + hash, "");
            easy_js.base.traversingObject(object, function (key, value) {
                var reg = new RegExp("(^|\\?|&)" + key + "=([^&]*)(&|$)", "i"), hasParam = "";
                if (search)
                    hasParam = search.match(reg);
                if (hasParam)
                    search = search.replace(hasParam[0], "");
                if (param !== "")
                    param += "&";
                param += String(key) + "=" + String(value);
            });
            if (search) {
                if (search[0] === "&") {
                    search = "?" + param + search;
                }
                else {
                    search = "?" + param + "&" + search;
                }
            }
            else {
                search = "?" + param;
            }
            if (hash)
                search += "#" + hash;
            return href + search;
        },
        /**
         * 删除参数
         * @param {array} array 参数数组
         * @param {string} url Url字符串
         * @return {string} 返回Url
         */
        delParam: function (array, url) {
            if (!url)
                url = window.location.href;
            if (!array)
                return url;
            var href = url.split("?")[0] || "", search = url.split("?")[1] || "", hash = url.split("#")[1] || "";
            if (hash)
                search = search.replace("#" + hash, "");
            easy_js.base.traversingObject(array, function (key, value) {
                var reg = new RegExp("(^|\\?|&)" + value + "=([^&]*)(&|$)", "i"), hasParam = "";
                if (search)
                    hasParam = search.match(reg);
                if (hasParam)
                    search = search.replace(hasParam[0], "");
                if (search)
                    search = "?" + search;
                if (hash)
                    search += "#" + hash;
                return href + search;
            });
        },
        /**
         * 获取哈希值
         * @return {string} 返回Url的hash值
         */
        getHash: function () {
            var hash = decodeURIComponent(window.location.hash);
            return hash.substring(1, hash.length);
        },
    };
    // 内容计算
    easy_js.math = {
        //获取最大值
        getMax: function (array) {
            return Math.max.apply(Math, array);
        },
        //获取最小值
        getMin: function (array) {
            return Math.min.apply(Math, array);
        },
        //加法
        add: function (x) {
            var num = 0;
            x.map(function (item) {
                num += item;
            });
            return num;
        },
        //减法
        sub: function (x) {
            var num = x[0];
            x.map(function (item) {
                num -= item;
            });
            return num;
        },
    };
    //基础方法
    easy_js.base = {
        /**
         * 获取时间
         * @param times 时间戳
         * @param format
         */
        getTime: function (times, format) {
            var time = times
                ? new Date(parseInt(times.toString().padEnd(13, "0")))
                : new Date(), fmt = format ? format : "yyyy-MM-dd hh:mm:ss", o = {
                "M+": (time.getMonth() + 1).toString().padStart(2, "0"),
                "d+": time.getDate().toString().padStart(2, "0"),
                "h+": time.getHours().toString().padStart(2, "0"),
                "m+": time.getMinutes().toString().padStart(2, "0"),
                "s+": time.getSeconds().toString().padStart(2, "0"),
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, o[k]);
                }
            }
            return fmt;
        },
        /**
         * 获取随机整数
         * @param min 最小值
         * @param max 最大值
         */
        getRandomInt: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        /**
         * 取消对象关联（强拷贝）
         * @param obj 对象
         */
        unlinkObject: function (obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        /**
         * 遍历数组
         * @param array 数组
         * @param callback 回调
         */
        traversingArray: function (array, callback) {
            for (var i = 0; (i = array.length); i++) {
                callback(i, array[i]);
            }
        },
        /**
         * 遍历对象
         * @param {object} object 数组
         * @param {function} callback 回调
         * @return {void}
         */
        traversingObject: function (object, callback) {
            for (var key in object) {
                callback(key, object[key]);
            }
        },
        /**
         * 随机乱序数组
         * @param array 数组
         */
        randomArray: function (array) {
            return array.sort(function () {
                return Math.random() > 0.5 ? -1 : 1;
            });
        },
        /**
         * 监听屏幕变化
         * @param {function} callback 回调
         * @param {number} time 间隔时间
         * @return {void}
         */
        resizeWindow: function (callback, time) {
            var resizeSetTime = null;
            time = time ? time : 300;
            // document.addEventListener('DOMContentLoaded', callback, false)
            window.addEventListener("onorientationchange" in window
                ? "onorientationchange"
                : "resize", function () {
                clearTimeout(resizeSetTime);
                resizeSetTime = setTimeout(callback, time);
            }, false);
            window.addEventListener("pageshow", function (e) {
                if (e.persisted) {
                    clearTimeout(resizeSetTime);
                    resizeSetTime = setTimeout(callback, time);
                }
            }, false);
        },
        /**
         * 当前域名内携带url参数跳转
         */
        transferParam: function () {
            var _this = this;
            $("a").on("click", function () {
                var src = "", href = $(_this).attr("href");
                //忽略非跳转链接
                if (href.indexOf("void(0)") !== -1)
                    return;
                //忽略非跳转当前域名链接
                if ((href.indexOf("http://") > -1 ||
                    href.indexOf("https://") > -1) &&
                    href.indexOf(window.location.hostname) === -1)
                    return;
                href = href.split("#");
                if (href.length > 1)
                    src = href[0] + window.location.search + "#" + href[1];
                else
                    src = href[0] + window.location.search;
                $(_this).attr("href", src);
            });
        },
    };
    //导航栏事件
    easy_js.event = {
        /**
         * 导航栏滚动事件
         * @param dom 导航栏父元素
         * @param nav 列表nav，jquery对象的字符串，如'#section-1'
         * @param callback 回调方法，传回目前达到的nav列表的i值和对象
         */
        navScroll: function (dom, nav, callback) {
            $(window).scroll(function () {
                var s = $(document).scrollTop(); //获取滚动高度
                for (var i = 0; i < nav.length; i++) {
                    var wh = $(window).height(), top_1 = $(nav[i]).offset().top, height = $(nav[i]).height();
                    if (top_1 - wh / 2 < s && s < top_1 + height - wh / 2) {
                        $($(dom).children()[i])
                            .addClass("active")
                            .siblings()
                            .removeClass("active");
                        callback(i, nav[i]);
                    }
                }
            });
        },
        /**
         * 导航栏点击事件
         * @param dom 导航栏元素
         * @param nav 导航栏对应板块
         * @param callback 回调
         */
        navClick: function (dom, nav, callback) {
            $(dom).on("click", function (e) {
                var index = $(e.target).index();
                $("html,body").animate({
                    scrollTop: $(nav[index]).offset().top,
                }, 500);
                callback(e.target, nav[index]);
            });
        },
        /**
         *
         * @param height 滚动要超过的高度 || 要超过的元素
         * @param doneCallback 超过之后的回调
         * @param doCallback 没有超过时的回调
         */
        scroll: function (height, doneCallback, doCallback) {
            $(window).scroll(function () {
                var s = $(document).scrollTop(); //获取滚动高度
                var top = typeof height === "number"
                    ? height
                    : $(height).offset().top;
                if (s > top) {
                    doneCallback();
                }
                else {
                    doCallback();
                }
            });
        },
        /**
         * 预约事件
         * @param goalList 奖励目标数量的数组
         * @param num 预约人数
         * @param callback 回调，返回达到的成熟（number）
         */
        iniResTotal: function (goalList, num, callback) {
            for (var i = 0; i < goalList.length; i++) {
                if (num > goalList[i]) {
                    callback(i);
                }
            }
        },
    };
    return easy_js;
}());
exports.easy_js = easy_js;
