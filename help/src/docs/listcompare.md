# ListCompare

## Sintaxis

```
[ListCompare] ListaDeCampos | RangoDeFechasIni, RangoDeFechasFin[ | Lista de Nº de columnas [| nb,nb ] ]
```

## Descripción

Crea un listado comparando los datos entre dos rangos de fechas diferentes. Permite visualizar la evolución o diferencias de los datos entre períodos específicos.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **ListaDeCampos** | Nombres de campos separados por "," que se van a comparar |
| **RangoDeFechasIni** | Nombre del campo de fecha para el primer rango de fechas |
| **RangoDeFechasFin** | Nombre del campo de fecha para el segundo rango de fechas |
| **Lista de Nº de columnas** | Lista de números de campos a mostrar (opcional) |
| **nb,nb** | Control de visualización de registros vacíos (opcional) |

### Detalles de parámetros

#### Lista de Nº de columnas
- La primera columna es la posición cero
- La primera vez que se utilice un número de columna será del primer rango de fechas
- La siguiente vez que se use el mismo número será del segundo rango de fechas
- Permite controlar qué columnas mostrar y en qué orden

#### Control de registros vacíos (nb,nb)
- **Por defecto**: Si en uno de los dos rangos no aparece ninguna entrada, se pintará en la comparativa
- **Con "nb" (NoBlank)**: Si no hay registro, no aparecerá en la comparación
- **Primer parámetro**: Controla el comportamiento para el rango inicial
- **Segundo parámetro**: Controla el comportamiento para el rango final

## Ejemplo

```
[ListCompare] producto,cantidad,precio | fecha_inicio, fecha_fin | 0,1,0,1,2,2 | nb,nb
```

Este ejemplo:
- Compara los campos: producto, cantidad y precio
- Entre el rango de fechas definido por `fecha_inicio` y `fecha_fin`
- Muestra las columnas: producto (rango 1), cantidad (rango 1), producto (rango 2), cantidad (rango 2), precio (rango 1), precio (rango 2)
- No muestra registros que no existan en alguno de los dos rangos