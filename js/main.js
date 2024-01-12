function validarNombre(valor) {
    if (valor.length === 0) {
        return 'El campo Nombre no puede estar vacio';
    }

    if (valor.length >= 10) {
        return 'El campo Nombre no debe ser mayor a 10 caracteres';
    }

    if (!/^[a-z]+$/i.test(valor)) {
        return 'El campo Nombre no acepta numeros o signos';
    }

    return '';
}

function validarCiudad(valor) {
    if (valor.length === 0) {
        return 'El campo Ciudad no puede estar vacio';
    }

    return '';
}

function validarDescripcionRegalo(valor) {
    if (valor.length === 0) {
        return 'El campo Descripcion no puede estar vacio';
    }

    if (valor.length >= 50) {
        return 'El campo Descripcion no debe ser mayor a 50 caracteres';
    }

    if (!/^[a-z0-9]+$/i.test(valor)) {
        return 'El campo Descripcion no acepta numeros o signos';
    }

    return '';
}

function validarFormulario(event) {
    const $form = document.getElementById('carta-a-santa');
    const valorNombre = $form.nombre.value;
    const valorCiudad = $form.ciudad.value;
    const valorDescripcionRegalo = $form['descripcion-regalo'].value;

    const errores = {
    nombre: validarNombre(valorNombre),
    ciudad: validarCiudad(valorCiudad),
    'descripcion-regalo': validarDescripcionRegalo(valorDescripcionRegalo)
    };

    const keys = Object.keys(errores);
    const $exito = document.getElementById('exito');
    let contador = 0;

    keys.forEach(function(name) {
        const error = errores[name];
        const $mensajeError = document.getElementById('mensaje-' + [name]);

        if (error) {
            contador++;
 
            $mensajeError.innerText = error;
            $mensajeError.classList.remove('oculto');
            $form[name].classList.add('error');
        } else {
            $mensajeError.classList.add('oculto');
            $mensajeError.innerText = '';
            $form[name].classList.remove('error');
        }
    });

    if (contador == 0) {
        $form.classList.add('oculto');
        $exito.classList.remove('oculto');

        setTimeout(function () {
            window.location.href= 'file:///E:/Download/Browser/GIT/js-xmas-edition/wishlist.html';
         },5000);
    }

    event.preventDefault();
}

const $form = document.getElementById('carta-a-santa');
$form.onsubmit = validarFormulario;
