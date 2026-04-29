console.log("Guía JavaScript iniciada");
//Ejercicio 1
const nombre = "Juan";
let edad = 23;
let Vida = 100;
let puntaje = 0;
let esta_activo = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Vida:", Vida);
console.log("Puntaje:", puntaje);
console.log("¿Está activo?", esta_activo);

//Ejercicio 2
//los puntos totales se calculan sumando los puntos base, el bonus y restando la penalización
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
let puntosTotales = puntosBase + bonus - penalizacion;
console.log("Puntos totales:", puntosTotales);

//Ejercicio 3
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  // Convertir valor a número
  // Sumar 10
  // Mostrar el resultado en pantalla
  const numero = parseFloat(valor);
  const resultado = numero + 10;
  mensaje.textContent = "El resultado es: " + resultado;
});

//Ejercicio 4
//Preguntamos la edad del jugador, si el jugador es mayor de 13 se lo deja jugar, si es menor no
const edadJugador = prompt("¿Cuál es tu edad?");
if (edadJugador >= 13) {
  alert("¡Bienvenido al juego!");
} else {
  alert("Lo siento, debes tener al menos 13 años para jugar.");
}

//Ejercicio 5
/*Si la vida es mayor a 70, mostrar: Jugador en buen estado
Si esta entre 30 y 70, mostrar: Jugador herido
Si esta entre 1 y 29, mostrar: Jugador en peligro
Si es 0, mostrar: Game Over*/

let vidaJugador = 85; // Puedes cambiar este valor para probar diferentes casos
let estadoJugador = "";

if (vidaJugador > 70) {
  estadoJugador = "Jugador en buen estado";
} else if (vidaJugador >= 30) {
  estadoJugador = "Jugador herido";
} else if (vidaJugador >= 1) {
  estadoJugador = "Jugador en peligro";
} else if (vidaJugador >= 0) {
  estadoJugador = "Game Over";
}

console.log(estadoJugador);
mensaje.textContent = estadoJugador;

//Ejercicio 6
let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("Iniciando juego...");
    break;
  case "Configuracion":
    console.log("Abriendo configuración...");
    break;
  case "creditos":
    console.log("Mostrando créditos...");
    break;
    case "salir":
    console.log("Saliendo del juego...");
  default:
    console.log("Opción no válida");
}

//Ejercicio 7
//Cuenta regresiva.
for(let i = 3; i > 0; i--) {
  console.log(i);
}
console.log("¡Comienza!");

//Ejercicio 8
//Puntos por ronda y acumular puntos
let puntajeTotal = 0;
for (let ronda = 1; ronda <= 5; ronda++) {
  let puntosRonda = ronda * 10; // Cada ronda suma una cantidad diferente
  puntajeTotal += puntosRonda; // Acumulamos los puntos
}

console.log("Puntaje total después de 5 rondas:", puntajeTotal);    

//Ejercicio 9

const inventario = ["espada", "poción", "escudo", "llave", "armadura"];
console.log("Primer objeto:", inventario[0]);
console.log("Último objeto:", inventario[inventario.length - 1]);
console.log("Cantidad total de objetos:", inventario.length);

//Ejercicio 10
// Mostramos los elementos recorriendo el array con un bucle for
for (let i = 0; i < inventario.length; i++) {
  console.log("Objeto en el inventario:", inventario[i]);
}
