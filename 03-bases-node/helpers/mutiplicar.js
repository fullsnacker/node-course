const fs = require('fs');

const crearArchivo = async( base = 5) =>{

    try {

        let salida = '';

        for (let index = 1; index <= 10; index++) {
            salida +=`${base} x ${index} = ${base * index}\n`;
        }
        
        fs.writeFileSync( `tabla-${base}.txt`, salida );
    
        return `tabla-${base}.txt`;
        
    } catch (err) {

        throw err;
    }
}

module.exports = {
    crearArchivo
}