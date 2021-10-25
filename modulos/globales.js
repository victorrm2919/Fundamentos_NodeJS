let i = 0;

let interval = setInterval(() => {
    console.log('Hola');
    i++;
    if (i === 5) {
        clearInterval(interval);
        console.log('Paramos el interval');
    }
}, 1000);


setImmediate(() => {
    console.log("Hola estoy inmediato");
});

console.log(__filename); // Ruta absoluta del archivo, con dirname  ubicacion del archivo

//variables globales
globalThis.miVariable = 'Soy una variable global';
console.log(miVariable)


