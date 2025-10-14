# eAbout

## Descripción

Ejecuta el fichero de configuración "about.htm" ubicado en "/_datos/config/", utilizado desde el fichero de configuración "desktop_user.ini" para mostrar información sobre la aplicación.

## Sintaxis

```php
eAbout()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Carga y muestra el contenido del archivo "about.htm"
- Se utiliza típicamente para mostrar información sobre la versión, desarrolladores, o detalles de la aplicación
- Integrado con el sistema de configuración del desktop

## Ejemplos

### Ejemplo 1: Mostrar información de la aplicación
```php
eAbout();
```

### Ejemplo 2: Llamada desde un botón del desktop
```php
<button onclick="eAbout()">Acerca de</button>
```

### Ejemplo 3: Integración en menú
```php
if ($showAbout) {
    eAbout();
}
```