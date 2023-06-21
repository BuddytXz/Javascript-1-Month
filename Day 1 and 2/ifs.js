//* Se puede crear la variable y no darle valor todavia
let a;

//* Va a dar undefined
console.log(typeof a, a);

a= 20

if(a > 20) {
    console.log('Es mayor');
} else if(a < 20) {
    console.log('Es menor');
    
} else {
    console.log('igual');
}