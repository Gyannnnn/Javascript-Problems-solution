var today = new Date()
var date = today.getDate()
var month = today.getMonth()
var year = today.getFullYear()
var day = today.getDay()
var hour = today.getHours()
var minute = today.getMinutes()
var seconds = today.getSeconds()

var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var daylist = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"]

var prepand = (hour>=12)?"PM":"AM"

hour = (hour>12)?hour-12:hour

if(date ==1 || date ==21 || date == 31 ){
    var dayprepand = 'st'
}
else if(date == 2|| date ==22){
    dayprepand = 'second'
}
else if(date == 3||date==23){
    dayprepand = 'rd'
}
else{
    dayprepand == 'th'

}

if(hour==0 && prepand== 'PM'){
    if(minute==0 && seconds==0){
        hour=12
        prepand= 'Noon'
    }
    else{
        hour = 12;
        prepand = 'PM'
    }
}


if(hour==0 && prepand== 'AM'){
    if(minute == 0 && seconds ==0){
        hour = 12;
        prepand = 'Midnight';
    }
    else{
        hour = 12;
        prepand = 'Am'
    }
}

console.log("Today Is "+date+dayprepand+" "+monthlist[month]+" "+year+" "+" And Today Is"+" "+daylist[day]);
console.log("Time Is "+" "+hour+" "+minute+" "+seconds+" ");

