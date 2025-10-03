//Suma de numeros pares
/*
let sumarPares = () => {
    let num = Number(prompt("Dime un numero 😋"))
    let suma = 0
    if (num < 0) {
        console.log("El numero debe ser positivo")
        return
    }
    if (num % 2 == 0) {
        for (let i = 1; i <= num; i++) {
            console.log(suma);
            suma = suma + num
        }
    } else {
        console.log("El numero debe ser par")
    }
}
sumarPares()
*/
//tabla de multiplicar
//funcion anonima
//muestra por consola la tabla de multiplicar del 1 al numero que le pidas al usuario tope de ese numero
/*
let tablaMultiplicar = function () {
    let num = Number(prompt("Dime un numero😅 "))
    let numTope = Number(prompt("Dime hasta donde quieres multiplicar 🥰"))
    //validacion de datos de entrada    
    if (num < 0 || num > 999) {
        console.log("No seas gracioso")
    } else if (numTope < 0 || numTope > 999) {
        console.log("No seas gracioso")
    }
    let cont = 0
    for (let i = 0; i <= numTope; i++) {
        cont = num * i
        console.log(num + "x" + i + " = " + cont);
    }
}
tablaMultiplicar()
*/