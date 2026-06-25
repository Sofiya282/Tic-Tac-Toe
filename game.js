console.log("Tic Tac Toe Made By Sofiya!!!!");
let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset_button");
let new_game = document.querySelector("#new_game");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turn_X = true;
let Winning_pattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
new_game.addEventListener("click", () => {
    boxes.forEach( (box) => {
        box.innerText ="";
    });
    box_enabled();
msg_container.classList.add("hide");

});
reset_button.addEventListener("click", () => {
    boxes.forEach( (box) => {
        box.innerText ="";
    });
    box_enabled();
msg_container.classList.add("hide");

});

boxes.forEach( (box) => {
box.addEventListener("click", () => {
    if (turn_X){
        box.innerText = "X";
        turn_X = false;

    }
    else {
        box.innerText = "O"
        turn_X = true;
    }
box.disabled = true;
check_winner();

});
});
//box button Off
const box_disabled = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};
//box button On
const box_enabled = () => {
    for (let box of boxes){
        box.disabled = false;
    }
};

const showWinner = (winner)  => {
    msg.innerText = `Congratulations!!! Winner of the Game is ${winner}`;
    msg_container.classList.remove("hide");

};

let check_winner = () => {
    for (let pattern of Winning_pattern) {
        let position_1_value = boxes[pattern[0]].innerText;
        let position_2_value = boxes[pattern[1]].innerText;
        let position_3_value = boxes[pattern[2]].innerText;

        if (position_1_value !== "" && position_2_value !== "" && position_3_value ){

            if ((position_1_value  === position_2_value) && (position_2_value === position_3_value)){
                console.log ("Winner is ",position_1_value);                
                showWinner(position_1_value);
                box_disabled();
            }
        }
    }
};