const User=require('../Models/User');

exports.getUser=function(req,res){
    const username=req.body.username;
    const pass=req.body.pass;
    
    User.login(username,pass, user=>{
        if(!user)
        {
            res.status(404).json({
                message:"not found"
            });
        }
        res.status(200).json({
            message:"DONE"
        });
        console.log(user);
    })
}