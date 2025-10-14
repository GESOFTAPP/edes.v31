# ePrint

## Descripción

Imprime la página IWORK que está ubicada en el centro del desktop. Proporciona funcionalidad de impresión para el contenido principal del área de trabajo.

## Sintaxis

```php
ePrint()
```

## Parámetros

Esta función no requiere parámetros.

## Funcionalidad

- Imprime el contenido de la página IWORK central
- Integrado con el sistema de impresión del desktop
- Proporciona impresión directa del área de trabajo activa

## Ejemplos

### Ejemplo 1: Imprimir página actual
```php
ePrint();
```

### Ejemplo 2: Imprimir desde botón
```php
<button onclick="ePrint()" title="Imprimir">
    <img src="g/print.gif" alt="Imprimir">
</button>
```

### Ejemplo 3: Imprimir con confirmación
```php
if (confirm("¿Desea imprimir la página actual?")) {
    ePrint();
}
```