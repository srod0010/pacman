

class Ghost {
    constructor (ctx, map) {
        this.ctx = ctx;
        this.map = map;
        this.x = 285;
        this.y = 300;
        this.xdir = this.x;
        this.ydir = this.y;
        this.direction = 'up';
    }

    arc() {
        this.ctx.arc(this.x, this.y, 12.5, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'purple';
        this.ctx.fill();
        this.ctx.stroke();
        
    }

    draw() {
        this.move();
        this.ctx.beginPath();
        this.arc();
    }

    escapeSide() {
        if (this.x <= 0) {
            this.x = 570 - this.x;
        } else if (this.x >= 570) {
            this.x = this.x - 570;
        }
    }

    // nextDirection() {
    //     let directions = ['up', 'down','left','right'];
    //     let idx = Math.floor(Math.random() * directions.length);
    //     let next = directions[idx];

    // }

    

    collisionDetect(direction) {
            let nextY = Math.floor(((this.ydir - 14 ) / 30));
            let nextX = Math.floor((this.xdir / 30));
        if (this.direction === "up" && this.map[nextY][nextX] === 0) {
            
            this.y -= 1;
            this.ydir -=1; //up 
               
            console.log("moved up");
            return true;
        } else {
            console.log(`${this.ydir/30}, ${this.xdir/30}`);
            return false;
        }
    }



  

    move() {
        // const DIRECTIONS = ['left', 'right', 'up', 'down'];
        // let randIdx = Math.floor(Math.random() * (DIRECTIONS.length+1))
        // this.direction = DIRECTIONS[randIdx];
        // console.log(randIdx);
        // if (this.direction === 'up') {
        //     this.y -= 1.2;
        // } else if (this.direction === 'right') {
        //     this.x += 1.2;
        // } else if (this.direction === 'left') {
        //     this.x -= 1.2;
        // } else if (this.direction === 'down') {
        //     this.y += 1.2;
        // }
        this.collisionDetect(this.direction);
        this.nextDirection();
    }
}

module.exports = Ghost;