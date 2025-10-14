# PDFInclude

## Sintaxis

```
[PDFInclude] Modo [ | AddMargenTop=0 ]
```

## Descripción

Inserta código PHP fundamentalmente instrucciones para modificar el PDF al principio y/o final de cada página con posibilidad de crear una primera hoja de portada y una última hoja. El Modo se puede definir con las iniciales o con el literal. Es una etiqueta multilínea.

**Limitaciones:**
- No se pueden definir funciones en esta zona
- No se puede sacar nada por pantalla al estar generándose el PDF
- Para información durante el desarrollo utilizar la función `eTron()`

### Variables disponibles

| Variable | Descripción |
|----------|-------------|
| `$handle` | El manejador del fichero PDF |
| `$dw` | Ancho del documento |
| `$dh` | Alto del documento |
| `$page` | Número de página (parámetro modificable) |
| `$header_line` | Matriz con los valores de posición de la cabecera: `$x`, `$y`, `$x2` |
| `$BreakPage` | Matriz con los valores del cursor de los campos definidos en `[PDFBreakPage]` |

## Parámetros

| Modo | Iniciales | Descripción |
|------|-----------|-------------|
| `Main` | `M` | Nada más crear el PDF |
| `Start` | `S` | Una página en blanco al empezar |
| `First-Header` | `FH` | Antes de la cabecera de la primera página |
| `Each-Header` | `EH` | Antes de la cabecera de cada página |
| `First-Before` | `FB` | Al inicio de la primera página |
| `First-After` | `FA` | Al final de la primera página |
| `Each-Before` | `EB` | Al principio de cada página |
| `Each-After` | `EA` | Al final de cada página |
| `Last-Before` | `LB` | Al principio de la última página |
| `Last-After` | `LA` | Al final de la última página |
| `End` | `E` | Una página en blanco al terminar |

### Parámetros opcionales

| Parámetro | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `AddMargenTop` | Entero | 0 | Margen superior adicional |

## Ejemplos

### Ejemplo básico - Firma en la última página
```
[PDFInclude] LA
PDF_show_xy( $handle, 'Fdo: XXXXXXXX', 400, 40 );
PDF_show_xy( $handle, 'Consejero delegado en funciones', 400, 30 );
```

### Ejemplo con iniciales - Cabecera en cada página
```
[PDFInclude] EH
PDF_show_xy( $handle, 'DOCUMENTO CONFIDENCIAL', 200, $dh - 20 );
```

### Ejemplo con margen superior
```
[PDFInclude] FB | AddMargenTop=20
PDF_show_xy( $handle, 'PORTADA DEL DOCUMENTO', 100, $dh - 50 );
```

### Ejemplo de página de inicio
```
[PDFInclude] S
PDF_show_xy( $handle, 'INFORME GENERADO EL ' . date('d/m/Y'), 50, $dh - 100 );
PDF_show_xy( $handle, 'Página: ' . $page, 50, 50 );
```

### Ejemplo de numeración en cada página
```
[PDFInclude] EA
PDF_show_xy( $handle, 'Página ' . $page, $dw - 100, 30 );
```