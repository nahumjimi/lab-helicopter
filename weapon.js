class Weapon {
  constructor(shooter) {
    this.shooter = shooter
    this.bullets = []
  }

  shoot() {
    this.bullets.push(new Bullet(this.shooter.ctx, this.shooter.x, this.shooter.y))
  }

  clearBullets() {
  }

  draw() {
    this.bullets.forEach(bullet => bullet.draw())
  }

  move() {
  }
}