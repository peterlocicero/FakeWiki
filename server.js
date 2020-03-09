var express = require('express');
var app = express();
var path = require('path');
const htmlFolder = 'public/pages';
const fs= require('fs');

//index page
app.get('/', function(req, res) {
 console.log('requested main page');
    res.sendFile('index.html', {root : __dirname});
});



app.get('/createPage', function(req, res) {
 console.log('requested create page');
    res.sendFile('createPage.html', {root : __dirname});
});


app.get('/about', function(req, res) {
 console.log('requested main page');
    res.sendFile('about.html', {root : __dirname});
});




app.use(express.static(__dirname + '/public'));



//has to go at the end
app.get('*', function(req, res) {
    console.log('requested illegal page')
    res.send('dont work');
   });
  

app.use(express.json())

app.post('/login', function(req,res){
  var title=req.body.title;
  var content=req.body.content;
  console.log(req.body.title);
  fs.appendFile(`public/${title}.html`, content, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
  
});


app.post('/endpoint', function(req,res){


  var fileArray= [];
  var searchy=req.body.searchy;
  var closestWord = [];

  fs.readdir(htmlFolder, (err,files) =>{ 
  files.forEach(file => {
    var fileObject = {}
    fileObject.href = `pages/${file}`;
    fileObject.file = file.replace(".html","");
    fileArray.push(fileObject);

    // console.log(fileArray);
   });
  res.send(JSON.stringify(fileArray));
  });
  // console.log(fileArray);
  // res.send(fileArray);
  }); 
  



app.listen(8080);