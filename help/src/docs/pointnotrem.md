# PointNotRem

## Sintaxis

```
[PointNotRem]
```

## Descripción

Modifica el comportamiento de interpretación de comentarios en el archivo. Por defecto, el punto al principio de una línea es considerado un comentario (excepto dentro del contenido de la etiqueta [CSSAdd]). Cuando se define la etiqueta [PointNotRem], a partir de ese punto las líneas que comiencen con punto ya no serán interpretadas como comentarios.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| - | - | Esta etiqueta no requiere parámetros | No |

## Ejemplos

### Ejemplo básico
```
. Esta línea es un comentario
. Esta también es un comentario
[PointNotRem]
. Esta línea YA NO es un comentario después de PointNotRem
. Esta tampoco es un comentario
```

### Ejemplo en contexto de archivo
```
. Configuración inicial (comentario)
[LoadIni] config/app.php
. Cargar módulos principales (comentario)
[LoadSel] modules/main.php

[PointNotRem]
. text-align: center; (ya no es comentario, es contenido)
. font-weight: bold; (ya no es comentario, es contenido)
```

## Notas importantes

- El cambio de comportamiento es permanente desde el punto donde se define
- No afecta a las líneas dentro de etiquetas [CSSAdd] donde los puntos nunca son comentarios
- Una vez activado, no hay forma de volver al comportamiento anterior de comentarios con punto