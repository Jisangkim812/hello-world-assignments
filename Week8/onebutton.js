document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth - 400;
    canvas.height = window.innerHeight - 700;

    var score = 0;
    var lives = 3;
    var gameOver = false;
    var groundHeight = 100;

    var img1 = new Image();
    img1.src = 'spiderman.png';

    var spider = {
        x: 50,
        y: canvas.height - 100 - groundHeight, // This sets the initial y position correctly
        width: 100,
        height: 100,
        velocity: 0, // Initial velocity
        jumpPower: -20, // The power of the jump, a negative value to go up
        gravity: 1, // The force of gravity, pulling the spider down
        draw: function() {
            ctx.drawImage(img1, this.x, this.y, this.width, this.height);
        }
    };

    var buildingImages = [
        'building.png',
        'building5.png',
        'building6.png',
        'building7.png'
    ].map(src => {
        var img = new Image();
        img.src = src;
        return img;
    });

    class Building {
        constructor() {
            this.width = 50;
            this.height = 100;
            this.x = canvas.width;
            this.y = canvas.height - this.height - groundHeight;
            this.passed = false;
            this.image = buildingImages[Math.floor(Math.random() * buildingImages.length)];
        }
        draw() {
            var halfHeight = this.height / 2;
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        update() {
            this.x -= 5;
            if (this.x + this.width < 0) {
                buildingArray.splice(buildingArray.indexOf(this), 1);
            }
            this.draw();
            if (!this.passed && this.x + this.width < spider.x) {
                score += 10;
                this.passed = true;
            }
        }
    }

    var buildingArray = [];
    var jumpTimer = 0;
    var jumping = false;

    function collisionDetection(spider, building) {
        var spiderHitboxPadding = 5; 
        var buildingHitboxPadding = 5; 
    
        var spiderHitbox = {
            x: spider.x + spiderHitboxPadding,
            y: spider.y + spiderHitboxPadding,
            width: spider.width - spiderHitboxPadding * 2,
            height: spider.height - spiderHitboxPadding * 2
        };
    
        var buildingHitbox = {
            x: building.x + buildingHitboxPadding,
            y: building.y + buildingHitboxPadding,
            width: building.width - buildingHitboxPadding * 2,
            height: building.height - buildingHitboxPadding * 2
        };
    
        if (spiderHitbox.x < buildingHitbox.x + buildingHitbox.width &&
            spiderHitbox.x + spiderHitbox.width > buildingHitbox.x &&
            spiderHitbox.y < buildingHitbox.y + buildingHitbox.height &&
            spiderHitbox.y + spiderHitbox.height > buildingHitbox.y) {
            lives -= 1;
            return true;
        }
        return false;
    }

    function resetGame() {
        score = 0;
        lives = 3;
        buildingArray = [];
        spider.x = 50;
        spider.y = canvas.height - spider.height - groundHeight; // Reset the spider's y position to the ground
        spider.velocity = 0; // Reset velocity
        gameOver = false;
        timer = 0; // Reset the timer as well to restart the building generation
        requestAnimationFrame(frame); // Make sure this is the last thing you call after all reset operations
    }

    function displayGameOver() {
        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
        ctx.font = '20px Arial';
        ctx.fillText("Press Space to Restart", canvas.width / 2, canvas.height / 2 + 40);
    }

    function frame() {
        if (!gameOver) {
            requestAnimationFrame(frame);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#121212';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'white';
            ctx.font = '20px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(`Score: ${score}`, 10, 30);

            ctx.textAlign = 'right';
            ctx.fillText(`Lives: ${lives}`, canvas.width - 10, 30);

            spider.draw();

            ctx.fillStyle = 'darkbrown';
            ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

            buildingArray.forEach(function(building, index) {
                building.update();
                if (collisionDetection(spider, building)) {
                    buildingArray.splice(index, 1);
                    if (lives <= 0) {
                        gameOver = true;
                        displayGameOver();
                        return;
                    }
                }
            });

            if (jumping) {
                spider.velocity = spider.jumpPower; // Set the upward velocity
                jumping = false; // Prevent continuous jumps
            }
        
            spider.y += spider.velocity; // Update the spider's position
            spider.velocity += spider.gravity; // Apply gravity
        
            // Prevent the spider from falling below the ground
            if (spider.y > canvas.height - spider.height - groundHeight) {
                spider.y = canvas.height - spider.height - groundHeight;
                spider.velocity = 0; // Reset velocity
            }

            if (timer % 120 === 0) {
                buildingArray.push(new Building());
            }

            timer++;
        }
    }

    var timer = 0;

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            if (gameOver) {
                resetGame();
            } else if (spider.y >= canvas.height - spider.height - groundHeight) {
                jumping = true;
            }
        }
    });
    

    frame();
});

