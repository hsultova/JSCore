/**
 * Created by Hris on 3.10.2016 г..
 */

function solve(input) {
    let number = input[0];
    let average = calcAverage(number);

    while (average <= 5) {
        number += '9';
        average = calcAverage(number);
    }

    function calcAverage(number) {
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }
        let average = sum * 1.0 / number.length;
        return average;
    }

    console.log(number);
}

solve(['1']);