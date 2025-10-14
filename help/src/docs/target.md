# Target

## Sintaxis

```
[Target] format:maxRecords, ...
```

## Descripción

Selecciona el destino de un listado en función del número de registros. Esta etiqueta permite definir diferentes formatos de exportación según la cantidad de registros que contenga el listado, optimizando así el rendimiento y la usabilidad.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **format** | Formato de exportación (html, pdf, xml, xls, csv, etc.) |
| **maxRecords** | Número máximo de registros para ese formato. Si el primer destino no tiene definido un número de registros será el destino de salida cuando el número de registros es inferior a la siguiente definición. Cuando es el último significa que cuando sea mayor que el penúltimo |
| **Múltiples formatos** | Se puede indicar más de un formato con el mismo número de registros separándolos por "/" |

## Ejemplos

### Ejemplo completo
```
[Target] html, pdf:2000, xml/xls:65000, csv
```
En este ejemplo:
- **html**: Se usa cuando hay menos registros que el siguiente límite definido (menos de 2000)
- **pdf:2000**: Se usa cuando hay entre el límite anterior y 2000 registros
- **xml/xls:65000**: Se usan cuando hay entre 2001 y 65000 registros (ambos formatos disponibles)
- **csv**: Se usa cuando hay más de 65000 registros (formato final sin límite)

### Ejemplo simple
```
[Target] html:100, pdf:1000, csv
```
- Hasta 100 registros: formato HTML
- De 101 a 1000 registros: formato PDF  
- Más de 1000 registros: formato CSV

### Ejemplo con múltiples formatos
```
[Target] html/pdf:500, xml/xls/csv:10000, txt
```
- Hasta 500 registros: HTML o PDF disponibles
- De 501 a 10000 registros: XML, XLS o CSV disponibles
- Más de 10000 registros: solo formato TXT