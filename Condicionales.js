const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

let mayor = numero1;
let menor = numero1;

//Mayor
if(numero2>mayor){
    mayor = numero2;
}
if(numero3>mayor){
    mayor = numero3;
}
console.log(`Mayor de los tres: ${mayor}`);

//Menor
if(numero2<menor){
    menor = numero2;
}
if(numero3<menor){
    menor = numero3;
}
console.log(`Menor de los tres: ${menor}`);

//Par, Impar
//par,impar numero1
if(numero1%2 == 0){
    console.log(` El ${numero1} es par `);
}else{
    console.log(` El ${numero1} es inpar `);
}

//par,impar numero2
if(numero2%2 == 0){
    console.log(` El ${numero2} es par `);
}else{
    console.log(` El ${numero2} es inpar `);
}

//par,impar numero3
if(numero3%2 == 0){
    console.log(` El ${numero3} es par `);
}else{
    console.log(` El ${numero3} es inpar `);
}


///Multiplo de 5
if(numero1%5 == 0){
    console.log(` El ${numero1} es multiplo de 5 `);
}else{
    console.log(` El ${numero1} no es multiplo de 5 `);
}

if(numero2%5 == 0){
    console.log(` El ${numero2} es multiplo de 5 `);
}else{
    console.log(` El ${numero2} no es multiplo de 5`);
}

if(numero3%5 == 0){
    console.log(` El ${numero3} es multiplo de 5 `);
}else{
    console.log(` El ${numero3} no es multiplo de 5 `);
}

