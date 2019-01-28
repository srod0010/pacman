

class Ghost {
    constructor(ctx, map,x,y,color) {
        this.ctx = ctx;
        this.map = map;
        this.x = x;
        this.y = y;
        this.color = color;
        this.resetColor = this.color;
        this.direction = "none";
        this.prevDirection = "none";
        this.speed = 1;
    }

    reset() {
        this.color = this.resetColor;
    }

    arc() {
       this.ctx.arc(this.x, this.y, 12.5, 0, 2 * Math.PI);
    //    this.ctx.fillStyle = this.color;
    //    this.ctx.fill();
    //    this.ctx.stroke();
    }

    draw() {
        this.changeSides();
        this.move();

        const ghostImg = new Image();
        ghostImg.src = `./images/${this.color}.png`;
        this.ctx.drawImage(ghostImg, 0, 0, 512, 512, this.x- 15, this.y- 15, 30, 30);
        // this.ctx.beginPath();
        // this.arc();
    }

    randomDirection() {
        const directions = ['left', 'right', 'up','down'];
        this.direction = directions[Math.floor(Math.random() * 4)];

        if (this.direction === this.prevDirection) {
            this.randomDirection();
        } else {
            this.move();
        }
    }

    changeSides() {
        if (this.x <= 0) {
            this.x = 570 - this.x;
        } else if (this.x >= 570) {
            this.x = this.x - 570;
        }
    }

    checkCollision(direction) {
        let xRow = Math.floor(this.x / 30); // coordinates
        let yRow = Math.floor(this.y / 30);
        let newX = this.x,
            newY = this.y;

        if (direction === "up") {
            newY -= 13;
            const top = this.collision(xRow, yRow - 1, newX, newY);
            const left = this.collision(xRow - 1, yRow - 1, newX - 10, newY);
            const right = this.collision(xRow + 1, yRow - 1, newX + 10, newY);
            return top || left || right;
        } else if (direction === "down") {
            newY += 13;
            const down = this.collision(xRow, yRow + 1, newX, newY);
            const left = this.collision(xRow - 1, yRow + 1, newX - 10, newY);
            const right = this.collision(xRow + 1, yRow + 1, newX + 10, newY);
            return down || left || right;
        } else if (direction === "left") {
            newX -= 13;
            const left = this.collision(xRow - 1, yRow, newX, newY);
            const top = this.collision(xRow - 1, yRow - 1, newX, newY - 10);
            const down = this.collision(xRow - 1, yRow + 1, newX, newY + 10);
            return left || top || down;
        } else if (direction === "right") {
            newX += 13;
            const right = this.collision(xRow + 1, yRow, newX, newY);
            const top = this.collision(xRow + 1, yRow - 1, newX, newY - 10);
            const down = this.collision(xRow + 1, yRow + 1, newX, newY + 10);
            return right || top || down;
        }
    }


    inBlock(dx, dy, x, y) {
        if (x >= dx && x <= dx + 30 && y >= dy && y <= dy + 30) {
            return true;
        } else {
            return false;
        }
    }

    collision(xRow, yRow, newX, newY) {
        if (this.map[yRow][xRow] === 1 && this.inBlock(xRow * 30, yRow * 30, newX, newY)) {
            return true;
        } else if (this.map[yRow][xRow] === 4 && this.inBlock(xRow * 30, yRow * 30, newX, newY)) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        if (this.direction === "none" || this.checkCollision(this.direction)) {
            this.randomDirection();
        } else if (this.direction === "up") {
            // this.prevDirection = "down";
            this.y -= this.speed;
        } else if (this.direction === "down") {
            // this.prevDirection = "up";
            this.y += this.speed;
        } else if (this.direction === "right") {
            // this.prevDirection = "left";
            this.x += this.speed;
        } else if (this.direction === "left") {
            // this.prevDirection = "right";
            this.x -= this.speed;
        }
    }
}

module.exports = Ghost;