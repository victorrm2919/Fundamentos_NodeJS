function asincrona(cb) {
    // se valida primeramente el error primero en los callbacks, mejor que pare todo andes de actuar
    setTimeout(() => {
        try {
            let a = 3 + z;
            cb(null, a);
        } catch (e) {
            cb(e);
        }
    }, 1000);
}

try {
    asincrona((err, data) => {
        if (err) {
            console.error('Hay un error');
            console.error(err);
            return false;
            //throw err;  //Crashea la funcion, no funciona en un try catch para capturar el error
        }

        console.log('Todo ok, mi data es ' + data);
    });
} catch (e) {
    console.error('Un Error');
    console.log(e);
}