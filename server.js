const conn = require('./connection');

conn=require('./connection');

conn.connect(function(error){
    if(error){
    console.log(error)
    }
})