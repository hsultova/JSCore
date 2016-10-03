/**
 * Created by Hris on 3.10.2016 г..
 */

function solve(input) {
    let number = input[0];
    let average = calcAverage(number);
    while (average <= 5) {
        average = calcAverage(number);
        number += '9';
    }

    function calcAverage(number) {
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }
        let count;

        if (number.length == 1) {
            count = number.length;
        }
        else {
            count = number.length - 1;
        }
        let average = sum * 1.0 / count;
        return average;
    }

    console.log(number);
}

solve(['1']);