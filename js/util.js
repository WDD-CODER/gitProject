'use strict';

// 19.Add a util.js file and add a getRandomInt() function inside it. ⇩

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
