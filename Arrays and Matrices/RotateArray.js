/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let n = Number(input[input.length - 1]);
    let arr = [];

    for (let i = 0; i < input.length - 1; i++) {
        arr.push(input[i]);
    }

    for (let j = 0; j < n; j++) {
        let last = arr[arr.length - 1];
        arr.pop();
        arr.unshift(last);
    }

    console.log(arr.join(' '));
}

main(['1',
    '2',
    '3',
    '4',
    '2']);


main(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '100000']);