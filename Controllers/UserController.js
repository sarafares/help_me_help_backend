const User=require('../Models/User');

exports.getUser=function(req,res){
    const username=req.body.username;
    const pass=req.body.pass;
    
    User.login(username,pass)
    .then(([user])=>{
       
        res.status(200).json({
            message:"DONE"
        });
            console.log(user);
    }
    

    )
    .catch(err => console.log(err))
}