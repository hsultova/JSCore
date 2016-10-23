/**
 * Created by Hris on 3.10.2016 г..
 */

function solve(input) {
    function getOperation(number, operation) {
        switch (operation) {
            case 'chop':
                return number / 2;
            case 'dice':
                return Math.sqrt(number);
            case 'spice':
                return number + 1;
            case 'bake':
                return number * 3;
            case 'fillet':
                return number - 0.2 * number;
        }
    }

    let number = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let operation = input[i];
        number = getOperation(number, operation);
        console.log(number);
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);