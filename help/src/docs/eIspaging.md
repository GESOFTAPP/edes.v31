# eIsPaging

## Descripción
Verifica si el sistema de paginación está activo o habilitado para el listado actual.

## Sintaxis
```php
eIsPaging()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
Determina si el contexto actual tiene activada la funcionalidad de paginación. Permite condicionar el comportamiento de listados según si se debe mostrar toda la información o dividirla en páginas.

## Ejemplos

### Ejemplo 1: Verificación de paginación
```php
if (eIsPaging()) {
    echo "Paginación activa - Mostrando resultados por páginas";
} else {
    echo "Mostrando todos los resultados";
}
```

### Ejemplo 2: Configuración de navegación
```php
if (eIsPaging()) {
    mostrarNavegacionPaginas();
    mostrarContadorResultados();
} else {
    mostrarTotalResultados();
}
```

### Ejemplo 3: Procesamiento condicional de datos
```php
$resultados = obtenerResultados();
if (eIsPaging()) {
    $resultadosPagina = aplicarPaginacion($resultados);
    mostrarResultados($resultadosPagina);
} else {
    mostrarResultados($resultados);
}
```