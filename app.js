
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;


console.log('Base: ', base);
console.log('Listar: ', listar);
console.log('Hasta: ', hasta);


crearArchivo(base, hasta ,listar)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado' ) )
.catch( err => console.log(err) );

 