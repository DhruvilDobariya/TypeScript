class User {
    Id : number;
    Name : string;

    constructor(Id:number, Name:string)
    {
        this.Id = Id,
        this.Name = Name;
    }

    Display():void
    {
        console.log("Id: " + this.Id);
        console.log("Name: " + this.Name);
    }
}

let user = new User(1, "Dhruvil");
user.Display();
