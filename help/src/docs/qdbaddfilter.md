# qDBAddFilter

## Descripción
Rellena la etiqueta [DBAddFilter] para añadir filtros dinámicos a consultas de base de datos.

## Sintaxis
```php
qDBAddFilter($field, $sql="", $incluido=false, $value=NULL)
```

## Parámetros
- **$field**: Nombre del campo al que aplicar el filtro
- **$sql**: (Opcional) Consulta SQL para el filtro. Por defecto cadena vacía
- **$incluido**: (Opcional) Booleano que indica si el filtro está incluido. Por defecto false
- **$value**: (Opcional) Valor del filtro. Por defecto NULL

## Funcionalidad
Permite añadir filtros dinámicos a consultas de base de datos utilizando la funcionalidad [DBAddFilter]. Es útil para crear filtros condicionales basados en entrada del usuario.

## Ejemplos

### Ejemplo 1: Filtro básico por nombre de empresa
```php
qDBAddFilter("nm_empre", "cd_empre in (select cd_empre from empre where #)", true, $_POST["_nm_empre"]);
```

### Ejemplo 2: Filtro por fecha
```php
qDBAddFilter("fecha_alta", "fecha_alta >= '#'", true, $_POST["fecha_desde"]);
```

### Ejemplo 3: Filtro condicional
```php
if (!empty($_POST["departamento"])) {
    qDBAddFilter("departamento", "departamento = '#'", true, $_POST["departamento"]);
}
```