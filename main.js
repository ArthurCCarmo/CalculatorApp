/* Inserir Digito */
function insert(num) {
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}


/* Limpar digitos */

function clean() {
    document.getElementById('Resultado').innerHTML = "";
}

/* Apagar digito */

function DEL() {
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

/* Faz a operação */



function conta() {
    var resultado = document.getElementById('Resultado').innerHTML;
    if (resultado != isNaN) {
        document.getElementById('Resultado').innerHTML = eval(resultado);
    }

    //if (resultado = Number.POSITIVE_INFINITY || Number.NEGATIVE_INFINITY) {
    //alert("a")
    //}

}
