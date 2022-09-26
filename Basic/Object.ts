let user = {
    Id : 1, //by default datatype is number
    Name : "Dhruvil", //by default datatype is string
    Address : "Rajkot" //by default datatype is string
}
let user1 : any = { // here we user any datatype.
    Id : 1,
    Name : "Dhruvil",
    Address : "Rajkot"
}

interface Type{
    Id : number,
    Name : string,
    Address : string
}

let user2 : Type = {
    Id : 1,
    Name : "Dhruvil",
    Address : "Rajkot"
}