//Transformar a mayusculas
const a = 'hola';
const b = 'COMO';
const num1 = 10;
const num2 = 20;

const Mayus = ((a) =>{
    console.log(a.toUpperCase());
});
Mayus(a);

console.log();
//Transformar a minusculas
const Minus = ((b) =>{
    console.log(b.toLowerCase());
});
Minus(b);
console.log();

//Resta
const Resta = (num1,num2)=> console.log(num1-num2);
Resta(num1,num2);

console.log();
//Division
const Div = (num1,num2)=> console.log(num1/num2);
Div(num1,num2);

console.log();
//Mul
const Mul = (num1,num2)=> console.log(num1*num2);
Mul(num1,num2);

console.log();
const Length = ((a) =>{
    console.log(a.length);
});
Length(a);