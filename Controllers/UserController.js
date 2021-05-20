const bcrypt = require('bcryptjs');
const User=require('../Models/User');

exports.GetUser=function(req,res){
    const username=req.body.username;
    //const username=req.params.username;
    User.findbyID(username)
    .then(([user])=>{
        res.status(200).json({
            message:"User found"
        });
        console.log(user);
    })
    .catch(err=> console.log(err));
}
exports.PostUpdatedUser=function(req,res){
    const user_Username=req.params.id;
    const new_name=req.body.name;
    const new_password=req.body.password;
    const new_email=req.body.email;
    const new_age=req.body.age;
    const new_address=req.body.address;
    const new_birthday=req.body.birthday;
    const new_country=req.body.country;
    const new_governorate=req.body.governorate;
    User.findbyID(user_Username)
    .then(([user])=>{
        bcrypt.hash(new_password, 12)
        .then((hashedPassword)=>{
            const updatedUser=new User(new_name,user_Username,hashedPassword,new_country,new_governorate,new_email,new_age,new_address,new_birthday,user.role);
            updatedUser.updateProfile(user_Username)
            .then(
                res.status(200).json({
                    message:"User updated"
                }))
            .catch(err=> console.log(err));
        })
    })
    .catch(err=> console.log(err));
}