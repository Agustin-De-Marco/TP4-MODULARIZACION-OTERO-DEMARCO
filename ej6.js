const url = require("url");
const querystring = require("querystring");

function parsearUrl(direccion) {
    try {
        const parsed = url.parse(direccion);
        return {
            host: `${parsed.protocol}//${parsed.host}`,
            pathname: parsed.pathname,
            parametros: querystring.parse(parsed.query)
        };
    } catch (error) {
        console.error("Ocurrió un error al parsear la URL:", error.message);
        return null;
    }
}

module.exports = parsearUrl;