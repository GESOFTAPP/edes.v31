# WinList

## SINTAXIS

```
[WinList] Width, Height [, Scroll [, Title]]
```

## DESCRIPCIÓN

Define el ancho y alto en píxeles para mostrar una ventana auxiliar con un listado, centrando automáticamente la ventana en pantalla. 

El tercer parámetro (`Scroll`) es opcional y controla si la ventana dispondrá de barras de desplazamiento. Si se omite o tiene un valor diferente de "NO", la ventana tendrá barras de scroll habilitadas por defecto.

> **Nota:** Este comportamiento es contrario al de la etiqueta **[WinList]** original.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Width** | Entero | Ancho de la ventana en píxeles. Usar `-1` para el ancho máximo disponible |
| **Height** | Entero | Alto de la ventana en píxeles. Usar `-1` para el alto máximo disponible |
| **Scroll** | Cadena (opcional) | Control de barras de desplazamiento. Valores: `YES`, `NO`, `AUTO`. Por defecto: `NO` |
| **Title** | Cadena (opcional) | Título que se mostrará en la barra de título de la ventana |

### Valores del parámetro Scroll

- **YES**: Siempre muestra las barras de desplazamiento
- **NO**: Nunca muestra las barras de desplazamiento  
- **AUTO**: Muestra las barras de desplazamiento solo cuando sea necesario

## EJEMPLO

```
[WinList] 810,550,AUTO,Empresas
```

Este ejemplo crea una ventana de 810 píxeles de ancho por 550 píxeles de alto, con barras de scroll automáticas y el título "Empresas".

## CASOS DE USO COMUNES

- **Ventana de tamaño fijo**: `[WinList] 800,600,NO,Mi Lista`
- **Ventana maximizada**: `[WinList] -1,-1,AUTO,Lista Completa`
- **Ventana con scroll siempre visible**: `[WinList] 640,480,YES,Datos`