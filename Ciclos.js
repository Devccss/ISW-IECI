
//Imprimir 1 al 10
for (let i = 1; i < 11; i++) {
    console.log(i);
}
console.log();

//Imprimir 10 al 1
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log();
//Imprimir 1 al 10 solo pares
for (let i = 1; i < 11; i++) {
    if(i%2 == 0){
        console.log(i);
    }
}
console.log();

//Imprimir 1 al 10 solo impares
for (let i = 1; i < 11; i++) {
    if(i%2 != 0){
        console.log(i);
    }
}
console.log();

//Imprimir 1 al 10 solo multiplos de 3
for (let i = 1; i < 11; i++) {
    if(i%3 == 0){
        console.log(i);
    }
}
console.log();

//Imprimir 1 al 10 solo multiplos de 5
for (let i = 1; i < 11; i++) {
    if(i%5 == 0){
        console.log(i);
    }
}
console.log();

//Imprimir 1 al 10 solo multiplos de 3 y 5
for (let i = 1; i < 11; i++) {
    if(i%3 == 0 && i%5 == 0  ){
        console.log(i);
    }
}
console.log();

//Imprimir 1 al 10 solo multiplos de 3 o 5
for (let i = 1; i < 11; i++) {
    if(i%3 == 0 || i%5 == 0  ){
        console.log(i);
    }
}
console.log();