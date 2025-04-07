const { getData } = require("country-list-with-dial-code");

function obtenerMoneda(codigoPais) {
    try {
        const pais = getData().find(p => p.code === codigoPais.toUpperCase());
        return pais ? pais.currency : "Código de país no encontrado.";
    } catch (error) {
        console.error("Error al obtener la moneda:", error.message);
        return null;
    }
}

module.exports = obtenerMoneda;