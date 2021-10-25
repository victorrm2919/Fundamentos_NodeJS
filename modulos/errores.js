function otraFunction() {
    return se_rompe();
}


function se_rompe() {
    return 4 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {  //El try solo funciona y previene en el bloque de la funcion, set interval se vuelve otro bloque
            return 4 + z;
        } catch (error) {
            console.error('Error en funcion asincrona');
            cb(error);
        }
    }, 1000);
}

try {
    // otraFunction();
    seRompeAsincrona((err) => {
        console.log(err.message);
    });
} catch (error) {
    console.error("Algo de rompio");
    console.error(error);
}