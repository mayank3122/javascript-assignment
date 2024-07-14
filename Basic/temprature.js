// Write a JavaScript program to convert temperatures to and from celsius, 
// fahrenheit.  [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = 
// temperature in fahrenheit ]

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let celsiusTemp = 60;
console.log(`${celsiusTemp}°C is ${celsiusToFahrenheit(celsiusTemp)}°F`);


let fahrenheitTemp = 45;
console.log(`${fahrenheitTemp}°F is ${fahrenheitToCelsius(fahrenheitTemp)}°C`);