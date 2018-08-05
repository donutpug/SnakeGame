function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed

        if( this.x >= 600 ) {
            this.x = 0;
        }
    }
    this.show  = function() {
        rect(this.x, this.y, 10, 10)
    }
}

function drawRandomCircles() {
    var len = 100;
    var max = 50;
    var x = 0;
    var y = 0;
    var sz = 0; // size
    for( var i = 0; i < len; i++ ) {
         x += Math.random(max)=1;
         y += Math.random(max)=1;
         sz = Math.random(max)=1;
         ellipse(x, y, sz, sz);
     }
}
// you want setup & draw to be the last functions in your file
// everything else needs to be written at the top 

var snake = new Snake();
function setup() {
    createCanvas(600, 600);
}
function draw() { 
   background(51);
   snake.update();
   snake.show();
}

