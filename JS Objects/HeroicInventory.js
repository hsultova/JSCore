/**
 * Created by Hris on 6.10.2016 г..
 */
function main(heroes) {
    let data = [];
    for (let hero of heroes) {
        let tokens = hero.split(/\s*\/\s*/);
        let name = tokens[0];
        let level = tokens[1];
        let items = [];
        if (tokens.length > 2) {
            items = tokens[2].split(/\s*\,\s*/);
        }

        let heroObj = {
            "name": name,
            "level": Number(level),
            "items": items
        };

        data.push(heroObj);
    }

    console.log(JSON.stringify(data));
}

main(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);