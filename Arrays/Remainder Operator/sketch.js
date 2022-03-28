var words = ['I', 'love', 'programming', 'with', 'Javascript'];

var colors = [
	[109, 82, 242],
	[230, 108, 201],
	[44, 90, 242],
	[25, 124, 230],
	[113, 84, 227],
];

function setup(){
	createCanvas (800, 300);
	textAlign(CENTER, CENTER);
	frameRate(5);
}

function draw() {
	var currentIndex = frameCount % words.length;
	var currentColor = colors[currentIndex];
	var currentWord = words[currentIndex];
	
	background(currentColor);

	fill(255);
	textSize(45);
	text(currentWord, width/2, height/2);
}