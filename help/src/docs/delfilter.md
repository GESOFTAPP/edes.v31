# DelFilter

## Sintaxis

```
[DelFilter] Mode | DefinitionFile | FieldsToDelete [ [ [ [ | Title ] | NoList ] | IncludePhp ] | UrlSubmit ]
```

## Descripción

La etiqueta `DelFilter` implementa un mecanismo de búsqueda alternativa que se activa cuando una consulta con filtros no encuentra registros. Su funcionamiento es el siguiente:

1. **Búsqueda inicial**: Realiza la consulta con todos los filtros aplicados
2. **Detección de resultados vacíos**: Si no encuentra registros con la búsqueda actual
3. **Búsqueda alternativa**: Elimina las condiciones especificadas en `FieldsToDelete` y ejecuta una nueva búsqueda
4. **Presentación de resultados**: Muestra los resultados según la configuración del archivo de definición especificado

> **Nota**: Si la etiqueta `[DBAddFilter]` está presente, también se eliminará esta condición durante la búsqueda alternativa.

## Parámetros

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| **Mode** | Modo de ejecución de la búsqueda alternativa | ✓ |
| **DefinitionFile** | Archivo de definición (EDF) a ejecutar. Usar `{op}` para mantener el modo actual | ✓ |
| **FieldsToDelete** | Campos del filtro que se eliminarán en la búsqueda alternativa (separados por comas) | ✓ |
| **Title** | Título alternativo cuando se llama al mismo archivo de definición en otro modo | ✗ |
| **NoList** | Constante para ejecutar solo en modo ficha. Si encuentra un registro ejecuta `DefinitionFile`, si encuentra varios muestra mensaje de "no hay registros" | ✗ |
| **IncludePhp** | Archivo PHP a incluir durante la ejecución | ✗ |
| **UrlSubmit** | URL a ejecutar en el nuevo formulario. Usar `{op}` para mantener el modo actual | ✗ |

## Ejemplos de uso

### Búsqueda básica con eliminación de filtros geográficos
```
[DelFilter] cR,mR,bR | F{Op}:vi/vivienda | cd_prov,cd_muni
```
Elimina los filtros de provincia y municipio si no encuentra resultados.

### Búsqueda con script PHP personalizado
```
[DelFilter] ?R | E:script.php | cd_prov,cd_muni
```
Ejecuta un script PHP específico tras eliminar los filtros geográficos.

### Búsqueda solo para modo ficha
```
[DelFilter] mR,bR | E:Function() | cd_prov,cd_muni | | NoList
```
Solo se ejecuta en modo ficha, no en listados.

### Búsqueda con archivo de definición personalizado y URL
```
[DelFilter] ?R | FcR:cliente_sin_acceso.edf | cd_auto,cd_prov | | NoList | | Gc:cliente.gdf
```
Usa un archivo de definición específico y una URL personalizada para el formulario.

## Comportamiento detallado

El sistema funciona de manera inteligente:

- **Con múltiples condiciones**: Si la búsqueda incluye filtros adicionales además de los especificados en `FieldsToDelete`, el sistema eliminará solo los campos especificados y mantendrá el resto
- **Sin condiciones adicionales**: Si solo están presentes los filtros especificados en `FieldsToDelete`, no se realizará la búsqueda alternativa

### Ejemplo práctico

Si una búsqueda incluye filtros para:
- Provincia (`cd_prov`)
- Municipio (`cd_muni`) 
- Tipo de vivienda
- Precio

Y se configura `FieldsToDelete` como `cd_prov,cd_muni`, la búsqueda alternativa mantendrá los filtros de tipo de vivienda y precio, eliminando solo los geográficos.