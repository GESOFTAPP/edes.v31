# PDFVar

## Sintaxis

```
[PDFVar] PDFVar = Value ...
```

## Descripción

Permite modificar variables de configuración del PDF. Es opcional el "$" delante de la variable así como el ";". Incluye variables especiales del sistema para personalizar etiquetas y valores de condiciones.

### Variables especiales del sistema

| Variable | Descripción |
|----------|-------------|
| `$_PDFLABELHIDDEN['NomCampo']` | Asigna etiquetas a campos sin label o campos de condiciones |
| `$_PDFVALUELHIDDEN['Valor']` | Muestra valores diferentes en la información de condiciones |
| `$PDF_Condition` | Texto a mostrar en la condición del PDF (string o array) |

### Notas importantes
- El prefijo "PDF_" es opcional en la definición de la etiqueta
- Es obligatorio usar "PDF_" si se define la variable dentro de otra etiqueta
- El valor especial "NotToShow" en `$_PDFLABELHIDDEN` oculta campos condicionados de la lista

## Parámetros

| Variable | Tipo | Descripción |
|----------|------|-------------|
| **PDF_FontSize** | Entero | Tamaño de la fuente |
| **PDF_Grid** | Boolean | Mostrar rejilla |
| **PDF_GREENBAR** | Boolean | Activar barras verdes alternadas |
| **PDF_ShadowRows** | String | Filas con sombra (ej: '1,5,10,15,20') |
| **PDF_ColorRows** | String | Colores para filas (ej: '#0055ff,,#229911,#8912ad') |
| **PDF_LineRows** | String | Líneas en filas específicas (ej: '0,1,4,5,10,15,20') |
| **PDF_TxtCabecera** | String | Texto de cabecera personalizada |
| **PDF_Orientacion** | String | Orientación: 'V' (Vertical) / 'H' (Horizontal) |
| **PDF_TxtOrderBy** | String | Texto de la ordenación |
| **PDF_ShowHeader** | Boolean | Mostrar cabecera en todas las páginas |
| **PDF_LetterHead** | Boolean | Mostrar título, ordenación y condiciones en cada página |
| **PDF_LastAfterMarginBottom** | Entero | Margen libre en la última página |
| **PDF_ShowFilter** | Boolean | Mostrar filtro (requiere PDF_ShowHeader activo) |
| **PDF_Width** | Entero | Ancho de la página |
| **PDF_Height** | Entero | Alto de la página |
| **PDF_FillCols** | String | Columnas a ajustar ancho al contenido (ej: '2,3') |
| **PDF_FullPermissions** | Boolean | Activar modificación, copia de texto, etc. |
| **PDF_MarginBottom** | Entero | Margen entre final del listado y número de página |
| **PDF_DataHeight** | Entero | Altura de las filas de datos |
| **PDF_ImgMarginRight** | Entero | Margen derecho libre con imagen |
| **PDF_MarginLetterHead** | Entero | Margen mínimo desde top a cabecera |
| **PDF_NoCondition** | Boolean | Desactivar visualización de condiciones |
| **PDF_ChartCol** | Boolean | Imprimir gráfico [ChartCol] en PDF |

## Ejemplos

### Ejemplo básico de configuración
```
[PDFVar] PDF_FontSize = 10
[PDFVar] PDF_Grid = true
```

### Ejemplo con formato multilínea
```
[PDFVar]
     FontSize = 10
     Grid = true
```

### Ejemplo de configuración visual avanzada
```
[PDFVar] PDF_GREENBAR = true
[PDFVar] PDF_ShadowRows = '1,5,10,15,20'
[PDFVar] PDF_ColorRows = '#0055ff,,#229911,#8912ad'
[PDFVar] PDF_LineRows = '0,1,4,5,10,15,20'
```

### Ejemplo de configuración de página
```
[PDFVar] PDF_Orientacion = 'H'
[PDFVar] PDF_Width = 190
[PDFVar] PDF_Height = 80
[PDFVar] PDF_TxtCabecera = 'Informe de Ventas Mensual'
```

### Ejemplo de configuración de márgenes
```
[PDFVar] PDF_LastAfterMarginBottom = 60
[PDFVar] PDF_MarginBottom = 200
[PDFVar] PDF_DataHeight = 40
[PDFVar] PDF_ImgMarginRight = 110
[PDFVar] PDF_MarginLetterHead = 110
```

### Ejemplo de configuración de cabeceras y filtros
```
[PDFVar] PDF_ShowHeader = true
[PDFVar] PDF_ShowFilter = true
[PDFVar] PDF_LetterHead = true
[PDFVar] PDF_TxtOrderBy = 'Ordenado por fecha de creación'
```

### Ejemplo de configuración de columnas
```
[PDFVar] PDF_FillCols = '2,3'
[PDFVar] PDF_FullPermissions = true
```

### Ejemplo de variables especiales del sistema
```
[PDFVar] $_PDFLABELHIDDEN['cd_cliente'] = 'Código de Cliente'
[PDFVar] $_PDFLABELHIDDEN['estado_oculto'] = 'NotToShow'
[PDFVar] $_PDFVALUELHIDDEN['A'] = 'Activo'
[PDFVar] $_PDFVALUELHIDDEN['I'] = 'Inactivo'
```

### Ejemplo de configuración completa
```
[PDFVar]
     PDF_FontSize = 12
     PDF_Grid = true
     PDF_GREENBAR = true
     PDF_Orientacion = 'H'
     PDF_TxtCabecera = 'Listado Completo de Productos'
     PDF_ShowHeader = true
     PDF_ShowFilter = false
     PDF_FullPermissions = true
     PDF_ChartCol = true
     PDF_NoCondition = 0
```

### Ejemplo con condiciones personalizadas
```
[PDFVar] PDF_Condition = 'Filtros aplicados: Estado Activo, Categoría Premium'
```

### Ejemplo con array de condiciones
```
[PDFVar] PDF_Condition = ['Período: Enero 2023', 'Estado: Activo', 'Región: Madrid']
```