const box = document.querySelector(".box")
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

n1.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n1.innerHTML = sortLetter;
    console.log(n1.innerText); 
    checkWinner()
})

n2.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n2.innerHTML = sortLetter;
    console.log(n2.innerText);
    checkWinner()
})

n3.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n3.innerHTML = sortLetter;
    console.log(n3.innerText);
    checkWinner()
})

n4.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n4.innerHTML = sortLetter;
    checkWinner()
})

n5.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n5.innerHTML = sortLetter;
    checkWinner()
})

n6.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n6.innerHTML = sortLetter;
    checkWinner()
})
n7.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n7.innerHTML = sortLetter;
    checkWinner()
})

n8.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n8.innerHTML = sortLetter;
    checkWinner()
})

n9.addEventListener('click', () => {
    const sortLetter = letter[Math.floor(Math.random() * 2)]
    n9.innerHTML = sortLetter;
    checkWinner()
})

function checkWinner(){
    debugger;
    if(n1.innerText === n2.innerText === n3.innerText){
        n1.style.backgroundColor = '#7D8DC9';
        n2.style.backgroundColor = '#7D8DC9';
        n3.style.backgroundColor = '#7D8DC9';
        console.log(n1)
        console.log(n2)
        console.log(n3)
    }
    else if(n4.innerText === n5.innerText === n6.innerText ){
        n4.style.backgroundColor = '#7D8DC9';
        n5.style.backgroundColor = '#7D8DC9';
        n6.style.backgroundColor = '#7D8DC9';
        console.log('passou aqui')
    }
    else if(n7.innerText === n8.innerText === n9.innerText ){
        n7.style.backgroundColor = '#7D8DC9';
        n8.style.backgroundColor = '#7D8DC9';
        n9.style.backgroundColor = '#7D8DC9';
        console.log('passou aqui')
    }
    else if(n1.innerText === n4.innerText === n7.innerText ){
        n1.style.backgroundColor = '#7D8DC9';
        n4.style.backgroundColor = '#7D8DC9';
        n7.style.backgroundColor = '#7D8DC9';
        console.log('passou aqui')
    }
    else if(n2.innerText === n5.innerText === n8.innerText ){
        n2.style.backgroundColor = '#7D8DC9';
        n5.style.backgroundColor = '#7D8DC9';
        n8.style.backgroundColor = '#7D8DC9';
        console.log('passou aqui')
    }
    else if(n3.innerText === n6.innerText === n9.innerText ){
        n3.style.backgroundColor = '#7D8DC9';
        n6.style.backgroundColor = '#7D8DC9';
        n9.style.backgroundColor = '#7D8DC9';
        console.log('passou aqui')
    }
    else if(n1.innerText === n6.innerText === n9.innerText ){
        n1.style.backgroundColor = '#7D8DC9';
        n6.style.backgroundColor = '#7D8DC9';
        n9.style.backgroundColor = '#7D8DC9';
        console.log('passou aqui')
    }
    
}