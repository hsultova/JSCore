function solve([a,b,c]) {
	[a,b,c] =[a,b,c].map(Number);

	let x1;
	let x2;
	let d = b * b - 4 * a * c;

	if (d > 0){
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);

		console.log(x2);
		console.log(x1);
	}
	else if (d === 0){
		x1 = (-b ) / (2 * a);
		console.log(x1);
	}
	else{
		console.log('No');
	}
}