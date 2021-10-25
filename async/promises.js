function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        if (true) {
                setTimeout(function () {
                    console.log('Bla bla bla');
                    resolve(nombre);
                }, 1000);
        } else {
            reject(new Error('Ya no puedes hablar'))
        }
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}


//******************

console.log('Iniciando el proceso ...');
hola('Victor')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso, muchas gracias ' + nombre);
    })
    .catch(err => console.error(err));