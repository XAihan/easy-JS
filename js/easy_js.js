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
            }
            //获取全部参数
        };
    }
    easy_js.prototype.test = function () {
        console.log('测试方法');
    };
    return easy_js;
}());
