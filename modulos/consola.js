console.log('Ver log o algo'); //imprimir en consola valores
console.info('Ver info'); //Es lo mismo que console.log, es usado para informar de algo 
console.error('Esto es un error'); //Para arrojar errores
console.warn('En warning'); //Log warning

var tabla = [
    {
        a: 1,
        b: 2
    },
    {
        a: 5,
        b: 'assd'
    }
]
console.table(tabla); //muestra un array en tabla


console.log('Conversacion:');
console.group('Cover'); //crea  un grupo con indentacion en el console
console.log('Hola');
console.log('Bla bla bla')
console.log('Adios');
console.groupEnd('Cover') //necesita cierro el console.group

console.log('Otro grupo');



console.count('Veces');  //conteno de veces que parece un log
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');


