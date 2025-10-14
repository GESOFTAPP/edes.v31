# DataTypeTo

## Sintaxis

```
[DataTypeTo] field | typeField [ | NombreMenú, fieldFrom, fieldTo ] ...
```

## Descripción

Los campos de tipo `date` pueden definirse con distinta precisión. Esta etiqueta permite definir el dato con varias precisiones y conmutarlo según la necesidad del usuario. 

**Características:**
- Solo está disponible en las fichas y al preguntar
- Genera automáticamente la etiqueta `[DBRange]` necesaria para definir un dato desde/hasta
- Muestra un icono a la derecha del campo para conmutar entre los diferentes tipos
- El orden del menú será el definido en la etiqueta
- Por defecto es visible la primera definición, salvo que se anteponga `*` a otra opción
- Al rellenar el dato en cualquier formato, el sistema completa automáticamente los dígitos faltantes para formar el campo con el formato `typeField`

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **field** | Nombre del campo principal |
| **typeField** | Tipo de campo de la base de datos (ej: CDI, F4, P4, Y) |
| **NombreMenú** | Nombre que aparecerá en el menú de opciones |
| **fieldFrom** | Campo "desde" para el rango |
| **fieldTo** | Campo "hasta" para el rango |

> **Nota:** Se pueden definir múltiples opciones separadas por `|`. Anteponer `*` al nombre del menú para que sea la opción visible por defecto.

## Ejemplo

```
[DataTypeTo] cdi | CDI |
    Instante     , _cdi_desde , _cdi_hasta |
    Fecha+Hora   , _cdi2_desde, _cdi2_desde_hours, _cdi2_hasta, _cdi2_hasta_hours |
    Fecha        , _fe_desde  , _fe_hasta  |
   *Periodo      , _per_desde , _per_hasta |
    Año          , _ayo_desde , _ayo_hasta

[Fields]
? .                  | cdi               | CDI | T | 19 | | Q  | |   |
     Instante desde  | _cdi2_desde       | F4  | T | 10 | | QF | |   |
     ,               | _cdi2_desde_hours | H   | T |  8 | | Q  | |   |
     , Hasta         | _cdi2_hasta       | F4  | T | 10 | | QF | |   |
     ,               | _cdi2_hasta_hours | H   | T |  8 | | Q  | |   |
     Instante desde  | _cdi_desde        | CDI | T | 19 | | QF | |   |
     , Hasta         | _cdi_hasta        | CDI | T | 19 | | QF | |   |
     Fecha desde     | _fe_desde         | F4  | T | 10 | | QF | |   |
     , Hasta         | _fe_hasta         | F4  | T | 10 | | QF | |   |
     Periodo desde   | _per_desde        | P4  | T |  7 | | QP | |   |
     , Hasta         | _per_hasta        | P4  | T |  7 | | QP | |   |
     Año desde       | _ayo_desde        | 0   | T  |  4 | | Q  | | % |
     , Hasta         | _ayo_hasta        | 0   | T  |  4 | | Q  | | % |
```

### Explicación del ejemplo

En este ejemplo se tiene en la base de datos el campo `cdi` y se puede conmutar entre:

- **Instante**: Timestamp normal completo
- **Fecha+Hora**: Timestamp separando fecha de hora en campos distintos  
- **Fecha**: Solo la fecha
- **Periodo**: Formato de periodo (P4)
- **Año**: Solo el año

Por defecto se muestra la opción "Periodo" (marcada con `*`) como dato visible inicial.

## Notas Importantes

- La etiqueta `[DBRange]` se genera automáticamente
- El sistema completa automáticamente los formatos de fecha incompletos
- El icono de conmutación aparece automáticamente a la derecha del campo
- Solo funciona en contextos de fichas y consultas