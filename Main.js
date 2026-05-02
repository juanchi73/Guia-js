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
} else if (vidaJugador === 0) {
  estadoJugador = "Game Over";
} else if (vidaJugador < 0) {
  estadoJugador = "Valor de vida no válido";
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

//Ejercicio 11
//Agregar y quitar elementos de la mochila
let mochila = [];

mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");
mochila.pop();

console.log("Mochila final:", mochila);

//Ejercicio 12
//Verifico si el jugador tiene una llave en el inventario
const inventarioJugador = ["espada", "pocion", "llave", "escudo"];

if (inventarioJugador.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}

//Ejercicio 13
//Creo una funcion para saludar a un usuario
function saludarUsuario(nombre) {
  console.log("Bienvenido/a, " + nombre);
}

saludarUsuario("Milo");

//Ejercicio 14
//Calculo la vida restante luego de recibir daño
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

//Ejercicio 15
//Creo una arrow function para sumar dos numeros
const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(10, 5));

//Ejercicio 16
//Creo un objeto jugador con varias propiedades
const jugador = {
  nombre: "Luna",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["espada", "poción"]
};

console.log("Nombre del jugador:", jugador.nombre);
console.log("Vida del jugador:", jugador.vida);
console.log("Energia del jugador:", jugador.energia);
console.log("Nivel del jugador:", jugador.nivel);
console.log("Inventario del jugador:", jugador.inventario);

//Ejercicio 17
//Modifico las propiedades del jugador
const jugadorDos = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};

jugadorDos.nivel += 1;
jugadorDos.monedas += 50;

console.log("Jugador actualizado:", jugadorDos);

//Ejercicio 18
//Creo un array de personajes y muestro sus datos
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

for (let i = 0; i < personajes.length; i++) {
  console.log(personajes[i].nombre + " es " + personajes[i].tipo + " y está en nivel " + personajes[i].nivel);
}

//Ejercicio 19
//Filtro los personajes con nivel mayor o igual a 3
const personajesFuertes = personajes.filter((personaje) => {
  return personaje.nivel >= 3;
});

console.log(personajesFuertes);

//Ejercicio 20
//Obtengo un nuevo array que contenga solo los nombres
const nombres = personajes.map((personaje) => {
  return personaje.nombre;
});

console.log(nombres);

//Ejercicio 21
//Busco el personaje llamado Kai dentro del array personajes
const personajeEncontrado = personajes.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);

//Ejercicio 22
//Calculo la vida total de todos los personajes
const vidaTotal = personajes.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);

//Ejercicio 23
//Muestro un mensaje en pantalla y cambiamos tambien el color del texto
mensaje.textContent = "Bienvenido a la guía de JavaScript";
mensaje.style.color = "blue";

//Ejercicio 24
//Cada vez que hacemos click en el boton sumamos puntos y los mostramos en pantalla
let puntos = 0;

boton.addEventListener("click", function () {
  puntos += 10;
  mensaje.textContent = "Puntaje: " + puntos;
});
