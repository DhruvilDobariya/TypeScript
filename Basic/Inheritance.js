var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(Id, Name, EnrollmentNo, Department) {
        var _this = _super.call(this, Id, Name) || this;
        _this.EnrollmentNo = EnrollmentNo,
            _this.Department = Department;
        return _this;
    }
    Student.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("EnrollmentNo: " + this.EnrollmentNo);
        console.log("Department: " + this.Department);
    };
    return Student;
}(User));
var student = new Student(1, "Dhruvil", 190540107051, "Computer");
student.Display();
