const { URL } = require("url");

function parsearUrl(direccion) {
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
}

module.exports = parsearUrl;