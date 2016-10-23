/**
 * Created by Hris on 4.10.2016 г..
 */

function validityChecker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

    isValidDistance(x1, y1, 0, 0);
    isValidDistance(x2, y2, 0, 0);
    isValidDistance(x1, y1, x2, y2);

    function isValidDistance(x1, y1, x2, y2) {
        let d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        if (d == Math.round(d)) {
            console.log('{%d, %d} to {%d, %d} is valid', x1, y1, x2, y2);
        }
        else {
            console.log('{%d, %d} to {%d, %d} is invalid', x1, y1, x2, y2);
        }
    }
}

validityChecker(['3', '0', '0', '4']);
validityChecker(['2', '1', '1', '1']);