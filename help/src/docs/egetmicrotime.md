# eGetMicroTime

## Descripción
Devuelve el tiempo actual en segundos con precisión de microsegundos, útil para mediciones de rendimiento y timestamps precisos.

## Sintaxis
```php
eGetMicroTime()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
Retorna un float que representa el tiempo Unix actual con precisión de microsegundos. Es útil para:
- Medir tiempos de ejecución
- Crear timestamps únicos
- Análisis de rendimiento
- Sincronización precisa

## Ejemplos
```php
// Ejemplo 1: Medir tiempo de ejecución
$inicio = eGetMicroTime();
// ... código a medir ...
$fin = eGetMicroTime();
$tiempoEjecucion = $fin - $inicio;
echo "Tiempo de ejecución: " . $tiempoEjecucion . " segundos";

// Ejemplo 2: Crear un timestamp único
$timestamp = eGetMicroTime();
$nombreArchivo = "backup_" . str_replace('.', '_', $timestamp) . ".sql";
echo $nombreArchivo; // Resultado: backup_1640995200_123456.sql

// Ejemplo 3: Comparar rendimiento de diferentes métodos
$tiempo1 = eGetMicroTime();
metodo1();
$tiempo2 = eGetMicroTime();
metodo2();
$tiempo3 = eGetMicroTime();

echo "Método 1: " . ($tiempo2 - $tiempo1) . " segundos\n";
echo "Método 2: " . ($tiempo3 - $tiempo2) . " segundos\n";
```