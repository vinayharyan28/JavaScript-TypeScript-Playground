async function hello(){
    console.log("Hello");
}

p = hello();
console.log(p);

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
        
    });
}

// Await with asyn
async function getWeatherData(){
    console.log("getting data1..");
    await api();
    console.log("getting data2..");
    await api();
    console.log("getting data3..");
    await api();
    console.log("getting data4..");
    await api();
}

getWeatherData();


// IIFE immediatly invoked function expression
