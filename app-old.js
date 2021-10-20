
const http = require('http');

http.createServer( ( request, response ) => {
    
    // console.log(response);
    // response.writeHead(200, { 'Content-Type': 'application/json' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Armando'
    // }
    // response.write( JSON.stringify(persona) );
    
    // response.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv' });
    
    // response.write('id, nombre\n');
    // response.write('1, Mateo\n');
    // response.write('2, Armando\n');
    // response.write('3, Erick\n');

    
    response.write('Hola Mundo');

    
    response.end();
    
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);
