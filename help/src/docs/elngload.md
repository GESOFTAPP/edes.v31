# eLngLoad

## Descripción
Carga un fichero de idiomas, solo necesario en ficheros PHP. Todos los textos se transforman: la comilla sencilla se convierte en "&amp;" y la comilla doble en "'&quot;".

## Sintaxis
```php
eLngLoad($File='', $Idioma='')
```

## Parámetros
- **$File** (string, opcional): Nombre del fichero de idiomas. Si se deja en blanco, el nombre del fichero será el nombre del script más ".lng"
- **$Idioma** (string, opcional): Al dejar en blanco cargará el idioma por defecto. Si $Idioma es "*", devolverá una matriz de dos dimensiones con todos los idiomas y todos sus textos, siendo el primer índice el idioma y el segundo el código del texto.

## Funcionalidad
Esta función permite cargar archivos de idiomas para la internacionalización de aplicaciones PHP. Gestiona automáticamente el escape de caracteres especiales y puede trabajar con idiomas específicos o cargar todos los idiomas disponibles.

## Ejemplos

### Ejemplo 1: Uso normal
```php
eLngLoad();
```
Carga el archivo de idiomas correspondiente al script actual con el idioma por defecto.

### Ejemplo 2: Cargar archivo específico
```php
eLngLoad('mi_aplicacion.lng', 'es');
```
Carga el archivo 'mi_aplicacion.lng' con el idioma español.

### Ejemplo 3: Cargar todos los idiomas
```php
$Dim = eLngLoad('/d/prueba.php.lng', '*');
```
Carga en la matriz $Dim los textos de todos los idiomas, siendo el primer índice el idioma y el segundo el código del texto.