# PDFList

## Sintaxis

```
[PDFList]
```

## Descripción

Genera el listado en formato PDF directamente. En lugar de sacar el listado del EDF en HTML, lo genera directamente en formato PDF. Esta función toma los datos de la consulta actual y los presenta en un formato de listado estructurado dentro de un documento PDF.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Ninguno | - | Esta función no requiere parámetros |

### Variables relacionadas

El comportamiento del PDF generado puede estar influenciado por variables globales del sistema, como las que definen el formato, orientación y otras configuraciones del documento PDF.

## Ejemplos

### Ejemplo básico
```
[PDFList]
```

### Ejemplo en contexto de consulta
```sql
SELECT nombre, apellidos, telefono, email
FROM clientes
WHERE activo = 1
ORDER BY apellidos, nombre
```
```
[PDFList]
```

### Ejemplo con configuración previa
```
// Configuración opcional del documento
[PDFVar] PDF_Orientation = landscape
[PDFVar] PDF_Title = "Listado de Clientes"

// Generación del listado
[PDFList]
```