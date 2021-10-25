/* function asincrono(callback) { // callback es una función que se ejecuta cuando termina la función asincrona
    setTimeout(function() {
        console.log('Soy asincrono y soy el segundo proceso');
        callback(); // llamamos a la función callback que se envio por parametro
    }, 1000);
}

console.log('Iniciando proceso ...');
asincrono( function () {  // Se envia el callback como parametro, una funcion
    console.log('Tercer proceso ...');
 }); */

function hola(nombre, callback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        callback(nombre);
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        callback();
    }, 1000);
}

console.log('Bienvenido a esta prueba de callbacks');

hola('Victor', function (nombre) {
    adios(nombre, function () {
        console.log('Gracias por probar este callback');
    });
});