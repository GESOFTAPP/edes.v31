# slTypeData

## Sintaxis
```
{slTypeData} TipoDato, TipoDato, ...
```

## Descripción
Es el tipo de dato de cada columna en una [SubLista].

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| TipoDato | String | Especifica el tipo de dato para cada columna de la SubLista |

### Tipos de datos soportados
- `String` - Cadena de texto
- `Number` - Número entero o decimal  
- `Boolean` - Valor verdadero/falso
- `Date` - Fecha
- `Object` - Objeto complejo

## Ejemplo
```
{slTypeData} String, Number, Boolean, Date
```

Este ejemplo define una SubLista con cuatro columnas:
- Primera columna: tipo String
- Segunda columna: tipo Number
- Tercera columna: tipo Boolean
- Cuarta columna: tipo Date