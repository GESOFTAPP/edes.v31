# eOpCheck

## Descripción
Verifica si el usuario actual tiene acceso a una opción determinada a través de su "cd_gs_op" en el menú.

## Sintaxis
```php
eOpCheck($NOp)
```

## Parámetros
- **$NOp**: Código de la opción a verificar

## Funcionalidad
Esta función devuelve `true` si el usuario tiene la opción en su menú, `false` en caso contrario. Es útil para controlar el acceso a funcionalidades según los permisos del usuario.

## Ejemplos
```php
// Verificar si el usuario tiene acceso a una opción específica
if (eOpCheck('ADMIN_USERS')) {
    echo "El usuario tiene acceso a la administración de usuarios";
}

// Uso en condicionales para mostrar contenido
if (eOpCheck('REPORTS_ADVANCED')) {
    // Mostrar opciones de reportes avanzados
    showAdvancedReports();
}

// Verificación múltiple
$hasAccess = eOpCheck('CONFIG_SYSTEM');
if (!$hasAccess) {
    eMessage('No tienes permisos para esta opción', 'E');
}
```