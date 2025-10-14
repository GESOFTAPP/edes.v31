# eAddButton

## Descripción
Función para crear botones dinámicos con icono, etiqueta y funcionalidad de click personalizada.

## Sintaxis
```php
eAddButton( $icon="", $label="", $click="", $title="", $inner="", $addClass="" )
eAddButton(["icon"=>"U", "label"=>"Grabar textos", "click"=>"Grabar()", "class"=>"AddButton"])
```

## Parámetros
- `$icon` (string): Icono del botón
- `$label` (string): Texto del botón
- `$click` (string): Función JavaScript a ejecutar al hacer click
- `$title` (string): Tooltip del botón
- `$inner` (string): Contenido HTML interno adicional
- `$addClass` (string): Clases CSS adicionales

## Funcionalidad
Genera un botón HTML con las propiedades especificadas, permitiendo tanto sintaxis de parámetros individuales como array asociativo.

## Ejemplos
```php
// Ejemplo 1: Botón básico
eAddButton("save", "Guardar", "save()", "Guardar datos");

// Ejemplo 2: Botón con array
eAddButton(["icon"=>"U", "label"=>"Grabar textos", "click"=>"Grabar()", "class"=>"AddButton"]);

// Ejemplo 3: Botón con clase personalizada
eAddButton("delete", "Eliminar", "confirmarEliminar()", "Eliminar registro", "", "btn-danger");
```