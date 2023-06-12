let idGoogle = localStorage.getItem('idGoogle')
let user = document.getElementById('username')
let inputId = document.getElementById('inputId')
let inputPw = document.getElementById('inputPw')
let showPw = document.getElementById('showPw')

user.innerHTML = idGoogle;
inputId.value = idGoogle;

function toggle(){
inputPw.type = "text";
showPw.disabled = "disabled";
}

function printR(){
console.log(inputId.value, inputPw.value)
localStorage.removeItem('idGoogle')
}

const next = document.querySelector('.next')
next.addEventListener("click",printR)