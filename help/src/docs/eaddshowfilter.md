# eAddShowFilter

## Descripción
Añade condiciones a las generadas automáticamente para mostrarlas por pantalla y en el PDF.

## Sintaxis
```php
eAddShowFilter($TxtCondicion [, $Antes=true [, $MaxRows=null [, $HV=null]]])
```

## Parámetros
- **$TxtCondicion**: Texto a mostrar o Array con las condiciones
- **$Antes** (opcional): Las condiciones se muestran antes de las automáticas (`true`) o después (`false`). Si es `2`, borra las condiciones automáticas
- **$MaxRows** (opcional): Máximo número de filas, por defecto en una sola columna
- **$HV** (opcional): Las condiciones se muestran de izquierda a derecha (Horizontal) o de arriba a abajo (Vertical)

## Funcionalidad
Permite personalizar las condiciones que se muestran en los listados HTML y PDF, ya sea añadiendo nuevas condiciones o modificando las existentes.

## Ejemplos
```php
// Ejemplo 1: Añadir condición simple
eAddShowFilter("Filtro personalizado: Activos");

// Ejemplo 2: Añadir condición al final
eAddShowFilter("Fecha: " . date('Y-m-d'), false);

// Ejemplo 3: Reemplazar condiciones automáticas
eAddShowFilter(["Condición 1", "Condición 2"], 2);
```