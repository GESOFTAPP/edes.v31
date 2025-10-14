# ePermissionOption

## Descripción
Verifica si el usuario actual tiene una opción específica en su árbol de opciones del menú.

## Sintaxis
```php
ePermissionOption($nOption)
```

## Parámetros
- **$nOption**: Número de la opción a verificar. Solo se pueden consultar opciones, no carpetas

## Funcionalidad
Esta función devuelve un valor booleano indicando si el usuario tiene acceso a la opción especificada por su número. Es útil para controlar el acceso a funcionalidades específicas basándose en el árbol de opciones del usuario.

## Ejemplos
```php
// Verificar acceso a una opción específica
if (ePermissionOption(1025)) {
    echo "El usuario tiene acceso a la opción 1025";
}

// Uso condicional para mostrar contenido
if (ePermissionOption(2500)) {
    mostrarReportesFinancieros();
} else {
    eMessage('No tienes permisos para esta funcionalidad', 'E');
}

// Verificación múltiple
$tieneFacturacion = ePermissionOption(3000);
$tieneInventario = ePermissionOption(3100);
if ($tieneFacturacion && $tieneInventario) {
    habilitarModuloCompleto();
}
```