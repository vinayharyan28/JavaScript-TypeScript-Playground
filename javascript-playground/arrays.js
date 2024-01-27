let heroes = ["ironman", "Hulk", "Thor", "SpiderMan"]

for (let hero of heroes){
    console.log(hero);
}

console.log("----------------------------")

for (let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

console.log("Type: ", typeof heroes);
// Arrays are mutable

heroes[0] = "Batman";
console.log("Heros: ", heroes);

let marks = [1, 2, 3, 4, 5];
let sumOfMarks = 0;
for (let mark of marks){
    sumOfMarks += mark;
}
console.log(sumOfMarks);

console.log("-----------------------")
let items = [250, 645, 300, 900, 50];
let index = 0;
for (let item of items){
    differance = item / 10;
    items[index++] = item - differance;
}
console.log(items);

// Arrays method
let foodItem = ["Potato", "Onion", "Apple"];
console.log(foodItem);

foodItem.push("Orange");
console.log(foodItem);

foodItem.pop();
console.log(foodItem);

console.log(foodItem.toString())

let marvel = ["Thor", "Ironman", "Batman"];
let dc = ["Batman", "Superman"];
console.log(marvel.concat(dc));

marvel.unshift("Antman");
console.log(marvel);

let val = marvel.shift();
console.log("Deleted ", val);
console.log("Marvel: ", marvel);

console.log(marvel.slice(1, 2));

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersArray.splice(2, 2, 101, 102);
console.log(numbersArray);

// add element
numbersArray.splice(2, 0, 1011);
console.log(numbersArray);