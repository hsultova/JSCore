/**
 * Created by Hris on 16.10.2016 г..
 */
function main(input) {
    let data = {};

    for (let line of input) {

        let personToRegister, firstPerson, secondPerson;
        let tokens = line.split('-');
        if (tokens.length == 1) {
            personToRegister = tokens[0];
            if (!data[personToRegister]) {
                data[personToRegister] = [];
            }
        }
        else {
            firstPerson = tokens[0];
            secondPerson = tokens[1];
            if (data[secondPerson]) {
                data[secondPerson].push(firstPerson);
            }
        }
    }

    let keys = Object.keys(data);
    keys.sort(function (a, b) {
        let first = data[a].length;
        let second = data[b].length;
        let result = second - first;
        return result;
    });

    function getFirst(obj) {
        for (var a in obj)
            return a;
    }

    let first = getFirst(data);
    console.log(first);
    for (let i = 1; i <= data[first].length; i++) {
        console.log(i + '. ' + data[first][i - 1]);
    }
}
main(['A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'
]);

main(['J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
]);