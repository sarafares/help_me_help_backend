var db=require('../Database/connection')
var express = require('express');
var router = express.Router();
var account=require('../Models/account');
var User=require('../Models/User');
var Organization=require('../Models/Organization');

router.get('/UserLogin',function(req,res){
const username=req.body.username;
const password=req.body.password;
db.query('Select name,age,address,email,zakah_amount,password,role,birthdate,countryID,governorateID from user where username = ? ',[username],function(err,result,fields){
    if(err)
    {throw err;}
    if(result=='')
    {
        res.json({
        message:"not found"});
    //  db.query('Select name,password,country,Governorate,email, from organization where username = ?',[username],function(err,result,fields){});

    }
    else 
    {
        
        const name=result[0].name;
        const age=result[0].age;
        const address=result[0].address;
        const email=result[0].email;
        const zakahamount=result[0].zakahamount;
        const password=result[0].password;
        const role=result[0].role;
        const birthdate=result[0].birthdate;
        const country=result[0].countryID;
        const governorate=result[0].governorateID;
        var countryName;
        var governorateName;

        db.query('select name from country where ID=?',[country],function(err,record,fields){
            countryName=record[0].name;
            db.query('select name from governorate where ID=?',[governorate],function(err,record,fields){
                governorateName=record[0].name;                            
                account=new User(name,username,password,countryName,governorateName,email,age,address,birthdate,zakahamount,null,role);
                console.log(account);
                res.status(200).json({
                    message:"DONE"
                });
            });
        });
    }
});
});

module.exports=router;