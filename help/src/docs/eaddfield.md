# eAddField

## Descripción
Función para crear campos variables en formularios. Permite añadir campos dinámicos dentro de etiquetas "{P}" del formulario. No se pueden crear dinámicamente campos tipo: File, Radiobutton ni Select con RelationFields.

## Sintaxis
```php
eAddField( $DefinicionField, $ValorPorDefecto, $MasDatos )
```

## Parámetros
- `$DefinicionField` (string): Definición del campo con formato específico
- `$ValorPorDefecto` (mixed): Valor por defecto del campo
- `$MasDatos` (string): Datos adicionales dependiendo del tipo de campo

## Funcionalidad
Si la función es llamada mientras se construye el formulario (en etiqueta {p}), genera el control en línea. En otro caso, se memoriza hasta la renderización.

## Ejemplos
```php
// Ejemplo 1: Campo Select básico
eAddField('Select | tipo | D | S | 15 | | M || # |');

// Ejemplo 2: Select virtual con opciones
eAddField('Select virtual | campo1 | D | SV | 20 | | M || # |', 'S', ',; S,SI; N,NO');

// Ejemplo 3: CheckBox
eAddField('CheckBox | campo3 | D | C | 1 | | M || # |');
```