/**
 * Created by Hris on 4.10.2016 г..
 */
function printStringLetters(str) {
    if (Array.isArray(str)) {
        str = str[0];
    }
    for (let i in str) {
        console.log(`str[${i}] -> ${str[i]}`);
    }
}
printStringLetters('Hello');
