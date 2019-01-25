const Walls = require('./walls');
const Pacman = require('./pacman');
const Ghost = require('./ghost');

class Game {
    constructor(canvas, ctx, map) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = map;
        this.walls = new Walls(ctx, this.map);
        this.pacman = new Pacman(ctx, this.map);
        this.ghost = new Ghost(ctx, this.map);
        this.winner = false;
        this.started = false;
        
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
        let pregame = document.getElementById('pregame');
        let endGame = document.getElementById('gameover');
        if (this.started === false) {
            pregame.style.display = 'block';
        } else {
            pregame.style.display = 'none';
             if (this.gameOver()) {
                 endGame.style.display = 'block';
             } else {
                 console.log(this.started);
                 this.walls.render();
                 this.pacman.draw();
                 this.ghost.draw();
             }
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