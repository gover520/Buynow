/**
 * @description javascript for
 * @author TuzK1ss
 * @date 16/1/24.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var data = require('./searchData.js');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
app.listen(port);

console.log('server run on port ' + port);


app.get('/', function (req, res) {

    // 默认第一次打开 返回所以数据
    res.render('index', {
        data : data
    });
});

app.get('/detail', function (req, res) {
    var _id = req.query.id,
        _data = {};

    // 搜索id为xx的某条数据
    for (var i = 0, len = data.length; i < len; i ++) {
        if (data[i].id == _id) {
            _data = data[i];
        }
    }

    console.log(_data);

    res.render('detail', {
        data : _data
    });
});

app.post('/getSearchData', function (req, res) {
   var _params = req.body,
       _keyword = _params.keyword,
       _res = [];

    // 进行数据筛选
    for (var i = 0, len = data.length; i < len; i ++) {
        if (data[i].name.indexOf(_keyword) > -1) {
            _res.push(data[i]);
        }
    }

    // 返回筛选后的数据
    res.json(_res);

});