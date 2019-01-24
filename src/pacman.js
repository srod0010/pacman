class Pacman {
    constructor(ctx, map) {
        this.ctx = ctx;
        this.x = 285;
        this.y = 375;
        this.direction = false;
        this.map = map;
        this.pillCount = 147;
        this.open = false;
        setInterval(() => {
            if (this.open) {
                this.open = false;
            } else {
                this.open = true;
            }
        }, 150);
    // this.map = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    //     [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    //     [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    //     [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    //     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //     [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    //     [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //     [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],
    //     [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //     [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //     [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    //     [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],
    //     [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    //     [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],
    //     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ];
        
    }

   
    

    arc() {
        let sAngle;
        let eAngle;
        let saAngle = sAngle = (Math.PI / 180) * 30;
        let eaAngle = eAngle = (Math.PI / 180) * (360 - 30);
        if (this.direction === 'left') {
           if (this.open) {
              sAngle = 1.25 * Math.PI;
              eAngle = 0.75 * Math.PI;
           } else {
              sAngle = Math.PI;
              eAngle = 0.999 * Math.PI;
           }
           
            
        } else if (this.direction === 'right' || this.direction === false) {
            if (this.open) {
               sAngle = (Math.PI / 180) * 30;
               eAngle = (Math.PI / 180) * (360 - 30);
            } else {
                sAngle = 0;
                eAngle = 2 * Math.PI;
                // this.ctx.moveTo(this.x, this.y - 12.5);
                // this.ctx.lineTo(this.x, this.y);
            };
        } else if (this.direction === 'down') {
            if (this.open) {
               sAngle = 0.75 * Math.PI;
               eAngle = 0.25 * Math.PI;
            } else {
                sAngle = .5 * Math.PI;
                eAngle =  0.49* Math.PI;
                // this.ctx.lineTo(this.x, this.y);
            }
            
        } else if (this.direction === 'up') {
            if (this.open) {
                sAngle = (7 / 4) * Math.PI;
                eAngle = (5/4) * Math.PI;
            } else {
                sAngle = (3/2) * Math.PI;
                eAngle = 1.49 * Math.PI;
            }
            
        }
        // this.ctx.arc(this.x, this.y, 12.5,
        //     (Math.PI / 180) * 30,
        //     (Math.PI / 180) * (360 - 30));
        if (this.open) {
            // setInterval(() => this.open = false, 2000);
            
            this.ctx.arc(this.x, this.y, 12.5, sAngle, eAngle);
        } else {
            // this.open = true;
            
            this.ctx.arc(this.x, this.y, 12.5, sAngle, eAngle);
        }
        
    }

    checkCollision(direction) {
        let xAxis = Math.floor(this.x / 30);
        let yAxis = Math.floor(this.y / 30);
        let nextX = this.x
        let nextY = this.y;

        if (direction === "up") {
            nextY -= 12;
            const top = this.collision(xAxis, yAxis - 1, nextX, nextY);
            const left = this.collision(xAxis - 1, yAxis - 1, nextX - 11.5, nextY);
            const right = this.collision(xAxis + 1, yAxis - 1, nextX + 11.5, nextY);
            return top || left || right;
        } else if (direction === "down") {
            nextY += 12;
            const down = this.collision(xAxis, yAxis + 1, nextX, nextY);
            const left = this.collision(xAxis - 1, yAxis + 1, nextX - 11.5, nextY);
            const right = this.collision(xAxis + 1, yAxis + 1, nextX + 11.5, nextY);
            return down || left || right;
        } else if (direction === "left") {
            nextX -= 12;
            const left = this.collision(xAxis - 1, yAxis, nextX, nextY);
            const top = this.collision(xAxis - 1, yAxis - 1, nextX, nextY - 11.5);
            const down = this.collision(xAxis - 1, yAxis + 1, nextX, nextY + 11.5);
            return left || top || down;
        } else if (direction === "right") {
            nextX += 12;
            const right = this.collision(xAxis + 1, yAxis, nextX, nextY);
            const top = this.collision(xAxis + 1, yAxis - 1, nextX, nextY - 11.5);
            const down = this.collision(xAxis + 1, yAxis + 1, nextX, nextY + 11.5);
            return right || top || down;
        }
    }

    solidDetect(dx, dy, x, y) {
        if (x >= dx && x <= dx + 30 && y >= dy && y <= dy + 30) {
            // console.log(true);
            console.log(this.pillCount);
            return true;
        } else {
            // console.log(false);
            return false;
        }
    }

    collision(xAxis, yAxis, nextX, nextY) {
        if (this.map[yAxis][xAxis] === 1 && this.solidDetect(xAxis * 30, yAxis * 30, nextX, nextY)) {
            //check walls
            // console.log('wall collission');
            return true;
        } else if (this.map[yAxis][xAxis] === 3 && this.solidDetect(xAxis * 30, yAxis * 30, nextX, nextY)) {
            //check pills
            // console.log("pill collision");
            this.map[yAxis][xAxis] = 0;
            this.pillCount -= 1;
            // console.log(this.pillCount);
        } else {
            return false;
        }
    }

    escapeSide() {
        if (this.x <= 0) {
            this.x = 570 - this.x;
        } else if (this.x >= 570) {
            this.x = this.x - 570;
        }
    }

    draw() {
        this.escapeSide();
        this.move();
        this.ctx.beginPath();
        this.arc();

        //mouth
        // this.ctx.moveTo(this.x,this.y-12.5);
        
        this.ctx.lineTo(this.x, this.y);

        //fill pacman shape with fillstyle
        this.ctx.fillStyle = 'yellow';
        this.ctx.fill();
        this.ctx.stroke();
    }

    move() {
        if (this.checkCollision(this.direction)) {
            return this.direction;
        } else if (this.direction === "up") {
            this.y -= 1;
        } else if (this.direction === "down") {
            this.y += 1;
        } else if (this.direction === "left") {
            this.x -= 1;
        } else if (this.direction === "right") {
            this.x += 1;
        }
    }
}

module.exports = Pacman;

