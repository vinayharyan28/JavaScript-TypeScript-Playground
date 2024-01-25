let string1 = "Vinay";
console.log(string1.length);
console.log(typeof string1);
console.log(string1[0]);

//Template Literals
let specialString = `This is a template literal`;
console.log(typeof specialString);
let obj = {
    item: "pen",
    price: 10,
}
let output = `the cost ${obj.price}`;
console.log(output);

console.log(obj.item.toUpperCase());
console.log(obj.item.toLowerCase());
console.log("vinay".slice(0, 1));
console.log("Vinay".charAt(2));
console.log("vinay".concat(" Haryan"));
console.log("Haryan".indexOf('a'));
console.log("vinay " + "Haryan");
console.log("vinay".replace('y', 'Y'));

// Strings are immutable