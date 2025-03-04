'use strict';
// 10.Change onBallClick() to increment the ball’s width & height by 50px and

// function onBallClick(){
//     const elBall = document.querySelector('.ball')
//     var el = elBall.style.height
//     console.log(el)
//     elBall.style.width += '50px'
//     console.log('hi there!');
// }

function onBallClick() {
    const elBall = document.querySelector('.ball');
    if (!elBall) return
    var currHeight = parseInt(getComputedStyle(elBall).height)
    var currWidth = parseInt(getComputedStyle(elBall).width)

    elBall.style.height = (currHeight + 50) + "px";
    var width = elBall.style.width = (currWidth + 50) + "px";
    elBall.innerText = width

    console.log("🚀 Updated height:", elBall.style.height);
    console.log("🚀 Updated width:", elBall.style.width);
    
    if (elBall.style.height > '400px') {
        elBall.style.height = '100px' 
        elBall.style.width = '100px' 
        elBall.innerText = 100

    }
}
