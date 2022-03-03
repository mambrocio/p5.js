function setup() {
	createCanvas(800, 300);
}

function draw() {
	background(1, 75, 100);

	fill(237, 34, 93);
	noStroke();
	var diameter = 10;

	for( var i = 0; i < width / diameter; i = i + 1){
		ellipse(i * diameter + diameter / 2, 0, diameter, diameter);
	}
	

}
