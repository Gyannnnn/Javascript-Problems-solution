console.log("Loops");

const  obj = {
    Name:"Gyanranjan Patra",
    Branch:"Information Technology",
    Rollno:"2302080019"
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(obj)
    }
}