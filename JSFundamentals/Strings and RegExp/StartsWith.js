/**
 * Created by Hris on 5.10.2016 г..
 */
function main([text, word]) {
    if (text.substring(0, word.length) === word) {
        return true;
    }
    return false;
}

console.log(main(['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta']));