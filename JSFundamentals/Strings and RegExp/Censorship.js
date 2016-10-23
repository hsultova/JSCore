/**
 * Created by Hris on 4.10.2016 г..
 */
function censor(input) {
    let text = input[0];
    let words = input.slice(1);
    for (let current of words) {
        let replaced = '-'.repeat(current.length);
        while (text.indexOf(current) > -1) {
            text = text.replace(current, replaced);
        }
    }
    return text;
}
console.log(censor(['I like C#, HTML, JS and PHP', 'C#', 'HTML', 'PHP']))
