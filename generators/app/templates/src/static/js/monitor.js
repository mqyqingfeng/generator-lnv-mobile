;(function($) {

    $.extend($.fn, {

        monitor: function(options) {

            //参数和默认值
            var defaults = {
                classname: 'm_el',
                src: 'http://miaoooooo.com:3000/add',
                data: {
                    project: '',
                    page: '',
                    name: '',
                    openid: '',
                    type: ''
                }
            };

            var options = $.extend(defaults, options);

            var startTime = null;
            var endTime = null;

            var log = function(opts) {

                var logOptions = $.extend({}, options.data, opts)

                var img = new Image(1, 1);
                var item = '';

                for (var i in logOptions) {
                    item += i + '=' + logOptions[i] + '&';
                }


                img.src = options.src + "?" + item;
                console.log(img.src)

            }

            var logIn = function() {

                startTime = new Date();

                log({
                    type: 'in'
                })

            }

            var logOut = function() {

                endTime = new Date();

                log({
                    type: 'out',
                    stay: endTime.getTime() - startTime.getTime()
                })

            }

            var logClick = function() {

                var name = $(this).attr("data-name");

                log({
                    name: name,
                    type: 'click'
                })

            }

            var bindEvent = function() {

                $(function(){
                    logIn();
                })

                window.onbeforeunload = logOut;

                $("body").on("tap", "." + options.classname, logClick);

            }

            var init = function() {

                bindEvent();

            }

            init();

        }

    })

})(Zepto)
