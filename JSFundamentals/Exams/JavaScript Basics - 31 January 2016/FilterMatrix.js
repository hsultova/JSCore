/**
 * Created by Hris on 7.10.2016 г..
 */
function main(input) {
    let n = Number(input[input.length - 1]);
    input.pop();

    let sequence = input.join(' ').split(' ');
    let count = 1;
    for (let i = 1; i < sequence.length; i++) {
        let current = sequence[i];
        let previous = sequence[i - 1];
        if (current === previous) {
            count++;
            if (count == n) {
                for (let j = i; j >= i + 1 - n; j--) {
                    sequence[j] = 'x';
                }
                count = 1;
            }
        }
        else {
            count = 1;
        }
    }

    let result = [];
    let outputRow = [];
    let seqIndex = 0;
    for (let row = 0; row < input.length; row++) {
        let currentRow = input[row].split(' ');
        for (let i = 0; i < currentRow.length; i++) {
            if (currentRow[i] == sequence[seqIndex]) {
                outputRow.push(currentRow[i]);
            }
            seqIndex++;
        }
        result.push(outputRow);
        outputRow = [];

    }

    for (let row = 0; row < result.length; row++) {
        let currentRow = result[row];
        if (currentRow.length < 1) {
            console.log('(empty)');
        } else {
            console.log(currentRow.join(' '));
        }
    }
}

main(['1 2 3 3 2 1',
    '5 2 2 1 1 0',
    '3 3 1 3 3',
    '2']);

main(['2 1 1 1',
    '1 1 1',
    '3 7 3 3 1',
    '2']);