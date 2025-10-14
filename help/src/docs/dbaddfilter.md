# DBAddFilter

## SINTAXIS

```
[DBAddFilter] Condition [ | FielsNoInfo [ | *PDFCONDITIONHIDDEN [ | *PDFCONDITIONHIDDEN ... ] ] ]
```

## DESCRIPCIÓN

Añade una condición a la cláusula `WHERE` de la consulta SQL. En el caso de un grupo de fichas, la etiqueta se debe colocar en el GDF (script principal del grupo de fichas).

### Características especiales:

- **Variables**: Se pueden usar variables encerradas entre llaves, ejemplo: `{$_Node}`
- **Comillas**: Utilizar comillas simples cuando sea necesario
- **Funciones**: Puede ser una función sin parámetros que devuelva la condición
- **Búsquedas relacionadas**: Usar `=` antes del WHERE para buscar registros con condiciones de otras tablas
- **Alias especial**: Usar `#.` como alias del campo de la tabla padre

### Uso con $_DBADDFILTER

Para cambios dinámicos del filtro usando la variable `$_DBADDFILTER`, todos los campos que necesiten alias de la tabla principal se deben definir con el alias `#`:

```sql
$_DBADDFILTER = "#.campo in ( select ...)"
```

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Condition** | Condición SQL a añadir al WHERE. Si hay SELECT o se usan múltiples tablas, anteponer alias: `A` para tabla principal, `B`, `C`, etc. para otras tablas |
| **FielsNoInfo** | Lista de campos que no se mostrarán en listados ni PDF cuando se muestren las condiciones del listado |
| **PDFCONDITIONHIDDEN** | Condiciones ocultas adicionales para PDF |

## ALIAS DE TABLAS

- **A**: Alias de la tabla principal
- **B, C, D...**: Alias para tablas adicionales en SELECT
- **#**: Alias especial para la tabla principal en búsquedas relacionadas

## EJEMPLOS

### Ejemplo 1: Condición simple
```
[DBAddFilter] estado=3
```

### Ejemplo 2: Usando variables
```
[DBAddFilter] gs_node={$_Node}
```

### Ejemplo 3: Usando función
```
[DBAddFilter] HesdeHace2Dias()
```

### Ejemplo 4: Subconsulta básica
```
[DBAddFilter] cd_prov in (select cd_auto from auto)
```

### Ejemplo 5: Búsqueda con EXISTS y alias especial
```
[DBAddFilter] =exists (select cd_auto from auto where cd_auto=#.cd_prov)
```

### Ejemplo 6: Con campos ocultos en listados
```
[DBAddFilter] estado=1 | estado,fecha_creacion
```

### Ejemplo 7: Condición compleja con múltiples tablas
```
[DBAddFilter] A.activo=1 and B.tipo='CLIENTE'
```

## NOTAS IMPORTANTES

- En grupos de fichas, colocar siempre en el script GDF
- Las comillas dentro de las condiciones deben ser simples (`'`)
- Para subconsultas ejecutadas por LDF, se puede usar esta etiqueta
- El parámetro `FielsNoInfo` es útil para ocultar campos técnicos en reportes