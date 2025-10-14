# FixZone

## Sintaxis
```
[FixZone] Mode
```

## Descripción
En una multificha (GDF) fija las primeras filas de campos para verlas y editarlas desde cualquier solapa (Tab). 

En el primer archivo EDF perteneciente al grupo de fichas marcaremos hasta qué campo queremos que llegue la zona fija utilizando `{Z}`. Si no se quisiera ningún campo visible desde todas las solapas, se debe poner `{Z}` inmediatamente después de la etiqueta [Fields].

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| Mode | String | Sí | Modo de funcionamiento de la zona fija (normalmente `*`) |

## Marcador de zona fija

| Marcador | Descripción |
|----------|-------------|
| `{Z}` | Delimita hasta dónde llega la zona fija. Los campos definidos desde [Fields] hasta `{Z}` serán visibles y editables desde cualquier solapa |

## Ejemplo

### Fichero GDF
```
[FixZone] *
```

### Primer [TAB], fichero EDF
```
[Fields]
serial    | cd_obra   | * | T |   4 |          | *    ||   |
Código    | cd_obra2  | D | T |   3 |          | AQcp || = |
Nombre    | nm_obra   | D | T | 255 |      400 | MQ   || # |
{Z}
- | Dirección
Dirección | direccion | D | T |  50 | +nm_obra | M    || # |
...
```

## Funcionamiento

1. **Definición en GDF**: Se establece `[FixZone] *` en el archivo de grupo de fichas
2. **Marcado de zona**: En el primer archivo EDF del grupo, se colocan los campos que se quieren fijar
3. **Delimitación**: Se utiliza `{Z}` para marcar el final de la zona fija
4. **Resultado**: Los campos desde `[Fields]` hasta `{Z}` serán visibles y editables desde cualquier solapa

## Casos de uso

### Con campos fijos
```
[Fields]
Campo1 | campo1 | D | T | 10 | | M || |
Campo2 | campo2 | D | T | 20 | | M || |
{Z}
Campo3 | campo3 | D | T | 30 | | M || |
```
*Los campos Campo1 y Campo2 serán visibles en todas las solapas*

### Sin campos fijos
```
[Fields]
{Z}
Campo1 | campo1 | D | T | 10 | | M || |
Campo2 | campo2 | D | T | 20 | | M || |
```
*Ningún campo será visible en otras solapas*

## Notas importantes

- Solo funciona en multifichas (archivos GDF)
- El marcador `{Z}` debe colocarse en el primer archivo EDF del grupo
- Los campos fijos son visibles y editables desde cualquier solapa
- Si no se quieren campos fijos, colocar `{Z}` inmediatamente después de `[Fields]`