// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("Success");
//     reject("Rejected");
// });

// console.log(promise);

// pending, fullfilled, rejected --> state

// function getData(dataId, getNextData){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`get data ${dataId}ID`);
//             resolve("success");
//             if (getNextData){
//                 getNextData();
//             }
        
//         }, 2000);
//     });
// }

// console.log(getData(1));

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
        // reject("network error");
    });
};

let promise = getPromise();
promise.then((result) => {
    console.log("Promise fulfilled. ", result)
});

promise.catch((error) => {
    console.log("Error. (Rejected): ", error);
});