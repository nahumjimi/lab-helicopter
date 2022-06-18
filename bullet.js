class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
    }

    draw() {
        context.beginPath()
        context.arc(this.x, this.y, radius, 0, Math.PI, false)
        context.fillStyle = 'green'
        context.fill()
    }

    move() {
        this.x += this.vx
    }

    isVisible() {}
}
