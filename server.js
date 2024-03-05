
const http=require('http');
const fs=require('fs');
const _ =require('lodash');
const server=http.createServer((req,res) => {
   console.log("requst has been made");
   let num=_.random(0,30);
   console.log(num);
   //console.log(req.method);
   res.setHeader('Content-Type','text/html');
   let path='./PREBACKEND';
   switch(req.url){
    case'/':
    path+='/index.html'
    res.statusCode=200;
    break;
    case'/about':
    path+='/about.html'
    res.statusCode=200;
    break;
    case'/about-abc':
    res.statusCode=301;
    res.setHeader('location','/about');
    res.end();
        default:
        path+='/404.html'
        res.statusCode=404;
        break;   
   }
   fs.readFile(path,(err,filedata)=>{
    if(err){
        console.log("err");
    }else{
        //res.write(filedata);
        res.end(filedata);
    }
})

   //res.end('hello, pepecodingn :)');
});
server.listen(3000,'localhost',()=>{

    console.log("server has been listen");
});

