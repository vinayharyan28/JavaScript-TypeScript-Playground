const student = {
    fullName: "Vinay Haryan",
    marks: 94,
    printMarks: function (){
        console.log("Marks: ", this.marks);
    },
};

console.log(student);
console.log(student.marks);
console.log(student.printMarks);


let fruits = ["apple", "mango", "banana"];
console.log(typeof fruits);

const employee = {
    calculateTax1() {
        console.log("Tax rate is 10%");
    },

    calculateTax2: function() {
        console.log("Tax rate is 10%");
    
    },
};


const employee2 = {
    salary: 50000,
    calculateTax1() {
        console.log("Tax rate is 20%");
    },
};

employee2.__proto__ = employee;

console.log(employee2);
