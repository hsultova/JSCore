/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let regex = /\d+/g;
    let text = input.join(' ');
    let numbers = text.match(regex);

    console.log(numbers.join(' '));
}

main(['123a456', '789b987', '654c321', '0']);