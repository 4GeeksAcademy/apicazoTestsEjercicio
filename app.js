console.log("Hello World");
 const sum = (a,b) => {
    return a + b
 }

let result = sum(7,3)
console.log(result)


const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 0.0065 ;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 204.05;
    return valueInPound;
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

