//! TAREA
// 1- Hacer una estructura if/else que nos diga si hace frio o calor

let temperatura = 10;

if (temperatura > 15) {
  console.log("Esta haciendo calor");
} else {
  console.log("Esta haciendo frio");
}

// Hacer una mas simple que solo sea frio o calor (ternario)

let temp = 30;

console.log(temp > 15 ? "Hace calor" : "Hace frio");

// Hacer un if/else que nos devuelva que animal es de acuerdo a que ruido hace

let animal = "miau";

if (animal === "Guau") {
  console.log("Es un perro");
} else if (animal === "miau") {
  console.log("Es un gato");
} else if (animal === "GRRR") {
  console.log("Es un oso polar");
} else {
  console.log("no se que es eso");
}
