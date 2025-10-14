# eIsPDF

## Descripción
Verifica si el contenido actual corresponde a un archivo PDF o si se debe generar salida en formato PDF.

## Sintaxis
```php
eIsPDF()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
Determina si el contexto actual está configurado para generar o procesar contenido en formato PDF. Útil para condicionar la salida de datos según el formato requerido.

## Ejemplos

### Ejemplo 1: Verificación básica
```php
if (eIsPDF()) {
    echo "Generando salida en formato PDF";
} else {
    echo "Generando salida en formato HTML";
}
```

### Ejemplo 2: Configuración condicional de estilos
```php
if (eIsPDF()) {
    // Aplicar estilos específicos para PDF
    $cssClass = "pdf-format";
} else {
    // Aplicar estilos para web
    $cssClass = "web-format";
}
```

### Ejemplo 3: Procesamiento de datos según formato
```php
$datos = obtenerDatos();
if (eIsPDF()) {
    procesarParaPDF($datos);
} else {
    procesarParaWeb($datos);
}
```