/**
 * Created by Hris on 4.10.2016 г..
 */

function solve(arr) {
    let result = arr
        .filter((num, i) => i % 2 != 0)
        .map(x => 2*x)
        .reverse();
    return result.join(' ');
}

console.log(solve(['10','15','20','25']));
