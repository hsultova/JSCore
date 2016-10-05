/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let delimiter = input[input.length - 1];
    let result = "";

    for (let i = 0; i < input.length - 1; i++) {
        if (i == 0) {
            result += input[i];
        }
        else {
            result += delimiter + input[i];
        }
    }

    console.log(result);
}

main(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);