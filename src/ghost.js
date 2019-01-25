class Ghost {
    constructor (ctx, map) {
        this.ctx = ctx;
        this.map = map;
        this.x = 285;
        this.y = 300;
    }

    arc() {
        this.ctx.arc(this.x, this.y, 12.5, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'purple';
        this.ctx.fill();
        this.ctx.stroke();
        
    }

    draw() {
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
}

module.exports = Ghost;