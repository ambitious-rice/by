const express = require('express');
const querystring = require('querystring');
const app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '88888888',
    database: 'mooc'
})
connection.connect()
app.get('/login', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', "*");
    const url = request.url;
    const method = request.method;
    const query = querystring.parse(url.split('?')[1]);
    var flag = 0; // 0成功 -1表示未注册 1表示密码错误
    console.log(query.name, query.pass);
    var sql = "select * from tb_usr where name=" + query.name;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        var b = (JSON.stringify(results) == "[]");
        if (b) {
            response.send('-1');
        } else if (results[0].pass == query.pass) {
            response.send('0');
        } else {
            response.send('1');
        }
    })
});
app.get('/regist', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', "*");
    const url = request.url;
    const method = request.method;
    const query = querystring.parse(url.split('?')[1]);
    var flag = 0; // 0成功 -1表示名字重复
    var sql = "select * from tb_usr where name=" + query.name;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        var b = (JSON.stringify(results) == "[]");
        if (!b) {
            response.send('-1');
        } else {
            let sql = "insert into tb_usr(name,pass)VALUES(" + query.name + "," + query.pass + ")";
            connection.query(sql);
            response.send('0');
        }
    })
});
app.get('/regist', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', "*");
    const url = request.url;
    const method = request.method;
    const query = querystring.parse(url.split('?')[1]);
    var flag = 0; // 0成功 -1表示名字重复
    var sql = "select * from tb_usr where name=" + query.name;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        var b = (JSON.stringify(results) == "[]");
        if (!b) {
            response.send('-1');
        } else {
            let sql = "insert into tb_usr(name,pass)VALUES(" + query.name + "," + query.pass + ")";
            connection.query(sql);
            response.send('0');
        }
    })
});
app.get('/search', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', "*");
    const url = request.url;
    const method = request.method;
    const query = querystring.parse(url.split('?')[1]);
    console.log(url, query.search);
    var sql = "select * from search where data like" + "'%" + query.search + "%'";
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        if (results.length != 0) {
            var back = [];
            for (var i = 0; i < results.length; i++) {
                back[i] = results[i].data;
            }
            console.log(back);
            response.send(JSON.stringify(back));
        }else {
            response.send(JSON.stringify([]));
        }
    })
});
app.get('/recommend', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', "*");
    var sql = "select * from recommend";
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        response.send(JSON.stringify(results));
    })
});

app.listen(8000, () => {
    console.log('服务已经启动,8000端口监听中');
})