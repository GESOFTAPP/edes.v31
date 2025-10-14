# xmlDate

## Descripción
Inserta una fecha en la celda indicada. La primera celda es la 0,0.

## Sintaxis
```php
xmlDate($handle, $row, $col, $value)
```

## Parámetros
- `$handle`: Puntero al archivo XML creado con xmlCreate()
- `$row`: Número de fila (comenzando desde 0)
- `$col`: Número de columna (comenzando desde 0)
- `$value`: Fecha a insertar en la celda (formato de fecha)

## Funcionalidad
Esta función permite insertar valores de fecha en una celda específica de un archivo XML compatible con Excel. Las fechas se almacenan en formato de fecha, permitiendo ordenamiento y cálculos temporales.

## Ejemplos

### Ejemplo 1: Insertar fechas básicas
```php
eInclude("xml");
$pnt = xmlCreate("fechas.xml");
xmlDate($pnt, 0, 0, "18-05-2001");
xmlDate($pnt, 1, 0, "25-12-2023");
xmlDate($pnt, 2, 0, "01-01-2024");
xmlClose($pnt);
```

### Ejemplo 2: Crear registro de eventos
```php
eInclude("xml");
$pnt = xmlCreate("eventos.xml");
xmlText($pnt, 0, 0, "Evento");
xmlText($pnt, 0, 1, "Fecha");
xmlText($pnt, 1, 0, "Reunión");
xmlDate($pnt, 1, 1, "15-03-2024");
xmlText($pnt, 2, 0, "Presentación");
xmlDate($pnt, 2, 1, "20-03-2024");
xmlClose($pnt);
```

### Ejemplo 3: Registro de transacciones
```php
eInclude("xml");
$pnt = xmlCreate("transacciones.xml");
xmlText($pnt, 0, 0, "ID");
xmlText($pnt, 0, 1, "Fecha");
xmlText($pnt, 0, 2, "Importe");
xmlText($pnt, 1, 0, "TRX001");
xmlDate($pnt, 1, 1, "10-01-2024");
xmlNumber($pnt, 1, 2, 150.75);
xmlClose($pnt);
```