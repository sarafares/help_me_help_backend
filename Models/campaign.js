class campaign {
    constructor(ID,name,status,ownerID,ownerType,address,description,startDate,endDate,process,rating,image,LaunchingCampaignStrategy,campaignFactory){
        this.ID=ID;
        this.name=name;
        this.status=status;
        this.ownerID=ownerID;
        this.ownerType=ownerType;
        this.address=address;
        this.description=description;
        this.startDate=startDate;
        this.endDate=endDate;
        this.process=process;
        this.rating=rating;
        this.image=image;
        this.LaunchingCampaignStrategy=LaunchingCampaignStrategy;
        this.campaignFactory=campaignFactory;
    }
    calculateRating(double);
    checkEnd();
    excuteLaunchingStrategy();
    excuteRegisterStrategy();
}
module.exports=campaign;