function addTwo(num: number): number {
  return num + 2;
}

console.log(addTwo(5));

function getUpper(value: string): string {
  return value.toLocaleUpperCase();
}

console.log(getUpper("vinay"));

function signUpUser(name: string, email: string, password: string): boolean {
  if (name && email && password) {
    return true;
  } else {
    return false;
  }
}

let loginUser = (name: string, email: string, isPaid: boolean) => {
  console.log("Logged in ", name);
};

const getHello = (s: string): string => {
  return " ";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errmessage: string): void {
  console.log(errmessage);
}

function handleError(errmessage: string): never {
  throw new Error(errmessage);
}

loginUser("vinay", "vinay@123", true);

console.log(signUpUser("vainay", "vinay@123", "123"));

export {};
