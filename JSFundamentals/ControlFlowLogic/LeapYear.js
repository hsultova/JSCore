/**
 * Created by Hris on 22.9.2016 г..
 */
function solve([year]) {
	if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
		console.log("yes");
	}
	else {
		console.log("no");
	}
}

solve(['2000']);