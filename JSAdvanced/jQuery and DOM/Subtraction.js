/**
 * Created by Hris on 23.10.2016 г..
 */
function subtract() {
    let first = $('#firstNumber').val();
    let second = $('#secondNumber').val();
    $('#result')[0].textContent = Number(first) - Number(second);
}