# eShell

## Descripción
Devuelve el texto pasado dentro de un botón con estilos de colores personalizados.

## Sintaxis
```php
eShell($colores, $texto="", $inner="")
```

## Parámetros
- **$colores**: Definición de colores en formato "Background[,color[,borderColor]]"
- **$texto**: Texto a mostrar en el botón
- **$inner**: Cualquier dato adicional a incluir en el interior del tag (eventos, atributos, etc.)

## Funcionalidad
Esta función crea un botón personalizado con colores específicos y permite agregar eventos y atributos adicionales. Es útil para crear botones con estilos consistentes en la aplicación.

## Ejemplos
```php
// Ejemplo básico con fondo verde
$_vF[2] = eShell("green");

// Ejemplo con fondo azul y texto
$_vF[3] = eShell("blue", $_vF[3], "onclick='alert(3)'");

// Ejemplo con colores personalizados y título
$_vF[4] = eShell("black,white", $_vF[4], "title='Información adicional'");

// Ejemplo con múltiples atributos
$boton = eShell("red,white,black", "Eliminar", "onclick='confirmarEliminacion()' class='btn-danger'");
```