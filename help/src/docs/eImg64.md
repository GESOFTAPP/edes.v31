# eImg64

## Descripción
Convierte una imagen a formato Base64 para su uso directo en HTML mediante data URIs.

## Sintaxis
```php
eImg64($NmFile)
```

## Parámetros
- `$NmFile` (string): Ruta del archivo de imagen a convertir

## Funcionalidad
Lee un archivo de imagen y lo convierte a una cadena Base64 que puede ser utilizada directamente en el atributo `src` de elementos HTML `<img>`. Útil para:
- Embeber imágenes pequeñas en HTML
- Reducir peticiones HTTP
- Crear imágenes inline en emails HTML

## Ejemplos
```php
// Ejemplo 1: Mostrar imagen embebida
<img src="<?php echo eImg64("/http/g/seek.png"); ?>">

// Ejemplo 2: Imagen de fondo en CSS
$imagenBase64 = eImg64("/images/background.jpg");
echo '<div style="background-image: url(' . $imagenBase64 . ');">';

// Ejemplo 3: Imagen en email HTML
$logoBase64 = eImg64("/assets/logo.png");
$htmlEmail = '<img src="' . $logoBase64 . '" alt="Logo de la empresa">';
echo $htmlEmail;
```