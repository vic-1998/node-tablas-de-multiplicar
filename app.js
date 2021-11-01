const { archivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors')

console.clear();

archivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivoTabla => console.log(nombreArchivoTabla.rainbow, 'Se creo Correctamente.'.rainbow))
    .catch(err => console.error(err));
