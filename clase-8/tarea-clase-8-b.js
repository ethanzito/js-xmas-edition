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

document.getElementById('botonCrearMiembro').onclick = function() {    
    agregarMiembro();

    document.getElementById('botonReset').classList.remove('oculto');
    document.getElementById('botonCalcularEdad').classList.remove('oculto');

    return false;
}

document.getElementById('botonEliminarMiembro').onclick = function() {
    const $miembros = document.getElementsByClassName('miembros');

    if ($miembros.length > 0) {
        $miembros[0].remove();
    }

    return false;
}

function validarFormulario(event) {
    let contador = 0;

    for (let i = 0; i < $form.valorEdad.length; i++) {
        const $form = document.getElementById('tarea-6');
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

function botonCalcularEdad() {
    const $valorEdades = $form.valorEdad;
    const valorEdades = obtenerValorMiembros($valorEdades)
    
    document.getElementById('mensajeValor').innerText = 'Salario Anual Mayor: ' + numeroMayor(valorEdades) + ' / Menor: ' +  numeroMenor(valorEdades) + ' / Promedio: ' + numeroPromedio(valorEdades) + ' / Promedio Mensual: ' + numeroPromedioMensual(valorEdades);

    document.getElementById('botonReset').classList.remove('oculto');
    document.getElementById('botonCrearMiembro').classList.add('oculto');
    document.getElementById('botonEliminarMiembro').classList.add('oculto');

    apagarCuadrosEdades($valorEdades, true);
}

document.getElementById('botonReset').onclick = function() {
    const $miembros = document.getElementsByClassName('miembros');

    while (0 < $miembros.length) {
        $miembros[0].remove();
    }
    
    document.getElementById('botonReset').classList.add('oculto');
    document.getElementById('listaMiembros').classList.remove('oculto');
    document.getElementById('botonCrearMiembro').classList.remove('oculto');
    document.getElementById('botonEliminarMiembro').classList.remove('oculto');

    document.getElementById('mensajeValor').innerText = '';

    const $valorEdades = $form.valorEdad;
    apagarCuadrosEdades($valorEdades, false)

    return false;
}

function agregarMiembro() {
    const label = document.createElement('label');

    const textNodeLabel = document.createTextNode(`Miembro: `);
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

function numeroPromedioMensual(valorEdades) {
    let total = 0;
    let i = 0;
    
    while (i < valorEdades.length) {
        total += valorEdades[i];

        i++;
    }

    return Math.round((total / 12) / valorEdades.length);
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



