/**
 * Created by Hris on 6.10.2016 г..
 */
function main(input) {
    let matrix = input.map(row => row.split(' ').map(Number));

    let firstRowSum = input[0].split(' ').map(Number).reduce((a, b) => a + b, 0);

    for (let row in input) {
        let rowSum = input[row].split(' ').map(Number).reduce((a, b) => a + b, 0)
        if (rowSum != firstRowSum) {
            return false;
        }
    }

    let calcSum = function (arr) {
        return arr.reduce((a, b) => a + b, 0);
    };
    let colSums = matrix.map(function (row, i) {
        return calcSum(matrix.map((row) => row[i]));
    });
    for (let s of colSums) {
        if (s != firstRowSum) {
            return false;
        }
    }
    return true;
}

console.log(main(['4 5 6',
    '6 5 4',
    '5 5 5']
));