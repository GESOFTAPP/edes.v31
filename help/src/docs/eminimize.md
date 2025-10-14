# eMinimize

## Descripción

Minimiza la aplicación del desktop. Se utiliza desde el fichero de configuración "desktop_user.ini" para proporcionar control sobre el estado de la ventana de la aplicación.

## Sintaxis

```php
eMinimize()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Minimiza la ventana de la aplicación
- Integrado con el sistema de configuración del desktop
- Proporciona control sobre el estado de la interfaz

## Ejemplos

### Ejemplo 1: Minimizar aplicación
```php
eMinimize();
```

### Ejemplo 2: Minimizar desde botón
```php
<button onclick="eMinimize()" title="Minimizar">
    <img src="g/minimize.gif" alt="Minimizar">
</button>
```

### Ejemplo 3: Minimizar automáticamente
```php
if ($inactiveTime > 300) { // 5 minutos
    eMinimize();
}
```