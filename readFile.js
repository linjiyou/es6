let fs=require('fs');//fileSystem


 fs.readFile('./es6/1.txt','utf8',function(err,data){
     if(err) return console.log(err);
     console.log(data);  
 })