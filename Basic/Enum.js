var Day;
(function (Day) {
    Day["sun"] = "Sunday";
    Day["mon"] = "Monday";
    Day["tue"] = "Tuesday";
    Day["wed"] = "Wednesday";
    Day["thu"] = "Thursday";
    Day["fri"] = "Friday";
    Day["sat"] = "Saturday";
})(Day || (Day = {}));
var whichDay = Day.sun;
console.log(whichDay);
console.log(Day.sun == "Sunday");
