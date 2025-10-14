# PDFColsShade

## SINTAXIS

```
[PDFColsShade] Sombra%, Sombra%, ...
```

**Sintaxis alternativa:**
```
[PDFColsShade] Campo=Valor, Campo=Valor, ...
```

## DESCRIPCIÓN

Aplica sombreado (fondo gris) a las columnas especificadas en los documentos PDF generados. Permite crear efectos visuales para destacar columnas importantes o mejorar la legibilidad de tablas con muchas columnas mediante el uso de fondos con diferentes intensidades de gris.

El sombreado se especifica como un porcentaje, donde valores más altos producen un gris más oscuro.

## PARÁMETROS

| Parámetro | Tipo | Descripción | Rango de Valores |
|-----------|------|-------------|------------------|
| **Sombra%** | Integer | Porcentaje de intensidad del sombreado | `0` < valor < `100`<br>Vacío = Sin sombreado |
| **Campo** | String | Nombre del campo (en sintaxis alternativa) | Debe coincidir con el nombre en `[Fields]` |
| **Valor** | Integer | Porcentaje de sombreado para el campo | Mismo rango que Sombra% |

### Rangos de sombreado:

- **`0`** o **vacío**: Sin sombreado (fondo blanco)
- **`1-20`**: Sombreado muy claro (gris muy suave)
- **`21-40`**: Sombreado claro (gris suave)
- **`41-60`**: Sombreado medio (gris visible)
- **`61-80`**: Sombreado oscuro (gris fuerte)
- **`81-99`**: Sombreado muy oscuro (gris casi negro)

### Consideraciones visuales:

- Valores entre **5-15%** son ideales para fondos sutiles
- Valores entre **20-30%** proporcionan buen contraste sin dificultar la lectura
- Valores superiores al **50%** pueden requerir texto en color claro

## EJEMPLOS

### Ejemplo 1: Sombreado básico posicional

```
[PDFColsShade] 10,5,,10

[Fields]
    Código    | codigo    | X | T | 10 | 50  | AQ |     |   |
    Nombre    | nombre    | X | T | 50 | 200 | MQ |     | # |
    Categoría | categoria | X | T | 20 | 100 | MQ |     |   |
    Precio    | precio    | X | N | 12 | 80  | MQ |     |   |
```

**Resultado:**
- Columna `codigo`: 10% de sombreado (gris claro)
- Columna `nombre`: 5% de sombreado (gris muy claro)
- Columna `categoria`: Sin sombreado (fondo blanco)
- Columna `precio`: 10% de sombreado (gris claro)

### Ejemplo 2: Sintaxis alternativa con nombres de campo

```
[PDFColsShade] dni=10

[Fields]
    DNI       | dni       | X | T | 12 | 80  | AQ |     |   |
    Nombre    | nombre    | X | T | 40 | 200 | MQ |     | # |
    Apellidos | apellidos | X | T | 40 | 200 | MQ |     |   |
    Email     | email     | X | T | 30 | 250 | MQ |     |   |
```

**Resultado:**
- Columna `dni`: 10% de sombreado
- Otras columnas: Sin sombreado (fondo blanco por defecto)

### Ejemplo 3: Patrón alternado para mejorar legibilidad

```
[PDFColsShade] ,15,,15,,15

[Fields]
    Fecha     | fecha     | X | T | 10 | 80  | AQ |     |   |
    Cliente   | cliente   | X | T | 25 | 150 | MQ |     | # |
    Producto  | producto  | X | T | 30 | 200 | MQ |     |   |
    Cantidad  | cantidad  | X | N | 8  | 60  | MQ |     |   |
    Precio    | precio    | X | N | 10 | 80  | MQ |     |   |
    Total     | total     | X | N | 12 | 100 | MQ |     |   |
```

**Resultado:**
- Patrón alternado: blanco, gris claro, blanco, gris claro, blanco, gris claro
- Mejora significativamente la legibilidad de tablas anchas

### Ejemplo 4: Destacar columnas importantes

```
[PDFColsShade] ,,25,40,

[Fields]
    Código    | codigo    | X | T | 8  | 50  | AQ |     |   |
    Descripción| desc     | X | T | 40 | 300 | MQ |     | # |
    Stock Mín | stock_min | X | N | 8  | 60  | MQ |     |   |
    Stock Act | stock_act | X | N | 8  | 60  | MQ |     |   |
    Estado    | estado    | X | T | 10 | 80  | MQ |     |   |
```

**Resultado:**
- `stock_min`: 25% de sombreado (resaltado medio)
- `stock_act`: 40% de sombreado (resaltado fuerte)
- Ideal para destacar columnas críticas como niveles de stock

### Ejemplo 5: Caso práctico completo con múltiples intensidades

```
[Title]=INFORME DE VENTAS MENSUALES
[PDFColsShade] 5,,,15,30,15,5

[Fields]
    Vendedor  | vendedor  | X | T | 20 | 120 | MQ |     | # |
    Región    | region    | X | T | 15 | 100 | MQ |     |   |
    Producto  | producto  | X | T | 25 | 200 | MQ |     |   |
    Unidades  | unidades  | X | N | 8  | 60  | MQ |     |   |
    Ingresos  | ingresos  | X | N | 12 | 100 | MQ |     |   |
    Comisión  | comision  | X | N | 10 | 80  | MQ |     |   |
    Meta      | meta      | X | T | 8  | 60  | MQ |     |   |
```

**Resultado:**
- `vendedor`: 5% (identificación suave)
- `region`: Sin sombreado
- `producto`: Sin sombreado  
- `unidades`: 15% (datos importantes)
- `ingresos`: 30% (cifra principal, muy destacada)
- `comision`: 15% (datos importantes)
- `meta`: 5% (información complementaria)

## NOTAS ADICIONALES

- **Legibilidad**: Evitar porcentajes superiores al 40% para mantener buena legibilidad del texto
- **Contraste**: Asegurar suficiente contraste entre el sombreado y el color del texto
- **Patrón visual**: Usar sombreados consistentes para crear patrones visuales que guíen la lectura
- **Impresión**: Considerar que el sombreado consume más tinta en impresoras
- **Combinación**: Funciona perfectamente con `[PDFCol]` y `[PDFColBorder]`
- **Orden de aplicación**: El sombreado se aplica antes que los bordes, por lo que los bordes siempre serán visibles
- **Sintaxis alternativa**: Permite modificar solo las columnas específicas sin afectar las demás