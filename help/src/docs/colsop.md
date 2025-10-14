# ColsOp

## Sintaxis

```
[ColsOp] ColOp1, ColOp2, ..... , ColOpN [ | TitleSubtotal, TitleSubTotal, ... | ColSpanParaElTitle |  ? ]
```

**Sintaxis alternativa:**
```
[ColsOp] Campo=Valor, Campo=Valor, ...
```

## Descripción

Define operaciones a realizar en las columnas de los listados. Lista de operaciones aritméticas separadas por comas donde cada operación corresponde a la columna de su posición en el listado. En los listados, crea una fila adicional con el resultado de las operaciones efectuadas en las columnas especificadas.

## Parámetros

### Operaciones por columna (ColOp)

| Operación | Descripción |
|-----------|-------------|
| + | Suma |
| C | Cuenta registros |
| # | Cuenta si no está vacío ni es cero |
| S | Subtotal cuando la celda cambia de valor, varios niveles |
| % | Calcula el tanto por ciento de la celda dentro de la columna |
| L | Marca una línea divisoria en el PDF cuando cambia el valor |
| M | Calcula la media |
| Summary | Genera columna de totales al final |
| (vacío) | Sin operación |

### Parámetros adicionales

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| TitleSubtotal | string | Constante a mostrar en subtotales. Puede usar `{V}` (valor del campo) y `{C}` (valor del grupo). Si termina en "C" o es solo "C", cuenta registros del grupo | Opcional |
| ColSpanParaElTitle | number | Número de columnas a unir en el título de subtotales | Opcional |

### Parámetros para Summary

| Parámetro | Descripción |
|-----------|-------------|
| Label | Etiqueta de la columna (default "Total") |
| Dígitos | Número de dígitos del total (default 7) |
| empty | Mostrar entradas con valor "0" (solo para select virtuales) |

## Ejemplos

### Ejemplo básico con operaciones

```
[ColsOp] ,,,#,,,+,+,+,,,
```

Cuenta registros en columna 3, suma en columnas 6, 7 y 8.

### Ejemplo con subtotales

```
[ColsOp] S,S,C,,+,+,+,+ | Obra: {v}, Proveedor: {v} | 2
```

Subtotales en columnas 0 y 1, cuenta en columna 2, suma en columnas 4-7.

### Ejemplo con subtotales avanzados

```
[ColsOp] S,S,,,,C,+,+,+,+ | obra: {v}, prov: {v} | 3 | R,L | 1,0.8 | 0.8,0.9 | 0
```

Subtotales complejos con múltiples niveles y configuraciones personalizadas.

### Ejemplo con sintaxis alternativa

```
[ColsOp] nombre=C, total=+, cd_auto{prov,cd_prov,nm_prov}=C, cd_auto:cd_prov=C
```

Operaciones específicas por nombre de campo.

### Ejemplo con Summary

```
[ColsOp] Summary | TotalCol | 5 | empty
[Fields] l
    Estado | estado | X | SV | 10 | | - | | |
```

Genera un informe de un solo campo haciendo "group by".

## Notas

### Formateo de cadenas
- Las cadenas se ponen entre comillas dobles o sencillas
- Justificación: `<` (izquierda), `=` (centrar), `>` (derecha)

### Subtotales
- Manejan clases CSS: `GC1`, `GC2`... (cabecera de grupo) y `GR1`, `GR2`... (resumen de grupo)
- Si solo hay tipo "S" sin "C", "+" o "#", solo pinta cabeceras
- No debe haber columnas ocultas al usar "S"
- Variables disponibles: `{V}` (valor del campo), `{C}` (valor del grupo)

### Sintaxis alternativa
- No disponible el parámetro "S" para subtotales
- Permite operaciones específicas por nombre de campo