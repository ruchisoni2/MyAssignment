const calculator = (num1: number, num2: number, operator: string) => {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            console.log("Addition :  " + result);
            break;
        case '-':
            result = num1 - num2;
            console.log("Substraction :  " + result);
            break;
        case '*':
            result = num1 * num2;
            console.log("Multiplication :  " + result);
            break;
        case '/':
            result = num1 / num2;
            console.log("Division :  " + result);
            break;
        default:
            console.log("This is not a Valid Operator");
            break;
    }
}
calculator(20, 2, '/');