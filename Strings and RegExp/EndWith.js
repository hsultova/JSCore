/**
 * Created by Hris on 5.10.2016 г..
 */
function main([text, word]) {
    let start = text.length - word.length;
    let end = text.length;
    if (text.substring(start, end) === word) {
        return true;
    }
    return false;
}

console.log(main(['The new iPhone has no headphones jack.', 'o headphones jack.']));