const Walls = require('./walls');
const Pacman = require('./pacman');
const Ghost = require('./ghost');
// this.x = 285;

// this.y = 300;

class Game {
    constructor(canvas, ctx, map) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = map;
        this.walls = new Walls(ctx, this.map);
        this.pacman = new Pacman(ctx, this.map);
        this.shadowGhost = new Ghost(ctx, this.map, 285,300,'purple');
        this.speedyGhost = new Ghost(ctx, this.map, 285, 290, 'pink');
        this.bashfulGhost = new Ghost(ctx, this.map, 280,310,'cyan');
        this.pokeyGhost = new Ghost(ctx, this.map, 284,320,'orange');
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
                 this.shadowGhost.draw();
                 this.speedyGhost.draw();
                 this.pokeyGhost.draw();
                 this.bashfulGhost.draw();
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