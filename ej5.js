const url = require("url");
const querystring = require("querystring");

function parsearUrl(direccion) {
    const parsed = url.parse(direccion);
    return {
        host: `${parsed.protocol}//${parsed.host}`,
        pathname: parsed.pathname,
        parametros: querystring.parse(parsed.query)
    };
}

module.exports = parsearUrl;