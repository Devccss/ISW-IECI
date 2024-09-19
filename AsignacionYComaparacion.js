const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

if(numero1>=numero2){
    console.log(`1. ${numero1} es mayor o igual que ${numero2} `);
}else{
    console.log(`1.`);
}

if(numero1<=numero2){
    console.log(`2. ${numero1} es menor o igual que ${numero2} `);
}else{
    console.log(`2.`);
}

if(numero1<numero3){
    console.log(`3. ${numero1} es menor que ${numero3}`);
}else{
    console.log(`3.`);
}

if(numero3<numero2){
    console.log(`4.${numero3} es menor que ${numero2}`);
}else{
    console.log(`4.`);
}

if(numero3!==numero1){
    console.log(`5. ${numero1} estrictamente diferente que ${numero3}`);
}else{
    console.log(`5.`);
}

if(numero1===numero2){
    console.log(`6.${numero1} es estrictamente igual ${numero3}`);
}else{
    console.log(`6.`);
}



