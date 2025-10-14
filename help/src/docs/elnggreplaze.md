# eLngReplaze

## Descripción
Sustituye las claves de idioma que estén dentro de "$txt" si las hay. Esta función procesa un texto buscando marcadores de idioma y los reemplaza por sus valores correspondientes.

## Sintaxis
```php
eLngReplaze($txt)
```

## Parámetros
- **$txt** (string): Texto que contiene las claves de idioma a sustituir

## Funcionalidad
Esta función analiza el texto proporcionado y busca claves de idioma (normalmente delimitadas por caracteres especiales) para reemplazarlas por sus valores correspondientes del archivo de idiomas cargado previamente. Es útil para procesar plantillas de texto con contenido multiidioma.

## Ejemplos

### Ejemplo 1: Reemplazo básico
```php
$texto = "Bienvenido {WELCOME_MSG} al sistema";
$resultado = eLngReplaze($texto);
echo $resultado; // Salida: "Bienvenido Welcome al sistema"
```

### Ejemplo 2: Múltiples reemplazos
```php
$mensaje = "{HELLO} {USER_NAME}, {TODAY_DATE}";
$procesado = eLngReplaze($mensaje);
echo $procesado; // Salida: "Hola Juan, 2025-07-07"
```

### Ejemplo 3: Texto sin claves
```php
$texto_simple = "Este es un texto sin claves de idioma";
$resultado = eLngReplaze($texto_simple);
echo $resultado; // Salida: "Este es un texto sin claves de idioma"
```