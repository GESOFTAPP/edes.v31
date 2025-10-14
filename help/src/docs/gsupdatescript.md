# gsUpdateScript

## Descripción
Modifica partes de ficheros plano en remoto. Esta función solo se puede ejecutar desde el editor y la solapa de PHP.

## Sintaxis
```php
gsUpdateScript($Script, $Op, $Codigo)
```

## Parámetros
- `$Script` - Ruta del archivo a modificar
- `$Op` - Operación a realizar:
  - `S`: Start - En el inicio del archivo
  - `B`: Before - Antes de una línea específica
  - `I`: Inside - Dentro de una sección específica
  - `A`: After - Después de una línea específica
  - `E`: End - Al final del archivo
- `$Codigo` - Código o contenido a insertar

## Funcionalidad
Esta función permite modificar archivos remotos de forma programática, insertando código en diferentes posiciones del archivo según la operación especificada. Es especialmente útil para actualizar archivos CSS, JavaScript o configuración de forma dinámica.

## Ejemplos

### Ejemplo 1: Insertar código dentro de una sección CSS
```php
gsUpdateScript('css/lista.css', 'I', 'right', "#D {\n", 'text-align: ', ';');
```

### Ejemplo 2: Agregar código al final de un archivo CSS
```php
gsUpdateScript('css/desktop2.css', 'E',
<<<EOD
/* Nuevos estilos */
.nueva-clase {
    background-color: #f0f0f0;
    padding: 10px;
}
EOD
);
```

### Ejemplo 3: Insertar código al inicio de un archivo
```php
gsUpdateScript('js/main.js', 'S', 
<<<EOD
// Configuración inicial
const CONFIG = {
    debug: true,
    version: '1.0.0'
};
EOD
);
```