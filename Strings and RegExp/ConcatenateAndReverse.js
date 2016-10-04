/**
 * Created by Hris on 4.10.2016 г..
 */
function concatenateAndReverse(arr) {
    let allStrings = arr.join('');
    let chars = Array.from(allStrings);
    let revChars = chars.reverse();
    let revStr = revChars.join('');
    return revStr;
}
console.log(concatenateAndReverse(['I', 'am', 'student']));
