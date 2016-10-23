/**
 * Created by Hris on 22.9.2016 г..
 */

function printTriangleArea([a,b,c]) {
	let p = (Number(a) + Number(b)+ Number(c)) / 2.0;
	let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
	console.log(area);
}

printTriangleArea(['2', '3.5', '4']);