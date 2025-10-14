# eFilePutVar

## Descripción
Modifica los valores de variables de configuración en archivos .var o .ini, permitiendo actualizar configuraciones de forma programática.

## Sintaxis
```php
eFilePutVar($File, $Array)
```

## Parámetros
- `$File` (string): Ruta del archivo de variables a modificar
- `$Array` (array): Matriz bidimensional con pares [nombre_variable, nuevo_valor]

## Funcionalidad
Actualiza los valores de variables específicas en archivos de configuración. Retorna `true` si la operación fue exitosa, `false` en caso contrario. Mantiene la estructura del archivo original.

## Ejemplos
```php
// Ejemplo 1: Actualizar configuración de impresión
$resultado = eFilePutVar('/_datos/config/desktop.ini', array(
    array('$_PrintMarginTop', 12),
    array('$_PrintHeader', 'Empresa S.A.')
));

if ($resultado) {
    echo "Configuración actualizada correctamente";
} else {
    echo "Error al actualizar la configuración";
}

// Ejemplo 2: Actualizar múltiples configuraciones de base de datos
$configuracion = array(
    array('$_DBHost', 'localhost'),
    array('$_DBUser', 'admin'),
    array('$_DBTimeout', 30)
);
$resultado = eFilePutVar('/_datos/config/database.ini', $configuracion);

// Ejemplo 3: Actualizar configuración de idioma
$resultado = eFilePutVar('/_datos/config/system.ini', array(
    array('$_Language', 'es'),
    array('$_Timezone', 'Europe/Madrid'),
    array('$_DateFormat', 'DD/MM/YYYY')
));
```