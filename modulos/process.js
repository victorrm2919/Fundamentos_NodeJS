// Process es un modulo global no es necesario requerirlo se puede trabajar directamente, accedemos a todo lo que halla en el proceso

process.on('beforeExit', () => {
    console.log('Ya va acabar el proceso');
});

process.on('exit', () => {
    console.log('Yeah el proceso acabo');
    setTimeout(() => {
        console.log('Esto no se ve nuca'); //en exit se desconecta del event loop, al se asi setTimeOut ya no entra
    });
});

setTimeout(() => {
    console.log('Esto SI se ve'); //en exit se desconecta del event loop, al se asi setTimeOut ya no entra
});


process.on('uncaughtException', (err, origen) => {
    console.log('Hay un error por capturar');
    console.error(err);
});

// sinex();