class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.helicopter = new Helicopter(this.ctx);
    this.obstacles = [];
    this.tickObstacle = 0;
  }

  start() {
    this.intervalId = setInterval( () => {
      this.clear();
      this.draw();
      this.checkCollisions();
      this.move();
      this.tickObstacle++

      if(this.tickObstacle % 60 === 0) {
        this.addObstacle()
      } 
    }    
    , 1000/60)
    }

  clearObstacles() {

  }

  addObstacle() {
    this.obstacles.push(new Obstacle(this.ctx))
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
    this.obstacles.forEach(obs => obs.draw());
  }
  
  move() {
    this.background.move();
    this.helicopter.move();
    this.obstacles.forEach(obs => obs.move());
  }

  checkCollisions() {
    this.obstacles.forEach((obs)=>{
      this.helicopter.weapon.bullets.forEach(bullet=>{
        obs.collide(bullet)
        console.log(obs.collide(bullet))
      })
    })
  }

  gameOver() {
  }
}