# LoadSel

## Sintaxis

```
[LoadSel] <ListaDeFicherosACargar>
```

## Descripción

Especifica una lista de ficheros que se cargarán automáticamente cuando se seleccione la etiqueta correspondiente. Esta funcionalidad permite la carga dinámica de recursos específicos basada en la selección del usuario.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| ListaDeFicherosACargar | string | Ruta del fichero o lista de ficheros separados por comas que se cargarán al seleccionar la etiqueta. Puede incluir rutas relativas o absolutas | Sí |

## Ejemplos

### Ejemplo básico
```
[LoadSel] ges/fn.maestras.inc.php
```

### Ejemplo con múltiples ficheros
```
[LoadSel] ges/fn.maestras.inc.php, utils/validaciones.php, config/settings.php
```

### Ejemplo con rutas relativas
```
[LoadSel] ./modules/reportes.php, ../shared/common_functions.php
```