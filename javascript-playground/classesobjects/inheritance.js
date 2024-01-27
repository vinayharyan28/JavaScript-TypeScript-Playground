class Parent{
    constructor () {
        console.log("I am parent");
    }
    hello(){
        console.log("I am parent");
    }
}


class Child extends Parent{
    constructor(test) {
        console.log("I am child");
        super();
        this.test = test;
        
    }
}

let p = new Child("test");
p.hello();