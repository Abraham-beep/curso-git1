let resultado = document.getElementById('resultado');
    let operacionActual = '';
    
    function agregarNumero(numero) {
        resultado.value += numero;
        reproducirSonido();
    }
    
    function operacion(op) {
        operacionActual = op;
        resultado.value += ' ' + op + ' ';
        reproducirSonido();
    }
    
    function calcular() {
        let partes = resultado.value.split(' ');
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[2]);
        let resultadoFinal;

        switch (operacionActual) {
            case '+':
                resultadoFinal = num1 + num2;
                break;
            case '-':
                resultadoFinal = num1 - num2;
                break;
            case '*':
                resultadoFinal = num1 * num2;
                break;
            case '/':
                resultadoFinal = num1 / num2;
                break;
            default:
                return;
        }

        resultado.value = resultadoFinal;
        operacionActual = '';
        reproducirSonido();
    }

    function limpiar() {
        resultado.value = '';
        operacionActual = '';
        reproducirSonido();
    }

    function reproducirSonido() {
        const audio = document.getElementById('sonido');
        audio.currentTime = 0; // Reiniciar el sonido para que se reproduzca desde el inicio
        audio.play();
    }