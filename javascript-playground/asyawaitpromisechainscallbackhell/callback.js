function sum(a, b){
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum); //callback not pass with ()

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log(`get data ${dataId}ID`);
        if (getNextData){
            getNextData();
        }
    
    }, 2000);
}


//Callback hell (tackle using Promises)
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});
