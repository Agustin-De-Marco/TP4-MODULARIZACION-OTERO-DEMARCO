const fs = require("fs");

function copiar(origen, destino) {
    fs.copyFile(origen, destino, (err) => {
        if (err) {
            console.error("Error al copiar el archivo:", err);
        } else {
            console.log(`Archivo copiado de ${origen} a ${destino}`);
        }
    });
}

module.exports = copiar;