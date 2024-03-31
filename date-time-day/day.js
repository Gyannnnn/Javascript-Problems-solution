var today = new Date()
var day = today.getDay()
var date = today.getDate()
var month = today.getMonth()
var year = today.getFullYear()

var monthlist = ["january","february","march","April","May","June","July","August","September","October","November","December"]

var daylist = ["Sunday","Monday","Tuesday","Thursday","Wednesday","Friday","Saturday"]

console.log("Today Is "+ daylist[day]+".")
console.log("Today Date Is "+date+"th "+monthlist[month]+" "+year+ " & Today Is "+daylist[day]);


var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds()
var prepand = (hour>12)?"pm":"am"
hour = (hour>12)? hour-12:hour


console.log("Time Is "+hour+" "+prepand+" "+minute+" minutes "+" "+seconds+" seconds ");
