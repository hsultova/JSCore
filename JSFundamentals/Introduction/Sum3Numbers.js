/**
 * Created by Hris on 20.9.2016 г..
 */

function sum(input) {
	let sum = 0;
	let i;
	for (i = 0; i < input.length; i++) {
		sum += Number(input[i]);
	}
	console.log(sum);
}

sum(['1.5', '1.5', '-1']);