/**
 * Created by Hris on 5.10.2016 г..
 */
function performMultiplications([text]) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g, (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}
performMultiplications(['My bill: 2*2.50 (beer)']);
