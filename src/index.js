const MovingObject = require('./moving_object.js');
// window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

document.addEventListener("DOMContentLoaded", event => {
    const canvasEl = document.getElementsByTagName("canvas")[0];
    let c = canvasEl.getContext("2d");
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;
    mo.draw(c);
    mo.move();
    mo.draw(c);
    mo.move();
    mo.draw(c);
})





console.log('webpack is working');
 

