const box = document.querySelectorAll(".box")
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");
const n6 = document.querySelector(".n6");
const n7 = document.querySelector(".n7");
const n8 = document.querySelector(".n8");
const n9 = document.querySelector(".n9");
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
    if(box[0].value == box[1].value && box[0]== box[2].value){
        box[0].style.backgroundColor = '#7D8DC9';
        box[1].style.backgroundColor = '#7D8DC9';
        box[2].style.backgroundColor = '#7D8DC9';
     
    }
    else if(box[3].value == box[4].value  && box[3]== box[5].value){
        box[3].style.backgroundColor = '#7D8DC9';
        box[4].style.backgroundColor = '#7D8DC9';
        box[5].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[6].value == box[7].value  && box[6]== box[8].value){
        box[6].style.backgroundColor = '#7D8DC9';
        box[7].style.backgroundColor = '#7D8DC9';
        box[8].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[0].value == box[4].value  && box[0]== box[7].value){
        box[0].style.backgroundColor = '#7D8DC9';
        box[4].style.backgroundColor = '#7D8DC9';
        box[7].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[2].value == box[5].value  && box[2]== box[7].value){
        box[2].style.backgroundColor = '#7D8DC9';
        box[5].style.backgroundColor = '#7D8DC9';
        box[7].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[3].value == box[6].value  && box[3]== box[8].value){
        box[3].style.backgroundColor = '#7D8DC9';
        box[6].style.backgroundColor = '#7D8DC9';
        box[9].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    else if(box[0].value == box[5].value  && box[0]== box[8].value){
        box[0].style.backgroundColor = '#7D8DC9';
        box[5].style.backgroundColor = '#7D8DC9';
        box[8].style.backgroundColor = '#7D8DC9';
      console.log("passou aqui")
    }
    console.log(box[0].value)
    console.log(box[1].value)
    console.log(box[2].value)
}

