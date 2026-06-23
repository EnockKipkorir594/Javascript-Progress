function celciusToFahrenheit(celcius){
    return (celcius * 9)  / 5 + 32;
}

function fahrenheitToCelcius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9; 

}
function formatTemperature(value, unit){
        return `${value} ${unit}`;
    
}

const fahrenheit = celciusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'))

