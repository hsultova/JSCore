/**
 * Created by Hris on 23.10.2016 г..
 */

function calc() {
    return function(){
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let sum = Number(num1) + Number(num2);
        document.getElementById('sum').value = sum;
    }
}