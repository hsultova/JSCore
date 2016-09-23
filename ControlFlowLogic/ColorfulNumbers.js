/**
 * Created by Hris on 23.9.2016 г..
 */

function solve(n) {
	console.log('<ul>');
	let color = "";
	for (let i = 1; i <= n; i++) {
		if (i % 2 == 0) {
			color = 'blue';
		}
		else {
			color = 'green';
		}
		console.log("<li><span style='color:%s'>%d</span></li>", color, i);
	}
	console.log('</ul>');
}

solve(['10']);