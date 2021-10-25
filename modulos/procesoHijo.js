// El modulo de procesos "Child_process" se puede iniciar un proceso secundario
const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, sterr) => { //procesos basicos fuera de node
//     if (err) {
//         console.log(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);  //procesos mas complejos y trabajar de forma mas avanzada
console.log(proceso.connected);
console.log(proceso.pid);

proceso.stdout.on('data', (dato) => {
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('El proceso termino');
});