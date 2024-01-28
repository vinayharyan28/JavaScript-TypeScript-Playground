"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Mumbai";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this.email = email;
        this.name = name;
        this.userID = userID;
    }
    return User;
}());
var vinay = new User("v@gmail.com", "vinay", 1);
