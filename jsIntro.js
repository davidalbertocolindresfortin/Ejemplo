// Tipos de datos en JavaScript
// JS tiene un tipado dinámico que significa que existen tipos de datos pero las variables
// no están atados a ellos.

// 1. Number
// Todos los números (enteros/decimales) y valores numéricos especiales: Infinity, -Infinity, NaN
console.log(1 / 0); // Infinity
console.log(-Infinity); // -Infinity
console.log("abc" / 2); // NaN (Not a number) --> propagación a un NaN

// 2. String
// Todos los valores de cadenas de texto o caracter
/* 
  Se pueden escribir de 3 maneras distintas:

  2.1 Single quotes: 'Hola mundo!'
  2.2 Double quotes: "Hola mundo!"
  2.3 Backticks: `Hola mundo!` (Alt + 96) --> JS2015/ES6
*/
console.log("Hola mundo!");
console.log("Hola mundo!");
console.log(`Hola mundo!`);

// 3. Boolean (logical type)
// Solamente tiene dos valores posibles: true o false
console.log(true);
console.log(false);

// 4. Null value
// No pertenece a ningún otro tipo de datos y solamente contiene el valor null
console.log(null);

// 5. Undefined value
// Valor no asignado o no definido. Si una variable es declarada pero no definida (con un valor)
// por defecto su valor es undefined.
console.log(undefined);

// 6. Object
// Los tipos de datos anteriores son conocidos como "primitivos", porque solamente pueden tener un valor (singular).
// A diferencia de ellos, Object se utiliza para colecciones de valores o entidades más complejas.
console.log({}); // object
console.log([]); // array

// 7. Symbol
// Se utiliza para crear identificadores únicos para los Objects

/*
  Declaración de variables
  ECMAScript 6 (JS2015)

  1. Declaración de una variable
  2. Inicialización de una variable
  3. Scope de una variable (alcance)
  4. Hoisting
*/

// 1. Declaración de variable
// Una declaración de una variable crea o introduce un nuevo identificador
var unaVariable;
console.log(unaVariable); // undefined

// 2. El valor por defecto de una variable (undefined) cambia al momento de inicializarla
unaVariable = "un valor"; // String

// 3. Scope (alcance)
// Define dónde las variables son accesibles dentro de un programa. En JS existen 3 tipos de scope:
//  3.1 Scope global
//  3.2 Scope de función
//  3.3 Scope de bloque

function getDate() {
  var date = new Date(); // 3.2 Scope de función

  function formatDate() {
    return date.toDateString().slice(4);
  }

  return formatDate();
}

// console.log(date); // Reference error
console.log(getDate());

// 4. Hoisting
// Es el hecho que en JS "las variables son inicializadas con el valor undefined cuando son creadas"
// A esto se le conoce como "Creation phase".

/*
  En ES6 existen 3 maneras de declarar una variable:
  1. var
  2. let
  3. const

  var vs let
  La principal diferencia entre var y let es que el tipo de scope:
  var: function scope
       retorna undefined si la variable no está inicializada
  let: block scope
       TypeError cuando se accede a una variable sin ser inicializada

  let vs const
  const es similar a let con la única diferencia que una vez asignado el valor a una variable const,
  este valor no puede ser reasignado.
*/
const dragon = "Dracarys";
// dragon = "Drogon"; // TypeError: Assignment to constant variable

// Las variables de tipo Object declaradas con const si pueden ser modificadas
const persona = {
  nombre: "Juan Perez",
};
console.log(persona.nombre);

persona.nombre = "Pedro Perez";
console.log(persona.nombre);

// *** Regla 1: Todas las variables serán constantes a menos que su funcionamiento requiera lo contrario
// *** Regla 2: Las nombres de las variables utilizarán la nomenclatura "camelCase"

// Cadenas de texto
// Podemos utilizar quotes, double quotes y backticks
const libro = "Canción de hielo y fuego";
const volumen = "Uno";

// Convertir a mayúsculas
console.log(libro.toUpperCase());

// Convertir a minúsculas
console.log(libro.toLowerCase());

// Podemos converir un texto a un arreglo
console.log(libro.split(" "));

// Obtener un fragmento del texto
console.log(libro.indexOf("hielo"));
console.log(libro.slice(11, 16));
console.log(libro.slice(libro.indexOf("hielo"), 16));

// Reemplazar una parte del texto
console.log(libro.replace("Canción", "Rola"));

// Verificar si una palabra se encuentra en la cadena
console.log(libro.includes("fuego"));

// Repetir el valor de una variable string
console.log(libro.repeat(3));

// Concatenar
// *** Regla 3: Utilizar template string para concatenación
console.log(`El nombre del libro es: ${libro} Vol. ${volumen}`);

// Arreglos
const premierLeague = [
  "Manchester United",
  "Chelsea",
  "Arsenal",
  "Liverpool",
  "Manchester City",
];

// Mostrar todos los elementos o elementos específicos
console.log(premierLeague);
console.log(premierLeague[1]);

// Mostrar el tamaño del arreglo
console.log(premierLeague.length);

// Modificar un elemento
premierLeague[2] = "Leicester City";
console.log(premierLeague);

// Colocar el arreglo en orden inverso
console.log(premierLeague.reverse());

// Agregar un nuevo elemento
premierLeague.push("Arsenal");
console.log(premierLeague);

// Eliminar el último elemento
premierLeague.pop();
console.log(premierLeague);

// Remover un elemento basado en el índice
premierLeague.slice(2, 1);
console.log(premierLeague);

// Filtrar
// callback => función que se ejecuta cada vez que finaliza un "procedimiento"
const anotherPremierLeague = premierLeague.filter(function (team) {
  return team != "Manchester City";
});
console.log(anotherPremierLeague);

// Números
const numberOne = "15";
const numberTwo = -10;
const numberThree = 21.5;
const numberFour = "123.456";
const numberFive = -30.122;

// Obtener el tipo de datos de una variable
console.log(typeof numberOne);
console.log(typeof numberTwo);
console.log(typeof numberThree);
console.log(typeof numberFour);
console.log(typeof numberFive);

// Conversión de tipo de datos
const numberSix = parseInt(numberOne);
console.log(typeof numberSix);
console.log(Number(numberFour));

// Math
// Reducir el número de decimales a una cantidad fija
console.log(Number(numberFour).toFixed(2));

// Redondeo hacia abajo
console.log(Math.floor(2.9));

// Redondeo hacia arriba
console.log(Math.ceil(Number(numberFour)));

// Raíz cuadrada
console.log(Math.sqrt(2));

// Potencia
console.log(Math.pow(8, 4));

// Fechas
const today = new Date();
console.log(today);

// Mostrar la fecha en distintos formatos/partes de la fecha
// moment.js | datefns
console.log(today.toDateString());
console.log(`El año actual es: ${today.getFullYear()}`);
console.log(`El día actual es: ${today.getDate()}`);
console.log(
  `La hora es: ${today.getHours()} con ${today.getMinutes()} minutos`
);

/*
  Operadores lógicos
  Operadores de comparación
  1. Comparación abstracta (==) convierte los operandos al mismo tipo de datos antes de realizar la comparación
  2. Comparación estricta (===) sólo es verdad si los operandos son del mismo tipo y valor es el mismo
  3. Desiguldad abstracta (!=)
  4. Desigualdad estricta (!==)
  5. Mayor que (>)
  6. Mayor o igual que (>=)
  7. Menor que (<)
  8. Menor o igual que (<=)

  Operadores AND (&&) OR (||) NOT (!)
*/

// Condiciones (Estructuras de control)
// if - elseif - else - ternary operator
const cantidadAPagar = 1000;
const saldo = 500;

if (saldo < cantidadAPagar) {
  console.log("¡No tienes los fondos suficientes para realizar el pago!");
} else {
  console.log("¡Pago realizado!");
}

const unaEdad = 20;
const otraEdad = 21;

if (unaEdad > otraEdad) console.log("unaEdad es mayor que otraEdad");
else if (unaEdad === otraEdad) console.log("Las edades son iguales");
else console.log("unaEdad es menor que otraEdad");

unaEdad >= 21
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");

otraEdad >= 21 && !unaEdad
  ? console.log("Las edades están definidas")
  : console.log("las edades no están definidas");

// truthy y falsy values
premierLeague.length
  ? console.log("Existen equipos registrados")
  : console.log("No existen equipos registrados");

// Switch
const metodoPago = "PayPal";

switch (metodoPago) {
  case "tarjetaCredito":
    console.log("Has seleccionado pago con tarjeta de crédito");
    break;
  case "efectivo":
    console.log("Has seleccionado efectivo como método de pago");
    break;
  case "PayPal":
    console.log("Has seleccionado PayPal para realizar el pago");
    break;
  default:
    console.log("¡Método de pago no válido!");
    break;
}

// Ciclos
// for, do-while, while, foreach
for (let i = 0; i < 10; i++) {
  console.log("Ejemplo de ciclo for");
}

do {
  console.log("Ejemplo ciclo do - while");
} while (metodoPago != "PayPal");

while (metodoPago != "PayPal") {
  console.log("Ejemplo de ciclo while");
}

premierLeague.forEach((team) => {
  console.log(team);
});

/*
  Funciones
  En JS una función es un "subprograma (rutina)" que puede ser llamado por código externo o interno.
  Una función es un Object. A una función se le pueden pasar valores (parámetros) y puede retornar valores.

  Tipos de función (depende de la versión de JS - ES6)
    1. La instrucción function
    2. El operador function (expresión)
    3. El operador flecha (arrow function)
    4. Constructor function
*/

// 1. La instrucción function
function holaMundo() {
  console.log("¡Hola mundo!");
}

holaMundo();
