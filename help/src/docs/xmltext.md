# xmlText

## Descripción
Inserta un texto en la celda indicada. La primera celda es la 0,0.

## Sintaxis
```php
xmlText($handle, $row, $col, $value)
```

## Parámetros
- `$handle`: Puntero al archivo XML creado con xmlCreate()
- `$row`: Número de fila (comenzando desde 0)
- `$col`: Número de columna (comenzando desde 0)
- `$value`: Texto a insertar en la celda

## Funcionalidad
Esta función permite insertar contenido de texto en una celda específica de un archivo XML compatible con Excel. Se utiliza en conjunto con xmlCreate() para crear el archivo y xmlClose() para cerrarlo.

## Ejemplos

### Ejemplo 1: Insertar texto básico
```php
eInclude("xml");
$pnt = xmlCreate("reporte.xml");
xmlText($pnt, 0, 0, "Nombre");
xmlText($pnt, 0, 1, "Apellido");
xmlClose($pnt);
```

### Ejemplo 2: Crear tabla con encabezados
```php
eInclude("xml");
$pnt = xmlCreate("empleados.xml");
xmlText($pnt, 0, 0, "ID");
xmlText($pnt, 0, 1, "Nombre");
xmlText($pnt, 0, 2, "Departamento");
xmlText($pnt, 1, 0, "001");
xmlText($pnt, 1, 1, "María García");
xmlText($pnt, 1, 2, "Recursos Humanos");
xmlClose($pnt);
```

### Ejemplo 3: Insertar descripciones largas
```php
eInclude("xml");
$pnt = xmlCreate("productos.xml");
xmlText($pnt, 0, 0, "Código");
xmlText($pnt, 0, 1, "Descripción");
xmlText($pnt, 1, 0, "PROD001");
xmlText($pnt, 1, 1, "Producto de alta calidad con características especiales");
xmlClose($pnt);
```