
function concatenarInterpolar(string1, string2) {
    const concatenacion = string1 + string2;
    console.log("la concatenación es:", concatenacion);
    
    const interpolacion =`${string1} ${string2}`;
    console.log("la interpolación es :", interpolacion);
}

module.exports = concatenarInterpolar;