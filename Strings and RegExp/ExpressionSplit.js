/**
 * Created by Hris on 5.10.2016 г..
 */
function expressionSplit(input) {
    let expression = input[0];
    let elements = expression.split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}
expressionSplit(['let sum = 4 * 4,b = "wow";'])
