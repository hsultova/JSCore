/**
 * Created by Hris on 20.9.2016 г..
 */

function solve(input) {
	let n = Number(input[0]);
	let result = "";
	let i;

	for (i = 1; i <= n; i++) {
		result += i;
	}

	console.log(result);
}

solve(['11']);
