# eEnd

## Descripción
Forma correcta de terminar cualquier petición en PHP. Comprime la página, muestra salidas DEBUG, cierra transacciones de base de datos y maneja el caché del servidor.

## Sintaxis
```php
eEnd([$TextError=""])
```

## Parámetros
- `$TextError` (string, opcional): Mensaje de error a mostrar. Si se proporciona, limpia la página y muestra solo el mensaje de error.

## Funcionalidad
- Comprime la página antes de enviarla
- Muestra todas las salidas de la etiqueta [DEBUG] con el parámetro "DF"
- Cierra correctamente las transacciones de base de datos
- Maneja el caché de páginas en el servidor
- Si se proporciona un mensaje de error, limpia la página y muestra el error
- **Nota importante**: Para descargas vía JavaScript `startDownload()`, usar `exit` o `die()` en lugar de `eEnd()`

## Ejemplos
```php
// Ejemplo 1: Terminación normal
eEnd();

// Ejemplo 2: Terminación con mensaje de error
eEnd("Error: No se pudo procesar la solicitud");

// Ejemplo 3: Terminación después de procesar datos
$resultado = procesarDatos();
if ($resultado) {
    echo "Datos procesados correctamente";
    eEnd();
} else {
    eEnd("Error al procesar los datos");
}
```