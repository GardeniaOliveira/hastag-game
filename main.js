const box = document.querySelectorAll(".box");
const modal = document.querySelector(".modal");
const resetBtn = document.querySelector(".start-game");
const msg = document.querySelector(".msg");
let currentPlayer = document.querySelector(".current-player");
let checkTurn = true; 
const x = "x";
const o = "o";
let storePlayer = [];

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

box.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(button.innerText.trim() != "") return
       turn = checkTurn? x:o;
        button.innerText = turn;
        currentPlayer.innerText = turn;
        checkTurn = !checkTurn;

        storePlayer.push(turn);
        console.log(storePlayer)

        checkWinner();
    }) 
   
   
})

function checkWinner() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition
        
        if (box[a].innerText !== "" && box[b].innerText !== "" && box[c].innerText !== "") {
            if (box[a].innerText == box[b].innerText && box[a].innerText == box[c].innerText) {
                box[a].style.backgroundColor = '#7D8DC9';
                box[b].style.backgroundColor = '#7D8DC9';
                box[c].style.backgroundColor = '#7D8DC9';

                msg.innerText = "You win!"
                setTimeout(() => {
                    showModal()
                  }, 800)
                    
            }
        }
    }
    gameOver()

}

function showModal(){
    modal.classList.remove('hidden-modal');
    resetBtn.addEventListener('click', (e) => {
        window.location.reload();
    })
}

function gameOver(){
    if(storePlayer.length === 9){
        msg.innerText = "Game over!!";
        showModal()
    }
}