# eParseError

## Descripción
Función para depuración de errores de parsing. Permite identificar la ubicación exacta donde se produce un error cuando la información genérica no es suficiente. Al final del mensaje de error se mostrará entre paréntesis el número de la función donde se detectó el error.

## Sintaxis
```php
eParseError($GrabaEnTRON = false)
```

## Parámetros
- **$GrabaEnTRON**: Indica si el error se graba en el fichero "TRON" (por defecto es false)

## Funcionalidad
Esta función actúa como un testigo para identificar dónde ocurre un error de parsing. Si no eres desarrollador, se mostrará en pantalla el texto "ERROR INTERNO" con una cadena aleatoria de tres caracteres y se grabará en el TRON.

## Ejemplos
```php
// Ejemplo básico sin grabación en TRON
eParseError();

// Ejemplo con grabación en TRON
eParseError(true);

// Uso en puntos críticos del código
function procesarDatos() {
    eParseError(); // Testigo #1
    // ... código complejo ...
    eParseError(); // Testigo #2
    // ... más código ...
    eParseError(true); // Testigo #3 con grabación
}
```