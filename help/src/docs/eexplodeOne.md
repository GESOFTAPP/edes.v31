# eExplodeOne

## Descripción
Divide una cadena en exactamente dos partes usando un divisor específico, asignando cada parte a variables de referencia.

## Sintaxis
```php
eExplodeOne($Cadena, $Divisor, &$Izquierda, &$Derecha)
```

## Parámetros
- `$Cadena` (string): Cadena a dividir
- `$Divisor` (string): Carácter o cadena que actúa como divisor
- `&$Izquierda` (string): Variable de referencia para la parte izquierda
- `&$Derecha` (string): Variable de referencia para la parte derecha

## Funcionalidad
Explota una cadena usando un divisor específico y asigna la primera parte a `$Izquierda` y la segunda parte a `$Derecha`. Si no existe el divisor, toda la cadena se asigna a `$Izquierda` y `$Derecha` queda vacía.

## Ejemplos
```php
// Ejemplo 1: Dividir una línea de configuración
$linea = "usuario=admin";
eExplodeOne($linea, '=', $variable, $valor);
echo $variable; // Resultado: "usuario"
echo $valor;    // Resultado: "admin"

// Ejemplo 2: Dividir una URL
$url = "https://ejemplo.com/pagina";
eExplodeOne($url, '://', $protocolo, $dominio);
echo $protocolo; // Resultado: "https"
echo $dominio;   // Resultado: "ejemplo.com/pagina"

// Ejemplo 3: Dividir nombre completo
$nombreCompleto = "Juan Pérez";
eExplodeOne($nombreCompleto, ' ', $nombre, $apellido);
echo $nombre;    // Resultado: "Juan"
echo $apellido;  // Resultado: "Pérez"
```