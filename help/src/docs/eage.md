# eAge

## Descripción
Devuelve la edad actual calculada a partir de una fecha de nacimiento.

## Sintaxis
```php
eAge( $date )
```

## Parámetros
- `$date` (string): Fecha en formato "yyyy-mm-dd"

## Funcionalidad
Calcula la edad en años basándose en la fecha proporcionada y la fecha actual del sistema.

## Ejemplos
```php
// Ejemplo 1: Calcular edad básica
$edad = eAge("1990-05-15"); // Devuelve la edad actual

// Ejemplo 2: Uso en formulario
$fechaNacimiento = "1985-12-25";
$edadPersona = eAge($fechaNacimiento);
echo "La persona tiene " . $edadPersona . " años";

// Ejemplo 3: Validación de mayoría de edad
$fecha = "2010-03-10";
if(eAge($fecha) >= 18) {
    echo "Es mayor de edad";
} else {
    echo "Es menor de edad";
}
```