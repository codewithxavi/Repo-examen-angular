// Console log
console.log("Florentino Perez");

let person = prompt("Please enter your name", "Roberto Carlos");

if (person != null) {
    document.getElementById("menu").innerHTML +=
        "Bienvenido:  " + person;
}


// Numero par
let numero = 15;

function determinarPar(numero) {
    if (numero % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

determinarPar(numero);

// Cuenta hacia delante
let entero = prompt("Introduce un numero entero positivo");

if (entero > 20) {
    console.log("Es superior a 20");
}

for (let i = entero; i <= 20; i++) {

    console.log(i) + "<br />";
}

// Palindromo
let palindromo = "aibofobia", letra, frase = "", fraseRevertida, inverso = "";

for (let i = palindromo.length - 1; i >= 0; i--) {
    inverso += palindromo.charAt(i);
}

if (palindromo === inverso) {
    console.log(`La palabra ${palindromo} es un palindro`);
}
else {
    console.log(`La palabra ${palindromo} NO es un palindro`);
}



// Array
colores = ["Azul", "Verde", "Amarillo"];
coloresVacio = [];

for (const color of colores) {
    coloresVacio.push(color);
}

console.log(coloresVacio);




