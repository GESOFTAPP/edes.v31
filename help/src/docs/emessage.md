# eMessage

## Descripción
Muestra una página con un único elemento: un mensaje central. La variable `$_EMESSAGE` cambiará el texto a mostrar.

## Sintaxis
```php
eMessage($Mensaje, $Accion, $mlsg, $exe)
```

## Parámetros
- **$Mensaje**: Mensaje a mostrar
- **$Accion**: Tipo de acción a realizar
  - `E` - Error
  - `H` - Nuevo HTML
  - `S` - Stop a la ejecución y si no es 'IWORK' se cerrará
  - `L` - Error en el login
  - `V` - Dejar el mensaje visible
  - `C` - Cerrar ventana inmediatamente
- **$mlsg**: Milisegundos de espera del mensaje. Si es -1, el mensaje se quedará visible hasta hacer click en él
- **$exe**: Código JavaScript
  - Si empieza por `>` será el nombre de un fichero javascript
  - Si empieza por `<` se ejecutará en el header
  - Si no, se ejecutará cuando se pulse click o termine el tiempo `$mlsg`

## Funcionalidad
Esta función permite mostrar mensajes al usuario con diferentes comportamientos según la acción especificada. Es útil para notificaciones, errores o confirmaciones.

## Ejemplos
```php
// Ejemplo básico: mostrar mensaje de descarga
eMessage('PDF Descargado', 'HS');

// Ejemplo con tiempo de espera
eMessage('Operación completada', 'V', 3000);

// Ejemplo con JavaScript
eMessage('Procesando...', 'V', -1, 'alert("Proceso terminado");');
```