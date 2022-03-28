// var arr = [];
// arr.push(1);
// arr.push('hello world');
// arr.push({'name': 'value'});

// console.log(arr);

// var arr = [15, 40, 234, 53];	

// var firstItem = arr[0];
// console.log(firstItem);

// var size1 = 200;
// var size2 = 150;
// var size3 = 100;
// var size4 = 50;
// var size5 = 0;

var sizes = [200, 150, 100, 50, 25];

function setup(){
	createCanvas(800, 300);
}

function draw(){
	background(220);
	fill(237, 34, 93);
	strokeWeight(2);

	// ellipse(width/2, height/2, sizes[0], sizes[0]);
	// ellipse(width/2, height/2, sizes[1], sizes[1]);
	// ellipse(width/2, height/2, sizes[2], sizes[2]);
	// ellipse(width/2, height/2, sizes[3], sizes[3]);
	// ellipse(width/2, height/2, sizes[4], sizes[4]);

	for (var i = 0; i < 5; i++)
	ellipse(width/2, height/2, sizes[i], sizes[i]);
}