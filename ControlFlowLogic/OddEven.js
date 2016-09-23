/**
 * Created by Hris on 23.9.2016 г..
 */

function solve(n) {
	let remain = n % 2;
	if (remain === 0) {
		console.log("even");
	}
	else if (remain === Math.round(remain)) {
		console.log("odd");
	}
	else {
		console.log("invalid");
	}
}

solve(['3.5']);