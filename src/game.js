const Walls = require('./walls');
const Pacman = require('./pacman');

class Game {
    constructor(canvas, ctx, map) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = map;
        this.walls = new Walls(ctx, map);
        this.pacman = new Pacman(ctx, map);
        
    }

    setup() {
        this.walls.render();
        this.pacman.draw();
    }

    play() {
       const animate = () => {
           this.frame = requestAnimationFrame(animate);
           this.setup();
       }
       animate();
    }
}

module.exports = Game;