//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log( "Bienvenida al bootcamp de Femcoders de Facctoria F5")



//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let texto = "hola, todes";
console.log(texto.charAt(0).toUpperCase() + texto.slice(1)); // Salida: Hola, todes

let edad = 33;
let boolean = true;
let nulo = null; 
let undefined; 
let objeto = {  
    nombre: "mariana",
    edad: 33
};

let array = [1, 2, 3, 4, 5, 6];

console.log("edad:", edad);               
console.log("boolean:", boolean);        
console.log("Null:", nulo);              
console.log("undefined:", undefined); 
console.log("object:", objeto);          
console.log("array:", array);          


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí
const postres = ["helado", "tarta", "pastel"];
console.log(postres);



//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    nombre: "mariana",
    edad: 33
  };
  
  console.log(coder);
  



//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí


console.log("Texto:", texto, "| Tipo:", typeof texto);
console.log("Edad:", edad, "| Tipo:", typeof edad);
console.log("Boolean:", boolean, "| Tipo:", typeof boolean);
console.log("Null:", nulo, "| Tipo:", typeof nulo); 
console.log("Undefined:", indefinido, "| Tipo:", typeof indefinido);
console.log("Object:", objeto, "| Tipo:", typeof objeto);
console.log("Array:", array, "| Tipo:", typeof array); 




//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero1 = 5;
let numero2 = 10;
let suma = numero1 + numero2;

console.log("La suma es:", suma);




//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero3 = 10;
let numero4 = 6;
let resta = numero3 - numero4;

console.log("la resta es :" , resta);





//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero5 = 2;
let numero6 = 3;
let multiplicacion = numero5 * numero6;

console.log("la multiplicacion es :" , multiplicacion);



//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero7 = 27;
let numero8 = 3;
let division = numero7 / numero8;

console.log("la division es :" , division);



//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let numero9 = 1;
let numero10 = 2;

let compara = numero9 === numero10; 

console.log("¿Son iguales?", compara);



// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let numero11 = 1;
let numero12 = 2;


let comparacion = numero11 < numero12;

console.log("¿Es la comparación verdadera?", comparacion);




//Ejercicio 12: completa el ejercicio

let num13 = 15;
let num14 = 20;

//Realiza la operación de comparación que consideres para que el resultado en consola sea true

let comparision = num13 < num14;

console.log(comparision);

//Ejercicio 13: completa el ejercicio

let num3 = 1;
let num3AsString = "1";

let result = num3 ===num3AsString;
console.log(result) 


//Ejercicio 14: completa el ejercicio

let result2 = num3 ==num3AsString;
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nombre = "mariana";
let apellido = "marin";

let nombreCompleto = nombre + " " + apellido;

console.log("Nombre completo:", nombreCompleto);





//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1; 
console.log(res)

let res2 = a < 10 && b < 1; 

let res3 = a == 5 || b == 5;
console.log(res3)

let res4 = a == 6 && b == 0;
console.log(res4)

let res5 = a == 0 || b == 3;
console.log(res5)

let res6 = a == 6 && b == 3; 
console.log(res6) 
