// EJERCICIO 1: Un estudiante realiza 4 exámenes, calcular el promedio de estos.

// function calcularPromedioExamenesPrompt() {
//   const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
//   const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
//   const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
//   const nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));

//   const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
//   alert(`El promedio de las 4 notas es: ${promedio}`);
//   console.log("Promedio:", promedio);
// }
// calcularPromedioExamenesPrompt();

// EJERCICIO 2: Calcular el área de un rectángulo. 

// function areaRectanguloPrompt() {
//   const base = parseFloat(prompt("Ingrese la base del rectángulo:"));
//   const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

//   const area = base * altura;
//   alert(`El área del rectángulo es: ${area}`);
//   console.log("Área del rectángulo:", area);
// }
// areaRectanguloPrompt();

// EJERCICIO 3: Calcular el área de un triángulo.  

// function areaTrianguloPrompt() {
//   const base = parseFloat(prompt("Ingrese la base del triángulo:"));
//   const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

//   const area = (base * altura) / 2;
//   alert(`El área del triángulo es: ${area}`);
//   console.log("Área del triángulo:", area);
// }
// areaTrianguloPrompt();


// EJERCICIO 4: Calcular el área de una circunferencia. (π = 3.14)

// function areaCircunferenciaPrompt() {
//   const radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));
//   const PI = 3.14;

//   const area = PI * Math.pow(radio, 2);
//   console.log("Área de la circunferencia:", area);
// }
// areaCircunferenciaPrompt();

// EJERCICIO 5: Haya el promedio de todos los elementos del arreglo.

// function promedioArregloPrompt() {
//   const entrada = prompt("Ingrese 4 números separados por comas:");
  
//   if (!entrada) return;
//   const arreglo = entrada.split(",").map(num => parseFloat(num.trim()));

//   const suma = arreglo.reduce((acc, num) => acc + num, 0);
//   const promedio = suma / arreglo.length;

//   alert(`El promedio de los elementos es: ${promedio}`);
//   console.log("Promedio:", promedio);
// }
// promedioArregloPrompt();

// EJERCICIO 6: De un arreglo de números, retornar la suma de todos los números pares.  Ejm:  

// function sumarParesPrompt() {
//   const entrada = prompt("Ingrese 8 números separados por comas:");
  
//   if (!entrada) return;
//   const arreglo = entrada.split(",").map(num => parseFloat(num.trim()));
//   const pares = arreglo.filter(num => num % 2 === 0);
//   const sumaPares = pares.reduce((acc, num) => acc + num, 0);

//   alert(`Los números pares son: [${pares.join(", ")}]\nLa suma de los números pares es: ${sumaPares}`);
//   console.log("Suma de pares:", sumaPares);
// }
// sumarParesPrompt();

// EJERCICIO 7: Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre del autor de los libros que tengan el estado de lectura “true”. 

// const library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     Status: true
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     Status: true
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     Status: false
//   }
// ];

// library.forEach(book => {
//   if (book.Status) {
//     console.log(`Título: "${book.title}", Autor: ${book.author}`);
//   }
// });

// EJERCICIO 8: 

// function verificarLongitudArreglosPrompt() {
//   const entrada1 = prompt("Ingrese los números del primer arreglo separados por comas:");
//   const entrada2 = prompt("Ingrese los números del segundo arreglo separados por comas:");

//   if (!entrada1 || !entrada2) return;

//   const arr1 = entrada1.split(",").map(num => parseFloat(num.trim()));
//   const arr2 = entrada2.split(",").map(num => parseFloat(num.trim()));

//   const arregloNuevo = arr1.concat(arr2);
//   const esMayorOIgualA10 = arregloNuevo.length >= 10;

//   alert(
//     `ArregloNuevo: [${arregloNuevo.join(", ")}]\n` +
//     `Longitud total: ${arregloNuevo.length}\n` +
//     `¿Es mayor o igual a 10?: ${esMayorOIgualA10}`
//   );

//   console.log("ArregloNuevo:", arregloNuevo);
//   console.log("Resultado:", esMayorOIgualA10);
// }
// verificarLongitudArreglosPrompt();

// EJERCICIO 9: Crear un programa que tome dos arreglos de números enteros y retornar un  único arreglo, cada elemento del arreglo debe estar multiplicado por dos. 

// function unirYMultiplicarPorDosPrompt() {
//   const entrada1 = prompt("Ingrese los enteros del primer arreglo separados por comas:");
//   const entrada2 = prompt("Ingrese los enteros del segundo arreglo separados por comas:");

//   if (!entrada1 || !entrada2) return;

//   const arr1 = entrada1.split(",").map(num => parseInt(num.trim(), 10));
//   const arr2 = entrada2.split(",").map(num => parseInt(num.trim(), 10));


//   const arregloNuevo = arr1.concat(arr2).map(num => num * 2);

//   alert(`ArregloNuevo: [${arregloNuevo.join(", ")}]`);
//   console.log("ArregloNuevo:", arregloNuevo);
// }
// unirYMultiplicarPorDosPrompt();

// EJERCICIO 10:  

// function evaluarCalificacionPrompt() {
//   const entrada = prompt("Ingrese una calificación (entre 1 y 10):");
//   const nota = parseFloat(entrada);

//   if (isNaN(nota) || nota < 1 || nota > 10) {
//     alert("Error: La calificación debe ser un número entre 1 y 10.");
//     console.log("Error: La calificación debe estar entre 1 y 10.");
//     return;
//   }

//   let mensaje = "";

//   if (nota < 6) {
//     mensaje = "reprobado";
//   } else if (nota <= 8) {
//     mensaje = "regular";
//   } else if (nota === 9) {
//     mensaje = "bien";
//   } else if (nota === 10) {
//     mensaje = "excelente";
//   }

//   alert(`Resultado: ${mensaje}`);
//   console.log(mensaje);
// }

// evaluarCalificacionPrompt();

// EJERCICIO 11:Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”  solo al mostrar los números indicados por el usuario. 

// function loteriaPrompt() {
//   const num1 = parseInt(prompt("Ingrese el primer número (entre 1 y 50):"), 10);
//   const num2 = parseInt(prompt("Ingrese el segundo número (entre 1 y 50):"), 10);

//   if (isNaN(num1) || isNaN(num2) || num1 < 1 || num1 > 50 || num2 < 1 || num2 > 50) {
//     alert("Por favor, ingrese números válidos dentro del rango de 1 a 50.");
//     return;
//   }

//   for (let i = 1; i <= 50; i++) {
//     if (i === num1 || i === num2) {
//       console.log("¡Lotería!");
//     } else {
//       console.log(i);
//     }
//   }
// }
// loteriaPrompt();

// EJERCICIO 12: Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para  múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco  imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz". 
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();

// EJERCICIO 13: Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. 
// Para los que tengan más de 5, el bono será de $1000. Realice un programa que permita determinar el bono que recibirá un trabajador. 

// function calcularBonoPrompt() {
//   const entrada = prompt("Ingrese los años de antigüedad del empleado:");
//   const anios = parseInt(entrada, 10);

//   if (isNaN(anios) || anios < 0) {
//     alert("Por favor, ingrese un número de años válido.");
//     return;
//   }

//   let bono = 0;

//   if (anios >= 1 && anios <= 5) {
//     bono = anios * 100;
//   } else if (anios > 5) {
//     bono = 1000;
//   } else {
//     bono = 0; 
//   }

//   alert(`El empleado con ${anios} año(s) de antigüedad recibirá un bono de: $${bono}`);
//   console.log(`Bono por ${anios} años: $${bono}`);
// }

// calcularBonoPrompt();

// EJERCICIO 14: Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido 
// en cada uno de los 6 años? Realice el programa utilizando el ciclo apropiado.  

// function calcularSalarioDocente() {
//   let salario = 1500;
//   const porcentajeIncremento = 0.10;

//   for (let anio = 1; anio <= 6; anio++) {
//     salario += salario * porcentajeIncremento;
//     console.log(`Año ${anio}: $${salario.toFixed(2)}`);
//   }
//   console.log(`Salario al cabo de 6 años: $${salario.toFixed(2)}`);
// }

// calcularSalarioDocente();

// EJERCICIO 15: En una lista de palabras, el bibliotecario necesita saber cuál es la palabra más larga en el archivo. Ayúdale a encontrarla. 

// let palabras = ["manzana", "banana", "cereza", "uva", "fresa"];
// function palabraMasLarga(lista) {
//   return lista.reduce((masLarga, actual) => 
//     actual.length > masLarga.length ? actual : masLarga
//   , "");
// }
// console.log("La palabra más larga es:", palabraMasLarga(palabras));

// EJERCICIO 16: Un coleccionista tiene una caja con varias cartas. Algunas cartas están numeradas del 1 al 10, pero hay algunas cartas repetidas. ¿Cuántas cartas únicas 
// tiene en total?

// let cartas = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1, 9, 10, 10];

// function contarCartasUnicas(arregloCartas) {
//   const cartasUnicas = new Set(arregloCartas);
//   return cartasUnicas.size;
// }

// console.log("Total de cartas únicas:", contarCartasUnicas(cartas));

// EJERCICIO 17:
// function precioHeladoPrompt() {
//   const topping = prompt("¿Qué topping deseas? (oreo, kitkat, brownie o deja en blanco para helado solo):");
  
//   const precioBase = 50;
//   let costoTopping = 0;
//   let mensajeTopping = "";

//   const opcion = topping ? topping.trim().toLowerCase() : "";

//   switch (opcion) {
//     case "oreo":
//       costoTopping = 10;
//       mensajeTopping = "Topping de Oreo: 10 MXN";
//       break;
//     case "kitkat":
//       costoTopping = 15;
//       mensajeTopping = "Topping de KitKat: 15 MXN";
//       break;
//     case "brownie":
//       costoTopping = 20;
//       mensajeTopping = "Topping de Brownie: 20 MXN";
//       break;
//     case "":
//       mensajeTopping = "Sin topping";
//       break;
//     default:
//       alert("No tenemos este topping, lo sentimos.");
//       console.log("No tenemos este topping, lo sentimos.");
//       mensajeTopping = "Sin topping (topping no disponible)";
//       break;
//   }

//   const total = precioBase + costoTopping;

//   alert(`Precio base del helado: $${precioBase} MXN\n${mensajeTopping}\nTotal a pagar: $${total} MXN`);
//   console.log(`El precio del helado es: ${total} MXN`);
// }

// precioHeladoPrompt();

// EJERCICIO 18:
// function cotizarEducacionPrompt() {
//   const nivel = prompt("Ingrese el nivel educativo (Course, Carrera, Master):");
  
//   if (!nivel) return;

//   let costoMensualBase = 0;
//   let duracionMeses = 0;

//   switch (nivel.trim().toLowerCase()) {
//     case 'course':
//       costoMensualBase = 4999;
//       duracionMeses = 2;
//       break;
//     case 'carrera':
//       costoMensualBase = 3999;
//       duracionMeses = 6;
//       break;
//     case 'master':
//       costoMensualBase = 2999;
//       duracionMeses = 12;
//       break;
//     default:
//       alert("Nivel educativo no válido.");
//       return;
//   }

//   const beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua o deje en blanco si no tiene):");

//   let porcentajeDescuento = 0;
//   let nombreBeca = "Sin beca";

//   if (beca) {
//     switch (beca.trim().toLowerCase()) {
//       case 'facebook':
//         porcentajeDescuento = 20; 
//         nombreBeca = "Beca Facebook";
//         break;
//       case 'google':
//         porcentajeDescuento = 15; 
//         nombreBeca = "Beca Google";
//         break;
//       case 'jesua':
//         porcentajeDescuento = 50; 
//         nombreBeca = "Beca Jesua";
//         break;
//       default:
//         alert("Beca no reconocida. Se procederá sin descuento.");
//         break;
//     }
//   }

//   const montoDescuento = (costoMensualBase * porcentajeDescuento) / 100;
//   const costoMensualFinal = costoMensualBase - montoDescuento;
//   const gastoTotal = costoMensualFinal * duracionMeses;

//   const resultado = 
//     `--- RESUMEN DE COTIZACIÓN ---\n` +
//     `Nivel seleccionado: ${nivel}\n` +
//     `Precio mensual base: $${costoMensualBase} MXN\n` +
//     `Beca: ${nombreBeca} (${porcentajeDescuento}% de descuento)\n` +
//     `Descuento aplicado: -$${montoDescuento.toFixed(2)} MXN\n` +
//     `Precio mensual a pagar: $${costoMensualFinal.toFixed(2)} MXN\n` +
//     `Duración del programa: ${duracionMeses} meses\n` +
//     `Gasto total final: $${gastoTotal.toFixed(2)} MXN`;

//   alert(resultado);
//   console.log(resultado);
// }

// cotizarEducacionPrompt();

// EJERCICIO 19:
// function capturarNumerosPrompt() {
//   let arregloNumeros = [];
//   let entrada;

//   do {
//     entrada = prompt("Ingrese un número (ingrese 0 para terminar):");
    
   
//     if (entrada === null) break;

//     let numero = Number(entrada);

   
//     if (!isNaN(numero) && entrada.trim() !== "") {
//       if (numero === 0) break; 
//       arregloNumeros.push(numero); 
//     } else {
//       alert("Por favor, ingrese un número válido.");
//     }
//   } while (true);

//   alert(`Números capturados: [${arregloNumeros.join(", ")}]`);
//   console.log("Números capturados:", arregloNumeros);
// }

// capturarNumerosPrompt();

// EJERCICIO 20:
function calcularTotalViajePrompt() {
  const vehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");
  if (!vehiculo) return;

  const kmsEntrada = prompt("Ingrese los kilómetros recorridos:");
  const kmsRecorridos = parseFloat(kmsEntrada);

  const litrosEntrada = prompt("Ingrese los litros consumidos:");
  const litrosConsumidos = parseFloat(litrosEntrada);

  if (isNaN(kmsRecorridos) || isNaN(litrosConsumidos)) {
    alert("Por favor, ingrese valores numéricos válidos para kilómetros y litros.");
    return;
  }

  let precioKilometro = 0;

  switch (vehiculo.trim().toLowerCase()) {
    case 'coche':
      precioKilometro = 0.20; 
      break;
    case 'moto':
      precioKilometro = 0.10; 
      break;
    case 'autobús':
    case 'autobus':
      precioKilometro = 0.50; 
      break;
    default:
      alert("Tipo de vehículo no válido.");
      return;
  }

  
  let extraLitros = (litrosConsumidos >= 0 && litrosConsumidos <= 100) ? 5 : 10;
  
  
  let totalAPagar = (precioKilometro * kmsRecorridos) + extraLitros;

  const resultado = 
    `--- DETALLE DEL VIAJE ---\n` +
    `Vehículo: ${vehiculo}\n` +
    `Precio por km: $${precioKilometro}\n` +
    `Kilómetros recorridos: ${kmsRecorridos} km\n` +
    `Litros consumidos: ${litrosConsumidos} L (Extra: $${extraLitros})\n` +
    `Total a pagar: $${totalAPagar.toFixed(2)}`;

  alert(resultado);
  console.log("Total a pagar:", totalAPagar);
}

calcularTotalViajePrompt();

