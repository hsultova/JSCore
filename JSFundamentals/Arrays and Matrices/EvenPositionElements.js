/**
 * Created by Hris on 4.10.2016 г..
 */

function evenPositions(arr) {
    let result = [];
    for (let i in arr)
        if (i % 2 == 0) {
            result.push(arr[i]);
        }
    return result.join(' ');
}
console.log(evenPositions(['20', '30', '40']));