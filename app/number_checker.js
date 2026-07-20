//Given a number return a small report describing what kind of number it is.
function isPositive(number){
    return number > 0;
    
}
//isPositive(-2);
function isNegative(number){
    return number < 0;
}

//isNegative(3);

function isZero(number){
    return number === 0;
}

//isZero(0);

function isEven(number){
    return number % 2 === 0;
        
}
//isEven(2);
function isOdd(number){
    return number % 2 !== 0;
}

function describeNumber(number){
    const positive = isPositive(number);
    const negative = isNegative(number);
    const zero = isZero(number);
    const even = isEven(number);
    const odd = isOdd(number);
    const report = {
        Positive : positive, 
        Negative : negative,
        Zero : zero,
        Even : even, 
        Odd : odd,   
    };

    return report 

}
report = describeNumber(5);
console.log(report)


