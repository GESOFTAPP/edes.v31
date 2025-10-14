# slColsOp

## Sintaxis
```
{slColsOp} ColOp1, ColOp2, ..... , ColOpN
```

## Descripción
Permite realizar operaciones aritméticas en las columnas de los listados. Define una lista de operaciones separadas por comas, donde cada operación corresponde a la columna de su posición en el listado.

**Funcionalidad:** Crea una fila adicional al final del listado con el resultado de las operaciones especificadas para cada columna.

## Parámetros

### ColOp - Operaciones por Columna

| Operación | Símbolo | Descripción |
|-----------|---------|-------------|
| **Suma** | `+` | Suma todos los valores numéricos de la columna |
| **Contador** | `C` | Cuenta el total de registros |
| **Contador condicional** | `#` | Cuenta solo si el valor no está vacío ni es cero |
| **Sin operación** | (vacío) | No realiza ninguna operación en la columna |

### Cadenas de Texto Personalizadas

Para mostrar texto personalizado en lugar de valores calculados:

#### Sintaxis básica:
```
"texto"    # Comillas dobles
'texto'    # Comillas simples
```

#### Alineación de texto:
| Carácter | Alineación | Ejemplo |
|----------|------------|---------|
| `<` | Izquierda | `<"Total"` |
| `=` | Centrado | `="TOTAL"` |
| `>` | Derecha | `>"Total:"` |

## Ejemplos de Uso

### Ejemplo Básico
```
{slColsOp} ,,+
```
- **Columna 1:** Sin operación
- **Columna 2:** Sin operación  
- **Columna 3:** Suma todos los valores

### Ejemplo Completo
```
{slColsOp} C,="TOTAL",+,#,'Promedio'
```
- **Columna 1:** `C` - Cuenta registros
- **Columna 2:** `="TOTAL"` - Muestra "TOTAL" centrado
- **Columna 3:** `+` - Suma valores
- **Columna 4:** `#` - Cuenta valores no vacíos/no cero
- **Columna 5:** `'Promedio'` - Muestra texto "Promedio"

### Ejemplo con Alineaciones
```
{slColsOp} <"Items:",+,>"Total:",+
```
- **Columna 1:** `<"Items:"` - Texto "Items:" alineado a la izquierda
- **Columna 2:** `+` - Suma valores
- **Columna 3:** `>"Total:"` - Texto "Total:" alineado a la derecha
- **Columna 4:** `+` - Suma valores

## Casos de Uso Comunes

### Listado de Ventas
```sql
SELECT producto, cantidad, precio, importe FROM ventas
```
```
{slColsOp} <"TOTALES:",+,="---",+
```

### Inventario
```sql
SELECT codigo, descripcion, stock, valor FROM productos
```
```
{slColsOp} C,="RESUMEN",+,+
```

### Reporte Financiero
```sql
SELECT concepto, ingresos, gastos, saldo FROM movimientos
```
```
{slColsOp} <"TOTALES:",+,+,+
```

## Notas Importantes

- **Posición:** Cada operación debe corresponder exactamente con la posición de la columna
- **Separadores:** Las operaciones deben separarse por comas
- **Columnas vacías:** Use espacios en blanco para columnas sin operación
- **Fila de totales:** Se agrega automáticamente al final del listado
- **Tipos de datos:** Las operaciones numéricas solo funcionan con valores numéricos válidos
- **Flexibilidad:** Se pueden combinar operaciones aritméticas con texto personalizado en la misma configuración