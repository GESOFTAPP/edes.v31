# SortList

## Sintaxis

```
[SortList] Mode | Field [ | FieldsIguales ]
```

## Descripción

Te permite ordenar manualmente un listado. Cuando tienes una tabla auxiliar y necesitas una ordenación particular puedes poner un campo para indicar la ordenación y ordenarla después de introducir los datos de forma visual. Para seleccionar las filas habrá que hacer click en la columna de ordenación "**Field**" donde se verá el icono del sistema para ordenar. Si el listado tiene paginación esta columna se ocultará.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo en el que el listado se puede reordenar, tener en cuenta los submodos "ml" y "cl" |
| **Field** | Campo donde se guarda la ordenación particular |
| **FieldsIguales** | Lista de campos que tienen que tener el mismo valor para poder mover las filas |

## Ejemplos

### Ejemplo básico
```
[SortList] l | orden | cd_gs_entidad,cd_gs_grupo

[Fields]          | cd_gs_campo   | * | T  | 2  || * |||
Entidad  | cd_gs_entidad | 0 | S  | 30 || - |||
Grupo    | cd_gs_grupo   | D | Ss | 30 || - |||
Etiqueta | etiqueta      | # | T  | 20 || - |||
Orden    | orden         | + | T  | 3  || - |||
```
En este ejemplo:
- El listado es ordenable manualmente en modo "l"
- El campo "orden" almacena la ordenación particular
- Solo se pueden mover filas que tengan los mismos valores en "cd_gs_entidad" y "cd_gs_grupo"
- Al hacer click en la columna "Orden", aparecerá el icono del sistema para reordenar las filas

### Ejemplo simple sin restricciones
```
[SortList] ml | posicion
```
Permite ordenar el listado en modo "ml" usando el campo "posicion" sin restricciones de campos iguales.