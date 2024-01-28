// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Mumbai";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  constructor(
    public email: string,
    public name: string,
    protected courseCount: number,
    private userID: number
  ) {
    this.email = email;
    this.name = name;
    this.userID = userID;
  }

  // Getter
  get getUserId(): number {
    // Logic validation
    return this.userID;
  }

  // Setter
  set setUserId(userID: number) {
    // Logic validation
    this.userID = userID;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this.courseCount += 1;
  }
}

const vinay = new User("v@gmail.com", "vinay", 2, 1);

export {};
