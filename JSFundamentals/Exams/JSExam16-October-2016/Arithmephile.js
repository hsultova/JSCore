/**
 * Created by Hris on 16.10.2016 г..
 */

function main(input) {
    input = input.map(Number);
    let number = 0;
    let biggestNumberst = [];

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        if (line >= 0 && line < 10) {
            number = line;
        }

        for (let j = i + 1; j <= i + number; j++) {
            product *= input[j];
        }

        if (number == 0) {
            product = 0;
        }

        if(product != 1){
            biggestNumberst.push(product);
        }
        product = 1;
    }

    console.log(biggestNumberst.filter((a,b) => Math.max(a,b)));
}

main(['0',
    '10000',
    '10000',
    '10000',
    '25.25',
    '10000',
    '10000',
    '10000',
    '0']);