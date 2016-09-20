/**
 * Created by Hris on 20.9.2016 г..
 */

function solve(input) {
	let w = Number(input[0]);
	let h = Number(input[1]);
	let W = Number(input[2]);
	let H = Number(input[3]);

	let area = H * W + h * w - Math.min(w, W) * Math.min(h, H)

	console.log(area);
}

solve(['13', '2', '5', '8']);
solve(['2', '4', '5', '3']);