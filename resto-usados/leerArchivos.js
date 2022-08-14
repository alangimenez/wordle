const fs = require('fs');

const listado = JSON.parse(fs.readFileSync('./palabras/acopia.txt', 'utf-8'));

const verificacion = [];
const palabrasFinales = [];

for (let i = 0; i < listado.length; i++) {
    const palabra = listado[i].split("");
    const dato = tiene_repetidos(palabra);
    verificacion.push(dato);
}

function tiene_repetidos(array) {
    return new Set(array).size !== array.length
}

for (let i = 0; i < 100 ; i++) {
    const validacion = listado[i].split("").includes('á', 'é', 'í', 'ó', 'ú', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '); 
    console.log(validacion);
    if (verificacion[i] === false  && validacion === false ) {

        palabrasFinales.push(listado[i]);
    }
}

console.log(palabrasFinales);

const abejon = 'abejón';
const si = abejon.split("").includes('ó');
console.log(si);