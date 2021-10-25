import { createServer } from 'http';


function router(req, res) {
    console.log('Nueva Peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('<h1>Hola, que tal</h1>');
            res.end();
            break;

        default:
            res.write('Error 404, No se que es lo que quieres');
            res.end();
            break;
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' });
    // res.write('Hola ya se usar http de NodeJS');

    // res.end();
}

createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');