// MDN docs
// Hello world!
let a = 5;
let b = 2;
console.log(a + b);
console.log(a / b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

console.log(a++);
console.log(++a);
console.log(b++);
console.log(++b);
console.log(a, b);


a += b;
b += a;
console.log(a, b);

console.log(a == b);
console.log(a != b);

strict_test_1 = 5;
strict_test_2 = "5";

console.log(strict_test_1 == strict_test_2);
console.log(strict_test_1 === strict_test_2);

// !== 

// && || !

let age = 19;
if (age > 18){
    console.log("You can vote");
}else if (age == 18){
    console.log("Nice your 18");
}else {
    console.log("You can't vote");
}


//ODD or EVEN
let number = 15;
if (number % 2 == 0){
    console.log("Even");
}else {
    console.log("Odd");
}


// Ternary operator
console.log(age > 18 ? "adult": "not adult");

// Switch
const expr = "orages";
switch (expr) {
    case "orages":
        console.log("Oranges");
        break;

    case "mangos":
        console.log("Mangos");
        break;

    case "papayas":
        console.log("papayas");
        break;
    
    default:
        console.log("Not present");
}


let number_ = prompt("Enter a number");
console.log(number_);
