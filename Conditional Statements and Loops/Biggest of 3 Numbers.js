function solve(input) {
	let maxNumber = -Infinity;

	for (let i = 0; i < input.length; i++) {
		let number = Number(input[i]);
		if (number > maxNumber) {
			maxNumber = number;
		}
	}
	return maxNumber;
}