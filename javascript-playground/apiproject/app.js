// Fetch API

const URL = "https://cat-fact.herokuapp.com/facts";
let promise = fetch(URL);
console.log(promise);

const factPara = document.querySelector("#fact");
const button = document.querySelector("#button");


const getCatFacts = async () => {
    let response = await fetch(URL);
    let data = await response.json(); //JSON // AJAx 
    factPara.innerText = data[2].text;
    console.log(data);
};


// Promise chaining
// function getCatFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//         factPara.innerText = data[2].text;
//     });
    
// }

button.addEventListener("click", getCatFacts);




