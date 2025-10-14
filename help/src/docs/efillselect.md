# eFillSelect

## Descripción
Rellena dinámicamente un elemento select HTML con datos provenientes de una consulta de base de datos o array.

## Sintaxis
```php
eFillSelect($NmField, $Dim [, $NomAttribute/ArrayNomAttribute])
```

## Parámetros
- `$NmField` (string): Nombre del campo select a rellenar
- `$Dim` (array): Array bidimensional con los datos [valor, texto, atributo]
- `$NomAttribute` (string/array, opcional): Nombre del atributo adicional o array de atributos

## Funcionalidad
Carga dinámicamente las opciones de un elemento select. Típicamente se usa en combinación con `[CallSrv] CargaArray` para cargar datos desde base de datos. El array `$Dim` debe tener la estructura: `[valor_option, texto_visible, atributo_adicional]`.

## Ejemplos
```php
// Ejemplo 1: Cargar colores desde base de datos
// En el archivo .edf:
// [CallSrv] CargaArray
qQuery("SELECT id, nombre, hexcode FROM colores WHERE activo=1");
$Dim = array(array('','Seleccione un color',''));
while($r = qArray()) {
    $Dim[] = array($r["id"], $r["nombre"], $r["hexcode"]);
}
eFillSelect('campo_color', $Dim, "data-hex");
eEnd();

// Ejemplo 2: Cargar usuarios con atributos
qQuery("SELECT user_id, nombre, email FROM usuarios ORDER BY nombre");
$Dim = array(array('', '-- Seleccionar usuario --', ''));
while($r = qArray()) {
    $Dim[] = array($r["user_id"], $r["nombre"], $r["email"]);
}
eFillSelect('usuario', $Dim, "data-email");

// Ejemplo 3: Cargar categorías con múltiples atributos
$Dim = array(
    array('', 'Todas las categorías', ''),
    array('1', 'Electrónicos', 'categoria-tech'),
    array('2', 'Ropa', 'categoria-fashion'),
    array('3', 'Hogar', 'categoria-home')
);
eFillSelect('categoria', $Dim, "data-class");
```