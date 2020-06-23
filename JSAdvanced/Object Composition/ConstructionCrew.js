/**
 * Created by Hris on 25.10.2016 г..
 */
function main(obj) {
    if (obj["handsShaking"] == true) {
        obj["bloodAlcoholLevel"] += 0.1 * obj["weight"] * obj["experience"];
        obj["handsShaking"] = false;
    }

    return obj;
}

console.log(main({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));