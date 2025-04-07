const countryToCurrency = require("country-to-currency");

function obtenerMoneda(codigoPais) {
    try {
        const moneda = countryToCurrency[codigoPais.toUpperCase()];
        return moneda ? moneda : "Código de país no encontrado.";
    } catch (error) {
        console.error("Error al obtener la moneda:", error.message);
        return null;
    }
}

module.exports = obtenerMoneda;