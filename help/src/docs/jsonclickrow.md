# JSOnClickRow

## Sintaxis
```
[JSOnClickRow] Mode [ [ | NomDF/else,... ] | NumCol/NomCol, NumCol/NomCol,... ] ...
```

## Descripción
Código JavaScript a ejecutar al pulsar en un listado. La intención es hacer algún proceso sin que el listado se vaya, no es seleccionar una fila (JSSelRow) sino ejecutar algún proceso relacionado con la fila, por ejemplo un listado de artículos y quieres más información de uno en una nueva ventana sin quitar el listado.

El tercer parámetro indica las columnas que son afectadas, por defecto son todas. Las columnas indicadas en este parámetro tendrán el css "class=JSOnClickRow". Dentro de la etiqueta está disponible la variable "ColNumber" que indica el número de la columna que se ha pulsado y "RowNumber" el número de la fila.

**Nota:** Esta etiqueta se anula si utilizamos la etiqueta [JSSelRow].

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Mode | String | Código JavaScript a ejecutar |
| NomDF/else | String | Nombres de campos o condiciones alternativas (opcional) |
| NumCol/NomCol | String | Números o nombres de columnas afectadas (opcional, por defecto todas) |

## Variables disponibles

### Variables actuales
- **vF**: Matriz asociativa con el valor de las celdas
- **oF**: Matriz asociativa con los objetos (TD)
- **oTR**: Objeto TR
- **oTD**: Objeto TD
- **objClick**: Objeto clicado (cuando hay iconos dentro del TD)
- **$+NombreVariable**: Para obtener o asignar valores
- **aTR[nCol]**: Valor de la celda
- **_ColName**: Nombre del campo
- **ColNumber**: Número de la columna que se ha pulsado
- **RowNumber**: Número de la fila

### Variables obsoletas
- **Celda**: La celda pulsada
- **Fila**: La fila pulsada
- **ValCol**: Matriz asociativa con el valor de las celdas de la fila pulsada
- **Columna**: Matriz ordinal con el valor de las celdas de la fila pulsada
- **eGF()**: Función para coger el valor de cualquier campo de la fila pulsada