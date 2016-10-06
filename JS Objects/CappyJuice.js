/**
 * Created by Hris on 6.10.2016 г..
 */
function main(data) {
    let juices = {};
    let bottles = {};

    for (let item of data) {
        let tokens = item.split(/\s*\=>\s*/);
        let name = tokens[0];
        let quantity = Number(tokens[1]);

        if (juices[name] == undefined) {
            juices[name] = quantity;
        }
        else {
            juices[name] += quantity;
        }
        if (juices[name] >= 1000) {
            bottles[name] = Math.floor(juices[name] / 1000);
        }
    }

    for (let name in bottles) {
        console.log(name + ' => ' + bottles[name]);
    }
}

main(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456 ',
    'Kiwi => 4567       ',
    'Pear => 5678       ',
    'Watermelon => 6789 ']);