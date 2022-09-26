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

class Student extends User{
    EnrollmentNo : number;
    Department : string;

    constructor(Id:number, Name:string, EnrollmentNo: number, Department: string)
    {
        super(Id, Name);
        this.EnrollmentNo = EnrollmentNo,
        this.Department = Department;
    }

    Display():void
    {
        super.Display();
        console.log("EnrollmentNo: " + this.EnrollmentNo);
        console.log("Department: " + this.Department);
    }
}

let student = new Student(1, "Dhruvil", 190540107051, "Computer");
student.Display();