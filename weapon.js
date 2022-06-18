class Weapon {
  constructor(shooter) {
    this.bullets = [];
    this.ctx = shooter.ctx
    this.x = shooter.x + shooter.w;
    this.y = shooter.y + shooter.h;

    this.tickBullet = 0;
    this.isReloading = false;
    this.bulletsCounter = 0;
  }

  shoot() {
    this.tickBullet++;

    if (this.tickBullet > 2) {
      this.tickBullet = 0;
      if(!this.isReloading) {
        this.bullets.push(new Bullet(this.ctx ,this.x, this.y));
        this.bulletsCounter++;
      }
    }

    if (this.bulletsCounter === 5) {
      this.isReloading = true;
      this.bulletsCounter = 0;
      setTimeout(() => {
        this.isReloading = false;
      }, 700)
    }
 
  }

  clearBullets() {
    this.bullets = this.bullets.filter(bullet => bullet.isVisible())
  }

  draw() {
    this.clearBullets()
    this.bullets.forEach(bullet => bullet.draw())
  }

  move() {
    this.bullets.forEach(bullet => bullet.move())
  }
}