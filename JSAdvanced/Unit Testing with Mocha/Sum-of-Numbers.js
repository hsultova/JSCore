/**
 * Created by Hris on 31.10.2016 г..
 */

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

module.exports = {sum};