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
        // this.shadowGhost = new Ghost(ctx, this.map, 285,300,'purple');
        // this.speedyGhost = new Ghost(ctx, this.map, 285, 290, 'pink');
        // this.bashfulGhost = new Ghost(ctx, this.map, 280,310,'cyan');
        // this.pokeyGhost = new Ghost(ctx, this.map, 284,320,'orange');
        this.ghosts = [];
        this.winner = false;
        this.loser = false;
        this.started = false;
        this.createGhosts();

        
    }

    createGhosts() {
        this.ghosts[0] = new Ghost(this.ctx, this.map, 285, 300, 'red');
        this.ghosts[1] = new Ghost(this.ctx, this.map, 285, 290, 'pink');
        this.ghosts[2] = new Ghost(this.ctx, this.map, 280, 310, 'yellow');
        this.ghosts[3] = new Ghost(this.ctx, this.map, 284, 320, 'lightblue');
    }

    captured() {
        let caught = false;
         this.ghosts.forEach((ghost) => {
             if (ghost.color !== 'blue') {
                 if (this.pacman.x <= ghost.x + 20 &&
                     this.pacman.x >= ghost.x - 20 && this.pacman.y <= ghost.y + 20 &&
                     this.pacman.y >= ghost.y - 20) {
                     caught = true;
                 }
             } else {
                 if (this.pacman.x <= ghost.x + 20 &&
                     this.pacman.x >= ghost.x - 20 && this.pacman.y <= ghost.y + 20 &&
                     this.pacman.y >= ghost.y - 20) {
                     ghost.x = 285;
                     ghost.y = 300;
                 }
             }
         });
         return caught;
    }

    gameOver() {
        if (this.pacman.pillCount === 0 || this.captured()) {
            // console.log('ate all the pills');
            console.log('hellowalsfk')
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
                //  this.shadowGhost.draw();
                //  this.speedyGhost.draw();
                //  this.pokeyGhost.draw();
                //  this.bashfulGhost.draw();
                this.ghosts.forEach(ghost => {
                    if (this.pacman.power) {
                        ghost.color = 'blue';
                        ghost.speed = .75;
                    } else {
                        ghost.reset();
                        ghost.speed = 1;
                    }
                    ghost.draw()
                });

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