export default class Paddle = {
  constructor(gameWidth, gameHeight) {
    this.width = 150px;
    this.height = 30px;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    } 
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}