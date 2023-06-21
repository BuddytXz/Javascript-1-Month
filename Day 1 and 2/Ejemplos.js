//* Comparador de calorias

const hamburgesa = 1050;
const ensalada = 150;
const papasFritas = 600;
const alfajor = 750;

if (hamburgesa < ensalada) {
  console.log("hamburgesa es mas sana!");
} else if (hamburgesa < papasFritas) {
  console.log("Hamburgesa es mas sana!");
} else if (hamburgesa < alfajor) {
  console.log("hamburgesa es mas sana!");
} else {
  console.log("lo siento, no podes comer nada");
}

if (ensalada < hamburgesa) {
  console.log("ensalada es mas sana!");
} else if (ensalada < papasFritas) {
  console.log("Ensalada es mas sana!");
} else if (ensalada < alfajor) {
  console.log("Ensalada es mas sana!");
} else {
  console.log("lo siento, no podes comer nada");
}
