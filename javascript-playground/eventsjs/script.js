let button1 = document.querySelector("#button1");
// button1.onclick = () => {
//     console.log("Button1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

button1.addEventListener("click", () => {
    console.log("Button one was clicked.")
})

// prirorty JS vs Inline

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
}