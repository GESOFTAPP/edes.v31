# eIcon

## Descripción
Devuelve un icono del sistema basado en un código de tecla. Equivalente al label [Icon] del sistema EDes.

## Sintaxis
```php
eIcon($KeyCode [, $InteriorDelObjeto [, $Class]])
```

## Parámetros
- `$KeyCode` (string): Código del icono a mostrar
- `$InteriorDelObjeto` (string, opcional): Contenido interior del elemento HTML
- `$Class` (string, opcional): Clase CSS adicional para el icono

## Funcionalidad
Genera el HTML necesario para mostrar iconos del sistema. Los iconos se basan en códigos predefinidos y se pueden personalizar con clases CSS adicionales. Útil para crear interfaces consistentes con el sistema EDes.

## Ejemplos
```php
// Ejemplo 1: Icono de email simple
echo eIcon("@");
// Genera el HTML para mostrar un icono de email

// Ejemplo 2: Botón con icono y texto
echo '[Button] * | ' . eIcon("@") . ' Enviar Email';
// Crea un botón con icono de email y texto

// Ejemplo 3: Icono con clase CSS personalizada
echo eIcon("save", "", "icon-large");
// Genera un icono de guardar con clase CSS adicional
```