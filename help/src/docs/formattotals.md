# FormatTotals

## Sintaxis

```
[FormatTotals] FormatCol1 [, FormatCol2] ..... [, FormatColN] [[ | ColSpan ] [ iSubList ] [ | AlineaciónColPrimera]
```

## Descripción

Formatea las columnas de la línea de totales de un listado. Si no deseamos que formatee una columna determinada, dejaremos el parámetro (su hueco) vacío. Esta etiqueta es complementaria de TotalsRows, si TotalsRows no estuviese, esta etiqueta será ignorada. 

Esta etiqueta también es multilinea de código PHP (igual que [Format]) donde se puede escribir código para modificar la fila a imprimir, se está escribiendo dentro de una función que recibe una matriz por referencia llamada "$_vF" para modificar el cursor en curso, facilitando el realizar cálculos entre columnas.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **FormatCol** | Opciones de formateo para cada columna |
| **ColSpan** | Número de colspan de la primera columna en la línea de totales |
| **iSubList** | Índice de sublista |
| **AlineaciónColPrimera** | Alineación de la primera columna (L, C, R) cuando contiene una constante |

### Opciones de formateo FormatCol

- **Código HTML libre**: Precedido de una comilla simple o doble (si introducimos el símbolo "#" se sustituirá por el valor de su celda)
- **"M"**: Pondrá separador de miles
- **Número del 1 al 9**: Número de decimales que deseemos mostrar
- **"B"**: Los valores numéricos a cero no se verán
- **"N"**: No pondrá el separador de miles
- **Mezcla de opciones**: Se permite mezclar las opciones BD y CD, por ejemplo M2 o m2
- **Función**: Si se pone una función se le pasarán dos parámetros: el número de columna y una matriz con el valor de las operaciones que se hayan hecho en la fila. Para que esta función se ejecute se tiene que definir alguna operación en la etiqueta [ColsOp]
- **Constante**: Una constante encerrada entre comillas dobles o sencillas
- **Función de usuario**: Una función definida por el usuario

## Ejemplos

### Ejemplo 1: Suma total básica

```
[ColsOp] ,+
[FormatTotals] 'SUMA TOTAL'
```

La etiqueta [ColsOp] indica que en su columna dos se sume el contenido y la etiqueta [FormatTotals] indica que en la primera columna ponga la constante 'SUMA TOTAL'.

### Ejemplo 2: Totales con subtotales

```
[ColsOp] S,,+,,+,,+,,+,,+,,+,,+,, | Total
[FormatTotals] ,'Total'
```

El "Total" de la etiqueta [ColsOp] es para ponerlo en los subgrupos y el "'Total'" de [FormatTotals] es para ponerlo en el total de totales y se pone en la segunda posición porque la primera columna es para hacer los subtotales "S".