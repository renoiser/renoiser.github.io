/* asset function for Paper.js */



function RANDOM (min, max) {
	return Math.random() * (max - min) + min;
}

// function RANDOM_COLOR(alpha,mono){

// 	if(mono) {

// 		var red = 0;
// 		var green = 0;
// 		var blue = 0;

// 	} else {

// 		var red = RANDOM(0,1);
// 		var green = RANDOM(0,1);
// 		var blue = RANDOM(0,1);

// 	}		

// 	if(alpha) {
// 		var alpha = RANDOM(0,1);
// 	} else {
// 		var alpha = 1;
// 	}

// 	return new Color(red,green,blue,[alpha])

// }