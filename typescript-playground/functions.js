"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getUpper(value) {
    return value.toLocaleUpperCase();
}
console.log(getUpper("vinay"));
function signUpUser(name, email, password) {
    if (name && email && password) {
        return true;
    }
    else {
        return false;
    }
}
var loginUser = function (name, email, isPaid) {
    console.log("Logged in ", name);
};
var getHello = function (s) {
    return " ";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmessage) {
    console.log(errmessage);
}
function handleError(errmessage) {
    throw new Error(errmessage);
}
loginUser("vinay", "vinay@123", true);
console.log(signUpUser("vainay", "vinay@123", "123"));
