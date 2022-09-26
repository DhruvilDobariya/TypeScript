var User = /** @class */ (function () {
    function User(Id, Name) {
        this.Id = Id,
            this.Name = Name;
    }
    User.prototype.Display = function () {
        console.log("Id: " + this.Id);
        console.log("Name: " + this.Name);
    };
    return User;
}());
var user = new User(1, "Dhruvil");
user.Display();
