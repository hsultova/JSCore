/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let words = input[0].toLowerCase().split(' ');
    let capitalized = [];
    for(let word of words)
    {
        capitalized.push(capitalizeFirstLetter(word));
    }
    console.log(capitalized.join(' '));

    function capitalizeFirstLetter(string) {
        let result = string[0].toUpperCase() + string.slice(1);
        return result;
    }
}

main(['Was that Easy? tRY thIs onE for SiZe!']);