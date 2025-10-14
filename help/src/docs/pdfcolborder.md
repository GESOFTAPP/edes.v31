# PDFColBorder

## SINTAXIS

```
[PDFColBorder] Ancho, Ancho, ...
```

**Sintaxis alternativa:**
```
[PDFColBorder] Campo=Valor, Campo=Valor, ...
```

## DESCRIPCIÓN

Define el ancho de las líneas verticales que separan las columnas en los documentos PDF generados. Permite controlar la apariencia visual de las tablas estableciendo diferentes grosores de línea para cada separador vertical entre columnas.

El número de parámetros debe ser igual al número de columnas más uno, ya que existe una línea más que columnas (incluyendo los bordes izquierdo y derecho de la tabla).

## PARÁMETROS

| Parámetro | Tipo | Descripción | Valores |
|-----------|------|-------------|---------|
| **Ancho** | Float | Grosor de la línea vertical en puntos | `0` = Sin línea<br>`0.1` = Valor por defecto<br>`> 0.1` = Línea más gruesa |
| **Campo** | String | Nombre del campo (en sintaxis alternativa) | Debe coincidir con el nombre en `[Fields]` |
| **Valor** | Float | Grosor asignado al campo | Mismos valores que Ancho |

### Valores especiales:

- **`0`**: La línea vertical no se mostrará (invisible)
- **`0.1`**: Grosor por defecto del sistema
- **Valores mayores**: Líneas más gruesas (ej: `1`, `2`, `3`)
- **Vacío**: Se mantiene el valor por defecto (`0.1`)

### Importante sobre el número de parámetros:

- Si tienes **N columnas**, necesitas **N+1 valores** de ancho
- El primer valor controla el borde izquierdo de la tabla
- Los valores intermedios controlan las líneas entre columnas
- El último valor controla el borde derecho de la tabla

## EJEMPLOS

### Ejemplo 1: Control básico de bordes

```
[PDFColBorder] ,,,1

[Fields]
    Código    | codigo    | X | T | 10 | 50  | AQ |     |   |
    Nombre    | nombre    | X | T | 50 | 200 | MQ |     | # |
    Precio    | precio    | X | N | 12 | 80  | MQ |     |   |
```

**Resultado:**
- Borde izquierdo: 0.1 (por defecto, vacío)
- Entre código y nombre: 0.1 (por defecto, vacío)  
- Entre nombre y precio: 0.1 (por defecto, vacío)
- Borde derecho: 1 punto de grosor

### Ejemplo 2: Sin bordes internos, solo externos

```
[PDFColBorder] 1,0,0,0,1

[Fields]
    Cliente   | cliente   | X | T | 30 | 150 | MQ |     | # |
    Teléfono  | telefono  | X | T | 15 | 100 | MQ |     |   |
    Email     | email     | X | T | 25 | 200 | MQ |     |   |
    Ciudad    | ciudad    | X | T | 20 | 120 | MQ |     |   |
```

**Resultado:**
- Borde izquierdo: 1 punto (visible)
- Entre columnas: 0 (sin líneas internas)
- Borde derecho: 1 punto (visible)

### Ejemplo 3: Sintaxis alternativa con nombres de campo

```
[PDFColBorder] hour_ev=2

[Fields]
    Fecha     | fecha     | X | T | 10 | 80  | AQ |     |   |
    Hora      | hour_ev   | X | T | 8  | 60  | MQ |     |   |
    Evento    | evento    | X | T | 40 | 250 | MQ |     | # |
```

**Resultado:**
- Campo `hour_ev`: línea vertical de 2 puntos de grosor
- Otras líneas: grosor por defecto (0.1)

### Ejemplo 4: Diseño personalizado completo

```
[Title]=LISTADO DE VENTAS
[PDFColBorder] 0.5,0,2,0.1,3

[Fields]
    Fecha     | fecha     | X | T | 10 | 80  | AQ |     |   |
    Cliente   | cliente   | X | T | 30 | 150 | MQ |     | # |
    Producto  | producto  | X | T | 25 | 200 | MQ |     |   |
    Cantidad  | cantidad  | X | N | 8  | 60  | MQ |     |   |
    Total     | total     | X | N | 12 | 100 | MQ |     |   |
```

**Resultado:**
- Borde izquierdo: 0.5 puntos
- Entre fecha y cliente: sin línea (0)
- Entre cliente y producto: 2 puntos (separación fuerte)
- Entre producto y cantidad: 0.1 puntos (por defecto)
- Borde derecho: 3 puntos (muy grueso)

### Ejemplo 5: Tabla sin bordes verticales

```
[PDFColBorder] 0,0,0,0

[Fields]
    Descripción | desc     | X | T | 40 | 300 | MQ |     | # |
    Cantidad    | cant     | X | N | 8  | 60  | MQ |     |   |
    Precio      | precio   | X | N | 10 | 80  | MQ |     |   |
```

**Resultado:**
- Tabla completamente sin líneas verticales
- Aspecto más limpio y minimalista

## NOTAS ADICIONALES

- **Cálculo de parámetros**: Para N columnas, siempre usar N+1 valores de ancho
- **Valores por defecto**: Los parámetros vacíos toman el valor 0.1 automáticamente
- **Sintaxis mixta**: No mezclar sintaxis posicional y alternativa en la misma directiva
- **Rendimiento**: Las líneas más gruesas pueden aumentar ligeramente el tamaño del archivo PDF
- **Compatibilidad**: Funciona con cualquier configuración de `[PDFCol]`
- **Diseño visual**: Usar líneas gruesas para separar secciones importantes y líneas finas o invisibles para datos relacionados
- **Orden en sintaxis alternativa**: Al usar nombres de campo, solo se modifican las líneas específicas mencionadas