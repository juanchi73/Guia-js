# Respuestas teóricas

## 27. Diferencia entre let, const y var

`let` permite declarar variables que después pueden cambiar de valor. También respeta el alcance de bloque, por ejemplo dentro de un `if` o un `for`.

`const` se usa para valores que no deberían reasignarse. También tiene alcance de bloque. En objetos y arrays, lo que no cambia es la referencia, aunque su contenido sí puede modificarse.

Actualmente se recomienda evitar `var` porque no respeta el alcance de bloque como `let` y `const`, sino el de función. Además permite redeclaraciones y eso puede generar errores más difíciles de detectar.

¿Cuándo usarías `let`?
Cuando una variable necesita cambiar durante el programa, por ejemplo una vida, un puntaje o un contador.

¿Cuándo usarías `const`?
Cuando el valor no debe reasignarse, por ejemplo el nombre del juego, una configuración fija o una referencia a un array u objeto.

¿Por qué actualmente se recomienda evitar `var`?
Porque puede provocar comportamientos confusos por su scope de función, su hoisting y la posibilidad de redeclarar variables.

## 28. ¿Qué es el scope?

El scope o alcance indica en qué parte del programa una variable existe y puede usarse.

En este código:

```js
let nombre = "Global";

function mostrarNombre() {
  let nombre = "Local";
  console.log(nombre);
}

mostrarNombre();
console.log(nombre);
```

¿Qué se muestra primero?
Primero se muestra `"Local"`.

¿Qué se muestra después?
Después se muestra `"Global"`.

¿Por qué?
Porque la variable `nombre` declarada dentro de la función solo existe dentro de esa función. Esa variable local no reemplaza a la variable global; simplemente la oculta dentro de ese bloque.

## 29. Diferencia entre array y objeto

Conviene usar un array cuando queremos guardar una lista de elementos ordenados, especialmente si vamos a recorrerlos por posición.

Ejemplo:

```js
const inventario = ["espada", "poción", "llave"];
```

Ese array representa una colección de objetos del jugador. Cada elemento ocupa una posición dentro de la lista.

Conviene usar un objeto cuando queremos representar una entidad con propiedades nombradas.

Ejemplo:

```js
const jugador = {
  nombre: "Luna",
  vida: 100,
  nivel: 3
};
```

Ese objeto representa a un jugador y guarda información asociada a ese personaje. En resumen, el array sirve mejor para listas y el objeto para describir algo con atributos.

## 30. Eventos en JavaScript

Un evento en JavaScript es una acción que ocurre en la página, como un clic, escribir en un input o mover el mouse, y que el programa puede detectar para responder.

En este código:

```js
boton.addEventListener("click", function () {
  console.log("El usuario hizo clic");
});
```

¿Qué elemento escucha el evento?
El elemento `boton`.

¿Qué evento se está escuchando?
El evento `"click"`.

¿Qué acción se ejecuta?
Se ejecuta la función que muestra en consola el mensaje `"El usuario hizo clic"`.

¿Dónde podríamos aplicar esto en una página web o videojuego?
Podríamos usarlo en un botón de iniciar partida, comprar un objeto, atacar a un enemigo, abrir un menú o enviar un formulario.
