# Setup

## Sintaxis

```
[Setup] Mode | listVar ...
```

## Descripción

Modifica variables de configuración del sistema para ajustar el comportamiento en modos específicos.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| Mode | String | Modo de aplicación (l, *, ?, m, c, etc.) | Sí | - |
| listVar | String | Lista de variables con sus valores | Sí | - |

### Formato de variables

El parámetro `listVar` es una lista de variables con su valor:
- Si el valor es "true" se puede omitir
- Formato: `variable=valor` o solo `variable` (para true)
- Múltiples variables separadas por comas

### Variables disponibles

| Variable | Descripción | Valores | Por defecto |
|----------|-------------|---------|-------------|
| activateFlush | Desactiva el buffer de salida | true/false | false |

## Ejemplos

### Ejemplo básico - Activar flush en listados
```
[Setup] l | activateFlush
```

**Descripción:** Activa el flush en los listados. Por defecto se guarda la salida en el buffer y se manda al terminar de generar la página. Esta funcionalidad permite, por ejemplo, en cualquier punto de la generación limpiar el buffer y generar otro contenido. Esto consume más memoria, pero cuando tienes que generar listados muy grandes sin paginación, activar esta variable permite generarlos.

### Ejemplo con múltiples variables
```
[Setup] * | var1, var2=string, var3=123, var4=false
```

### Ejemplos por modo

#### Setup para todos los modos
```
[Setup] * | activateFlush, debugMode=true
```

#### Setup específico para listados
```
[Setup] l | activateFlush, maxRows=1000
```

#### Setup para formularios de modificación
```
[Setup] m | autoSave=true, validation=strict
```

#### Setup para consultas
```
[Setup] c | readOnly=true, cache=false
```

### Ejemplo completo con listado grande
```
[Title] Reporte de Transacciones
[DBTable] transacciones
[DBIndex] id

[Setup] l | activateFlush

[Fields] l
    ID          | id           | # | N | 10 |   | - |  |  |
    Fecha       | fecha        | X | D |    |   | - |  |  |
    Cliente     | cliente      | X | T | 50 |   | - |  |  |
    Importe     | importe      | X | N | 12,2| | - |  |  |
    Estado      | estado       | X | T | 20 |   | - |  |  |
```

### Ejemplo con configuración condicional
```
¿ $_TotalRegistros > 10000 ?
    [Setup] l | activateFlush
¿ fin ?

[Fields] l
    // Definición de campos...
```

### Ejemplo con múltiples configuraciones
```
[Setup] l | activateFlush, showProgress=true, batchSize=100
[Setup] m | autoValidate=false, confirmChanges=true
[Setup] c | showMetadata=true, allowExport=false
```

## Casos de uso comunes

1. **Listados grandes**: Activar flush para listados con muchos registros
2. **Optimización de memoria**: Configurar buffer según necesidades
3. **Debugging**: Activar opciones de depuración por modo
4. **Performance**: Ajustar configuraciones para mejorar rendimiento
5. **Comportamiento específico**: Modificar funcionalidad según contexto

## Ventajas

- **Flexibilidad**: Configuración específica por modo
- **Performance**: Optimización según necesidades
- **Control**: Ajuste fino del comportamiento del sistema
- **Escalabilidad**: Manejo eficiente de grandes volúmenes de datos

## Notas técnicas

- `activateFlush` es especialmente útil para listados de más de 10,000 registros
- El uso de flush consume más memoria pero permite procesar grandes datasets
- Las configuraciones son específicas por modo y no se heredan
- Se puede combinar con lógica condicional para configuración dinámica

## Consideraciones de performance

- **Con buffer (por defecto)**: Menor uso de memoria, salida al final
- **Con flush activado**: Mayor uso de memoria, salida progresiva
- **Recomendación**: Usar flush solo cuando sea necesario para grandes volúmenes