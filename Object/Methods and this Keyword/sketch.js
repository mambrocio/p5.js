var circle;

function setup() {
	createCanvas(400, 400);
	colors ={
		black: 0,
		daRKgRAY: 55,
		gray: 125,
		lightGray: 175,
		white: 255,
		paintItBlack: function(){
			background(this.black);
		}
	};
}

function draw() {
	background(220);
	if (frameCount > 120){
		colors.paintItBlack()
	}
}

var circle;

function setup(){
	createCanvas(400, 400);
	circle = {
		x: width/2,
		y: height/2,
		size: 50,
		draw: function(){
			ellipse(this.x, this.y, this.size, this.size );
		},
		grow:function(){
			if (this.size < 200){
					this.size = this.size + 1;
				}
			}
		}
	}

function draw() {
	background(220);
	circle.draw();
	circle.grow();
	}
