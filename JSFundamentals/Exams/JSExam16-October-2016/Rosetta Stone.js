/**
 * Created by Hris on 16.10.2016 г..
 */
function main(input) {
    let n = Number(input[0]);
    input.shift();
    let template = [];
    let numbers =[];
    for (let i = 0; i < n; i++) {
        template.push(input[i]);
    }
    template = template.map(row => row.split(' ').map(Number));
    input.shift();
    input.shift();

    let result = '';

    let matrix = input.map(row => row.split(' ').map(Number));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            numbers.push(matrix[i][j]);
        }
    }

    console.log(numbers)

    function decode(n) {
        while (n < 27) {
            if (n > 0 && n < 27) {
                return String.fromCharCode(n + 64);
            }
            else if (n == 0) {
                return ' ';
            }
            let revolution = Math.floor(n / 27);
            n -= revolution * 27;
        }
    }
}

main(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
);