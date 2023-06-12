let id = document.getElementById('inputId')
localStorage.removeItem('idGoogle')

function simpanId(){
if(id.value.length < 6){
return;
} 
localStorage.setItem('idGoogle',id.value)
window.open('loginGoogle2.html')
}

const next = document.querySelector('.next')
next.addEventListener("click", simpanId)