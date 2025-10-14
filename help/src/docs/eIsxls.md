# eIsXLS

## Descripción
Verifica si el contenido actual corresponde a un archivo XLS (Excel) o si se debe generar salida en formato Excel.

## Sintaxis
```php
eIsXLS()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
Determina si el contexto actual está configurado para generar o procesar contenido en formato Excel (XLS). Útil para condicionar la salida de datos y aplicar formatos específicos para hojas de cálculo.

## Ejemplos

### Ejemplo 1: Verificación básica de formato
```php
if (eIsXLS()) {
    echo "Generando archivo Excel";
} else {
    echo "Generando salida web";
}
```

### Ejemplo 2: Configuración de cabeceras
```php
if (eIsXLS()) {
    header('Content-Type: application/vnd.ms-excel');
    header('Content-Disposition: attachment; filename="reporte.xls"');
} else {
    header('Content-Type: text/html');
}
```

### Ejemplo 3: Formato condicional de datos
```php
$datos = obtenerDatos();
if (eIsXLS()) {
    formatearParaExcel($datos);
    generarArchivoExcel($datos);
} else {
    formatearParaWeb($datos);
    mostrarEnPantalla($datos);
}
```