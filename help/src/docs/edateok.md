# eDateOk

## Descripción
Devuelve true/false indicando si la fecha proporcionada es correcta y válida.

## Sintaxis
```php
eDateOk( $year, $month, $day )
```

## Parámetros
- `$year` (int): Año de la fecha
- `$month` (int): Mes de la fecha (1-12)
- `$day` (int): Día de la fecha

## Funcionalidad
Valida si una fecha es correcta considerando años bisiestos, días válidos por mes, etc.

## Ejemplos
```php
// Ejemplo 1: Validación básica
if( eDateOk( 2024, 2, 29 ) ){
    echo "Fecha válida";
} else {
    echo "Fecha inválida";
}

// Ejemplo 2: Validación de formulario
$year = 2024;
$month = 13;
$day = 32;
if( eDateOk( $year, $month, $day ) ){
    echo "Fecha correcta";
} else {
    echo "Error en la fecha";
}

// Ejemplo 3: Validación con variables
$fecha = explode("-", "2024-02-30");
if( eDateOk( $fecha[0], $fecha[1], $fecha[2] ) ){
    // Procesar fecha válida
} else {
    // Mostrar error
}
```