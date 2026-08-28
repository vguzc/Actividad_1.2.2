function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const alerta = document.getElementById('alertaErrores');

    let errores = [];

    // Validar campos vacíos
    if (nombre.value.trim() === '') {
        errores.push('Debes completar el campo: Nombre completo.');
    }

    if (email.value.trim() === '') {
        errores.push('Debes completar el campo: Correo electrónico.');
    } else {
        // Validar formato del correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            errores.push('El correo electrónico no tiene un formato válido (Ej: nombre@ejemplo.com).');
        }
    }

    if (mensaje.value.trim() === '') {
        errores.push('Debes completar el campo: Mensaje.');
    }

    // Verificar si hay errores
    if (errores.length > 0) {
        alerta.classList.remove('hide');
        alerta.innerHTML = `<strong>Error:</strong><br>${errores.join('<br>')}`;
    } else {
        alerta.classList.add('hide');
        alert('¡Formulario enviado con éxito!');
        document.getElementById('formContacto').reset();
    }
}