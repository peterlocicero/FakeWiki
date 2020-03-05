var express = require('express');
var app = express();
var path = require('path');
const htmlFolder = 'pages';
const fs= require('fs');
var fileArray= [];

//index page
app.get('/', function(req, res) {
 console.log('requested main page');
    res.sendFile('index.html', {root : __dirname});
});


fs.readdir(htmlFolder, (err,files) =>{
  files.forEach(file => {
    fileArray.push(`/pages/${file}`)
   });
  });
//
// fs.readdir(htmlFolder, (err,files) =>{
//   files.forEach(file => {

//     fullFile = path.join(__dirname, htmlFolder, file);
//     console.log(file);

//     app.get(('/'+file),function(req, res) {
//       console.log(`requested ${file} page`);
//      res.sendFile(fullFile);
//       });
//     });
//   });



//has to go at the end
app.get('*', function(req, res) {
  if (fileArray.includes(`/pages${req.originalUrl}`)){
     res.sendFile(`/pages${req.originalUrl}`, {root : __dirname});
   }
   else {
    console.log(`/pages${req.originalUrl}`);
      res.send('dont work');
   }
  });

app.use(express.json())

app.post('/login', function(req,res){
  var title=req.body.title;
  var content=req.body.content;
  console.log(req.body.title);
  fs.appendFile(`pages/${title}.html`, content, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
  
});


app.listen(8080);