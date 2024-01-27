let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-game")
let messageContainer = document.querySelector(".msg-container");
let message = document.querySelector("#message");
let O_player = true;

const windowPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (O_player){
            box.innerText = "O";
            O_player = false;
        }else {
            box.innerText = "X";
            O_player = true;
        }
        box.disabled = true;

        checWinner();
    });
});

const checWinner = () => {
    for (pattern of windowPatterns){
        let value1 = boxes[pattern[0]].innerText; 
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;
        if (value1 != "" && value2 != "" && value3 != ""){
            if (value1 === value2 && value2 == value3){
                disableBoxes();
                showWinner(value1);
            }
        }
    }
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    message.innerText = `Winner is ${winner}`;
};

const resetGame = () => {
    O_player = true;
    enableBoxes();
}

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);