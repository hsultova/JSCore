/**
 * Created by Hris on 20.9.2016 г..
 */

function solve(input) {
	let sum = 0;
	let vat = 0;
	let total = 0;
	let i;

	for (i = 0; i < input.length; i++) {
		sum += Number(input[i]);
	}

	vat = sum * 0.2;
	total = sum * 1.2;

	console.log("sum = " + sum);
	console.log("VAT = " + vat);
	console.log("total = " + total);
}

solve(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);