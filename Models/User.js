const account=require("./account");
class User extends account
{
    constructor(name,userName,password,country,Governorate,email,age,address,birthday,zakatAmount,zakatProgress,role)
    {
        super(name,userName,password,country,Governorate,email);
        this.age=age;
        this.address=address;
        this.birthday=birthday;
        this.zakatAmount=zakatAmount;
        this.zakatProgress=zakatProgress;
        this.role=role;
        //this.interests=interests;
        //this.skills=skills;
       // this.donationHistory=donationHistory;
        //this.joinedCampaigns=joinedCampaigns;
    }
    login()
    {

    }
    updateSchedule()
    {
        
    }
    excuteRegisterStrategy()
    {

    }
    updateProfile()
    {

    }
    rateCampaign(id,rate)
    {

    }
    donate(amount,campID)
    {

    }
    joinCampaign(campaign)
    {

    }
    updateZakat(double)
    {

    }
    
    
}
module.exports=User;