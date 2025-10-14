# eGraphGet

## Descripción
Función para generar gráficas dinámicas. Devuelve `false` si no se puede ejecutar, o un array con los datos de la gráfica si se puede ejecutar.

## Sintaxis
```php
eGraphGet($TipoGrafica, $ArrayValores, $ArrayDatosCampos, $TituloGrafica, $TituloCol, $TituloRow, $TituloLeyenda [, $ArrayConfiguracion])
```

## Parámetros
- **$TipoGrafica**: Tipo de gráfica ('R', 'C', 'P', 'G')
- **$ArrayValores**: Array con todos los valores a representar
- **$ArrayDatosCampos**: Array con los datos de los campos (Label, Nº decimales, "+")
- **$TituloGrafica**: Título de la gráfica
- **$TituloCol**: Título de columnas
- **$TituloRow**: Título de filas
- **$TituloLeyenda**: Título de la leyenda
- **$ArrayConfiguracion** (opcional): Array para cambiar la configuración

## Funcionalidad
Genera gráficas dinámicas según el tipo especificado:
- **R**: Solo muestra por cada ROW una columna
- **C**: Muestra las sumas por las COL indicadas
- **P**: Muestra las sumas por las COL indicadas (tipo pastel)
- **G**: Muestra todos los valores, en rejilla

Devuelve un array con: [0] La imagen, [1] Ancho, [2] Alto, [3] Nombre completo del fichero temporal

## Ejemplos
```php
// Ejemplo 1: Gráfica tipo rejilla (G)
$gra = eGraphGet('G',
    array(
        array(1000,500,700,20),
        array(1500,200,900,50),
        array(500,50,200,75),
        array(500,50,200,10)
    ),
    array(
        array('Ventas',2,'+'),
        array('Compras',2,'+'),
        array('Gastos',2,'+'),
        array('Beneficios',2,'+')
    ),
    'Estadísticas Anuales',
    'Meses',
    'Trimestres',
    'Datos'
);
if($gra) echo $gra[0];

// Ejemplo 2: Gráfica tipo pastel (P)
$gra = eGraphGet('P',
    array(
        array(1000,500,700,20),
        array(1500,200,900,50)
    ),
    array(
        array('Producto A',2,'+'),
        array('Producto B',2,'+'),
        array('Producto C',2,'+'),
        array('Producto D',2,'+')
    ),
    'Distribución de Ventas',
    'Productos',
    '',
    'Leyenda'
);
if($gra) echo $gra[0];

// Ejemplo 3: Gráfica por filas (R)
$gra = eGraphGet('R',
    array(
        array('Enero', 1000),
        array('Febrero', 1500),
        array('Marzo', 500)
    ),
    array(
        array('',2,''),
        array('',2,'+')
    ),
    'Ventas Mensuales',
    'Meses',
    'Valores'
);
if($gra) echo $gra[0];
```