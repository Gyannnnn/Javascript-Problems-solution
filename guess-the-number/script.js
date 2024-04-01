var num = Math.ceil(Math.random()*10);
console.log(num);
var usernum = prompt("Enter A number Between 1 & 10");
if(num == usernum){
    console.log("Good Work ! You Corectly Guessed The Number "+num);

}
else{
    console.log("Keep Trying !!");
}