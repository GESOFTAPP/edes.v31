# qRow

## Descripción
Devuelve una matriz numérica con la fila del cursor actual.

## Sintaxis
```php
qRow([$Cursor])
```

## Parámetros
- **$Cursor** (resource, opcional): Cursor sobre el que ejecutar la operación. Si se omite, será sobre el cursor actual

## Funcionalidad
La función obtiene la siguiente fila disponible del cursor especificado y la devuelve como una matriz indexada numéricamente. Es útil para iterar a través de los resultados de una consulta SQL de forma secuencial.

## Ejemplos

### Ejemplo 1: Iterar sobre cursor por defecto
```php
while ($fila = qRow()) {
    echo "Campo 0: " . $fila[0] . ", Campo 1: " . $fila[1] . "\n";
}
```

### Ejemplo 2: Usar cursor específico
```php
$cursor = /* cursor específico */;
$fila = qRow($cursor);
if ($fila) {
    echo "Primer campo: " . $fila[0];
    echo "Segundo campo: " . $fila[1];
}
```

### Ejemplo 3: Procesar resultados con list()
```php
while (list($id, $nombre, $email) = qRow()) {
    echo "ID: $id, Nombre: $nombre, Email: $email\n";
}
```