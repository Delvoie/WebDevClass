    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const ballCount = document.getElementById('ball-count');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array to store balls
    const balls = [];

    // Function to generate random number
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate random RGB color
    function randomRGB() {
      return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    }

    // Ball class
    class Ball {
      constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.exists = true;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update() {
        if ((this.x + this.size) >= canvas.width || (this.x - this.size) <= 0) {
          this.velX = -this.velX;
        }

        if ((this.y + this.size) >= canvas.height || (this.y - this.size) <= 0) {
          this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
      }

      collisionDetect() {
        for (const otherBall of balls) {
          if (this !== otherBall && otherBall.exists) {
            const dx = this.x - otherBall.x;
            const dy = this.y - otherBall.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + otherBall.size) {
              this.color = otherBall.color = randomRGB();
            }
          }
        }
      }
    }

    // Create balls
    for (let i = 0; i < 25; i++) {
      const size = random(10, 20);
      const ball = new Ball(
        random(size, canvas.width - size),
        random(size, canvas.height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size
      );
      balls.push(ball);
    }

    // Update ball count
    ballCount.textContent = balls.length;

    // Animation loop
    function loop() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const ball of balls) {
        if (ball.exists) {
          ball.draw();
          ball.update();
          ball.collisionDetect();
        }
      }

      requestAnimationFrame(loop);
    }

    loop();