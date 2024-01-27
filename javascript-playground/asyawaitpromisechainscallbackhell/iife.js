function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
        
    });
}

// IIFE immediatly invoked function expression
// Automatically invoked
(async function getWeatherData(){
    console.log("getting data1..");
    await api();
    console.log("getting data2..");
    await api();
    console.log("getting data3..");
    await api();
    console.log("getting data4..");
    await api();
})()