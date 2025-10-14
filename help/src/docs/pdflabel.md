# PDFLabel

## Sintaxis

```
[PDFLabel] NomFile | OffsetX,OffsetY | Ancho,Alto | MargenRight,MargenBottom | NEtiPorLinea,NEtiPorColumna [ | AltoLetra [ | TipoLetra [[ | NomFunctionUsu | padding ]]]]
```

## Descripción

Generación de etiquetas, fichas y sobres en formato PDF. Para campos select, usar el nombre visible (ej: "nm_via" en lugar de "cd_via"). Para comenzar la impresión en una etiqueta específica, usar las variables `_PDFLabelCol` y `_PDFLabelRow` (esquina superior izquierda es 0,0). Permite la impresión de códigos de barras EAN-13.

### Comportamiento en diferentes modos
- En modos `cR`, `mR`, `bR`: Si existe la etiqueta `[PDFLabel]`, generará las etiquetas
- Sin "Ancho": Aplica `trim()`
- Sin "x": Pinta a continuación
- Sin "y": Pinta en la misma línea
- Sin "campo": Pinta una constante

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **NomFile** | String | Nombre del fichero a generar |
| **OffsetX,OffsetY** | Enteros | Distancia desde el borde superior izquierdo |
| **Ancho,Alto** | Enteros | Dimensiones de cada etiqueta |
| **MargenRight,MargenBottom** | Enteros | Distancia entre etiquetas |
| **NEtiPorLinea,NEtiPorColumna** | Enteros | Número de etiquetas por fila y columna |
| **AltoLetra** | Entero | Altura de la letra (opcional) |
| **TipoLetra** | String | Tipo de fuente (opcional) |
| **NomFunctionUsu** | String | Nombre de función de usuario (opcional) |
| **padding** | String | Espaciado: top,right,bottom,left (opcional) |

### Detalles de parámetros

#### NomFile
- `"label"`: Genera página de muestra con números
- Vacío: Nombre automático en `/_tmp/pdf/`
- Sin ruta: Se guarda en el directorio actual
- Con ruta: Se guarda en el directorio especificado

#### OffsetX,OffsetY y MargenRight,MargenBottom
- Número: Distancia en caracteres
- Número + "p": Distancia en puntos

#### TipoLetra
| Base | Descripción | Variaciones |
|------|-------------|-------------|
| **C** | Courier | O (Oblique), B (Bold), BO (BoldOblique) |
| **H** | Helvetica | I (Italic), B (Bold), BI (BoldItalic) |
| **T** | Times-Roman | O (Oblique), B (Bold), BO (BoldOblique) |

**Ejemplos de tipos:**
- `HBO`: Helvetica-BoldOblique
- `CB`: Courier-Bold
- `TI`: Times-Italic

#### NomFunctionUsu
Función de usuario que recibe 6 parámetros:
- `$p`: Puntero del documento PDF
- `$x`: Coordenada X de la etiqueta actual
- `$y`: Coordenada Y de la etiqueta actual
- `$nRow`: Número de línea de la etiqueta
- `$nCol`: Número de columna de la etiqueta
- `$vField`: Matriz con el registro a pintar

**Función para código de barras:**
```php
eEAN13(CodigoDeBarrasNumerico, AltoBarras, CoordX, CoordY)
```

#### Padding
Genera etiquetas en posición absoluta dividiendo el DIN A4 entre el número de etiquetas.
Formato: `top,right,bottom,left`

## Ejemplos

### Ejemplo básico de etiquetas
```
[PDFLabel] NomFile | 10,5 | 40,6 | 2,2 | 3,5
// Campo      | x | y | AnchoMax | Obligatorio | Constante
nombre        | 3 | 3 ||          # | " "
apellidos     |   |   ||          # |
nm_via        |   | 4 ||          # | " "
direccion     |   |   ||          # | ", "
numero        |   |   ||          # | ' ('
escalera      |   |   ||            | " "
piso          |   |   ||            | " "
puerta        |   |   ||            | " )"
cd_postal     |   | 5 ||          # | -
poblacion     |   |   ||          # |
```

### Ejemplo de sobres
```
[PDFVar] PDF_Width  = 300                    // Ancho del sobre
[PDFVar] PDF_Height = 100                    // Alto del sobre

[PDFLabel] NomFile | 10,5 | 40,6 | 2,2 | 1,1
// Campo      | x | y | AnchoMax | Obligatorio | Constante
nombre        | 3 | 3 ||          # | " "
apellidos     |   |   ||          # |
nm_via        |   | 4 ||          # | " "
direccion     |   |   ||          # | ", "
numero        |   |   ||          # | ' ('
escalera      |   |   ||            | " "
piso          |   |   ||            | " "
puerta        |   |   ||            | " )"
cd_postal     |   | 5 ||          # | -
poblacion     |   |   ||          # |
```

### Ejemplo con página de muestra
```
[PDFLabel] label | 10,5 | 40,6 | 2,2 | 3,5
```

### Ejemplo con función personalizada y padding
```
[PDFLabel] etiquetas_especiales.pdf | 15p,10p | 45,8 | 3p,3p | 2,4 | 12 | HBO | mi_funcion_etiquetas | 5,5,5,5
```

### Variables de control de posición
```php
// Para empezar en la etiqueta de la fila 2, columna 3
$_PDFLabelRow = 1;  // Base 0
$_PDFLabelCol = 2;  // Base 0
```