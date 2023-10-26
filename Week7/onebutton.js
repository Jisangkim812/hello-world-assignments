document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth - 400;
    canvas.height = window.innerHeight - 400;

    var img1 = new Image();
    img1.src = 'spiderman.png';

    var spider = {
        x: canvas.width / 2 - 25, // 
        y: canvas.height / 2 - 100, // 
        width: 100,
        height: 100,
        draw: function() {
            ctx.drawImage(img1, this.x, this.y, this.width, this.height);
        }
    };

    class Building {
        constructor() {
            this.x = canvas.width; // 
            this.y = canvas.height / 2 - 45; // 
            this.width = 20;
            this.height = 50;
        }
        draw() {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        update() {
            this.x -= 80;  // 
            this.draw();
        }
    }

    var timer = 0;
    var buildingArray = [];
    var jumpTimer = 0;
    var jumping = false;

    function frame() {
        requestAnimationFrame(frame);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Setting the background color
        ctx.fillStyle = '#0074fe'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (timer % 120 === 0) {
            var building = new Building();
            buildingArray.push(building);
        }

        buildingArray.forEach((a) => {
            a.x--;
            a.draw();
        });

        if (jumping) {
            spider.y--;
            jumpTimer++;
        } else if (spider.y < canvas.height / 2 - 25) { // Making sure the Spiderman returns to the center after a jump
            spider.y++;
        }

        if (jumpTimer > 100) {
            jumping = false;
            jumpTimer = 0;
        }

        spider.draw();
        timer++;
    }

    frame();

    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            jumping = true;
        }
    });
});
