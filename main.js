let centerList = document.getElementById('centerList')
let conList = document.getElementById('conList')

function burgMenu(){
    centerList.style.transform = 'translate(0, 0%)'
}
function btnCloser(){
    centerList.style.transform = 'translate(0, -110%)'
}
function arrowDown(){
    conList.style.height = '100%'
}
function arrowUp(){
    conList.style.height = '0'
}