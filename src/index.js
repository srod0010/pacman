const MovingObject = require('./moving_object.js');
// window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});



document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    canvasEl.height = HEIGHT;
    canvasEl.width = WIDTH;
    const ctx = canvasEl.getContext('2d');
    console.log(map);
  
    drawWorld();
})





console.log('webpack is working');
 

