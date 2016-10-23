/**
 * Created by Hris on 22.9.2016 г..
 */
function printCircleArea([radius]) {
	let area = Math.PI * radius * radius;
	console.log(area);
	console.log(area.toFixed(2));
}

printCircleArea(['5']);