# DBBakDelete

## SINTAXIS

```
[DBBakDelete] [ DateField, UserField ]
```

## DESCRIPCIÓN

Permite hacer una copia de seguridad de un registro antes de borrarlo, copiándolo a una tabla paralela con la misma estructura. Al nombre de la tabla original se le añade el sufijo `_dlt` (contracción de "deleted").

### Características:

- **Tabla de respaldo**: Se crea automáticamente con sufijo `_dlt`
- **Estructura idéntica**: La tabla de respaldo debe tener la misma estructura que la original
- **Recuperación**: Permite recuperar registros borrados desde la tabla `_dlt`
- **Multifichas**: Solo funciona si todas las solapas usan la misma tabla
- **Requisito**: Las tablas deben existir previamente

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **DateField** | Nombre del campo donde se guarda la fecha del momento del borrado/recuperación |
| **UserField** | Nombre del campo donde se guarda el usuario que realiza el borrado/recuperación |

## CONVENCIONES DE NOMBRES

Los campos deben seguir estos prefijos:

- **`dt_`**: Para campos de fecha
- **`ys_`**: Para campos datetime con precisión year to seconds

## EJEMPLO COMPLETO

### Archivo: `proveedor.edf`
```
[DBBakDelete]
```

### Archivo: `proveedor_dlt.edf`
```
#Include(*) proveedor.edf
[Title] RECUPERAR PROVEEDOR/ES
[DBTable] proveedor_dlt
```

### Explicación del ejemplo:

1. **Archivo principal** (`proveedor.edf`):
   - Define `[DBBakDelete]` para activar la copia de seguridad
   - Antes de borrar, copia el registro a `proveedor_dlt`

2. **Archivo de recuperación** (`proveedor_dlt.edf`):
   - Incluye toda la definición del archivo original
   - Modifica el título para indicar que es para recuperación
   - Cambia la tabla de trabajo a `proveedor_dlt`
   - Permite recuperar registros borrados

### Uso:
- Ambos scripts se ejecutan en modo borrar (`b`)
- El usuario puede recuperar registros desde la tabla `_dlt`

## EJEMPLO CON CAMPOS DE AUDITORÍA

```
[DBBakDelete] dt_deleted, ys_deleted_by
```

En este caso:
- `dt_deleted`: Campo fecha que registra cuándo se borró
- `ys_deleted_by`: Campo datetime que registra quién y cuándo borró

## FLUJO DE TRABAJO

1. **Borrado**: El registro se copia a `tabla_dlt` antes de eliminarse
2. **Recuperación**: Desde `tabla_dlt` se puede restaurar el registro
3. **Auditoría**: Se registra fecha y usuario de la operación

## NOTAS IMPORTANTES

- Las tablas `_dlt` deben crearse manualmente con la misma estructura
- En multifichas, todas las solapas deben usar la misma tabla
- Los campos de auditoría son opcionales pero recomendados
- Útil para cumplir requisitos de trazabilidad y recuperación