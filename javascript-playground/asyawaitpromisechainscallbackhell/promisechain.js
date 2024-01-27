function asyncFunction1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data1");
            resolve("success");
        }, 3000);
    });
}

function asyncFunction2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data2");
            resolve("success");
        }, 4000);
    });
}

// console.log("fetching data1...");
// let p1 = asyncFunction1();
// p1.then((result) => {
//     console.log(result);
// });

// console.log("fetching data2...");
// let p2 = asyncFunction2();
// p1.then((result) => {
//     console.log(result);
// });

// console.log("fetching data1...");
// let p1 = asyncFunction1();
// p1.then((result) => {
//     console.log(result);
//     console.log("fetching data2...");
//     let p2 = asyncFunction2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });


console.log("fetching data1...");
asyncFunction1().then((result) => {
    console.log(result);
    console.log("fetching data2...");
    asyncFunction2().then((res) => {
        console.log(res);
    });
});