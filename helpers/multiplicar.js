const fs = require('fs');

const colors = require('colors')

const archivoTabla = async (base = 1, list = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.red} ${i} ${'='.blue} ${base * i}\n`;
        }

        if (list) {
            console.log('======================'.rainbow);
            console.log(`Tabla del ${base}`.yellow);
            console.log('======================'.rainbow);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return (`La Tabla-del-${base}.`);
    } catch (error) {
        throw error
    }
}

module.exports = {
    archivoTabla
};
