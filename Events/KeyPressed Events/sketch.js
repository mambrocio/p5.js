
var pressed = false;
var colors = [];


function setup(){
	createCanvas(800, 300);
	background(0);
	colors = [
		[109, 82, 242],
		[230, 108, 201],
		[44, 90, 242],
		[25, 124, 230],
		[113, 84, 227],
	];
	noStroke();
}

function draw() {

	if (pressed === true) {
		var randomIndex = parseInt(random(colors.length), 10);
		var randomSize = random(200);

		fill(colors[randomIndex]);
		ellipse(random(width), random(height), randomSize, randomSize);

		
		

	}
	pressed = false;
}

function keyPressed(){
	pressed = true;
}