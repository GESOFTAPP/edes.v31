# eDelShowFilter

## Descripción
Elimina de la lista de condiciones los campos indicados. Las condiciones sólo son visibles en los listados HTML y en los PDF. Si la lista de campos es un "*" eliminará de las condiciones todas las variables `$_POST` y `$_GET` visualizando solo las que pongas con `eAddShowFilter()`.

## Sintaxis
```php
eDelShowFilter($ListaDeCampos)
```

## Parámetros
- **$ListaDeCampos**: Lista de campos a eliminar separados por coma, o "*" para eliminar todas las variables POST y GET

## Funcionalidad
Permite ocultar campos específicos de las condiciones mostradas en listados y PDFs, ofreciendo control granular sobre qué información se muestra al usuario.

## Ejemplos
```php
// Ejemplo 1: Eliminar campos específicos
eDelShowFilter('desano,hasano,cd_filtro,TipoL,desmes,hasmes,cd_auto,cd_prov,cd_coma,cd_muni,cd_distri');

// Ejemplo 2: Eliminar todas las variables POST/GET
eDelShowFilter('*');

// Ejemplo 3: Eliminar solo algunos campos
eDelShowFilter('campo1,campo2,campo3');
```