// Shape class
class Shape {
    constructor(x, y, velX, velY) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
    }
  }
  
  // Ball class
  class Ball extends Shape {
    constructor(x, y, velX, velY, size, color) {
      super(x, y, velX, velY);
      this.size = size;
      this.color = color;
      this.exists = true;
    }
  
    collisionDetect() {
      for (const ball of balls) {
        if (!(this === ball) && ball.exists) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < this.size + ball.size) {
            ball.color = this.color = randomRGB();
          }
        }
      }
    }
  
    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }
  
    update() {
      if ((this.x + this.size) >= width) {
        this.velX = -(Math.abs(this.velX));
      }
  
      if ((this.x - this.size) <= 0) {
        this.velX = Math.abs(this.velX);
      }
  
      if ((this.y + this.size) >= height) {
        this.velY = -(Math.abs(this.velY));
      }
  
      if ((this.y - this.size) <= 0) {
        this.velY = Math.abs(this.velY);
      }
  
      this.x += this.velX;
      this.y += this.velY;
    }
  }
  
  // EvilCircle class
  class EvilCircle extends Shape {
    constructor(x, y) {
      super(x, y, 20, 20);
      this.color = 'white';
      this.size = 10;
  
      window.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'a':
            this.x -= this.velX;
            break;
          case 'd':
            this.x += this.velX;
            break;
          case 'w':
            this.y -= this.velY;
            break;
          case 's':
            this.y += this.velY;
            break;
        }
      });
    }
  
    draw() {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 3;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
    }
  
    checkBounds() {
      if ((this.x + this.size) >= width) {
        this.x = width - this.size;
      }
  
      if ((this.x - this.size) <= 0) {
        this.x = this.size;
      }
  
      if ((this.y + this.size) >= height) {
        this.y = height - this.size;
      }
  
      if ((this.y - this.size) <= 0) {
        this.y = this.size;
      }
    }
  
    collisionDetect() {
      for (const ball of balls) {
        if (ball.exists) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < this.size + ball.size) {
            ball.exists = false;
          }
        }
      }
    }
  }
  
  // Game setup
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;
  
  const balls = [];
  const ballCount = document.querySelector('p');
  let ballsRemaining = 0;
  
  while (balls.length < 25) {
    const size = randomIntFromRange(10, 20);
    const ball = new Ball(
      randomIntFromRange(0 + size, width - size),
      randomIntFromRange(0 + size, height - size),
      randomIntFromRange(-7, 7),
      randomIntFromRange(-7, 7),
      size,
      randomRGB()
    );
  
    balls.push(ball);
    ballsRemaining++;
  }
  
  const evilCircle = new EvilCircle(
    randomIntFromRange(10, width - 10),
    randomIntFromRange(10, height - 10)
  );
  
  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      if (ball.exists) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
      }
    }
  
    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();
  
    ballCount.textContent = `Ball count: ${ballsRemaining}`;
  
    requestAnimationFrame(loop);
  }
  
  loop();
  
  // Helper functions
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }