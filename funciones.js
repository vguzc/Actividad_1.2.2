function validarFormulario() {
    // Capturar los elementos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const alerta = document.getElementById('alertaErrores');

    // Arreglo para guardar el nombre de los campos que estén vacíos
    let camposVacios = [];

    // Validar si están vacíos (trim remueve espacios en blanco accidentales)
    if (nombre.value.trim() === '') {
        camposVacios.push('Nombre completo');
    }
    if (email.value.trim() === '') {
        camposVacios.push('Correo electrónico');
    }
    if (mensaje.value.trim() === '') {
        camposVacios.push('Mensaje');
    }

    // Verificar si hay errores
    if (camposVacios.length > 0) {
        // Mostrar la alerta de Bootstrap removiendo la clase 'd-none'
        alerta.classList.remove('d-none');
        alerta.innerHTML = `<strong>Error:</strong> Debes completar los siguientes campos: ${camposVacios.join(', ')}.`;
    } else {
        // Ocultar alerta si antes había errores
        alerta.classList.add('d-none');
        
        // Confirmación de éxito
        alert('¡Formulario enviado con éxito!');
        
        // Opcional: Limpiar los campos del formulario
        document.getElementById('formContacto').reset();
    }
}