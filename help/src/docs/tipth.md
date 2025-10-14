# TipTH

## Descripción

Muestra un tooltip (title) en la cabecera del listado (elemento `<TH>`) cuando el usuario coloca el cursor sobre los encabezados de las columnas. Los parámetros son correlativos a las columnas del listado, proporcionando información adicional o aclaraciones sobre el contenido de cada columna.

### Características especiales:
- Si se omite un parámetro, la columna correspondiente no tendrá tooltip
- Admite caracteres de escape: `\n` (nueva línea) y `\t` (tabulador)
- Permite formateo de texto dentro del tooltip

## Sintaxis

### Sintaxis básica (posicional)
```
[TipTH] ColTitle1 [| ColTitle2] ... [| ColTitleN]
```

### Sintaxis alternativa (por campo)
```
[TipTH] Campo1=Valor, Campo2=Valor, ...
[TipTH] Campo3=Valor, Campo4=Valor, ...
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `ColTitle1...N` | Opcional | Títulos/tooltips para cada columna en orden correlativo |
| `Campo=Valor` | Opcional | Asignación específica de tooltip a un campo determinado |

### Notas sobre parámetros:
- En la sintaxis básica, los parámetros se aplican por posición
- En la sintaxis alternativa, se pueden especificar campos específicos
- Se pueden usar múltiples líneas `[TipTH]` para organizar mejor los tooltips
- Los caracteres de escape `\n` y `\t` permiten formatear el contenido del tooltip

## Ejemplos

### Ejemplo básico: Tooltips posicionales

```
[TipTH] Vivienda | Superficie útil
[Fields]   
| Tipo      | tipo_vivienda | X   | T | 20 || AQ |||   
| M²        | superficie    | #   | T |  8 || M  |||   
| Precio    | precio        | €   | T | 10 || M  |||   
```

**Resultado**: 
- Columna "Tipo" mostrará tooltip "Vivienda"
- Columna "M²" mostrará tooltip "Superficie útil"
- Columna "Precio" no tendrá tooltip

### Ejemplo con caracteres de escape

```
[TipTH] Código del cliente\n(Único en el sistema) | Nombre completo\tApellidos | Teléfono de contacto\nPrincipal
[Fields]   
| Código    | cod_cliente   | #   | T |  8 || AQ |||   
| Cliente   | nombre_completo| X  | T | 30 || M  |||   
| Teléfono  | telefono      | T   | T | 12 || M  |||   
```

### Ejemplo con sintaxis alternativa

```
[TipTH] cod_producto=Código único del producto, descripcion=Descripción detallada del artículo
[TipTH] precio=Precio sin IVA incluido, stock=Unidades disponibles en almacén
[Fields]   
| Código    | cod_producto  | #   | T |  8 || AQ |||   
| Producto  | descripcion   | X   | T | 40 || M  |||   
| Precio    | precio        | €   | T | 10 || M  |||   
| Stock     | stock         | #   | T |  6 || M  |||   
```

### Ejemplo mixto con columnas sin tooltip

```
[TipTH] Identificador único | | Descripción completa del elemento | Estado actual del registro
[Fields]   
| ID        | id_elemento   | #   | T |  8 || AQ |||   
| Fecha     | fecha_alta    | F   | T | 10 || M  |||   
| Elemento  | descripcion   | X   | T | 35 || M  |||   
| Estado    | estado        | X   | T | 15 || M  |||   
```

**Resultado**: 
- Columna "ID" tiene tooltip
- Columna "Fecha" no tiene tooltip (parámetro vacío)
- Columna "Elemento" y "Estado" tienen sus respectivos tooltips

## Comportamiento

- **Activación**: El tooltip se muestra al colocar el cursor sobre el encabezado de la columna
- **Formato**: Respeta los caracteres de escape para saltos de línea y tabulaciones
- **Posicionamiento**: Se muestra automáticamente cerca del cursor
- **Correlación**: En sintaxis básica, el orden de los parámetros corresponde al orden de las columnas

## Ventajas

- **Clarificación**: Proporciona explicaciones adicionales sobre el contenido de las columnas
- **Usabilidad**: Mejora la comprensión del usuario sobre los datos mostrados
- **Flexibilidad**: Permite omitir tooltips en columnas que no los necesiten
- **Formateo**: Admite formato de texto para tooltips más informativos