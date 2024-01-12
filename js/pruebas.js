function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El campo Nombre no puede estar vacio',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'El campo Nombre no debe ser mayor a 10 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
  
    console.assert(
        validarNombre('!@#%1^&*(') === 
        'El campo Nombre no acepta numeros o signos',
        'Validar nombre no validó que el nombre posea numeros o signos',
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'El campo Ciudad no puede estar vacio',
        'Validar ciudad no validó que ciudad no sea vacío',
    );
}

function probarValidarDescripcion() {
    console.assert(
        validarDescripcionRegalo('') === 
        'El campo Descripcion no puede estar vacio',
        'Validar descripcion no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarDescripcionRegalo(
            '1111111111111111111111111111111111111111111111111111111111111') ===
        'El campo Descripcion no debe ser mayor a 50 caracteres',
        'Validar descripcion no validó que descripcion sea menor a 50 caracteres',
    );
  
    console.assert(
        validarDescripcionRegalo('!@#%1^&*(_{}"|:6') === 
        'El campo Descripcion no acepta numeros o signos',
        'Validar descripcion no validó que descripcion posea numeros o signos',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();
  