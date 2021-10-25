const fs = require('fs');


function leer(rutaArchivo, cbLeer) {
    fs.readFile(rutaArchivo, (err, data) => {
        cbLeer(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            cb('No se puedo escribir nada');
        } else {
            cb('Escrito');
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

// leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'Es una linea nueva ', console.log)
// borrar(__dirname + '/archivo1.txt', console.log)
