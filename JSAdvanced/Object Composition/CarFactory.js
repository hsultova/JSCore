/**
 * Created by Hris on 25.10.2016 г..
 */
function main(obj) {
    let wheelsize = obj["wheelsize"];
    let volume;
    let power;

    if (obj.power <= 90) {
        volume = 1800;
        power = 90;
    }
    else if (obj.power > 90 && obj.power <= 120) {
        volume = 2400;
        power = 120;
    }
    else if (obj.power >= 200) {
        volume = 3500;
        power = 200;
    }

    if (Number(obj["wheelsize"]) % 2 == 0) {
        wheelsize = Number(obj["wheelsize"]) - 1;
    }
    let car = {
        "model": obj["model"],
        "engine": {
            "power": power,
            "volume": volume
        },
        "carriage": {
            "type": obj["carriage"],
            "color": obj["color"]
        },
        "wheels": new Array(wheelsize, wheelsize, wheelsize, wheelsize)
    };

    return car;
}

console.log(main({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));