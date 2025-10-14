# DBUnion

## Sintaxis
```
[DBUnion] Delimitador, VariableDate, DesdeAño, HastaAño
```

## Descripción
Cuando tenemos tablas partidas por años se puede listar por "n" años. Genera un grupo de tablas (si existen) haciendo una unión entre ellas mediante consultas UNION.

Esta función es especialmente útil para sistemas que archivan datos históricos en tablas separadas por año, permitiendo consultar múltiples años de forma transparente.

## Parámetros

| Parámetro | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| **Delimitador** | `string` | Carácter que separa el nombre base de la tabla del año. Normalmente "_" | `_`, `*` |
| **VariableDate** | `string` | Parámetro de la función `date()` de PHP para el formato del año | `y` (2 dígitos), `Y` (4 dígitos) |
| **DesdeAño** | `integer` | Número de años a sumar al resultado de `date()`. Normalmente "0" para el año actual | `0`, `-1`, `1` |
| **HastaAño** | `integer` | Número de años a sumar al resultado de `date()`. Define el rango hacia atrás | `-5`, `-10` |

## Ejemplos

### Ejemplo 1: Delimitador asterisco con año de 2 dígitos
```
[DBTable] factura
[DBUnion] *, y, 0, -5
```

**Resultado:** En modo listado hará una unión entre las tablas:
- `factura` (tabla actual)
- `factura*24` (año 2024)
- `factura*23` (año 2023)
- `factura*22` (año 2022)
- `factura*21` (año 2021)
- `factura*20` (año 2020)

### Ejemplo 2: Delimitador asterisco con año de 4 dígitos
```
[DBTable] factura
[DBUnion] *, Y, 0, -5
```

**Resultado:** En modo listado hará una unión entre las tablas:
- `factura` (tabla actual)
- `factura*2024` (año 2024)
- `factura*2023` (año 2023)
- `factura*2022` (año 2022)
- `factura*2021` (año 2021)
- `factura*2020` (año 2020)

## Notas Importantes

- ⚠️ **Existencia de tablas**: El sistema solo incluirá en la unión las tablas que realmente existan en la base de datos
- 📅 **Año de referencia**: Los cálculos se basan en el año actual según `date()`
- 🔍 **Rendimiento**: Ten en cuenta que consultar múltiples años puede impactar el rendimiento según el volumen de datos
- 📊 **Estructura**: Todas las tablas en la unión deben tener la misma estructura de columnas

## Casos de Uso Comunes

- **Facturas por año**: `factura_2024`, `factura_2023`, etc.
- **Logs históricos**: `log_aplicacion_2024`, `log_aplicacion_2023`, etc.
- **Ventas anuales**: `ventas*24`, `ventas*23`, etc.
- **Reportes históricos**: Consultas que abarcan múltiples períodos anuales