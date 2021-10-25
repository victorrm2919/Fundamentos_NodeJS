function hola(nombre, callback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        callback(nombre);
    }, 1000);
}

function hablar(callHablar) {
    setTimeout(function () {
        console.log('Bla bla bla');
        callHablar();
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        callback();
    }, 1000);
}


//reduciendo los callbacks y evitando el callback hell

function conversacion(nombre, veces, callback) {
    //recursividad
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}




// ************************************************************
console.log('Bienvenido a esta prueba de callbacks');

//solo se recomienda usar 3 callbacks en una sola funcion para evitar problemas de callback hell
/* hola('Juan', function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function () {
                    console.log('Fin de la prueba');
                });
            })
        });
    });
}); */

//Evitando el Callback Hell, creando funciones intermedias que reduzcan el proceso

hola('Victor', function (nombre) {
    conversacion(nombre, 5, function () {
        console.log('Terminamos el proceso');
    })
})