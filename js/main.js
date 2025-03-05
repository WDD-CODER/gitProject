'use strict';
// 10.Change onBallClick() to increment the ball’s width & height by 50px and

// function onBallClick(){
//     const elBall = document.querySelector('.ball')
//     var el = elBall.style.height
//     console.log(el)
//     elBall.style.width += '50px'
//     console.log('hi there!');
// }

// 20.Change onBallClick() to increment the ball’s diameter by a random amount


function onBallClick() {
    const elBall = document.querySelector('.ball');
    if (!elBall) return
    var currHeight = parseInt(getComputedStyle(elBall).height)
    var currWidth = parseInt(getComputedStyle(elBall).width)

    var randomNum = getRandomInt(20, 60)
    var newHeight = elBall.style.height = (currHeight + randomNum) + "px";
    var newWidth = elBall.style.width = (currWidth + randomNum) + "px";
    elBall.innerText = newWidth

    if (elBall.style.height > '400px' || elBall.style.width > '400px') {
        elBall.style.height = '100px'
        elBall.style.width = '100px'
        elBall.innerText = 100

    }
}
