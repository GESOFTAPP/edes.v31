# PDFPhp

## Sintaxis

```
[PDFPhp] Type | NomFile
```

## Descripción

Incluye código PHP para generar salidas en PDF. Se utiliza para crear funciones personalizadas que permiten imprimir datos específicos. Por defecto busca el archivo en el subdirectorio `d`. Dentro del archivo donde está definida la ficha que se genera en PDF, habrá llamadas a las funciones definidas en este archivo.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Type** | String | Tipo de inclusión PHP |
| **NomFile** | String | Nombre del archivo PHP a incluir |

### Valores de Type

| Valor | Descripción |
|-------|-------------|
| **F** | Archivo de funciones (único valor disponible actualmente) |

### Ubicación de archivos

- **Directorio por defecto**: Subdirectorio `d`
- **Ruta completa**: `d/NomFile`

### Uso en fichas PDF

Dentro del archivo de definición de la ficha PDF, se pueden hacer llamadas a las funciones incluidas:

```
E; nombre_funcion( parametro1, parametro2, ... )
```

## Ejemplos

### Ejemplo básico
```
[PDFPhp] F | info_fotos.php
```

### Ejemplo con función de impresión de fotos
```
[PDFPhp] F | info_fotos.php
```

**Contenido del archivo `d/info_fotos.php`:**
```php
<?php
function uPintarFotos($x, $y, $ancho, $alto, $cantidad) {
    // Lógica para imprimir fotos en el PDF
    // Utiliza las coordenadas y dimensiones especificadas
}
?>
```

**Uso en la ficha PDF:**
```
E; uPintarFotos( 2, 15, 20, 0, 6 )
```

### Ejemplo con múltiples funciones
```
[PDFPhp] F | utilidades_pdf.php
```

**Contenido del archivo `d/utilidades_pdf.php`:**
```php
<?php
function imprimirCabecera($titulo) {
    // Función para imprimir cabecera personalizada
}

function imprimirPie($texto) {
    // Función para imprimir pie de página
}

function formatearTexto($texto, $estilo) {
    // Función para aplicar formato al texto
}
?>
```

**Uso en la ficha PDF:**
```
E; imprimirCabecera( "Informe de Ventas" )
E; formatearTexto( $texto_contenido, "negrita" )
E; imprimirPie( "Documento generado automáticamente" )
```

### Ejemplo con archivo de funciones específicas
```
[PDFPhp] F | graficos_personalizados.php
```

Esta configuración permite crear funciones reutilizables para generar elementos gráficos complejos en los documentos PDF.