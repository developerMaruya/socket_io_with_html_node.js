
var conn=require('./connection')
var express=require('express')
var app=express();

var bodyParser=require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
// post
app.post('/',function(req,res){
    // console.log(req.body)
    var username=req.body.username;
    var email=req.body.email;
    var mobile=req.body.mobile;
    var password=req.body.password;
    var role=req.body.role
    conn.connect(function(error){
        if(error){
            console.log(error)
        }
        var sql="INSERT INTO registration(username,email,mobile,password,role) VALUES(?,?,?,?,?)";
        conn.query(sql,[username,email,mobile,password,role],function(error,result){
            res.send('registratin successfull'+result.insertId);
        })
    })
})
app.listen(7000,()=>{
    console.log("server run on 7000")
});