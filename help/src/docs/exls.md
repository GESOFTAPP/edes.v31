# eXLS

## Descripción

Función para exportar a Excel los listados que estén en la página central IWORK. Se utiliza desde el fichero de configuración "desktop_user.ini" para proporcionar funcionalidad de exportación de datos.

## Sintaxis

```php
eXLS()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Exporta listados de la página IWORK central a formato Excel
- Integrado con el sistema de configuración del desktop
- Proporciona exportación directa de datos tabulares
- Facilita el análisis de datos en aplicaciones externas

## Ejemplos

### Ejemplo 1: Exportar a Excel
```php
eXLS();
```

### Ejemplo 2: Exportar desde botón
```php
<button onclick="eXLS()" title="Exportar a Excel">
    <img src="g/excel.gif" alt="Exportar Excel">
</button>
```

### Ejemplo 3: Exportar con validación
```php
if (hasDataToExport()) {
    eXLS();
} else {
    alert("No hay datos para exportar");
}
```