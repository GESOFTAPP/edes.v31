# eBar

## Descripción
Devuelve una barra con un número o porcentaje representando una proporción, similar al elemento "meter". Puede mostrar valores positivos (verde) o negativos (rojo).

## Sintaxis
```php
eBar( $numeric/$hash )
```

## Parámetros
- `$numeric` (number): Valor numérico simple (positivo o negativo)
- `$hash` (array): Array con configuración avanzada:
  - `value`: Valor del dato a representar (obligatorio)
  - `total`: Valor máximo
  - `view`: Formato de visualización ("%" o "N" + decimales)
  - `title`: Configuración del tooltip ("Y" + decimales)
  - `width`: Ancho de la barra
  - `colors`: "papel,lapiz,papel,borde" - Colores personalizados

## Funcionalidad
Genera una barra de progreso visual que puede mostrar porcentajes, valores numéricos o proporciones con colores personalizables.

## Ejemplos
```php
// Ejemplo 1: Barra simple con valor 30
$barra1 = eBar(30);

// Ejemplo 2: Barra con valor y total
$barra2 = eBar(["value"=>30, "total"=>200]);

// Ejemplo 3: Barra con formato porcentual y colores
$barra3 = eBar(["value"=>75, "total"=>100, "view"=>"%,1", "colors"=>"green,white,lightgray,gray"]);
```