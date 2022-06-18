class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.helicopter = new Helicopter(this.ctx);


  }

  start() {
    this.intervalId = setInterval( () => {
      this.clear();
      this.draw();
      this.move();
      

    }    
    , 1000/60)
    }

  clearObstacles() {
  }

  addObstacle() {
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.heigth
    )
  }

  draw() {
    this.background.draw();
    this.helicopter.draw();

  }
  
  move() {
    this.background.move();
  }

  checkCollisions() {
  }

  gameOver() {
  }
}