const lista = ['carbon', 'huevos', 'flores', 'brazos', 'calzon', 'mastil', 'trebol', 'pastel', 'sarten', 'batido',
    'cobija', 'desvio', 'empate', 'farola', 'golear', 'inepto', 'jurado', 'ligero', 'nervio', 'opinar'];
let palabraRecortada = "";
let vida = 1;

function nuevoJuego() {
    vida = 1;
    document.getElementById('resultado').innerHTML = ``
    document.getElementById(`palabra-2`).innerHTML = "";
    document.getElementById(`palabra-3`).innerHTML = "";
    document.getElementById(`palabra-4`).innerHTML = "";
    document.getElementById(`palabra-5`).innerHTML = "";
    const numeroRandom = parseInt((Math.random() * lista.length));

    palabraRecortada = lista[numeroRandom].split("");
    const htmlEspacioPalabras = espacioPalabras(palabraRecortada.length);
    document.getElementById(`palabra-${vida}`).innerHTML = htmlEspacioPalabras;
    vida = vida + 1;
}

function espacioPalabras(largo) {
    let html = "";
    for (let i = 0; i < largo; i++) {
        html = html + `<div id="letra-${vida}${i}" style="background-color: beige; margin: 1rem; width: 4rem; height: 4rem; border: black solid 1px; box-shadow: 0px 0px 5px 1px black; display: flex; justify-content: center; align-items: center; font-size: 2rem"></div>`
    }
    return html;
}

function nuevaLetra(letra) {
    for (let i = 0; i < palabraRecortada.length; i++) {
        const letraInsertar = document.getElementById(`letra-${vida - 1}${i}`).innerHTML;
        if (letraInsertar == "") {
            return document.getElementById(`letra-${vida - 1}${i}`).innerHTML = letra
        };
    }
}

function eliminarLetra() {
    for (let i = palabraRecortada.length - 1; i > -1; i--) {
        const letraInsertar = document.getElementById(`letra-${vida - 1}${i}`).innerHTML;
        if (letraInsertar != "") {
            return document.getElementById(`letra-${vida - 1}${i}`).innerHTML = "";
        };
    }
}

function enviarPalabra() {
    let letrasIngresadas = [];
    let comparacion = []
    for (let i = 0; i < palabraRecortada.length; i++) {
        const letraInsertada = document.getElementById(`letra-${vida - 1}${i}`).innerHTML;
        letrasIngresadas.push(letraInsertada);
    }
    for (let i = 0; i < palabraRecortada.length; i++) {
        if (palabraRecortada[i] === letrasIngresadas[i]) {
            comparacion.push(true);
        } else {
            const existeLetraEnPalabra = palabraRecortada.find(e => e === letrasIngresadas[i]);
            if (!existeLetraEnPalabra) {
                comparacion.push(false);
            } else {
                comparacion.push('revisar');
            }
        }
    }
    for (let i = 0; i < palabraRecortada.length; i++) {
        if (comparacion[i] === true) {
            document.getElementById(`letra-${vida - 1}${i}`).style.backgroundColor = 'green';
        } else if (comparacion[i] === 'revisar') {
            document.getElementById(`letra-${vida - 1}${i}`).style.backgroundColor = 'yellow';
        } else {
            document.getElementById(`letra-${vida - 1}${i}`).style.backgroundColor = 'red';
        }
    }
    const existeFalse = comparacion.findIndex(e => e === false);
    const existeRevisar = comparacion.findIndex(e => e === 'revisar');
    if (existeFalse !== -1 && vida === 6) return document.getElementById('resultado').innerHTML = `Perdiste!!! La palabra era ${palabraRecortada.join("")}`
    if (existeFalse === -1 && existeRevisar === -1) {
        document.getElementById('resultado').innerHTML = `Ganaste!!!`
    } else {
        const htmlNuevo = espacioPalabras(palabraRecortada.length);
        document.getElementById(`palabra-${vida}`).innerHTML = htmlNuevo;
        vida = vida + 1;
    }
}

