console.time('todo');
let suma = 0;

console.time('Bucle');  //validar cuanto tiempo se tarda en realizar un proceso, se encierra como un console.group
for (let i = 0; i < 10000; i++) {
    suma += i;
}


let suma2 = 0;

console.time('Bucle2');  //validar cuanto tiempo se tarda en realizar un proceso, se encierra como un console.group
for (let j = 0; j < 100000000; j++) {
    suma2 += j;
}

console.timeEnd('Bucle');
console.time('Asincrono');

asincrona()
    .then(() => {
        console.timeEnd('Asincrono');
    });

console.timeEnd('Bucle2');
function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        });
    });
}
console.timeEnd('todo');