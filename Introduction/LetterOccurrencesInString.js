/**
 * Created by Hris on 20.9.2016 г..
 */

function solve(input) {
	let text = input[0];
	let letter = input[1];
	let counter = 0;
	let i;

	for (i = 0; i < text.length; i++) {
		if (text[i] === letter) {
			counter++;
		}
	}
	console.log(counter);
}

solve(['hello', 'l']);
