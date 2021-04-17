class account
{
    constructor(id,name,userName,password,country,governorate,email,registerStrategy)
    {
        this.id=id;
        this.name=name;
        this.userName=userName;
        this.password=password;
        this.country=country;
        this.governorate=governorate;
        this.email=email;
        this.registerStrategy=registerStrategy;
    }
    login()
    {
        throw new Error("Abstract Method has no implementation");
    }
    updateProfile()
    {
        throw new Error("Abstract Method has no implementation");
    }
    approveApplicants(VolunteerCampaign)
    {

    }
}
module.exports=account;
