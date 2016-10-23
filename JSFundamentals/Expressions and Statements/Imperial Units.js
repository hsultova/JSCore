function solve(inches) {
	let feet = Math.floor(inches / 12);
	let inchesRemain = inches % 12;
	return feet + "'-" + inchesRemain + '"';
}
