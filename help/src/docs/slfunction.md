# slFunction

## Sintaxis

```
{slFunction} NombreFuncion
```

## Descripción

La función `slFunction` permite ejecutar una función de usuario personalizada antes y después del acceso a la base de datos de la sublista. Esta funcionalidad es útil para realizar operaciones de pre-procesamiento y post-procesamiento de datos.

### Momento de Ejecución

La función definida se ejecutará en dos momentos:
- **Antes** del acceso a la base de datos (Before)
- **Después** del acceso a la base de datos (After)

## Parámetros de la Función de Usuario

La función de usuario definida recibirá automáticamente tres parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `$BeforeAfter` | string | Identificador del momento de ejecución:<br>• `'B'` = Before (antes del acceso a DB)<br>• `'A'` = After (después del acceso a DB) |
| `$NomTabla` | string | Nombre de la tabla de la base de datos |
| `$WhereSQL` | string | Contenido de la cláusula WHERE de la sentencia SQL |

## Parámetros de slFunction

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `NombreFuncion` | string | Nombre de la función de usuario que se ejecutará |

## Ejemplo de Uso

### Configuración de SubList

```ini
[SubList]
...
{slFunction} MyFuncion
...
```

### Implementación de la Función

```php
[PHPIni] a,?R,M,A

function MyFunction($BeforeAfter, $NomTabla, $WhereSQL) {
    if ($BeforeAfter == 'B') {
        // Código a ejecutar ANTES del acceso a la base de datos
        error_log("Iniciando consulta en tabla: " . $NomTabla);
        error_log("Condición WHERE: " . $WhereSQL);
        
        // Ejemplo: Validaciones previas, logging, preparación de datos
        
    } elseif ($BeforeAfter == 'A') {
        // Código a ejecutar DESPUÉS del acceso a la base de datos
        error_log("Consulta completada en tabla: " . $NomTabla);
        
        // Ejemplo: Post-procesamiento, cleanup, notificaciones
    }
}
```

## Casos de Uso Comunes

### Before (Antes del acceso a DB)
- **Logging y auditoría**: Registrar qué consultas se van a ejecutar
- **Validaciones**: Verificar permisos o condiciones previas
- **Preparación de datos**: Configurar variables o conexiones adicionales
- **Cache**: Verificar si los datos están en caché
- **Seguridad**: Validar parámetros de consulta

### After (Después del acceso a DB)
- **Post-procesamiento**: Modificar o formatear datos obtenidos
- **Logging de resultados**: Registrar estadísticas de la consulta
- **Notificaciones**: Enviar alertas basadas en los resultados
- **Cache**: Almacenar resultados para consultas futuras
- **Cleanup**: Liberar recursos o limpiar datos temporales

## Ejemplo Avanzado

```php
function MyFunction($BeforeAfter, $NomTabla, $WhereSQL) {
    switch ($BeforeAfter) {
        case 'B':
            // Before: Preparar logging
            $GLOBALS['query_start_time'] = microtime(true);
            error_log("QUERY START - Tabla: $NomTabla, WHERE: $WhereSQL");
            break;
            
        case 'A':
            // After: Calcular tiempo de ejecución
            $execution_time = microtime(true) - $GLOBALS['query_start_time'];
            error_log("QUERY END - Tiempo: {$execution_time}s");
            
            // Realizar acciones adicionales basadas en la tabla
            if ($NomTabla == 'usuarios') {
                // Lógica específica para tabla usuarios
                actualizarEstadisticasUsuarios();
            }
            break;
    }
}
```

## Notas Importantes

- La función debe estar definida en la sección `[PHPIni]` para estar disponible
- Los parámetros se pasan automáticamente, no es necesario configurarlos
- Es útil para implementar patrones como logging, caching, validaciones y auditoría
- Permite tener control granular sobre el ciclo de vida de las consultas de sublista