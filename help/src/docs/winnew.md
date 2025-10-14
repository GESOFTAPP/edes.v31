# WinNew

## SINTAXIS

```
[WinNew] Width, Height [, Scroll]
```

## DESCRIPCIÓN

Define las dimensiones y características de visualización para ventanas auxiliares que se abren al visualizar fichas desde listados de selección. Esta etiqueta permite mostrar múltiples fichas simultáneamente en ventanas independientes, mejorando la capacidad de comparación y consulta de datos.

La ventana se abre automáticamente cuando el usuario selecciona ver el detalle de un registro desde un listado, permitiendo mantener el listado original visible mientras se examina la información detallada.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Width** | Entero | Ancho de la ventana en píxeles. Usar `-1` para el ancho máximo disponible |
| **Height** | Entero | Alto de la ventana en píxeles. Usar `-1` para el alto máximo disponible |
| **Scroll** | Cadena (opcional) | Control de barras de desplazamiento. Valores: `YES`, `NO`, `AUTO` |

### Valores del parámetro Scroll

- **YES**: Siempre muestra las barras de desplazamiento
- **NO**: Nunca muestra las barras de desplazamiento  
- **AUTO**: Muestra las barras de desplazamiento automáticamente cuando el contenido excede el tamaño de la ventana

## EJEMPLO

```
[WinNew] 500,300,YES
```

Este ejemplo crea una ventana de 500 píxeles de ancho por 300 píxeles de alto, con barras de scroll siempre visibles para mostrar las fichas de detalle.

## CASOS DE USO COMUNES

- **Ventana compacta**: `[WinNew] 400,250,AUTO` - Para fichas con poca información
- **Ventana estándar**: `[WinNew] 600,400,YES` - Para la mayoría de fichas
- **Ventana amplia**: `[WinNew] 800,600,AUTO` - Para fichas con mucha información
- **Ventana maximizada**: `[WinNew] -1,-1,AUTO` - Para fichas muy detalladas

## NOTAS

- Esta etiqueta solo afecta a las ventanas que se abren desde listados de selección
- Permite tener múltiples fichas abiertas simultáneamente
- La ventana principal con el listado permanece accesible
- Útil para comparar información entre diferentes registros