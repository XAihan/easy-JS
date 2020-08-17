"use strict";
var easy_js = /** @class */ (function () {
    function easy_js() {
        this.Math = {
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
            }
        };
        //操作cookie
        this.cookie = {
            // 设置cookie
            set: function (name, value, day, domain) {
                if (day === void 0) { day = 0; }
                if (domain === void 0) { domain = '/'; }
                var time = '';
                if (day > 0) {
                    time = new Date();
                    time.setTime(time.getTime() + day * 24 * 60 * 60 * 1000);
                    time = 'expires=' + time.toGMTString() + ';';
                }
                document.cookie = (name + '=' + encodeURIComponent(value) + ';' + time + 'path=' + domain);
            },
            //获取cookie
            get: function (name) {
                var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)'), value = document.cookie.match(reg);
                if (value)
                    return decodeURIComponent(value[2]);
                else
                    return null;
            },
            //删除cookie
            del: function (name, domain) {
                if (domain === void 0) { domain = '/'; }
                var value = this.get(name), exp = new Date();
                exp.setTime(exp.getTime() - 1);
                if (value)
                    document.cookie = name + '=' + value + ';expires=' + exp.toGMTString() + ';path=' + domain;
            }
        };
        //操作url
        this.url = {
            //获取参数值
            getParam: function (name, url) {
                var reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(&|$)', 'i'), param = null;
                if (url) {
                    url = url.split('?')[1];
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
            //获取全部参数
            getAllParam: function (url) {
                var param = [];
                if (url) {
                    url = url.split('?')[1];
                }
                else {
                    url = window.location.search.substr(1);
                }
                var urlList = url.split('&');
                for (var i = 0; i < urlList.length; i++) {
                    var p = urlList[i].split("=");
                    if (p[0]) {
                        param[p[0]] = decodeURIComponent(p[1]);
                    }
                }
                return param;
            },
            //添加或修改参数
            addParam: function (object, url) {
                if (!url) {
                    url = window.location.href;
                }
                var href = url.split('?')[0] || '', search = url.split('?')[1] || '', hash = url.split('#') || '', param = '';
                if (!object)
                    return url;
                if (hash)
                    search = search.replace("#" + hash, '');
            }
        };
    }
    easy_js.prototype.test = function () {
        console.log('测试方法');
    };
    /**
    * 遍历对象
    * @param {object} object 数组
    * @param {function} callback 回调
    * @return {void}
    */
    easy_js.prototype.traversingObject = function (object, callback) {
        for (var key in object) {
            callback(key, object[key]);
        }
    };
    return easy_js;
}());
