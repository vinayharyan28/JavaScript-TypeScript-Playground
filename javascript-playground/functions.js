// Functions in js
function hello(){
    console.log("  JS");
}
hello();

function hi(name){
    console.log(name);
}
hi("Vinay");


function sum(a, b){
    // a, b local variable block scope 
    return a + b; //Only one return
}
console.log(sum(1, 2));

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

// Arrow function js
const arrowMadulo = (a, b) => {
    return a % b;
};
console.log("Madulo: ", arrowMadulo(5, 3));


//foreach -> higher order function/method - consume function
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val){
    console.log(val);
});


let stringArray = ["pune", "delhi", "mumbai"];
stringArray.forEach((val, index, stringArray) => {
    console.log(val.toUpperCase(), index, stringArray);
});


// Map method -> return new Array
let newArray = stringArray.map((val) => {
    return val + " HI";
});
console.log(newArray);

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr1.filter((val) => {
    return val % 2 == 0;
});
console.log("Even a rr: ", evenArr);

//Reduce
const array1 = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (result, current) => result + current,
    initialValue,
);

console.log(sumWithInitial);
