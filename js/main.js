'use strict';

// 1. Add a third ball. When it is clicked, swap the colors 
// and sizes of the first two balls

function switchBallColor(){
const elBall1 = document.querySelector('.ball')
const elBall2 = document.querySelector('.ball2')

const elCurColor1 = window.getComputedStyle(elBall1).backgroundColor;
const elCurColor2 = window.getComputedStyle(elBall2).backgroundColor;

elBall1.style.backgroundColor = elCurColor2
elBall2.style.backgroundColor = elCurColor1

}

function onBallClick(elBall, maxDiameter) {
    
    if (elBall.classList.contains('ball3')){
        switchBallColor()
       return
        
    }
        
    if (!elBall) return
    const currHeight = parseInt(getComputedStyle(elBall).height)
    const currWidth = parseInt(getComputedStyle(elBall).width)

    const randomNum = getRandomInt(20, 60)
    const newHeight = elBall.style.height = (currHeight + randomNum) + "px";
    const newWidth = elBall.style.width = (currWidth + randomNum) + "px";
    const ballColor = elBall.style.backgroundColor = getRandomColor()

    elBall.innerText = newWidth

    if (elBall.style.height > (maxDiameter + 'px') || elBall.style.width > (maxDiameter + 'px')) {
    elBall.style.height = '100px'
    elBall.style.width = '100px'
    elBall.innerText = 100
}
}
