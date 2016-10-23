/**
 * Created by Hris on 6.10.2016 г..
 */
function countWords(inputLines) {
    let text = inputLines.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/)
        .filter(w => w != '');
    let wordsCount = {};
    for (let w of words)
        wordsCount[w] ? wordsCount[w]++ : wordsCount[w] = 1;
    return JSON.stringify(wordsCount);
}
console.log(countWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']));
