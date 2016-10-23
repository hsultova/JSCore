/**
 * Created by Hris on 20.9.2016 г..
 */

function solve(input) {
	let minAge = Number(input[0]);
	let i;
	for (i = 1; i < 5; i += 2) {
		let name = input[i];
		let age = Number(input[i+1]);

		if (age >= minAge) {
			console.log("{ name: '%s', age: %d }", name, age);
		}
	}
}

solve(['12', 'Ivan', '15', 'Asen', '9']);