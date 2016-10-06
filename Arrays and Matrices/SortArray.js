/**
 * Created by Hris on 6.10.2016 г..
 */
function main(input) {

    input.sort(function (a, b) {
        return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase());
    });

    console.log(input.join('\n'));
}

main(['alpha', 'beta', 'gamma']);
