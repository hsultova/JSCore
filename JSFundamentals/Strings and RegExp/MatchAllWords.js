/**
 * Created by Hris on 5.10.2016 г..
 */
function solve(input) {
    let words = input[0].match(/\w+/g);
    console.log(words.join('|'))
}

solve(['_(Underscores) are also word characters']);