/**
 * Created by Hris on 4.10.2016 г..
 */

function negativePositiveNumbers(arr) {
    arr = arr.map(Number);
    let result = [];
    for (num of arr)
        if (num < 0) {
            result.unshift(num);
        }
        else {
            result.push(num);
        }
    console.log(result.join('\n'));
}
negativePositiveNumbers(['7', '-2', '8', '9']);