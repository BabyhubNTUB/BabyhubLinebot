//----------------------------------------
// 載入必要的模組
//----------------------------------------
var linebot = require('linebot');
var express = require('express');


//----------------------------------------
// 填入自己在Line Developers的channel值
//----------------------------------------
var bot = linebot({
    channelId: '1585563817',
    channelSecret: '8ccd25dd6f5bb6a474f5ffc959e83d44',
    channelAccessToken:'9280L113oQDfZPXqnOoLjOTR2qC4pQ9uI3+vQhIPlBcI7Fg6rSQWeQmoWnQM9Ju29dJtcNiYR2YaXjG+NXgb1j+QfYe5XsG7ZF4Mn9fwXKawYBQ8ozjkQ/raIARFjzC/SlgGkJzC3cXo395H5gzHMQdB04t89/1O/w1cDnyilFU='  
  });


//----------------------------------------
// 機器人接受訊息的處理
//----------------------------------------
bot.on('message', function(event) {
    event.reply('Hello, 你好');  
});


//----------------------------------------
// 建立一個網站應用程式app
// 如果連接根目錄, 交給機器人處理
//----------------------------------------
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


//----------------------------------------
// 可直接取用檔案的資料夾
//----------------------------------------
app.use(express.static('public'));


//----------------------------------------
// 監聽3000埠號, 
// 或是監聽Heroku設定的埠號
//----------------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("正在監聽埠號:", port);
});