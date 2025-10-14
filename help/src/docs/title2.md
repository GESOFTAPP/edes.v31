# Title2

## Descripción

Muestra una segunda línea de título en los listados, alineada a la izquierda. Esta directiva complementa al título principal (`[Title]`) proporcionando información adicional o subtítulos en las vistas de listado.

### Características especiales:
- Se muestra únicamente en modo listado
- Alineación fija a la izquierda
- Aparece debajo del título principal
- Útil para subtítulos o información contextual adicional

## Sintaxis

```
[Title2] Segundo título
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Segundo título` | Requerido | Texto que se mostrará como segunda línea de título en los listados |

### Notas sobre parámetros:
- El texto se puede combinar con variables y funciones como en `[Title]`
- Acepta etiquetas HTML para formato
- Se alinea automáticamente a la izquierda

## Ejemplos

### Ejemplo básico
```
[Title] EMPLEADOS
[Title2] Listado completo del personal activo
```

### Ejemplo con información contextual
```
[Title] PRODUCTOS
[Title2] Catálogo actualizado - Temporada 2025
```

### Ejemplo con variables
```
[Title] VENTAS
[Title2] Período: {$fechaInicio} - {$fechaFin}
```

### Ejemplo con HTML
```
[Title] CLIENTES VIP
[Title2] <em>Clientes con descuentos especiales</em>
```

## Comportamiento

- **Visibilidad**: Solo se muestra en vistas de listado (`l`)
- **Posición**: Aparece inmediatamente debajo del título principal
- **Alineación**: Siempre alineado a la izquierda
- **Estilo**: Hereda estilos del tema pero con formato de subtítulo

## Relación con otras directivas

- **Title**: Se complementa con el título principal
- **HTMIni**: Puede usar estilos definidos en la configuración HTML
- **Fields**: Se muestra antes de la tabla de datos

## Casos de uso típicos

- **Información contextual**: Fechas, períodos, filtros aplicados
- **Subtítulos**: Aclaraciones sobre el contenido del listado
- **Estado**: Información sobre el estado actual de los datos
- **Instrucciones**: Guías breves para el usuario

## Ventajas

- **Clarificación**: Proporciona contexto adicional al listado
- **Organización**: Mejora la estructura visual de la información
- **Flexibilidad**: Acepta contenido dinámico y formateado
- **Simplicidad**: Implementación directa y sencilla