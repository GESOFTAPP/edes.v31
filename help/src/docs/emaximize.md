# eMaximize

## Descripción

Maximiza la aplicación del desktop. Se utiliza desde el fichero de configuración "desktop_user.ini" para proporcionar control sobre el estado de la ventana de la aplicación.

## Sintaxis

```php
eMaximize()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Maximiza la ventana de la aplicación
- Integrado con el sistema de configuración del desktop
- Proporciona control sobre el estado de la interfaz

## Ejemplos

### Ejemplo 1: Maximizar aplicación
```php
eMaximize();
```

### Ejemplo 2: Maximizar desde botón
```php
<button onclick="eMaximize()" title="Maximizar">
    <img src="g/maximize.gif" alt="Maximizar">
</button>
```

### Ejemplo 3: Maximizar condicionalmente
```php
if ($userPreference['autoMaximize']) {
    eMaximize();
}
```