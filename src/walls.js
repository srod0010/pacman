class Walls {
  constructor(ctx, map) {
    this.ctx = ctx;
    this.map = map;
    // this.map = [
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    //   [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    //   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //   [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //   [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    //   [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],
    //   [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ]; // 19 * 22

  }

  createBackground() {
    this.ctx.beginPath();
    this.ctx.rect(3, 3, 660, 660);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.stroke();
  }

  clearWalls() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 600, 600);
    this.ctx.stroke();
  }

  createWalls() {
    // this.ctx.fillStyle = "red";
    this.map.forEach((row, i) => {
      row.forEach((gridPoint, j) => {
        if (gridPoint === 1) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'red'
          this.ctx.rect(j * 30, i * 30, 30, 30); //x,y, width, height
          this.ctx.stroke();
          this.ctx.fill();
        }
        if (gridPoint === 3) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'orange';
          this.ctx.arc((j * 30) + 15, (i * 30) + 15, 4, 0, 360);
          this.ctx.fill();
        }

      });
    });
  }

  render() {
      this.clearWalls();
      this.createBackground();
      this.createWalls();
      console.log(this.map.length, this.map[0].length);
  }

}

module.exports = Walls;