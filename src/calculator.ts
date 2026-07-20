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
import process from "process";

//Read from command line 
const args = process.argv.slice(2);
const num1 = Number(args[0]);
const operator = args[1];
const num2 = Number(args[2]);

//validate input 

if (args.length !== 3){
    console.error("Usage: npx ts-node calculator.ts <num1> <operator> <num2>");
    process.exit(1);
};

if (isNaN(num1) || isNaN(num2)){
    console.error("Error: Both arguments must be valid numbers");
    process.exit(1);
};

const result = calculator(num1, operator, num2);
console.log(`${num1} ${operator} ${num2} = ${result}`);

