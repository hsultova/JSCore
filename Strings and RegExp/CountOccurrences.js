/**
 * Created by Hris on 4.10.2016 г..
 */
function countStringInText([str, text]) {
    let count = 0;
    let index = text.indexOf(str);
    while (index > -1) {
        count++;
        index = text.indexOf(str, index + 1);
    }
    return count;
}
console.log(countStringInText(['am', 'I am cool. Bam']));