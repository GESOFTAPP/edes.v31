# SetVar

## Sintaxis

```
[SetVar] NmVar = [ Value / Value,Value,.. ]
```

## Descripción

Asigna valores a variables del sistema, en el grupo de fichas irá en el gdf. El caracter "$" es opcional así como el ";" final.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `NmVar` | Nombre de la variable a asignarle valor |
| `Value` | Puede ser un único valor o una matriz si se separa los valores por coma |

## Ejemplos

### Ejemplo 1: Asignación de valor único
```
[SetVar] *MaxImageLength = 500000
```
Tamaño máximo para una imagen en un textarea con html enriquecido.

### Ejemplo 2: Asignación de múltiples valores
```
[SetVar] *MaxImageSize = 565,-1
```
Ancho y alto máximo de una imagen en un textarea con html enriquecido, el -1 indica cualquier tamaño.