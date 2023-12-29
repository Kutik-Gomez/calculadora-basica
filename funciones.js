let expresion = '';

function agregar(valor) {
    expresion += valor;
    document.getElementById('pantalla').value = expresion;
}

function calcular() {
    try {
        let resultado = eval(expresion); // Realiza el cálculo

        // Verifica si el resultado es un número finito
        if (Number.isFinite(resultado)) {
            // Limita el resultado a 4 decimales y lo convierte a texto
            resultado = parseFloat(resultado.toFixed(4));
            document.getElementById('pantalla').value = resultado;
            expresion = resultado.toString(); // Actualiza la expresión con el resultado limitado
        } else {
            document.getElementById('pantalla').value = 'Error';
            expresion = ''; // Reinicia la expresión en caso de error
        }
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
        expresion = ''; // Reinicia la expresión en caso de error
    }
}

function limpiar() {
    expresion = '';
    document.getElementById('pantalla').value = '';
}

function eliminarUltimoCaracter() {
    expresion = expresion.slice(0, -1);
    document.getElementById('pantalla').value = expresion;
}

function agregarPorcentaje() {
    try {
        let resultado = eval(expresion);
        
        if (Number.isFinite(resultado)) {
            let porcentaje = (resultado * 0.1).toFixed(2); // Calcula el 10% del número y limita a 4 decimales
            document.getElementById('pantalla').value = porcentaje;
            expresion = porcentaje.toString();
        } else {
            document.getElementById('pantalla').value = 'Error al calcular el porcentaje';
            expresion = '';
        }
    } catch (error) {
        document.getElementById('pantalla').value = 'Error al calcular el porcentaje';
        expresion = '';
    }
}
let estiloActual = 1; // Variable para rastrear el estilo actual

function cambiarEstilos() {
    const hojaEstilos = document.getElementById('estilos');
    
    // Verifica el estilo actual y cambia a la hoja de estilos correspondiente
    if (estiloActual === 1) {
        hojaEstilos.href = 'estilos.css'; // Cambia a la segunda hoja de estilos
        estiloActual = 2; // Actualiza el estilo actual
    } else {
        hojaEstilos.href = 'estilos2.css'; // Cambia a la primera hoja de estilos
        estiloActual = 1; // Actualiza el estilo actual
    }
}
