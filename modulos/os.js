//Interfaces de bajo nivel
const os = require('os');

// console.log(os.arch()); //architecture
// console.log(os.platform()); //Operating System Platform
// console.log(os.cpus().length); //CPU Count, cores
//console.log(os.constants); //constants system

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE; };
function mb(bytes) { return kb(bytes) / SIZE; }
function gb(bytes) { return mb(bytes) / SIZE; }

console.log(gb(os.freemem())); //Free Memory
console.log(gb(os.totalmem())); //Total Memory

console.log(os.homedir()); //Home Directory
console.log(os.tmpdir()); // Temporal File Directory

console.log(os.hostname()); //Nombre del dominio de la pagina
console.log(os.networkInterfaces()); //Interfaces Network
