# TitleToExtract

## Descripción

Personaliza el nombre del documento en la opción "Log de Descargas". Por defecto, el sistema utiliza el texto definido en la etiqueta `[Title]`, pero esta directiva permite especificar un nombre diferente y más descriptivo para los archivos descargados.

### Características especiales:
- Solo afecta al nombre del archivo en descargas
- Sobrescribe el valor por defecto de `[Title]`
- Útil para generar nombres de archivo más descriptivos
- No afecta la visualización del título en pantalla

## Sintaxis

```
[TitleToExtract] Texto
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Texto` | Requerido | Nombre personalizado que aparecerá en el log de descargas como nombre del documento |

### Notas sobre parámetros:
- El texto puede incluir caracteres especiales válidos para nombres de archivo
- Se recomienda usar nombres descriptivos y únicos
- Puede incluir variables del sistema si es necesario

## Ejemplos

### Ejemplo básico: Nombre personalizado
```
[Title] EMPLEADOS
[TitleToExtract] Listado_Empleados_Activos
```
**Resultado**: 
- Título en pantalla: "LISTA DE EMPLEADOS"
- Nombre en descarga: "Listado_Empleados_Activos"

### Ejemplo con información temporal
```
[Title] VENTAS MENSUALES
[TitleToExtract] Reporte_Ventas_2025
```

### Ejemplo con variables
```
[Title] PRODUCTOS
[TitleToExtract] Catalogo_Productos_{$anio}_{$mes}
```

### Ejemplo descriptivo
```
[Title] CLIENTES VIP
[TitleToExtract] Informe_Clientes_Premium_Detallado
```

## Comportamiento

- **Ámbito**: Solo afecta a la funcionalidad de descarga/extracción
- **Prioridad**: Sobrescribe el nombre derivado de `[Title]`
- **Formato**: Mantiene el texto tal como se especifica
- **Log**: El nombre aparece en el registro de descargas del sistema

## Relación con otras directivas

- **Title**: Proporciona el nombre por defecto si no se especifica `TitleToExtract`
- **Log de Descargas**: Sistema donde se registra el nombre personalizado
- **Opciones de exportación**: Afecta a todas las modalidades de descarga

## Casos de uso típicos

- **Informes ejecutivos**: Nombres más profesionales para documentos descargados
- **Archivos temporales**: Incluir fechas o períodos en el nombre
- **Diferenciación**: Distinguir entre vista en pantalla y archivo descargado
- **Organización**: Facilitar la clasificación de archivos descargados

## Ventajas

- **Claridad**: Nombres de archivo más descriptivos y profesionales
- **Organización**: Facilita la gestión de archivos descargados
- **Flexibilidad**: Independencia entre título de pantalla y nombre de archivo
- **Trazabilidad**: Mejora el seguimiento en el log de descargas
- **Personalización**: Adaptación a necesidades específicas de nomenclatura

## Consideraciones

- **Caracteres válidos**: Evitar caracteres no permitidos en nombres de archivo del sistema operativo
- **Longitud**: Considerar límites de longitud para nombres de archivo
- **Unicidad**: Usar nombres únicos para evitar conflictos en descargas
- **Consistencia**: Mantener un patrón coherente en la nomenclatura