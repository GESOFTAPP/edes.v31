# eGetInterval

## Descripción
Devuelve el número de segundos desde que se inició la conexión de PHP.

## Sintaxis
```php
eGetInterval()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
Esta función mide el tiempo transcurrido desde el inicio de la ejecución del script PHP. Es útil para medir el rendimiento y tiempo de ejecución de procesos.

## Ejemplos

### Ejemplo 1: Medir tiempo de ejecución básico
```php
$inicio = eGetInterval();
// Código a ejecutar
sleep(2);
$fin = eGetInterval();
echo "Tiempo transcurrido: " . ($fin - $inicio) . " segundos";
```

### Ejemplo 2: Medir tiempo de procesamiento
```php
echo "Iniciando proceso...\n";
$tiempoInicial = eGetInterval();

// Simular procesamiento
for ($i = 0; $i < 1000000; $i++) {
    // Operación cualquiera
}

$tiempoFinal = eGetInterval();
echo "Procesamiento completado en: " . $tiempoFinal . " segundos";
```

### Ejemplo 3: Crear un sistema de benchmark
```php
function benchmark($nombre, $funcion) {
    $inicio = eGetInterval();
    $funcion();
    $fin = eGetInterval();
    echo "Benchmark '$nombre': " . ($fin - $inicio) . " segundos\n";
}

benchmark("Prueba 1", function() {
    sleep(1);
});

benchmark("Prueba 2", function() {
    for ($i = 0; $i < 100000; $i++) {
        $temp = $i * 2;
    }
});
```