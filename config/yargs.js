const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta donde se imprimirá la tabla (since 1)'
    })
    .check( ( argv, options ) => {
        if( isNaN(argv.b) ){
            throw 'La base debe de ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;