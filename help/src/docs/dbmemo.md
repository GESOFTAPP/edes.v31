# DBMemo

## SINTAXIS

```
[DBMemo] FieldsList
```

## DESCRIPCIÓN

Define qué campos deben tratarse como campos de texto largo (memo). Los campos especificados se transforman automáticamente cuando se envían al servidor, convirtiendo ciertos caracteres para garantizar una grabación correcta en la base de datos.

### Características:

- **Transformación automática**: Convierte caracteres especiales para almacenamiento seguro
- **Campos de texto largo**: Optimizado para contenido extenso como descripciones, comentarios, etc.
- **Multifichas**: En aplicaciones multificha, se define en el GDF (Grupo de Fichas)

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **FieldsList** | Lista de campos separados por comas que deben existir en la etiqueta `[Fields]` |

## TRANSFORMACIONES REALIZADAS

Los campos memo típicamente transforman:
- **Saltos de línea**: Para preservar formato de párrafos
- **Caracteres especiales**: Comillas, apóstrofes, símbolos
- **Codificación**: Caracteres unicode y acentos
- **Espacios**: Preservación de espaciado y tabulaciones

## EJEMPLO

```
[DBMemo] resumen, respuesta
```

**Resultado**: Los campos "resumen" y "respuesta" se tratan como campos de texto largo con transformación automática de caracteres.

## EJEMPLOS DE USO

### Ejemplo 1: Campos de comentarios
```
[DBMemo] comentarios, observaciones
```

### Ejemplo 2: Contenido HTML
```
[DBMemo] descripcion_html, contenido_web
```

### Ejemplo 3: Campos de texto extenso
```
[DBMemo] biografia, curriculum, experiencia
```

### Ejemplo 4: Documentación
```
[DBMemo] manual_usuario, notas_tecnicas, especificaciones
```

## CASOS DE USO COMUNES

### Formularios de contacto
```
[DBMemo] mensaje, consulta
```
Para campos donde los usuarios escriben texto libre.

### Gestión de incidencias
```
[DBMemo] descripcion_problema, solucion_aplicada
```

### Contenido editorial
```
[DBMemo] articulo, resumen_ejecutivo, abstract
```

### Configuraciones
```
[DBMemo] script_personalizado, configuracion_json
```

## INTEGRACIÓN CON FIELDS

Los campos definidos en `[DBMemo]` deben estar presentes en `[Fields]`:

```
[Fields] id, titulo, resumen, respuesta, fecha
[DBMemo] resumen, respuesta
```

## TIPOS DE DATOS RECOMENDADOS

En la base de datos, usar tipos apropiados:
- **MySQL**: `TEXT`, `MEDIUMTEXT`, `LONGTEXT`
- **PostgreSQL**: `TEXT`
- **Oracle**: `CLOB`
- **SQL Server**: `TEXT`, `NTEXT`, `VARCHAR(MAX)`

## MULTIFICHAS

En aplicaciones con múltiples fichas:
```
# Archivo GDF (Grupo de Fichas)
[DBMemo] descripcion_general, notas_especiales
```

## VENTAJAS

- **Preservación de formato**: Mantiene saltos de línea y espaciado
- **Seguridad**: Previene errores de inserción por caracteres especiales
- **Compatibilidad**: Funciona con diferentes bases de datos
- **Transparencia**: El usuario no nota el procesamiento

## NOTAS IMPORTANTES

- **Campos obligatorios**: Todos los campos deben existir en `[Fields]`
- **Multifichas**: Definir en el archivo GDF principal
- **Rendimiento**: Campos memo pueden ser más lentos en consultas
- **Indexación**: Los campos memo normalmente no se indexan completamente
- **Tamaño**: Considerar límites de tamaño según el tipo de dato usado