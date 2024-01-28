function validarCantidadMiembros(valor) {
    if (valor < 2) {
        return 'El campo Cantidad no puede ser menor a 2';
    }

    if (valor > 20) {
        return 'El campo Cantidad no debe ser mayor a 20';
    }

    if (!/^[0-9]+$/.test(valor)) {
        return 'El campo Cantidad no acepta numeros o signos';
    }

    return '';
}

function validarEdad(valor) {
    if (valor.length === 0) {
        return 'El campo Edad no puede estar vacio';
    }

    if (valor > 100) {
        return 'El campo Edad no debe ser mayor a 100 caracteres';
    }

    if (!/^[0-9]+$/.test(valor)) {
        return 'El campo Edad no acepta numeros o signos';
    }

    return '';
}

document.getElementById('botonProcesarMiembros').onclick = function() {
    const $form = document.getElementById('tarea-6');
    const $valorCantidadMiembros = $form.cantidadMiembros.value;

    const errores = {
    'cantidadMiembros': validarCantidadMiembros($valorCantidadMiembros),
    };

    const keys = Object.keys(errores);
    let contador = 0;

    keys.forEach(function(name) {
        const error = errores[name];
        const $mensajeError = document.getElementById('mensaje-' + [name]);

        if (error) {
            contador++;
            if ($mensajeError.innerText == error) {
                return;
            } 
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
        botonProcesarMiembros();
    }

    return false;
}

function validarFormulario(event) {
    const $form = document.getElementById('tarea-6');
    let contador = 0;

    for (let i = 0; i < $form.valorEdad.length; i++) {
        let $valorMiembro = $form.valorEdad[i].value;
    
        const errores = {
        'valorEdad': validarEdad($valorMiembro)
        };
    
        const keys = Object.keys(errores);

        keys.forEach(function(name) {
            const error = errores[name];
            const $mensajeError = document.getElementsByClassName('mensajeError');
    
            if (error) {
                contador++;

                $mensajeError[i].innerText = error;
                $form[name][i].classList.add('error');
            } else {
                $mensajeError[i].innerText = '';
                $form[name][i].classList.remove('error');
            }
        });
    }

    if (contador == 0) {
       botonCalcularEdad();
    }

    event.preventDefault();
}

function botonProcesarMiembros() {
    
    const $cantidadMiembros = Number($form.cantidadMiembros.value);

    let i = 1;
    while (i <= $cantidadMiembros) {
        agregarMiembro(i);

        i++;
    }

    document.getElementById('botonProcesarMiembros').classList.add('oculto');
    document.getElementById('botonReset').classList.remove('oculto');
    document.getElementById('botonCalcularEdad').classList.remove('oculto');

    document.getElementById('valorMiembros').setAttribute('disabled', '');
}

function botonCalcularEdad() {
    const $valorEdades = $form.valorEdad;
    const valorEdades = obtenerValorMiembros($valorEdades)
    
    document.getElementById('mensajeValor').innerText = 'Edad Mayor: ' + numeroMayor(valorEdades) + ' / Menor: ' +  numeroMenor(valorEdades) + ' / Promedio: ' + numeroPromedio(valorEdades);

    document.getElementById('botonReset').classList.remove('oculto');
    document.getElementById('botonCalcularEdad').classList.add('oculto');

    apagarCuadrosEdades($valorEdades, true);
}

document.getElementById('botonReset').onclick = function() {
    const $miembros = document.getElementsByClassName('miembros');

    while (0 < $miembros.length) {
        $miembros[0].remove();
    }
    
    document.getElementById('botonProcesarMiembros').classList.remove('oculto');
    document.getElementById('valorMiembros').classList.remove('oculto');
    document.getElementById('botonReset').classList.add('oculto');
    document.getElementById('botonCalcularEdad').classList.add('oculto');
    document.getElementById('listaMiembros').classList.remove('oculto');

    document.getElementById('valorMiembros').removeAttribute('disabled');

    document.getElementById('mensajeValor').innerText = '';

    return false;
}

function agregarMiembro(i) {
    const label = document.createElement('label');

    const textNodeLabel = document.createTextNode(`Miembro #${i}: `);
    label.appendChild(textNodeLabel);

    const input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('name','valorEdad');

    const mensajeError = document.createElement('span');
    mensajeError.setAttribute('class','mensajeError');
    
    const div = document.createElement('div');
    div.setAttribute('class','miembros');

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(mensajeError);

    document.getElementById('listaMiembros').appendChild(div);
}

function numeroMayor(valorEdades) {
    let total = valorEdades[0];
    let i = 1;
    
    while (i < valorEdades.length) {
        if (total < valorEdades[i]) {
            total = valorEdades[i];
        }

        i++;
    }

    return total;
}

function numeroMenor(valorEdades) {
    let total = valorEdades[0];
    let i = 1;
    
    while (i < valorEdades.length) {
        if (total > valorEdades[i]) {
            total = valorEdades[i];
        }

        i++
    }

    return total;
}

function numeroPromedio(valorEdades) {
    let total = 0;
    let i = 0;
    
    while (i < valorEdades.length) {
        total += valorEdades[i];

        i++;
    }

    return Math.round(total / valorEdades.length);
}

function apagarCuadrosEdades($valorEdades, on) {
    let i = 0;
    
    while (i < $valorEdades.length) {
        if (on == true) $valorEdades[i].setAttribute('disabled','');

        if (on == false) $valorEdades[i].removeAttribute('disabled');

        i++;
    }
}

function obtenerValorMiembros($valorEdades) {
    const edades = [];
    for (let i = 0; i < $valorEdades.length; i++) {
        edades.push(Number($valorEdades[i].value));
    }

    return edades;
}

const $form = document.getElementById('tarea-6');
$form.onsubmit = validarFormulario;


/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



