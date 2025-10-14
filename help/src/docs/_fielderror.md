# .fieldError()

## SINTAXIS
```javascript
S(selector).fieldError(txt)
```

## DESCRIPCIÓN
Establece o muestra mensajes de error en campos de formulario. Útil para validación y feedback visual al usuario cuando hay errores en los datos ingresados.

## PARÁMETROS
- `txt` (string): El mensaje de error que se mostrará. Si no se proporciona, puede limpiar el error existente.

## EJEMPLO
```javascript
// Mostrar error en un campo
S('#email').fieldError('El email no es válido');

// Mostrar error en múltiples campos
S('.required').fieldError('Este campo es obligatorio');

// Limpiar error
S('#password').fieldError(''); // o S('#password').fieldError();

// Ejemplo con validación
function validarEmail(email) {
  if (!email.includes('@')) {
    S('#email').fieldError('Ingrese un email válido');
    return false;
  }
  S('#email').fieldError(''); // Limpiar error si es válido
  return true;
}

// Estilo personalizado de error
S('#telefono').fieldError('Formato: +34 123 456 789').addClass('error-red');
```

## NOTAS
- Comúnmente usado en validación de formularios
- Puede aplicar estilos CSS específicos para errores
- Útil para feedback inmediato al usuario