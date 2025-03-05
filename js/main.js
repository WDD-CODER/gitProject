'use strict';

// 28.Add a maxDiameter parameter to onBallClick() which will be used as an
// upper limit to the ball’s size. If a ball reaches its diameter limit, its size is reset to
// 100px. In the HTML file, pass different values as arguments to the function calls
// of each ball. Commit the changes and sync the remote. ⇩


function onBallClick(elBall, maxDiameter) {
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
