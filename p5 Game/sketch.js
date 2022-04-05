var guessItem = '';
var interval = 69;

function setup() {
	createCanvas(800,300);
}

function draw() {
	background(220);

	if (frameCount === 1 ||frameCount % interval === 0) {
		 guessItem = new GuessItem(width/2, height/2, 10);
	} 

	guessItem.render();
}

function GuessItem(x, y, scl){
this.x = x;
this.y = y;
this.scale = scl;
this.scaleIncrement = 0.5;
this.content = getContent();
this.alpha = 255;
this.alphaDecrement = 200

function getContent(){
	return parseInt(random(10), 10);
}

this.render = function(){
	push();
	textAlign(CENTER, CENTER);
	translate(this.x, this.y);
	scale(this.scale);
	text(this.content, 0, 0);
	this.scale = this.scale + this.scaleIncrement;
	this.alpha = this.alpha - this.alphaDecrement
	pop();
}
}
