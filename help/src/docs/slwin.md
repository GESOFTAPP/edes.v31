# slWin

## Sintaxis
```
{slWin} [Ancho], NumFilas/AlturaEnPx(50px) [ , MáximoRegistros ]
```

## Descripción
Tamaño de la SubLista dentro del formulario.

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| Ancho | Number | No | Ancho de la Sublista en px. Si no se especifica, el ancho se ajusta automáticamente en función de los datos |
| NumFilas/AlturaEnPx | Number/String | Sí | Alto de la SubLista expresado como:<br>• Número de filas (ej: `7`)<br>• Alto en píxeles con sufijo "px" (ej: `50px`)<br>Cuando el número de filas es superior al alto, aparece la barra de desplazamiento |
| MáximoRegistros | Number | No | Si se define, no permitirá insertar más filas que las indicadas |

## Ejemplos

### Ejemplo 1: Ancho automático con altura en filas
```
{slWin} ,7
```
- **Ancho**: Automático (se ajusta a los datos)
- **Alto**: Máximo 7 filas visibles
- **Comportamiento**: Si hay más de 7 filas, aparece barra de desplazamiento

### Ejemplo 2: Ancho fijo con altura en píxeles
```
{slWin} 200,50px
```
- **Ancho**: 200 píxeles (el "px" es opcional)
- **Alto**: 50 píxeles fijos
- **Comportamiento**: Dimensiones fijas independientemente del contenido

### Ejemplo 3: Con límite de registros
```
{slWin} 300,10,25
```
- **Ancho**: 300 píxeles
- **Alto**: Máximo 10 filas visibles
- **Límite**: No se podrán insertar más de 25 registros

## Notas importantes

- El ancho es opcional; si se omite, la SubLista se ajusta automáticamente al contenido
- El sufijo "px" en las medidas es opcional
- La barra de desplazamiento aparece automáticamente cuando el contenido excede el tamaño definido
- El parámetro MáximoRegistros controla la inserción de nuevas filas, no la visualización