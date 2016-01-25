/**
 * @description javascript for
 * @author TuzK1ss
 * @date 16/1/24.
 */

(function (root, factory) {
    "use strict";

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object') {
        module.exports = factory();
    } else {
        window.index = factory();
    }

})(this, function () {
    "use strict";

    var _index = {
        /**
         * initialize index
         */
        initialize: function () {
            this.bindInputKeyUp();
        },

        /**
         * bind input search key up event
         *
         * @returns {_index}
         */
        bindInputKeyUp : function () {
            var _this = this,
                _keyword;

            document.querySelector('#search').addEventListener('keyup', function () {
                _keyword = this.value;
                _this.getSearchData(_keyword, _this.renderSearchContainer);
            });

            return _this;
        },

        /**
         * post to get search data
         *
         * @param {String} keyword
         * @param {Function} callback
         */
        getSearchData : function (keyword, callback) {

            console.log(keyword);

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status <= 300) || xhr.statu == 304) {
                        var res = xhr.responseText;
                        typeof callback === 'function' && callback(JSON.parse(res));
                    }
                }
            };
            xhr.open('post', '/getSearchData', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('keyword=' + keyword);
        },


        /**
         * render search container after search keyword change
         *
         * @param data
         */
        renderSearchContainer : function (data) {
            var _html = '';

            for (var i = 0, len = data.length; i < len; i ++) {
                _html += '<a href="/detail?id=' + data[i].id + '" target="_blank" class="list-group-item">' + data[i].name + '</a>';
            }

            document.querySelector('#container').innerHTML = _html;
        }
    };

    return _index.initialize();

});
