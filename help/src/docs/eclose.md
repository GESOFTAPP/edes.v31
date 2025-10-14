# eClose

## Descripción

Cierra el desktop de la aplicación. Se utiliza desde el fichero de configuración "desktop_user.ini" para proporcionar una función de cierre controlado del entorno de trabajo.

## Sintaxis

```php
eClose()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Cierra de forma controlada el entorno desktop
- Integrado con el sistema de configuración del usuario
- Proporciona una salida limpia de la aplicación

## Ejemplos

### Ejemplo 1: Cerrar aplicación
```php
eClose();
```

### Ejemplo 2: Cerrar con confirmación
```php
if (confirm("¿Desea cerrar la aplicación?")) {
    eClose();
}
```

### Ejemplo 3: Botón de cierre en el desktop
```php
<button onclick="eClose()" class="close-button">Cerrar</button>
```