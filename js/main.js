'use strict';

function onBallClick(elBall) {
    if (!elBall) return
    const currHeight = parseInt(getComputedStyle(elBall).height)
    const currWidth = parseInt(getComputedStyle(elBall).width)

    const randomNum = getRandomInt(20, 60)
    const newHeight = elBall.style.height = (currHeight + randomNum) + "px";
    const newWidth = elBall.style.width = (currWidth + randomNum) + "px";
    const ballColor = elBall.style.backgroundColor = getRandomColor()

    elBall.innerText = newWidth

    if (elBall.style.height > '400px' || elBall.style.width > '400px') {
        elBall.style.height = '100px'
        elBall.style.width = '100px'
        elBall.innerText = 100
    }
}
