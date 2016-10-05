/**
 * Created by Hris on 5.10.2016 г..
 */
function main([text, delimiter]) {
    let words = text.split(delimiter);
    console.log(words.join('\n'));
}

main(['One-Two-Three-Four-Five ', '-']);