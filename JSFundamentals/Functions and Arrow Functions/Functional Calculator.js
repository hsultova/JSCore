function solve(input) {
    var a = Number(input[0]);
    var b = Number(input[1]);
    var operator = input[2];
    var result = 0;
    
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
    }
    return result;
}