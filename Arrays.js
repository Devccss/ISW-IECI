const numeros = [1, 2, 3, 4, 5]
const words = ['hoLA', 'COmo','EsTaS']

//Suma
const sumNums = ((a)=>{
    let sum = 0;
    for (let i = 0; i < a.length; i++) {

        sum += a[i]
    }
    return sum
});
console.log(sumNums(numeros));

//Promedio
const promNums = ((b)=>{
    prom = sumNums(b)/b.length;
    return prom
});
console.log(promNums(numeros)); 

//Mayusculas
const mayus = ((c)=>{
    for (let i = 0; i < c.length; i++) {
        c.splice(i,1,c[i].toUpperCase());
    }
    return c
})
console.log(mayus(words));

//Solo pares
const pares = ((d)=>{
    const newNums = []
    for (let i = 0; i < d.length; i++) {
        if(d[i]%2 == 0){
            newNums.push(d[i])
        }
    }
    return newNums
});
console.log(pares(numeros)); 