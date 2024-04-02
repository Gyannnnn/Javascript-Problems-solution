// console.log("Loops");

// const  obj = {
//     Name:"Gyanranjan Patra",
//     Branch:"Information Technology",
//     Rollno:"2302080019"
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(obj)
//     }
// }




// functions

// function sum(a,b){
//     console.log(a+b);
//     return a+b;
// }

// var g = sum(3,4);
// console.log(g);
// sum(1,2)


// <-----------------------------:STRING:-------------------------------------------->



// let name1 = "Gyanranjan Patra"
// console.log(name1)
// var g = name1.length
// console.log(g)
// name1.toLocaleLowerCase
// console.log(name1)


// let name1 = "Gyanranjan Patra"
// let newname = name1.toUpperCase()
// console.log(newname);
// let newname1 = name1.toLowerCase()
// console.log(newname1);
// let sl = name1.slice(3,9)
// console.log(sl);
// let s2 = name1.slice(3);
// console.log(s2);
// let r = name1.replace("Patra","xxxxxxx")
// console.log(r);


// let c1 = "Gyana"
// let c2 = "Runa"

// let concate = c1+c2;
// console.log(concate)
// let t = "       gyanranjanrunababu       "
// let t1 = t.trim();
// console.log(t1);

// console.log(name1[15])



// .........................Function...........................


// let g  = 20;
// let r = 18;
// while(g>r){
//     console.log("G is greater Than r");
//     g--;
// }

// do{
//     console.log("R is greater than g");
//     g--;
// }while(g>=r);


// ------------------ARRAY----------------



let names = ['aakassh', 'vikash', 'prakash', 'rakesh', 'animesh'];
console.log(names[4]);

let length = names.length;
console.log("The Length Of The Array Is" + " " + length);

names[1] = 'Gyanranjan Patra';
console.log(names)


// HENCE ARRAY ARE MUTABLES I.E CAN BE CHANGED LATER ;

console.log(typeof (names));

console.log("----------------------------------------")


console.log(names.toString());
console.log("----------------------------------------")
console.log(names.join("*_*"));
names.pop();
console.log(names);
names.push("rtx_3050");
console.log(names)
console.log("----------------------------------------")
names.unshift('roja');
console.log(names)

console.log("----------------------------------------")
names.shift()
console.log(names)
console.log(names)
console.log("----------------------------------------")

let  week = ['sunday','monday','tuesday','thursday','friday','saturday'];
let month = ['january','february','march','april','may','june','july'];
let name1 = ['gyana','gyana','gynara']
name1 = week.concat(month);
console.log(name1);


console.log("----------------------------------------")



let num = [6266,6,9,546,69,95,959,92,196,19,9,69,29,29,9,929,9,296,22,9,929,9,96,96,95,959595,]
let num1  = num.sort((a,b)=>a-b);
console.log(num1);

let filter = [1,4,5,6,67,8,9,9,0,0,0,0,044,44]
let fl1 = filter.filter(a=>a!=0)
let fl2 = filter.filter(item=>item>4)
console.log(fl1)
console.log(fl2)


let reduce = [12,4,5645,,768,79,9,7,5,]
let rd1 = reduce.reduce((a,b)=>a*b);
let rd2 = reduce.reduce((p,q)=>p+q);
let rd3 = reduce.reduce((p,q)=>p/q);
console.log(rd1);
console.log(rd2);
console.log(rd3);

for (const name25  of "Gyanranjnan Parea") {

    console.log(name25);
    
}



