type User = {
  readonly id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number; //Optinal
};

let myUSer: User = {
  id: "123",
  name: "vinay",
  email: "viny@123",
  isActive: false,
};

myUSer.email = "vv@11";
// myUSer.id = 11; readonly

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
