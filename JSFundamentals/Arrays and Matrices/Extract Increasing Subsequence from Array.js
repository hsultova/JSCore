/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let arr = [];
    arr.push(Number(input[0]));
    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);
        if (current > arr[arr.length - 1]) {
            arr.push(current);
        }
    }
    console.log(arr.join('\n'));
}

main(['1',
    '3',
    '12',
    '3',
    '24']);