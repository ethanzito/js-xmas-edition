function probarValidarEdad() {
    console.assert(
        validarEdad('') === 
        'El campo Edad no puede estar vacio',
        'Validar Edad detecto cambios en que Edad no sea vacío',
    );
  
    console.assert(
        validarEdad(
            '101') ===
        'El campo Edad no debe ser mayor a 100 caracteres',
        'Validar Edad detecto cambios en que Edad sea menor a 100',
    );
  
    console.assert(
        validarEdad('&') === 
        'El campo Edad no acepta numeros o signos',
        'Validar Edad detecto cambios en que Edad posea numeros o signos',
    );
}

probarValidarEdad();