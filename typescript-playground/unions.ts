let score: number | string = 33; // use carefully

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let vinay: User | Admin = { name: "vinay", id: 233 };

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2"];
const data3: string[] | number[] = [1, 2, 3];
const data4: (string | number | boolean)[] = [true, 1, 2, "3"];

let seatAllotment: "aisle" | "middle" | "window";

export {};
