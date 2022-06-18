class Obstacle {
  constructor(ctx) {
  }

  draw() {
  }

  move() {
  }

  collide(el) {
    const collideX = el.x + el.w > this.x && el.x < this.x + this.w
    const collideY = el.y < this.y + this.h && el.y + el.h > this.y

    return collideX && collideY
  }

  isVisible() {
  }
}