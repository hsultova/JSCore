/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let regex = /_([a-zA-z]+)/g;
    let text = input[0];
    let match = regex.exec(text);
    let result = [];
    while (match) {
        result.push(match[1]);
        match = regex.exec(text);
    }

    console.log(result.join(','));
}

main(['The _id and _age variables are both integers.']);