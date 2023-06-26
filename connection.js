var mysql=require('mysql')

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"deliveryapi"
})

module.exports=conn