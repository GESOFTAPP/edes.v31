# eIsMDB

## Descripción
Función para verificar si se está trabajando con una base de datos MDB (Microsoft Access) (información incompleta en la documentación original).

## Sintaxis
```php
eIsMDB()
```

## Parámetros
No requiere parámetros.

## Funcionalidad
Verifica si el contexto actual está utilizando una base de datos MDB (Microsoft Access), útil para adaptar consultas y operaciones según el tipo de base de datos.

## Ejemplos
```php
// Ejemplo 1: Verificación básica
if(eIsMDB()) {
    // Código específico para Access
    $query = "SELECT * FROM tabla";
} else {
    // Código para otras bases de datos
    $query = "SELECT * FROM tabla LIMIT 10";
}

// Ejemplo 2: Formateo de fechas condicional
if(eIsMDB()) {
    $fechaFormat = "#Y-m-d#";
} else {
    $fechaFormat = "'Y-m-d'";
}

// Ejemplo 3: Sintaxis específica
if(eIsMDB()) {
    echo "Usando sintaxis Access";
} else {
    echo "Usando sintaxis SQL estándar";
}
```