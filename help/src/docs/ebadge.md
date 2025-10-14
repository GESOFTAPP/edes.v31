# eBadge

## Descripción
Devuelve un círculo de color con o sin texto, útil para mostrar iniciales, números o indicadores visuales.

## Sintaxis
```php
eBadge( $colores [, $texto="" [, $inner="" ]] )
```

## Parámetros
- `$colores` (string): Background[,color[,borderColor]] - Colores del badge
- `$texto` (string): Normalmente una inicial o texto corto
- `$inner` (string): Cualquier dato a incluir en el interior del tag

## Funcionalidad
Genera un elemento visual circular con colores personalizables, ideal para mostrar iniciales de usuarios, contadores o indicadores de estado.

## Ejemplos
```php
// Ejemplo 1: Badge verde simple
$badge1 = eBadge("green");

// Ejemplo 2: Badge azul con inicial
$badge2 = eBadge("blue", "J", "onclick='alert(\"Usuario Juan\")'");

// Ejemplo 3: Badge personalizado con tooltip
$badge3 = eBadge("black,white", "A", "title='Administrador'");
```