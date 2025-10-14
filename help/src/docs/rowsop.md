# RowsOp

## Sintaxis

### Sintaxis principal
```
[RowsOp] ColOp1, ColOp2, ..... , ColOpN [ | LongitudCampo ]
```

### Sintaxis alternativa
```
[RowsOp] Campo Operación Campo | TítuloTH [ | LongitudCampo ]
```

## Descripción

Realiza operaciones por cada fila en listados, creando una columna al final con el resultado de las operaciones especificadas. Es decir, realiza operaciones aritméticas horizontalmente a través de las columnas de cada fila.

La columna en la que no deseemos realizar ninguna operación dejaremos su parámetro en blanco, y en la posición de la nueva columna pondremos el título de la columna.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **ColOp** | Operación a realizar en cada columna |
| **Campo** | Nombre del campo para la sintaxis alternativa |
| **Operación** | Operación aritmética a realizar |
| **TítuloTH** | Título de la columna resultado |
| **LongitudCampo** | Formato de la columna resultado (opcional) |

### Operaciones permitidas

| Operación | Descripción |
|-----------|-------------|
| **+** | Suma |
| **-** | Restar |
| **\*** | Multiplicar |
| **%** | Tanto por ciento en la columna, el total será 100% |
| **!** | Al generar gráficas omitirá el texto de la celda [Graph] |

### Formato LongitudCampo

El formato sigue la estructura: `ancho,decimales`
- **ancho**: Número de caracteres de ancho de la columna
- **decimales**: Número de decimales a mostrar

## Ejemplos

### Ejemplo 1: Suma de múltiples columnas
```
[RowsOp] ,+,+,+,+,+,+,+,+,+,+,+,+,+,TOTAL<BR>PRODUCTOS
```
- Suma todas las columnas (excepto la primera que se deja en blanco)
- El título de la columna resultado es "TOTAL<BR>PRODUCTOS"

### Ejemplo 2: Suma con formato específico
```
[RowsOp] ,+,+,+,+,+,+,+,+,+,+,+,+,+,TOTAL<BR>PRODUCTOS | 9,2
```
- Igual que el ejemplo anterior
- La columna resultado tendrá 9 caracteres de ancho y 2 decimales

### Ejemplo 3: Sintaxis alternativa simple
```
[RowsOp] unidades * importe | TOTAL
```
- Multiplica el campo "unidades" por el campo "importe"
- El título de la columna resultado es "TOTAL"

### Ejemplo 4: Sintaxis alternativa con formato
```
[RowsOp] unidades * importe | TOTAL | 9,2
```
- Multiplica el campo "unidades" por el campo "importe"
- El título de la columna resultado es "TOTAL"
- La columna resultado tendrá 9 caracteres de ancho y 2 decimales

## Notas importantes

- Las operaciones se realizan horizontalmente (por fila), no verticalmente
- Si una columna se deja en blanco, no se incluye en la operación
- El título de la columna resultado se coloca en la posición donde se realizará la operación
- Se puede usar HTML en los títulos (como `<BR>` para saltos de línea)