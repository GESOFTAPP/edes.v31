# eQuote

## Descripción
Escapa adecuadamente las comillas dobles y sencillas en cadenas o matrices para su uso seguro en JavaScript y HTML. Previene errores de sintaxis cuando el contenido contiene comillas.

## Sintaxis
```php
eQuote($CadenaOMatriz)
```

## Parámetros
- **$CadenaOMatriz**: Cadena de texto o matriz que contiene valores a escapar

## Funcionalidad
Esta función transforma las comillas dobles y sencillas en una cadena o matriz para que puedan ser utilizadas de forma segura en JavaScript y HTML. Devuelve la cadena/matriz transformada con las comillas escapadas.

## Ejemplos
```php
// Ejemplo con consulta SQL y array
qQuery("select cd_postal,nm_postal from postal where cd_postal='{$tmp}'");
$loca = sql_Array();
eQuote($loca);

// Ejemplo con cadena que contiene comillas
$texto = 'El usuario dijo: "Hola" y luego añadió: \'Adiós\'';
$textoEscapado = eQuote($texto);
echo $textoEscapado;

// Ejemplo con matriz de datos
$datos = array(
    'nombre' => 'Juan "El Rápido" Pérez',
    'mensaje' => 'Dijo: "Hola" y \'Adiós\''
);
eQuote($datos);
```