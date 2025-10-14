# PDFBreakPage

## SINTAXIS

```
[PDFBreakPage] ListaDeCampos
```

## DESCRIPCIÓN

Controla los saltos de página automáticos en la generación de documentos PDF. Cuando el valor de cualquiera de los campos especificados cambia respecto al registro anterior, el sistema insertará automáticamente un salto de página en el PDF resultante.

Esta funcionalidad es especialmente útil para crear informes agrupados donde se desea separar cada grupo en páginas diferentes, como listados por provincia, departamento, categoría, etc.

## PARÁMETROS

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| **ListaDeCampos** | String | Lista de nombres de campos separados por comas. El salto de página se produce cuando cambia el valor de cualquiera de estos campos | Sí |

### Características de los parámetros:

- **Separador**: Los campos se separan con comas (`,`)
- **Sin espacios**: No se deben incluir espacios entre los nombres de campos
- **Nombres exactos**: Deben coincidir exactamente con los nombres definidos en la sección `[Fields]`
- **Múltiples campos**: Se pueden especificar varios campos; el salto ocurre si cambia cualquiera de ellos

## EJEMPLOS

### Ejemplo 1: Salto por provincia y municipio

```
[PDFBreakPage] cd_prov,cd_muni
```

**Comportamiento:**
- El listado PDF hará un salto de página cuando cambie el código de provincia (`cd_prov`) o el código de municipio (`cd_muni`)
- Útil para informes geográficos organizados por ubicación

### Ejemplo 2: Salto por categoría

```
[PDFBreakPage] categoria
```

**Comportamiento:**
- Nueva página cada vez que cambie el valor del campo `categoria`
- Ideal para catálogos de productos agrupados por categoría

### Ejemplo 3: Salto por múltiples criterios comerciales

```
[PDFBreakPage] cd_vendedor,cd_zona,fecha_mes
```

**Comportamiento:**
- Salto de página cuando cambie cualquiera de: código de vendedor, código de zona, o mes de fecha
- Útil para informes comerciales con múltiples niveles de agrupación

### Ejemplo 4: Caso práctico completo

```
[Title]=LISTADO DE CLIENTES POR PROVINCIA
[DBTable]clientes
[DBOrder]cd_prov,cd_muni,nombre
[PDFBreakPage] cd_prov,cd_muni

[Fields]
    Provincia    | cd_prov     | X   | T | 10  | 100 | AQ |     |   |
    Municipio    | cd_muni     | X   | T | 10  | 100 | AQ |     |   |
    Nombre       | nombre      | X   | T | 50  | 200 | MQ |     | # |
    Teléfono     | telefono    | X   | T | 15  | 100 | MQ |     |   |
```

**Resultado:**
- El PDF se ordenará por provincia, municipio y nombre
- Cada vez que cambie la provincia o el municipio, se iniciará una nueva página
- Perfecto para informes territoriales organizados

## NOTAS ADICIONALES

- **Orden importante**: Los campos especificados en `[PDFBreakPage]` normalmente deben estar incluidos en `[DBOrder]` para que el agrupamiento sea efectivo
- **Rendimiento**: El sistema evalúa los cambios registro por registro, por lo que es eficiente incluso con grandes volúmenes de datos
- **Compatibilidad**: Funciona con cualquier tipo de campo (texto, numérico, fecha, etc.)
- **Primeras páginas**: El primer registro nunca genera salto de página (no hay registro anterior para comparar)
- **Valores nulos**: Los valores NULL se tratan como un valor específico para efectos de comparación