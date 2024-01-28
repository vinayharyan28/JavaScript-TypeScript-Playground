const user: (string | number)[] = [1, "VInay"];
let user1: [string, number, boolean];
user1 = ["vinay", 1223, true]; // order

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

const newUser: User = [112, "vinay@gmail.com"];

newUser[1] = "hi.com";

export {};
