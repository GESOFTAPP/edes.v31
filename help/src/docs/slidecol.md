# SlideCol

## Descripción

Fija las "n" primeras columnas visibles del listado para que permanezcan visibles al realizar scroll horizontal de la ventana. Esta funcionalidad es especialmente útil en listados con muchas columnas donde se desea mantener siempre visible información clave como identificadores o nombres. Tanto en la cabecera como en los datos se mantienen flotantes y se puede interactuar con ellos si está activo en el listado.

## Sintaxis

```
[SlideCol] NumeroDeColumnas
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **NumeroDeColumnas** | Número entero que especifica cuántas columnas desde la izquierda se mantendrán fijas durante el scroll horizontal. Las columnas especificadas permanecerán visibles mientras el usuario se desplaza horizontalmente por el resto del listado. |

## Ejemplos

### Fijar las primeras 2 columnas
```php
[SlideCol] 2
```

### Fijar solo la primera columna
```php
[SlideCol] 1
```

### Fijar las primeras 3 columnas
```php
[SlideCol] 3
```

## Consideraciones importantes

- **Interactividad**: Las columnas fijas mantienen toda su funcionalidad (ordenación, filtros, etc.).
- **Cabecera y datos**: Tanto los encabezados como los datos de las columnas especificadas permanecen fijos.
- **Scroll horizontal**: La funcionalidad solo se activa cuando existe scroll horizontal en el listado.
- **Compatibilidad**: Funciona con todos los tipos de columnas y datos del listado.
- **Rendimiento**: Ideal para listados amplios donde las primeras columnas contienen información de referencia importante.
