for (let i=1; i<=5; i++){
    console.log("Hello");
}

let n = 0;
while (n < 5){
    console.log("Hi");
    n++;
}

console.log(" n = ", n)

do {
    console.log("Atleast one condition statisfy: ", n);
    n++;
}while (n < 10);


// for of loop --> string, arrays
let name = "Vinay"
for (let char of name){
    console.log(char);
}

console.log("-------------------");
// for in for object
let student = {
    name: "Vinay Haryan",
    age: 25,
    cgpa: 7.5,
    isPass: true
}

for (let key in student){
    console.log(key, student[key]);
}
