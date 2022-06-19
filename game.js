class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.helicopter = new Helicopter(this.ctx);
    this.obstacleUp = false
    this.obstacles = [];
    this.tickObstacle = 0;
  }

  start() {
    this.intervalId = setInterval( () => {
      this.clear();
      this.clearObstacles(); 
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
    this.obstacles = this.obstacles.filter(obs=>obs.isVisible())
  }

  addObstacle() {
    this.obstacles.push(new Obstacle(this.ctx, this.obstacleUp))
    this.obstacleUp = !this.obstacleUp
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
    this.obstacles.forEach((obs, obsIndex)=>{
      if(obs.collide(this.helicopter)){
        this.gameOver()
      }
     this.helicopter.weapon.bullets.forEach((bull, bullIndex)=>{
          if(obs.collide(bull)){
            this.obstacles.splice(obsIndex,1)
            this.helicopter.weapon.bullets.splice(bullIndex,1)
        }
     })   
    })
  }

  gameOver() {
    clearInterval(this.intervalId);
        this.intervalId = null
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "blue";
        this.ctx.textAlign = "center";
        this.ctx.fillText("GAME OVER", this.ctx.canvas.width/2, this.ctx.canvas.height/2);
  }
}