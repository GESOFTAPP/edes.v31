# eJSAnswer

## Descripción
Limpia el buffer de salida y envía código JavaScript al cliente, terminando inmediatamente la ejecución del script.

## Sintaxis
```php
eJSAnswer($js)
```

## Parámetros
- `$js` (string): Código JavaScript a enviar (sin las etiquetas `<script>`)

## Funcionalidad
Esta función es útil para respuestas AJAX o llamadas asíncronas donde se necesita:
- Limpiar cualquier salida previa
- Enviar solo código JavaScript
- Terminar la ejecución inmediatamente
- Ejecutar acciones en el cliente (mostrar mensajes, actualizar interfaz, etc.)

## Ejemplos
```php
// Ejemplo 1: Mostrar mensaje de confirmación
// [PHPIni] cR
eJSAnswer('top.S.info("Grabado", 3)');

// Ejemplo 2: Actualizar un campo en el formulario
eJSAnswer('document.getElementById("resultado").value = "Proceso completado";');

// Ejemplo 3: Ejecutar múltiples acciones JavaScript
$js = '
    top.S.info("Operación exitosa", 2);
    document.getElementById("status").innerHTML = "Completado";
    setTimeout(function(){ location.reload(); }, 2000);
';
eJSAnswer($js);
```