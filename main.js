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

const sortLetter = letter[Math.floor(Math.random() * 2)]


n1.addEventListener('click', () => {
    n1.innerHTML = sortLetter;
    checkRow()
})

n2.addEventListener('click', () => {
    n2.innerHTML = sortLetter;
    checkRow()
})

n3.addEventListener('click', () => {
    n3.innerHTML = sortLetter;
    checkRow()
})

n4.addEventListener('click', () => {
    n4.innerHTML = sortLetter;
})

n5.addEventListener('click', () => {
    n5.innerHTML = sortLetter;
})

n6.addEventListener('click', () => {
    n6.innerHTML = sortLetter;
})
n7.addEventListener('click', () => {
    n7.innerHTML = sortLetter;
})

n8.addEventListener('click', () => {
    n8.innerHTML = sortLetter;
})

n9.addEventListener('click', () => {
    n9.innerHTML = sortLetter;
})

function checkRow(){
    debugger;
    if(n1.innerText === n2.innerText === n3.innerText ){
        n1.style.backgroundColor = '#7D8DC9';
        n2.style.backgroundColor = '#7D8DC9';
        n3.style.backgroundColor = '#7D8DC9';
    }
    console.log('passou aqui')
}