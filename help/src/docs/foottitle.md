# FootTitle

## Sintaxis

```
[FootTitle] Línea de Código PHP
```

## Descripción

Crea un subtítulo pegado a la parte inferior de un listado. Se ejecuta tanto en visualización HTML como en generación de PDF y otros formatos de exportación.

## Formatos de salida

### PDF
- Utilizar la función `eIsPDF()` para detectar formato PDF
- Devolver una cadena de texto
- Usar `<BR>` para crear múltiples líneas

### XLS y XML
- Usar carácter `\t` para saltar a la siguiente columna
- Usar `<BR>` o `\n` para saltar de línea

### HTML
- Usar `echo` para mostrar contenido HTML
- Permite cualquier formato HTML válido

## Funciones de detección de formato

| Función | Descripción |
|---------|-------------|
| `eIsPDF()` | Detecta si la salida es PDF |
| `eIsXML()` | Detecta si la salida es XML |
| `eIsXLS()` | Detecta si la salida es XLS |
| `eIsHTM()` | Detecta si la salida es HTML |

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `Línea de Código PHP` | Código PHP a ejecutar para generar el pie |

## Ejemplos

### Ejemplo 1: Pie simple
```php
[FootTitle] echo "<div width=100% align=left> TOTAL: ".$_Records." </div>";
```
Muestra el total de registros en un div alineado a la izquierda.

### Ejemplo 2: Función personalizada básica
```php
[FootTitle] FuncPintaPie()
[PHPIni]
function FuncPintaPie(){ 
    // Código de la función
}
```

### Ejemplo 3: Función con múltiples formatos
```php
[FootTitle] FuncPintaPie()
[PHPIni]
function FuncPintaPie(){
    if( eIsPDF() ){
        return "Línea 1<BR>Línea 2<BR>Línea 3";
    }else if( eIsXML() || eIsXLS() ){
        return "col 1\tcol 2\tCol3<br>col 1\tcol 2";
    }else if( eIsHTM() ){
        echo "<div class='footer-content'>Contenido HTML</div>";
    }
}
```

## Notas importantes

- Para **una sola línea en PDF**: usar `[FootTitle]`
- Para **múltiples líneas en PDF**: considerar usar `[PDFInclude]`
- La variable `$_Records` contiene el número total de registros
- El código se ejecuta en todos los formatos de salida