var l1 = prompt("Enter The First Length Of The triangle")
var l2 = prompt("Enter The second Length Of The triangle")
var l3 = prompt("Enter The Third Length Of The triangle")



let s = (l1+l2+l3)*0.5;
var area = Math.sqrt(s * ((s -l1) * (s - l2) * (s - l3)));

alert("Your Required Area Is "+area);
