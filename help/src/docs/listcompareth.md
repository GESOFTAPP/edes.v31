# ListCompareTH

## Sintaxis

```
[ListCompareTH] TH,TH,TH,...
```

## Descripción

Define los títulos de las columnas en la comparación de listados. Esta etiqueta solo está activa si se utiliza conjuntamente con la etiqueta `[ListCompare]`. Permite personalizar los encabezados de las columnas generadas por la comparación.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **TH** | Título de cada columna separado por comas |

### Opciones para TH

| Valor | Comportamiento |
|-------|----------------|
| **Texto** | Muestra el texto especificado como título de la columna |
| *(vacío)* | No muestra nada en el título de esa columna |
| **=** | Usa el valor del formulario como título de la columna |

## Relación con ListCompare

Esta etiqueta debe usarse en conjunto con `[ListCompare]` y el número de títulos debe corresponder con el número de columnas generadas por la comparación.

## Ejemplo

```
[ListCompare] producto,ventas | fecha_inicio, fecha_fin | 0,1,0,1
[ListCompareTH] Producto Ene,Ventas Ene,Producto Feb,Ventas Feb
```

Este ejemplo:
- Crea una comparación con 4 columnas
- Define títulos personalizados: "Producto Ene", "Ventas Ene", "Producto Feb", "Ventas Feb"

### Ejemplo con valores vacíos y formulario

```
[ListCompare] codigo,descripcion,cantidad | fecha_ini, fecha_fin | 0,1,2,0,1,2
[ListCompareTH] Código,,Cantidad =,=,Total
```

Este ejemplo:
- Primera columna: "Código"
- Segunda columna: Sin título (vacío)
- Tercera columna: "Cantidad " + valor del formulario
- Cuarta columna: Valor del formulario
- Quinta columna: Valor del formulario  
- Sexta columna: "Total"

> **Nota**: El símbolo "=" toma el valor correspondiente del formulario para usar como título de la columna.