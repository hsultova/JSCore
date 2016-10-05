/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let n = Number(input[input.length - 1]);
    console.log((input[0]));
    for (let i = 1; i < input.length - 1; i++) {
        if (i % n == 0) {
            console.log(input[i]);
        }
    }
}

main(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);