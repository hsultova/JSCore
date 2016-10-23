/**
 * Created by Hris on 8.10.2016 г..
 */
function main(input) {
    let catalogue = {};
    for (let line of input) {
        let tokens = line.split(/\s*:\s*/).filter(function (e) {
            return e
        });
        let product = tokens[0];
        let price = Number(tokens[1]);

        let firstLetter = product[0];

        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = [];
        }

        catalogue[firstLetter].push('  ' + product + ': ' + price);
    }

    let orderedCatalogue = {};
    Object.keys(catalogue).sort().forEach(function (key) {
        orderedCatalogue[key] = catalogue[key];
    });

    for (let key of Object.keys(orderedCatalogue)) {
        orderedCatalogue[key].sort(function (a, b) {
            return a.localeCompare(b);
        })
    }

    for (let key of Object.keys(orderedCatalogue)) {
        console.log(key);
        orderedCatalogue[key].forEach(function (e) {
            console.log(e);
        });
    }

}

main(['Banana : 2',
    "Rubic's Cube : 5    ",
    'Raspberry P : 4999  ',
    'Rolex : 100000      ',
    'Rollon : 10         ',
    'Rali Car : 2000000  ',
    'Pesho : 0.000001    ',
    'Barrel : 10         ']);