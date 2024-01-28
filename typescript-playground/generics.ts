const score: Array<number> = [];
const names: Array<String> = [];

function identityOne(value: boolean | number): boolean | number {
  return value;
}

function identityTwo(value: any): any {
  return value;
}

// Generics
function identityThree<Type>(value: Type): Type {
  return value;
}

interface Bootle {
  brand: string;
  type: Number;
}

function getSearchProducts<Type>(products: Type[]): Type {
  const myIndex = 3;
  return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

function anotherFunction<T, U>(value1: T, value2: U): object {
  return {
    value1,
    value2,
  };
}

interface Quiz {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
