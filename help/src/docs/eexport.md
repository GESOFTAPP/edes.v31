# eExport

## Descripción

Muestra una ventana incrustada con los ficheros que se han exportado, mostrando las últimas extracciones de datos. Se utiliza en el fichero de configuración "desktop_user.ini".

## Sintaxis

```php
eExport()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Muestra una ventana incrustada con los archivos exportados
- Permite acceder a las últimas extracciones de datos realizadas
- Integrado con el sistema de configuración del desktop
- Facilita la gestión de archivos exportados

## Ejemplos

### Ejemplo 1: Mostrar extracciones
```php
eExport();
```

### Ejemplo 2: Condicional desde configuración
```php
if ($_Util['extract'] == 'S') {
    echo '<TD><img onclick="eExport()" src="g/extrac_0.gif" title="Extracciones"></TD>';
}
```

### Ejemplo 3: Integración en menú de herramientas
```php
<div class="tools-menu">
    <button onclick="eExport()" title="Ver extracciones">
        <img src="g/extrac_0.gif" alt="Extracciones">
    </button>
</div>
```