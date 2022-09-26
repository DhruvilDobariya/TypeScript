class User{
    constructor(public Id:number, public Name:string){}

    GetDetail()
    {
        console.log("Id: " + this.Id);
        console.log("Name: " + this.Name);
    }
}

let user = new User(1, "Dhruvil");
user.GetDetail();