/**
 * Created by Hris on 16.10.2016 г..
 */
function main(input) {
    let key = input[0];
    input.shift();
    let messagePattern = new RegExp('\\s*' + key + '\\s* ([A-Z\\#\\$\\%\\!]{8,}[ \\s+ \\,\\.])', 'g');

    let text = [];
    for(let i=0;i<input.length;i++){
        text[i] = input[i];
    }

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].replace(new RegExp(key, 'gi'), key)
    }

    for (let i=0;i<input.length;i++) {
        let line= input[i];
        let match = messagePattern.exec(line);

        while (match != null) {
            let encoded = match[1].trim();
            let decoded = encoded.replace(/\!/g, '1');
            decoded = decoded.replace(/\%/g, '2');
            decoded = decoded.replace(/\#/g, '3');
            decoded = decoded.replace(/\$/g, '4');

            let expr = new RegExp(encoded, 'g');
            text[i] = text[i].replace(encoded, decoded.toLowerCase());
            match = messagePattern.exec(line);
        }
    }

    console.log(text.join('\n'));
}

main(["specialKey",
 "In this text the specialKey HELLOWORLD! is correct, but In this text the specialKey HELLOWORLD! is correct, but",
 "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
 "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"
 ]);

main(["enCode",
    "Some messages are just not encoded what can you do?",
    "RE - .ENCODE THEMNOW! - he said.",
    "Damn encode, ITSALLHETHINKSABOUT, eNcoDe    BULL$#!%."
]);