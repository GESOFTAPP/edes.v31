# DBFilterIn

## SINTAXIS

```
[DBFilterIn] FieldIndex, Table, Condition1 [, Condition2, .... ]
```

## DESCRIPCIÓN

Filtra registros a través de otra tabla generando automáticamente una consulta del tipo:

```sql
FieldIndex in (select FieldIndex from Table where Condition1, ...)
```

### Características:

- **Filtro dinámico**: Solo se aplican las condiciones que tengan valor
- **Subconsulta automática**: Genera el SELECT interno automáticamente
- **Condiciones múltiples**: Permite múltiples condiciones separadas por comas
- **Validación**: Ignora condiciones vacías o sin valor

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **FieldIndex** | Campo de la tabla principal cuyo valor se buscará |
| **Table** | Nombre de la tabla donde se realizará la búsqueda |
| **Condition1, Condition2, ...** | Lista de condiciones WHERE. Solo se aplican las que tengan valor |

## FUNCIONAMIENTO

1. **Evaluación**: Se evalúan todas las condiciones
2. **Filtrado**: Se descartan las condiciones sin valor
3. **Generación**: Se crea la subconsulta con las condiciones válidas
4. **Aplicación**: Se aplica el filtro IN a la consulta principal

## EJEMPLO

```
[DBFilterIn] cd_gs_user, gs_user, cd_auto='{$_Auto}', cd_prov='{$_Prov}', cd_coma='{$_Coma}'
```

### Explicación del ejemplo:

- **Campo a filtrar**: `cd_gs_user`
- **Tabla de búsqueda**: `gs_user`
- **Condiciones**:
  - `cd_auto='{$_Auto}'` - Solo se aplica si `$_Auto` tiene valor
  - `cd_prov='{$_Prov}'` - Solo se aplica si `$_Prov` tiene valor
  - `cd_coma='{$_Coma}'` - Solo se aplica si `$_Coma` tiene valor

### SQL generado (ejemplo):

Si `$_Auto='001'` y `$_Prov='28'` (pero `$_Coma` está vacío):

```sql
cd_gs_user in (
    select cd_gs_user 
    from gs_user 
    where cd_auto='001' and cd_prov='28'
)
```

## CASOS DE USO

### Ejemplo 1: Filtro por permisos de usuario
```
[DBFilterIn] cd_cliente, user_permissions, cd_user='{$_SESSION[user_id]}', active='1'
```

### Ejemplo 2: Filtro geográfico
```
[DBFilterIn] cd_provincia, provincias_permitidas, cd_region='{$_Region}', estado='ACTIVO'
```

### Ejemplo 3: Filtro por categorías
```
[DBFilterIn] cd_producto, productos_categoria, categoria='{$_Categoria}', visible='S'
```

## VENTAJAS

- **Simplicidad**: No necesitas escribir subconsultas manualmente
- **Dinámico**: Se adapta automáticamente a las condiciones con valor
- **Eficiente**: Solo aplica filtros necesarios
- **Flexible**: Permite múltiples condiciones de filtrado

## NOTAS IMPORTANTES

- Las condiciones vacías se ignoran automáticamente
- Usar comillas simples para valores de texto en las condiciones
- El campo FieldIndex debe existir en ambas tablas
- Útil para filtros basados en permisos o configuraciones dinámicas