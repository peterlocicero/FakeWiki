var express = require('express');
var app = express();
var path = require('path');
const htmlFolder = 'pages';
const fs= require('fs');


//index page
app.get('/', function(req, res) {
 console.log('requested main page');
    res.sendFile('index.html', {root : __dirname});
});


fs.readdir(htmlFolder, (err,files) =>{
  files.forEach(file => {

    fullFile = path.join(__dirname, htmlFolder, file);
    console.log(file);

    app.get(('/'+file),function(req, res) {
      console.log(`requested ${file} page`);
     res.sendFile(fullFile);
      });
    });
  });


//has to go at the end
app.get('*', function(req, res) {
	console.log('requested illegal page');
    res.send('dont work');
});

// app.use(express.json())

// app.post('/login', function(req,res){
//   var user=req.body.user;
//   var password=req.body.password;
//   console.log("User name = "+user+", password is "+password);
//   res.send(JSON.stringify("got username and password"));
// });


app.listen(8080);