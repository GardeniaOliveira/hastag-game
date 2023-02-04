const box = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".start-game");
const msg = document.querySelector(".msg");
const letter = [
    "x", "0"
]
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
box.forEach((button) => {
    button.addEventListener('click', (e) => {
        const sortLetter = letter[Math.floor(Math.random() * 2)]
    button.innerText = sortLetter;
   checkWinner()
    })
})
checkWinner()
/*checkWinner()
function checkWinner(){
    for (const condition of winningCombos) {
        let[a,b,c] = condition
        if(box[a] && (box[a]==box[b] && box[a]==box[c])){
            console.log('you win')
            return(a,b,c)
        }
    }

}*/
function checkWinner(){
    debugger;
    if(box[0].innerText == box[1].innerText && box[0]== box[2].innerText){
        box[0].style.backgroundColor = '#7D8DC9';
        box[1].style.backgroundColor = '#7D8DC9';
        box[2].style.backgroundColor = '#7D8DC9';
     
    }
    else if(box[3].innerText == box[4].innerText  && box[3]== box[5].innerText){
        box[3].style.backgroundColor = '#7D8DC9';
        box[4].style.backgroundColor = '#7D8DC9';
        box[5].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[6].innerText == box[7].innerText  && box[6]== box[8].innerText){
        box[6].style.backgroundColor = '#7D8DC9';
        box[7].style.backgroundColor = '#7D8DC9';
        box[8].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[0].innerText == box[3].innerText  && box[0]== box[6].innerText){
        box[0].style.backgroundColor = '#7D8DC9';
        box[3].style.backgroundColor = '#7D8DC9';
        box[6].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[1].innerText == box[4].innerText  && box[1]== box[7].innerText){
        box[1].style.backgroundColor = '#7D8DC9';
        box[4].style.backgroundColor = '#7D8DC9';
        box[7].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[2].innerText == box[5].innerText  && box[2]== box[8].innerText){
        box[2].style.backgroundColor = '#7D8DC9';
        box[5].style.backgroundColor = '#7D8DC9';
        box[8].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[0].innerText == box[4].innerText  && box[0]== box[8].innerText){
        box[0].style.backgroundColor = '#7D8DC9';
        box[4].style.backgroundColor = '#7D8DC9';
        box[8].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[2].innerText == box[4].innerText  && box[2]== box[6].innerText){
        box[2].style.backgroundColor = '#7D8DC9';
        box[4].style.backgroundColor = '#7D8DC9';
        box[6].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
}
resetBtnaddEventListener('click', (e) => {
    window.location.reload();
})

