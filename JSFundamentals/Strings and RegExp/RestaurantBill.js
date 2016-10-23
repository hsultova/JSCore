/**
 * Created by Hris on 4.10.2016 г..
 */
function printBill(input) {
    let items = input.filter((x,i) => i%2==0);
    let sum = input.filter((x,i) => i%2==1)    .map(Number)    .reduce((a,b) => a + b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}
printBill(['Cola','1.35', 'Pancakes', '2.88']);
