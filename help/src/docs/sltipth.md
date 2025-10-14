# slTipTH

## SINTAXIS

```
{slTipTH} Title, Title, ...
```

## DESCRIPCIÓN

Asigna un atributo "title" (tooltip) a los encabezados (TH) de una sublista. Permite mostrar información adicional o ayuda contextual cuando el usuario pasa el cursor sobre los títulos de las columnas.

### Características

- **Tooltips informativos**: Proporciona información adicional sobre cada columna
- **Separación por comas**: Los títulos se separan mediante comas
- **Orden correlativo**: Los títulos deben seguir el mismo orden que las columnas definidas en `{slTH}`

## PARÁMETROS

| Parámetro | Obligatorio | Descripción |
|-----------|-------------|-------------|
| **Title** | Sí | Lista de títulos tooltip separados por comas, uno por cada columna |

## EJEMPLOS

### Ejemplo básico
```
{slTipTH} Código único del registro, Nombre del elemento, Descripción detallada, Fecha de creación
```

### Ejemplo con columnas ocultas
```
{slTipTH} , Nombre completo del usuario, Estado actual del registro, Acciones disponibles
```
*Nota: La primera coma indica que la primera columna no tiene tooltip*

### Ejemplo de implementación completa

```
[SubList]
a,A,mR,cR | usuarios |
{slSql}
select id, nombre, email, estado, fecha_registro 
from usuarios 
where activo=1 
order by nombre
{slTH}
ID,NOMBRE,EMAIL,ESTADO,F.REGISTRO
{slTipTH}
Identificador único del usuario, Nombre completo, Dirección de correo electrónico, Estado actual de la cuenta, Fecha de registro en el sistema
{slAlign}
C,I,I,C,C
```

### Ejemplo con información técnica
```
{slTH}
CÓDIGO,DESCRIPCIÓN,PRECIO,STOCK,ACCIONES
{slTipTH}
Código interno del producto, Descripción comercial del artículo, Precio de venta al público, Unidades disponibles en almacén, Operaciones permitidas
```

### Ejemplo con ayuda contextual
```
{slTH}
ARCHIVO,TAMAÑO,TIPO,FECHA,VER
{slTipTH}
Nombre del archivo subido, Tamaño en bytes del archivo, Tipo MIME del archivo, Fecha de última modificación, Hacer clic para visualizar el archivo
```

### Ejemplo con campos calculados
```
{slTH}
PRODUCTO,CANTIDAD,PRECIO,TOTAL,DESCUENTO
{slTipTH}
Nombre del producto seleccionado, Cantidad solicitada, Precio unitario sin impuestos, Importe total de la línea, Descuento aplicado en porcentaje
```

### Ejemplo combinado con slTipIcon

```
[SubList]
a,A,mR,cR | documentos |
{slSql}
select id, nombre, extension, tamaño, fecha_creacion
from documentos 
where carpeta_id='{id}' 
order by nombre
{slTH}
ID,DOCUMENTO,TIPO,TAMAÑO,FECHA,ARCHIVO
{slTipTH}
Identificador del documento, Nombre del documento, Extensión del archivo, Tamaño en KB, Fecha de creación, Hacer clic para descargar
{slFormat}
,,,,,<img src='g/download_@.gif' onclick='descargarArchivo()' title='_@_'>
{slTipIcon}
pdf,Descargar PDF; doc,Descargar Word; xls,Descargar Excel; jpg,Ver imagen
```