const Walls = require('./walls');
const Pacman = require('./pacman');

class Game {
    constructor(canvas, ctx, map) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = map;
        this.walls = new Walls(ctx, this.map);
        this.pacman = new Pacman(ctx, this.map);
        this.winner = false;
        
    }

    gameOver() {
        if (this.pacman.pillCount === 0) {
            // console.log('ate all the pills');
            this.winner = true;
            return true;
        } else {
            console.log(`${this.pacman.pillCount} pills remaining`)
        }
    }

    display() {
        if (this.gameOver()) {
            this.walls.clearWalls();
            this.walls.endGame();
        } else {
            this.walls.render();
            this.pacman.draw();
        }
    }

    play() {
       const animate = () => {
           this.frame = requestAnimationFrame(animate);
           this.display();
           
       }

       animate();
    }
}

module.exports = Game;