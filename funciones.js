function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const alerta = document.getElementById('alertaErrores');

    let camposVacios = [];

    if (nombre.value.trim() === '') {
        camposVacios.push('Nombre completo');
    }
    if (email.value.trim() === '') {
        camposVacios.push('Correo electrónico');
    }
    if (mensaje.value.trim() === '') {
        camposVacios.push('Mensaje');
    }

    if (camposVacios.length > 0) {
        alerta.classList.remove('d-none');
        alerta.innerHTML = `<strong>Error:</strong> Debes completar los siguientes campos: ${camposVacios.join(', ')}.`;
    } else {
        alerta.classList.add('d-none');
        alert('¡Formulario enviado con éxito!');
        document.getElementById('formContacto').reset();
    }
}