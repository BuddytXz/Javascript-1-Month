//* comparaciones
//* = asignacion
//* == comparacion
//* === comparacion estricta

let num = 15;
let numStr = "15";
let num2 = 16;

//* Triple = es estricto
// Si pongo === es estrictamente igual: tipo y valor
if (num === numStr) {
  console.log(
    `num es igual a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
  // si pongo !== es estrictamente distinto
} else if (num !== numStr) {
  console.log(
    `num es distinto a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
} else {
  console.log("no se");
}

//* Doble solo compara los valores, pero no los tipos
if (num == numStr) {
  console.log(
    `num es igual a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
} else {
  console.log(
    `num es distinto a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
}
