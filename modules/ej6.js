const { URL } = require("url");

function parsearUrl(direccion) {
    try {
        const parsed = new URL(direccion);
        const params = {};

        parsed.searchParams.forEach((valor, clave) => {
            params[clave] = valor;
        });

        return {
            host: parsed.origin,
            pathname: parsed.pathname,
            parametros: params
        };
    } catch (error) {
        console.error("Error al parsear la URL:", error.message);
        return null;
    }
}

module.exports = parsearUrl;