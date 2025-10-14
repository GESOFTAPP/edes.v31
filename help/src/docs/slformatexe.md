# slFormatExe

## Sintaxis

```
{slFormatExe} NameFunction
```

## Descripción

La función `slFormatExe` permite formatear filas de sublistas mediante una función de callback personalizada. Por cada fila de la sublista, se pasa un array hash con la siguiente estructura de información:

### Estructura del Array Hash

```php
[
    '_vF' => [
        [0] => 'valor_columna_0',
        [1] => 'valor_columna_1', 
        [2] => 'valor_columna_2',
        // ... más columnas
    ],
    '_CellsStyle' => [
        [0] => 'estilo_celda_0',
        [1] => 'estilo_celda_1',
        [2] => 'color:red', // Ejemplo de estilo CSS
        // ... más estilos
    ],
    '_CellsClass' => [
        [0] => 'clase_celda_0',
        [1] => 'clase_celda_1', 
        [2] => 'clase_celda_2',
        // ... más clases
    ],
    'nFila' => 0, // Número de fila actual
    '_RowStyle' => 'estilo_fila',
    '_RowClass' => 'clase_fila',
    '_RowDisabled' => false // Estado de habilitación de la fila
]
```

### Campos del Array

- **`_vF`**: Array con los valores de cada columna de la fila
- **`_CellsStyle`**: Array con estilos CSS inline para cada celda
- **`_CellsClass`**: Array con clases CSS para cada celda  
- **`nFila`**: Número índice de la fila actual (comenzando en 0)
- **`_RowStyle`**: Estilo CSS inline para toda la fila
- **`_RowClass`**: Clase CSS para toda la fila
- **`_RowDisabled`**: Booleano que indica si la fila está deshabilitada

## Modificación de Datos

Para poder modificar los datos dentro de la función de callback, el parámetro debe ir precedido por el símbolo `&` (paso por referencia).

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `NameFunction` | string | Nombre de la función de callback que procesará cada fila |

## Ejemplo de Uso

### Implementación

```html
<div>{slFormatExe} uFunctionSubList</div>
```

### Función de Callback

```php
[PHPIni] a,?R

function uFunctionSubList(&$data){
    $data["_CellsStyle"][2] = "color:red";
}
```

### Explicación del Ejemplo

1. Se define la función `uFunctionSubList` que recibe el array de datos por referencia (`&$data`)
2. Dentro de la función se modifica el estilo de la tercera columna (índice 2) aplicando color rojo
3. La función se ejecutará para cada fila de la sublista, permitiendo formateo dinámico

## Casos de Uso Comunes

- Aplicar estilos condicionales basados en valores de celda
- Agregar clases CSS dinámicamente según criterios específicos
- Deshabilitar filas bajo ciertas condiciones
- Formatear valores antes de mostrarlos
- Aplicar estilos alternados o zebra striping personalizado