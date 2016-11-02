var koa = require('koa');
var app = koa();

app.use(function* (){
    this.body = 'Hello World from Koa';
});

app.listen(3000);