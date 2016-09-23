/**
 * Created by Hris on 23.9.2016 г..
 */

function solve(input) {
	let item = input[0];
	let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
	let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

	if (fruits.indexOf(item) !== -1) {
		console.log("fruit");
	}
	else if (vegetables.indexOf(item) !== -1) {
		console.log('vegetable');
	}
	else {
		console.log('unknown');
	}
}

solve(['banana']);