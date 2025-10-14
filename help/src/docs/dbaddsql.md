# DBAddSql

## Sintaxis
```
[DBAddSql] Sentencia SQL
```

## Descripción
Añade campos al cursor actual a través de sentencias SQL. 

### Características principales:
- Los **campos de la condición** se deben colocar entre llaves: `{nombre_campo}`
- Para utilizar **variables** en lugar de campos: `{$NomVar}` (se distingue por el signo `$`)
- Si se encuentra un **par de paréntesis**, se invocará a la función correspondiente que deberá retornar el valor de búsqueda
- Esta etiqueta solo está implementada en las **fichas simples**

## Parámetros
- **Sentencia SQL**: La consulta SQL que se ejecutará para añadir campos al cursor

## Ejemplo
```sql
[DBAddSql] select nm_muni from muni where cd_prov={cd_prov} and cd_muni={cd_muni}
```

### Explicación del ejemplo:
- Se ejecuta una consulta SELECT para obtener el nombre del municipio (`nm_muni`)
- Se utiliza la tabla `muni`
- Las condiciones WHERE utilizan campos del cursor actual:
  - `{cd_prov}`: código de provincia
  - `{cd_muni}`: código de municipio
- El resultado se añade como un nuevo campo al cursor actual