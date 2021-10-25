async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
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

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}


async function main() {
    let nombre = await hola('Victor')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Iniciando proceso ...');
main();