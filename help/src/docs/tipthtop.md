# TipTHTop

## Descripción

Muestra un tooltip en la primera fila de encabezados cuando un listado tiene dos filas de `<TH>` (encabezados de doble nivel). Mientras que `[TipTH]` se aplica a la segunda fila de encabezados, `[TipTHTop]` proporciona tooltips para la primera fila, típicamente usada con `[THColSpan]`.

### Características especiales:
- Solo funciona cuando hay dos filas de encabezados TH
- Los parámetros son correlativos a las **columnas del listado**, no a los `THColSpan`
- Si se omite un parámetro, la columna correspondiente no tendrá tooltip
- Admite caracteres de escape: `\n` (nueva línea) y `\t` (tabulador)
- Se complementa con `[TipTH]` para la segunda fila

## Sintaxis

```
[TipTHTop] ColTitle1 [| ColTitle2] ... [| ColTitleN]
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `ColTitle1...N` | Opcional | Títulos/tooltips para cada columna de la primera fila de encabezados en orden correlativo |

### Notas importantes:
- Los parámetros se aplican por **posición de columna**, no por posición de `THColSpan`
- Cada parámetro corresponde a una columna individual del listado
- Se pueden omitir parámetros para columnas que no necesiten tooltip

## Ejemplos

### Ejemplo básico: Tooltip en primera fila

```
[TipTHTop] Vivienda
[THColSpan] tipo, superficie, DATOS VIVIENDA | telefono, email, CONTACTO
[TipTH] Tipo de propiedad | Metros cuadrados | Teléfono principal | Correo electrónico
[Fields]   
| Tipo      | tipo_vivienda | X   | T | 15 || AQ |||   
| M²        | superficie    | #   | T |  8 || M  |||   
| Teléfono  | telefono      | T   | T | 12 || M  |||   
| Email     | email         | E   | T | 25 || M  |||   
```

**Resultado**: 
- Primera fila: "DATOS VIVIENDA" y "CONTACTO" (de THColSpan)
- Tooltip en primera fila: Solo "Tipo" tendrá tooltip "Vivienda"
- Segunda fila: "Tipo", "M²", "Teléfono", "Email" con sus respectivos tooltips

### Ejemplo completo: Tooltips en ambas filas

```
[TipTHTop] Información del cliente | Datos personales | Teléfono principal | Teléfono secundario | Correo principal
[THColSpan] codigo, nombre, CLIENTE | telefono1, telefono2, TELÉFONOS | email, CONTACTO
[TipTH] Código único | Nombre completo | Primer teléfono | Segundo teléfono | Email de contacto
[Fields]   
| Código    | cod_cliente   | #   | T |  8 || AQ |||   
| Nombre    | nombre        | X   | T | 25 || M  |||   
| Telf. 1   | telefono1     | T   | T | 12 || M  |||   
| Telf. 2   | telefono2     | T   | T | 12 || M  |||   
| Email     | email         | E   | T | 25 || M  |||   
```

### Ejemplo con columnas sin tooltip

```
[TipTHTop] Identificador único | | Precio sin IVA | | Estado del producto
[THColSpan] id, descripcion, PRODUCTO | precio, descuento, ECONÓMICOS | estado, CONTROL
[TipTH] ID del producto | Descripción completa | Precio base | Descuento aplicable | Estado actual
[Fields]   
| ID        | id_producto   | #   | T |  8 || AQ |||   
| Producto  | descripcion   | X   | T | 30 || M  |||   
| Precio    | precio        | €   | T | 10 || M  |||   
| Dto.      | descuento     | %   | T |  5 || M  |||   
| Estado    | estado        | X   | T | 15 || M  |||   
```

**Resultado**:
- Columnas con tooltip en primera fila: "ID", "Precio", "Estado"
- Columnas sin tooltip en primera fila: "Producto", "Dto." (parámetros vacíos)

### Ejemplo con caracteres de escape

```
[TipTHTop] Código único\ndel sistema | Información\tcompleta | Datos de\nfacturación
[THColSpan] codigo, descripcion, GENERAL | precio, iva, FACTURACIÓN
[Fields]   
| Código    | codigo        | #   | T |  8 || AQ |||   
| Desc.     | descripcion   | X   | T | 25 || M  |||   
| Precio    | precio        | €   | T | 10 || M  |||   
| IVA       | iva           | %   | T |  5 || M  |||   
```

## Relación con otras directivas

- **THColSpan**: Define los grupos de columnas en la primera fila
- **TipTH**: Define los tooltips para la segunda fila de encabezados
- **TipTHTop**: Define los tooltips para la primera fila de encabezados

## Comportamiento

- **Activación**: Se muestra al colocar el cursor sobre los encabezados de la primera fila
- **Correlación**: Cada parámetro corresponde a una columna individual, no a los grupos THColSpan
- **Formato**: Respeta los caracteres de escape para saltos de línea y tabulaciones
- **Compatibilidad**: Funciona únicamente con listados de doble encabezado

## Ventajas

- **Información jerárquica**: Proporciona contexto adicional en encabezados agrupados
- **Clarificación completa**: Complementa TipTH para documentar ambos niveles de encabezados
- **Flexibilidad**: Permite omitir tooltips en columnas específicas
- **Formateo avanzado**: Admite caracteres de escape para tooltips más informativos