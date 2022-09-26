"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var Faculty_1 = require("./Faculty");
var facultyLogin = new Faculty_1["default"]();
console.log(facultyLogin.data);
var studentLogin = new Student_1["default"]();
console.log(studentLogin.data);
