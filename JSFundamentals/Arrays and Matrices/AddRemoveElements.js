/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            arr.push(i + 1);
        }
        else {
            arr.pop();
        }
    }

    console.log(arr.join('\n'));

    if (arr.length == 0) {
        console.log('Empty');
    }
}

main(['add',
    'add',
    'remove',
    'add',
    'add']);