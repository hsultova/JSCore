/**
 * Created by Hris on 22.9.2016 г..
 */

function solve([r, h]) {
	[r, h] = [r, h].map(Number);
	let l = Math.sqrt(r * r + h * h);
	let volume = Math.PI * r * r * h / 3;
	let area =Math.PI * r * (r + l);

	console.log(volume.toFixed(4));
	console.log(area.toFixed(4));
}

solve(['3', '5']);