
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
        window.searchData = factory();
    }

})(this, function () {
    "use strict";

    var _data = [];

    _data.push({ id : 1,  name : 'john',  text : 'demo1 text...' });
    _data.push({ id : 2,  name : 'Bob',  text : 'demo1 text...' });
    _data.push({ id : 3,  name : 'tuzkiss',  text : 'demo1 text...' });
    _data.push({ id : 4,  name : 'gover520',  text : 'demo1 text...' });
    _data.push({ id : 5,  name : 'fuxk',  text : 'demo1 text...' });
    _data.push({ id : 6,  name : 'tom',  text : 'demo1 text...' });
    _data.push({ id : 7,  name : 'haha',  text : 'demo1 text...' });

    return _data;

});
