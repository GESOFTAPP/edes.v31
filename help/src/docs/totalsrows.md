# TotalsRows

## Sintaxis

```
[TotalsRows]
```

## Descripción

Coloca un color de fondo a la última fila del listado. Se trata de un conmutador que funciona sin parámetros.

Esta etiqueta es útil para destacar visualmente la última fila de un listado cuando no se están usando filas de totales generadas automáticamente.

## Parámetros

Esta etiqueta no requiere parámetros.

## Consideraciones importantes

- Las filas de totales creadas con la etiqueta `[ColsOp]` ya tienen un color de fondo automáticamente
- Esta etiqueta está diseñada para poner color de fondo a la última fila cuando **no** hay filas de totales
- No es necesaria para listados que ya tengan una fila de totales generada con `[ColsOp]`
- Actúa como un simple modificador visual

## Cuándo usar TotalsRows

### ✅ Usar cuando:
- El listado no tiene filas de totales
- Se quiere destacar visualmente la última fila
- Se necesita diferenciación visual sin cálculos

### ❌ No usar cuando:
- Ya existe una etiqueta `[ColsOp]` que genera filas de totales
- El listado ya tiene formato especial en la última fila

## Ejemplo

```
[TotalsRows]
```

Simplemente agrega esta etiqueta para que la última fila del listado tenga un color de fondo destacado.

## Relación con otras etiquetas

- **`[ColsOp]`**: Genera filas de totales con color de fondo automático
- **`[FormatTotals]`**: Formatea las filas de totales generadas por `[ColsOp]`
- **`[TotalsRows]`**: Agrega color de fondo a la última fila cuando no hay totales automáticos