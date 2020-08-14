
class easy_js {

    constructor() {

    }

    test() {
        console.log('测试方法');
    }

    Math: any = {
        //获取最大值
        getMax(array: number[]) {
            return Math.max(...array)
        },

        //获取最小值
        getMin(array: number[]) {
            return Math.min(...array)
        },

        //加法
        add(x: number[]) {
            let num = 0
            x.map((item) => {
                num += item
            })
            return num
        }
    }

    //操作cookie
    cookie: any = {

        // 设置cookie
        set(name: string, value: any, day: number = 0, domain: string = '/') {
            let time: any = '';
            if (day > 0) {
                time = new Date();
                time.setTime(time.getTime() + day * 24 * 60 * 60 * 1000);
                time = 'expires=' + time.toGMTString() + ';';
            }
            document.cookie = (name + '=' + encodeURIComponent(value) + ';' + time + 'path=' + domain);
        },

        //获取cookie
        get(name: string) {
            var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)'),
                value = document.cookie.match(reg);
            if (value) return decodeURIComponent(value[2]); else return null;
        },

        //删除cookie
        del(name: string, domain: string = '/') {
            let value = this.get(name),
                exp: any = new Date();
            exp.setTime(exp.getTime() - 1);
            if (value) document.cookie = name + '=' + value + ';expires=' + exp.toGMTString() + ';path=' + domain;
        }
    }

    //操作url
    url: any = {

        //获取参数值
        getParam(name: string, url?: string) {
            let reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(&|$)', 'i'),
                param = null;
            if (url) {
                url = url.split('?')[1];
            } else {
                url = window.location.search.substr(1);
            }
            param = url.match(reg);
            if (param) return decodeURIComponent(param[2]); else return null;
        }

        //获取全部参数

    }



}
