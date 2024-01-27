class Car{
    constructor(){
        console.log("Creating new object");
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new Car();
console.log(typeof fortuner);
fortuner.start();
fortuner.stop();
fortuner.setBrand("Fortuner");
console.log(Car);