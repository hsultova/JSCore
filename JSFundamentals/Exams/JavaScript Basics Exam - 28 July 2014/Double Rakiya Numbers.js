/**
 * Created by Hris on 17.10.2016 г..
 */
function main([start,end]) {
    [start, end] = [start, end].map(Number);

    let html = '<ul>\n';

    for (let n = start; n <= end; n++) {
        if (isDoubleRakiyaNumber(n)) {
            html += "<li><span class='rakiya'>" + n + "</span><a href=\"view.php?id=" + n + ">View</a></li>\n";
        }
        else {
            html += "<li><span class='num'>" + n + "</span></li>\n";
        }
    }

    html += '</ul>';
    console.log(html);

    function isDoubleRakiyaNumber(number) {
        let sequence = '';
        number = number + '';
        for (let i = 0; i < number.length - 1; i++) {
            sequence = number[i] + number[i + 1];
            for (let j = i + 2; j < number.length - 1; j++) {
                let nextSequence = number[j] + number[j + 1];
                if (Number(sequence) == Number(nextSequence)) {
                    return true;
                }
            }
        }
        return false;
    }
}

main(['11210', '11215']);
main(['55555', '55560']);