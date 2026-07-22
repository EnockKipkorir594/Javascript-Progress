function calculator(num1: number, operator: string, num2: number){
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            if (num2 === 0)throw new Error('Not divisible by zero');
            return num1 / num2;

        default: throw new Error(`Unknown operation ${operator}`);

    };
};


async function main(){

    const args = process.argv.slice(2);
    const num1 = Number(args[0]);
    const operator = args[1];
    const num2 = Number(args[2]);

    //valid input 
    if (args.length !== 3){
        console.error('usage: npx tsx calculator.ts <num1> <operator> <num2>');
        process.exit(1);
    };

    if (isNaN(num1) || !operator || isNaN(num2)){
        console.error('Inputs must be valid');
        process.exit(1);

    };

    const result = calculator(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);


}

main();