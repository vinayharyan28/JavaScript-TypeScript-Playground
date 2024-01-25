// Primitive
// Number
let age = 25;
console.log(typeof age);

let fullName = "Vinay Haryan";
console.log(typeof fullName);

let x;
console.log(x);
console.log(typeof x);

x = null;
console.log(x);
console.log(typeof x);

let number1 = BigInt("123");
console.log(typeof number1);

let fullName2 = Symbol("Vinay");
console.log(typeof fullName2)


// Non primitive
// Objects
const student = {
    fullName: "Vinay Haryan",
    age: 25,
    cgspa: 8.7
};

console.log(student);
console.log(typeof student);

console.log(student['fullName']);
console.log(student.fullName);

student.age = student.age + 1;
console.log(student.age);


const product = {
    price: 22,
    title: "ballpen",
    color: "black",
    rating: 4,
    offer: 5,
    price: 500,
}

console.log(1 + 1);
console.log('123' + 1);

const linkedProfile = {
    userName: 'Vinay',
    isFollow: true,
    followers: 3000,
    following: 3000,
};

console.log(linkedProfile);