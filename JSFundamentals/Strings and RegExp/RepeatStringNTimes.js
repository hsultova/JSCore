/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let text = input[0];
    let n = Number(input[1]);

    let result = text.repeat(n);
    console.log(result);
}

main(['repeat', '5']);