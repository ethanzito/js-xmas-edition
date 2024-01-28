function probarValidarCantidadMiembros() {
  console.assert(
    validarCantidadMiembros('') === 'El campo Cantidad no puede ser menor a 2',
      'Validar Cantidad Miembros detecto cambios en que Miembros no sea vacío',
  );

  console.assert(
    validarCantidadMiembros(
          '21') ===
      'El campo Cantidad no debe ser mayor a 20',
      'Validar Cantidad Miembros detecto cambios en que Miembros sea menor a 20',
  );

  console.assert(
    validarCantidadMiembros('%') === 
      'El campo Cantidad no acepta numeros o signos',
      'Validar Cantidad Miembros detecto cambios en que Miembros posea numeros o signos',
  );
}

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

probarValidarCantidadMiembros();
probarValidarEdad();
