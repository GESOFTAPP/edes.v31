# eProgressHidden

## Descripción
Oculta la barra de progreso antes de que llegue al valor 100%. Por defecto ejecuta la función `eSound('M')`.

## Sintaxis
```php
eProgressHidden($Sound='M')
```

## Parámetros
- **$Sound**: Por defecto ejecuta `eSound('M')`. Para evitar sonido, pasar cadena vacía

## Funcionalidad
Esta función permite ocultar la barra de progreso en cualquier momento del proceso, sin necesidad de esperar a que llegue al 100%. Es útil cuando se quiere terminar el proceso de forma prematura o cuando se necesita mayor control sobre la visualización.

## Ejemplos
```php
// Ocultar barra con sonido por defecto
eProgressHidden();

// Ocultar barra sin sonido
eProgressHidden('');

// Ejemplo de uso en un proceso con cancelación
eProgress(0, 'Procesando...', '%', 'Iniciando...');
eProgress(30, 'Procesando...', '%', 'Avanzando...');
if ($cancelarProceso) {
    eProgressHidden('');
    eMessage('Proceso cancelado', 'V');
}
```