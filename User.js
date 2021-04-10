const account=require("./account");
class User extends account
{
    constructor(birthday,address,zakatAmount,zakatProgress,role,interests,skills,donationHistory,joinedCampaigns)
    {
        this.birthday=birthday;
        this.address=address;
        this.zakatAmount=zakatAmount;
        this.zakatProgress=zakatProgress;
        this.role=role;
        this.interests=interests;
        this.skills=skills;
        this.donationHistory=donationHistory;
        this.joinedCampaigns=joinedCampaigns;
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