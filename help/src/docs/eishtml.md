# eIsHTML

## Descripción
Función para verificar si la salida actual es HTML (información incompleta en la documentación original).

## Sintaxis
```php
eIsHTML()
```

## Parámetros
No requiere parámetros.

## Funcionalidad
Verifica si el contexto actual de ejecución está generando salida HTML, útil para condicionar el comportamiento según el tipo de salida.

## Ejemplos
```php
// Ejemplo 1: Verificación básica
if(eIsHTML()) {
    echo "<br>Salto de línea HTML";
} else {
    echo "\n";
}

// Ejemplo 2: Formateo condicional
if(eIsHTML()) {
    echo "<b>Texto en negrita</b>";
} else {
    echo "Texto normal";
}

// Ejemplo 3: Estructura condicional
if(eIsHTML()) {
    echo "<table><tr><td>Datos</td></tr></table>";
} else {
    echo "Datos en formato texto";
}
```