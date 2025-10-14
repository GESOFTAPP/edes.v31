# ePermission

## Descripción
Verifica si el usuario actual tiene un permiso especial específico dentro de una opción. Los permisos especiales se gestionan desde el Desktop y permiten que ciertos usuarios puedan realizar acciones diferentes dentro de la misma opción.

## Sintaxis
```php
ePermission($Label, $Script = OpDeEntrada)
```

## Parámetros
- **$Label**: Palabra clave del permiso o palabras separadas por coma. Con cualquiera que encuentre devolvería true
- **$Script**: Opcional. Por defecto será el script de la opción que se ha ejecutado

## Funcionalidad
Esta función retorna un valor booleano indicando si el usuario tiene el permiso especial solicitado. Se puede utilizar tanto en PHP como dentro de las etiquetas [JS*] o [HTM*]. En eDes también se puede usar la forma "#P(Label)".

## Ejemplos
```php
// Ejemplo en JavaScript dentro de etiquetas
[JSEnd] mR
if( <?= ePermission('PuedeModificarDNI') ?> ) eEF('dni',false);
if( <?= !ePermission('PuedeModificarDNI') ?> ) eEF('dni',false);

// Ejemplo en PHP
[PHPIni] ?R
if( ePermission('PuedeModificarDNI') ){
    // El usuario puede modificar el DNI
    habilitarCampoDNI();
} else {
    // El usuario no puede modificar el DNI
    deshabilitarCampoDNI();
}

// Ejemplo con múltiples permisos
if( ePermission('AdminTotal,SuperUser') ){
    // El usuario tiene uno de los dos permisos
    mostrarOpcionesAvanzadas();
}
```