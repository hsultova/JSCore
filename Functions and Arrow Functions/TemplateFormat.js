/**
 * Created by Hris on 3.10.2016 г..
 */

function fillTemplate(input) {
    let output = '<?xml version="1.0" encoding="UTF-8"?><quiz>';
    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i+1];

        output+= '<question>' + question + '</question>';
        output+= '<answer>' + answer + '</answer>';
    }
    output += '</quiz>';

    return output;
}

console.log(fillTemplate(['Who was the forty-second president of the U.S.A.?', 'Who was the forty-second president of the U.S.A.?']));