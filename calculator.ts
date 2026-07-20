function calculator(num1: number,operator: string, num2: number ){
     switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            if (num2 === 0) throw new Error("Cannot divide by zero");
            return num1 / num2;
    
        default: throw new Error(`Unknown operator ${operator}`);
            
    }
    
};

console.log(calculator(10, '|', 5));
console.log(calculator(17, '-', 5));
console.log(calculator(11, '*', 7));
console.log(calculator(100, '/', 0));
