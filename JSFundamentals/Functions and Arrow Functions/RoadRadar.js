/**
 * Created by Hris on 3.10.2016 г..
 */

function solve([speed, zone]) {
    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }

    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed >= 1 && overSpeed <= 20) {
                return 'speeding';
            }
            else if (overSpeed >= 21 && overSpeed <= 40) {
                return 'excessive speeding';
            }
            else if (overSpeed > 40) {
                return 'reckless driving';
            }
        }
    }
}

solve(['21', 'residential']);
