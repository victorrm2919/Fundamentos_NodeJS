//El monohilo puede ser peligroso, en caso de fallos para todo el proceso de ejecución.

console.log('hola mundo');

// set interval se vuelve asincrono

let i = 0;
setInterval(() => {
    console.log(i);
    i++;

    // if (i === 5) {
    //     var a = 2 + z;
    // }
}, 1000);

console.log('Estoy despues del interval');