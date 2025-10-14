# PDFCol

## SINTAXIS

```
[PDFCol] NumChr1 [, NumChr2] ..... [, NumChrN]
```

**Sintaxis alternativa:**
```
[PDFCol] Campo=Long, Campo=Long, ...
```

## DESCRIPCIÓN

Define el número de caracteres que contendrá cada columna del listado en la salida PDF. Permite controlar el ancho de las columnas y la visibilidad de los campos en el documento PDF generado.

Si algún parámetro se deja en blanco, el sistema tomará la longitud del campo establecida en la sección `[Fields]` del EDF. Esta directiva ofrece control granular sobre la presentación de datos en formato PDF.

## PARÁMETROS

| Parámetro | Tipo | Descripción | Valores Especiales |
|-----------|------|-------------|-------------------|
| **NumChr** | Integer/String | Número de caracteres para la columna | `0` = No mostrar en PDF<br>`XLS` = Solo visible en Excel<br>Vacío = Usar longitud del EDF |
| **Campo** | String | Nombre del campo (en sintaxis alternativa) | Debe coincidir con el nombre en `[Fields]` |
| **Long** | Integer/String | Longitud asignada al campo | Mismos valores especiales que NumChr |

### Valores especiales:

- **`0`**: La columna no se mostrará en el PDF
- **`XLS`**: La columna no se verá en el PDF pero sí será visible en exportaciones a Excel
- **Vacío**: Se usa la longitud definida en la sección `[Fields]`
- **Número positivo**: Número exacto de caracteres para la columna

### Notas sobre alias:

- Cuando el campo usa la sintaxis "campo as alias", el identificador será el **alias**
- En la sintaxis alternativa, se debe usar el alias como nombre del campo

## EJEMPLOS

### Ejemplo 1: Sintaxis posicional básica

```
[PDFCol] 20,4,7,10,10,5,5,5,19,27,2,2,2

[Fields]
    Nombre       | nombre     | X | T | 50 | 200 | MQ |     | # |
    Código       | codigo     | X | T | 10 | 50  | AQ |     |   |
    Cantidad     | cantidad   | X | N | 8  | 80  | MQ |     |   |
    Precio       | precio     | X | N | 10 | 100 | MQ |     |   |
    // ... más campos
```

**Resultado:**
- Primera columna (nombre): 20 caracteres en PDF
- Segunda columna (codigo): 4 caracteres en PDF
- Tercera columna (cantidad): 7 caracteres en PDF
- Y así sucesivamente...

### Ejemplo 2: Sintaxis alternativa con nombres de campo

```
[PDFCol] nombre=40, notas=0, icon=0

[Fields]
    Nombre       | nombre        | X | T | 50 | 200 | MQ |     | # |
    Icono        | nom as icon   | X | T | 10 | 50  | AQ |     |   |
    Notas        | notas         | X | T | 100| 300 | MQ |     |   |
    Descripción  | descripcion   | X | T | 80 | 250 | MQ |     |   |
```

**Resultado:**
- Campo `nombre`: 40 caracteres en PDF
- Campo `icon` (alias de `nom`): No se muestra en PDF (valor 0)
- Campo `notas`: No se muestra en PDF (valor 0)
- Campo `descripcion`: Usa la longitud definida en Fields (80 caracteres)

### Ejemplo 3: Uso del valor especial "XLS"

```
[PDFCol] 25,XLS,15,30,0

[Fields]
    Cliente      | cliente    | X | T | 40 | 200 | MQ |     | # |
    Email        | email      | X | T | 50 | 250 | MQ |     |   |
    Teléfono     | telefono   | X | T | 15 | 100 | MQ |     |   |
    Dirección    | direccion  | X | T | 60 | 300 | MQ |     |   |
    Observaciones| obs        | X | T | 100| 400 | MQ |     |   |
```

**Resultado:**
- `cliente`: 25 caracteres en PDF
- `email`: No visible en PDF, pero sí en Excel
- `telefono`: 15 caracteres en PDF
- `direccion`: 30 caracteres en PDF
- `obs`: No se muestra en PDF

### Ejemplo 4: Caso práctico completo

```
[Title]=LISTADO DE PRODUCTOS
[DBTable]productos
[PDFCol] codigo=8,nombre=35,categoria=0,precio=10,stock=XLS,activo=3

[Fields]
    Código       | codigo     | X | T | 10 | 50  | AQ |     |   |
    Nombre       | nombre     | X | T | 50 | 200 | MQ |     | # |
    Categoría    | categoria  | X | T | 20 | 100 | MQ |     |   |
    Precio       | precio     | X | N | 12 | 80  | MQ |     |   |
    Stock        | stock      | X | N | 8  | 60  | MQ |     |   |
    Activo       | activo     | X | T | 1  | 30  | AQ |     |   |
```

**Resultado PDF:**
- Código: 8 caracteres
- Nombre: 35 caracteres
- Categoría: No se muestra
- Precio: 10 caracteres
- Stock: No visible en PDF (pero sí en Excel)
- Activo: 3 caracteres

## NOTAS ADICIONALES

- **Orden importante**: En la sintaxis posicional, el orden debe coincidir exactamente con el orden de los campos en `[Fields]`
- **Sintaxis mixta**: No se pueden mezclar ambas sintaxis en la misma directiva
- **Campos calculados**: Para campos con alias (`campo as alias`), usar siempre el alias en la sintaxis alternativa
- **Optimización**: Los campos con valor `0` no consumen espacio en el PDF, optimizando el diseño
- **Excel vs PDF**: El valor `XLS` permite mantener datos completos en exportaciones manteniendo PDFs limpios
- **Truncamiento**: Si el contenido excede el ancho especificado, se truncará automáticamente