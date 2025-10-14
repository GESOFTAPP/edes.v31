# eNew

## Descripción

Muestra una ventana incrustada con las últimas novedades del sistema. Se utiliza desde el fichero de configuración "desktop_user.ini" para mantener informados a los usuarios sobre actualizaciones y nuevas funcionalidades.

## Sintaxis

```php
eNew()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Muestra una ventana incrustada con las últimas novedades
- Integrado con el sistema de configuración del desktop
- Mantiene a los usuarios informados sobre actualizaciones
- Proporciona acceso rápido a información de novedades

## Ejemplos

### Ejemplo 1: Mostrar novedades
```php
eNew();
```

### Ejemplo 2: Mostrar novedades desde botón
```php
<button onclick="eNew()" title="Novedades">
    <img src="g/news.gif" alt="Novedades">
</button>
```

### Ejemplo 3: Mostrar automáticamente en inicio
```php
if ($showNewsOnStartup) {
    eNew();
}
```