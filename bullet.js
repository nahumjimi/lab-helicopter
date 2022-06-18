class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.vx = 8;
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false)
        this.ctx.stroke()
        this.ctx.closePath()
    }

    move() {
        this.x += this.vx
    }

    isVisible() {
        return this.x < this.ctx.canvas.width
    }
}
