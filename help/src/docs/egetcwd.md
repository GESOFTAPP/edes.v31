# eGetCWD

## Descripción
Es la función "GetCWD()" de PHP pero compatible tanto para Linux como para Windows. Proporciona una implementación multiplataforma para obtener el directorio de trabajo actual.

## Sintaxis
```php
eGetCWD()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
- Obtiene el directorio de trabajo actual del script PHP
- Garantiza compatibilidad entre sistemas operativos Windows y Linux
- Retorna la ruta absoluta del directorio actual
- Maneja automáticamente las diferencias en los separadores de ruta entre sistemas operativos

## Ejemplos

### Ejemplo 1: Uso básico
```php
<?php
$currentDir = eGetCWD();
echo "Directorio actual: " . $currentDir;
// Salida: Directorio actual: /home/usuario/proyecto
?>
```

### Ejemplo 2: Uso en validación de rutas
```php
<?php
$workingDir = eGetCWD();
$expectedDir = "/var/www/html/mi-aplicacion";

if ($workingDir === $expectedDir) {
    echo "Ejecutándose desde el directorio correcto";
} else {
    echo "Advertencia: Directorio de trabajo inesperado";
}
?>
```

### Ejemplo 3: Combinación con otras operaciones de archivo
```php
<?php
$currentDir = eGetCWD();
$configFile = $currentDir . DIRECTORY_SEPARATOR . "config.php";

if (file_exists($configFile)) {
    include $configFile;
    echo "Configuración cargada desde: " . $configFile;
} else {
    echo "Archivo de configuración no encontrado en: " . $configFile;
}
?>
```