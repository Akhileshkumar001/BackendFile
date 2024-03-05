const Express = require('express')
// const ejs = require('ejs');
const bodyParser = require('body-parser');
// const { readdir } = require('fs/promises');

const app=Express();


//Attaching middleware to appliction
const isRegister=(req,res,next)=>{
    let loggin=true;
    if(loggin){
        next()
    }else{
        res.json({
            message:"sorry ! you have not loggedin"
        })
    }
}
app.set('view engine','ejs');
// app.set('views', path.join(__dirname, 'views'));
// .use()  applies middleware to application
app.use(bodyParser.urlencoded({extended:false}))
app.use(isRegister)


const USER=[
    {
        Name:"Akihilesh",
        email:"akhilesh@gmail.com",
        hobies:["playing cricket,reading book,watching match"],
        
    },
    {
        Name:"Abhishekh",
        email:"abhiseh@gmail.com",
        hobies:["watching cricket,riding horse,watching Football match"],
        
    }
]
// app.get('/',(req,res)=>{
//     res.send('our first node express server')
// })
// app.get('/api/users',(req,res)=>{
//     const users=[
//     {
//         "links": {
//             "self": "http://example.com/articles",
//             "next": "http://example.com/articles?page[offset]=2",
//             "last": "http://example.com/articles?page[offset]=10"
//         },
//         "data": [{
//             "type": "articles",
//             "id": "1",
//             "attributes": {
//             "title": "JSON:API paints my bikeshed!"
//             },
//             "relationships": {
//             "author": {
//                 "links": {
//                 "self": "http://example.com/articles/1/relationships/author",
//                 "related": "http://example.com/articles/1/author"
//                 },
//                 "data": { "type": "people", "id": "9" }
//             },
//             "comments": {
//                 "links": {
//                 "self": "http://example.com/articles/1/relationships/comments",
//                 "related": "http://example.com/articles/1/comments"
//                 },
//                 "data": [
//                 { "type": "comments", "id": "5" },
//                 { "type": "comments", "id": "12" }
//                 ]
//             }
//             },
//             "links": {
//             "self": "http://example.com/articles/1"
//             }
//         }],
//         "included": [{
//             "type": "people",
//             "id": "9",
//             "attributes": {
//             "firstName": "Dan",
//             "lastName": "Gebhardt",
//             "twitter": "dgeb"
//             },
//             "links": {
//             "self": "http://example.com/people/9"
//             }
//         }, {
//             "type": "comments",
//             "id": "5",
//             "attributes": {
//             "body": "First!"
//             },
//             "relationships": {
//             "author": {
//                 "data": { "type": "people", "id": "2" }
//             }
//             },
//             "links": {
//             "self": "http://example.com/comments/5"
//             }
//         }, {
//             "type": "comments",
//             "id": "12",
//             "attributes": {
//             "body": "I like XML better"
//             },
//             "relationships": {
//             "author": {
//                 "data": { "type": "people", "id": "9" }
//             }
//             },
//             "links": {
//             "self": "http://example.com/comments/12"
//             }
//         }]
//             }
// ]
//     res.json(users)
// })
app.get('/user/Akhi',(req,res)=>{
    
    res.render('index.ejs',{
        Name:"Akihilesh",
        email:"akhilesh@gmail.com",
        hobies:["playing cricket,reading book,watching match"],
        
    });
});
app.get('/user/Abhi',(req,res)=>{
    res.render()
})

// 
// app.get('/info',(req,res)=>{
//     res.render('index.ejs',{content:{Name:req.body.Name,Email:req.body.Email,Passwored:req.body.Passwored}})
// })
app.get('/user/register',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})
// app.get('register/success',(req,res)=>{
//     res.send('you have register successfuly')
// })
app.post('/api/register',(req,res)=>{
   console.log(req.body );
//    res.redirect('register/success')
})


app.listen(5000,()=>{
    console.log('server is up');
})