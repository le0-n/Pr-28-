let centerList = document.getElementById('centerList')
let conList = document.getElementById('conList')

function burgMenu(){
    centerList.style.transform = 'translate(0, 0%)'
}
function btnCloser(){
    centerList.style.transform = 'translate(0, -100%)'
}
function arrowDown(){
    conList.style.height = '40vh'
}
function arrowUp(){
    conList.style.height = '0vh'
}