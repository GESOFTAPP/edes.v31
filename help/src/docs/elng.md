# eLng

## Descripción
Devuelve un texto en el idioma actual del sistema, con posibilidad de realizar reemplazos de variables dinámicas.

## Sintaxis
```php
eLng($pk, $v1='', $v2='', $v3='')
```

## Parámetros
- `$pk` (string): Clave del texto en el archivo de idiomas
- `$v1, $v2, $v3` (string, opcional): Variables para reemplazar en el texto

## Funcionalidad
Obtiene textos traducidos del sistema de idiomas actual. Permite:
- Acceso a textos multiidioma
- Reemplazo de variables dinámicas en los textos
- Acceso directo via `$_Lng[...]` para casos simples
- Soporte para hasta 3 variables de reemplazo

## Ejemplos
```php
// Ejemplo 1: Obtener texto simple
echo eLng('welcome_message');
// Resultado: "Bienvenido al sistema"

// Ejemplo 2: Texto con una variable
echo eLng('hello_user', 'Juan');
// Resultado: "Hola Juan, ¿cómo estás?"

// Ejemplo 3: Texto con múltiples variables
echo eLng('order_summary', 'Pedido #123', '5 productos', '99.99€');
// Resultado: "Pedido #123 contiene 5 productos por un total de 99.99€"
```