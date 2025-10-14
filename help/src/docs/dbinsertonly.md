# DBInsertOnly

## SINTAXIS

```
[DBInsertOnly]
```

## DESCRIPCIÓN

Convierte las operaciones de modificación de registros en operaciones de alta, manteniendo un historial de versiones. Cuando se modifica un registro:

1. **Registro original**: Se marca como histórico (`status = "H"`)
2. **Nuevo registro**: Se crea con los datos modificados
3. **Campos automáticos**: Se añaden `cd_gs_user` y `cdi`
4. **Filtro automático**: Se aplica `[DBAddFilter] status is null` para ocultar registros históricos

### Características:

- **Solo fichas**: Actualmente disponible únicamente en fichas
- **Historial automático**: Mantiene versiones anteriores sin borrarlas
- **Filtrado automático**: Los registros históricos no se visualizan por defecto
- **Auditoría**: Registra usuario y información de control

## FUNCIONAMIENTO

### Flujo de modificación:

1. **Usuario modifica registro** → Sistema detecta cambio
2. **Registro actual** → `status = "H"` (histórico)
3. **Nuevo registro** → Se crea con datos modificados
4. **Campos añadidos**:
   - `cd_gs_user`: Usuario que realizó el cambio
   - `cdi`: Información de control/identificación
5. **Vista filtrada** → Solo muestra registros activos (`status is null`)

## CAMPOS REQUERIDOS

La tabla debe tener los siguientes campos:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| **status** | CHAR(1) | Estado del registro: `NULL` (activo), `H` (histórico) |
| **cd_gs_user** | VARCHAR | Código del usuario que realizó la operación |
| **cdi** | VARCHAR/INT | Campo de control/identificación |

## EJEMPLO

```
[DBInsertOnly]
```

### Estructura de tabla recomendada:

```sql
CREATE TABLE mi_tabla (
    id INT PRIMARY KEY,
    codigo VARCHAR(20),
    descripcion VARCHAR(100),
    -- ... otros campos de datos ...
    status CHAR(1),           -- NULL=activo, H=histórico
    cd_gs_user VARCHAR(20),   -- Usuario
    cdi INT                   -- Control ID
);
```

## VENTAJAS

- **Auditoría completa**: Historial de todos los cambios
- **No pérdida de datos**: Los registros nunca se eliminan realmente
- **Transparencia**: El usuario no nota el cambio de comportamiento
- **Trazabilidad**: Se puede rastrear quién y cuándo hizo cambios

## CASOS DE USO

### Gestión de productos
```
[DBInsertOnly]
```
Mantiene historial de cambios de precios y especificaciones.

### Datos de clientes
```
[DBInsertOnly]
```
Conserva versiones anteriores de información de contacto.

### Configuraciones del sistema
```
[DBInsertOnly]
```
Permite revertir cambios manteniendo historial.

## CONSULTAS HISTÓRICAS

Para ver el historial completo (incluyendo registros históricos):

```sql
-- Consulta manual sin filtro automático
SELECT * FROM tabla WHERE codigo = 'X123' ORDER BY cdi DESC;
```

## FILTRO AUTOMÁTICO APLICADO

El sistema añade automáticamente:
```
[DBAddFilter] status is null
```

Esto significa que las consultas normales solo mostrarán registros activos.

## NOTAS IMPORTANTES

- **Solo en fichas**: No disponible en listados o consultas
- **Campos obligatorios**: La tabla debe tener `status`, `cd_gs_user`, y `cdi`
- **Comportamiento transparente**: El usuario modifica normalmente
- **Espacio en disco**: Aumenta el uso de almacenamiento por el historial
- **Rendimiento**: Las consultas pueden ser más lentas con muchos registros históricos