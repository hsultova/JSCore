/**
 * Created by Hris on 22.9.2016 г..
 */
function solve(input) {
	let bottles = Number(input[0]);
	let boxCapacity = Number(input[1]);
	let neededBoxes = Math.ceil(bottles / boxCapacity);

	console.log(neededBoxes);
}

solve(['15', '7']);