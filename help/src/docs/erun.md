# eRun

## Descripción
Ejecuta diferentes funciones del sistema, como operaciones de solicitud, drag and drop, y otras funcionalidades del motor.

## Sintaxis
```php
eRun($funcion, $parametros...)
```

## Parámetros
Los parámetros varían según la función a ejecutar:
- **$funcion**: Nombre de la función a ejecutar
- **$parametros...**: Parámetros específicos de cada función

## Funcionalidad
Esta función actúa como un dispatcher que permite ejecutar diferentes operaciones del sistema de forma unificada. Cada función tiene sus propios parámetros específicos.

## Ejemplos
```php
// Ejecutar operaciones de solicitud
eRun('eRequest.Save');
eRun('eRequest.Run');

// Ejecutar drag and drop con parámetros específicos
eRun('eDrag', 'IMPORTMenu', '_ImportMenu', 'Menú de Opciones', true, false, 0, 'B');

// Otros ejemplos de uso
eRun('eRefresh');
eRun('eValidate', 'formData');
```