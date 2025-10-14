# DBRLock

## Descripción General

La directiva **DBRLock** (Database Record Lock) implementa un sistema de bloqueo optimista para prevenir conflictos de concurrencia en operaciones de modificación y eliminación de registros. Verifica que el registro no haya sido modificado por otro usuario desde que fue leído hasta el momento de la grabación.

## Sintaxis

```
[DBRLock] [NO | Lista de campos a no tener en cuenta]
```

### Parámetros

- **Sin parámetros**: Activa el bloqueo para todos los campos del registro
- **NO**: Desactiva el bloqueo para el DF actual
- **Lista de campos**: Especifica qué campos excluir de la verificación de bloqueo

## Funcionamiento

### Bloqueo Optimista
- **Lectura**: El sistema guarda el estado actual del registro
- **Modificación**: Antes de grabar, verifica que el registro no haya cambiado
- **Conflicto**: Si detecta cambios, impide la operación y notifica al usuario

### Ámbitos de Aplicación

#### 1. Ámbito Local (DF Específico)
```
[DBRLock]
```
- Se aplica únicamente al DF (Definición de Ficha) actual
- Configuración específica para un formulario

#### 2. Ámbito Global (Toda la Intranet)
```ini
# En archivo sql.ini
$_DBRLOCK = true;
```
- Se aplica a toda la aplicación
- Configuración a nivel de sistema

## Casos de Uso

### Activación Completa
```
[DBRLock]
```
Verifica todos los campos del registro antes de modificar o eliminar.

### Exclusión de Campos Específicos
```
[DBRLock] fecha_modificacion, usuario_modificacion, contador_visitas
```
Excluye campos que se actualizan automáticamente y no representan cambios de contenido real.

### Desactivación Específica
```
[DBRLock] NO
```
Desactiva el bloqueo para un DF específico, incluso si está activo globalmente.

## Ventajas y Consideraciones

### Ventajas
- **Integridad de datos**: Previene la pérdida de cambios simultáneos
- **Transparente**: No requiere bloqueos físicos en la base de datos
- **Flexible**: Permite configuración granular por campos
- **Rendimiento**: No bloquea registros durante la edición

### Consideraciones
- **Experiencia de usuario**: Los usuarios pueden recibir mensajes de conflicto
- **Campos automáticos**: Excluir campos que se actualizan automáticamente
- **Transacciones largas**: Mayor probabilidad de conflictos en ediciones prolongadas

## Configuración Recomendada

### Para Formularios Críticos
```
[DBRLock] fecha_sistema, usuario_sistema, timestamp_automatico
```

### Para Formularios Colaborativos
```
[DBRLock]
```

### Para Formularios de Solo Lectura
```
[DBRLock] NO
```

## Integración con Otras Directivas

### Con DBTable
```
[DBTable] usuarios
[DBRLock] fecha_acceso, contador_sesiones
```

### Con Campos de Auditoría
```
[DBRLock] created_at, updated_at, created_by, updated_by
```

## Mejores Prácticas

1. **Identificar campos críticos**: Activar bloqueo en datos importantes
2. **Excluir campos técnicos**: No verificar timestamps automáticos
3. **Configuración global**: Para aplicaciones con alta concurrencia
4. **Mensajes claros**: Informar al usuario sobre conflictos de manera comprensible
5. **Testing**: Probar escenarios de concurrencia durante el desarrollo

## Manejo de Conflictos

### Estrategias Comunes
- **Recargar datos**: Mostrar los cambios actuales y permitir re-edición
- **Fusión manual**: Permitir al usuario decidir qué cambios mantener
- **Cancelación**: Descartar cambios y volver al estado anterior

### Mensajes de Usuario
- Explicar qué ha ocurrido
- Mostrar los datos actuales
- Ofrecer opciones claras para continuar

## Consideraciones Técnicas

### Rendimiento
- Mínimo impacto en operaciones de lectura
- Verificación rápida durante escritura
- No requiere bloqueos de base de datos

### Compatibilidad
- Funciona con cualquier motor de base de datos
- No interfiere con transacciones normales
- Compatible con operaciones en lote

## Solución de Problemas

### Problemas Comunes

1. **Conflictos frecuentes**
   - Revisar campos incluidos en la verificación
   - Considerar excluir campos que cambian automáticamente

2. **No detecta cambios**
   - Verificar que la directiva esté activa
   - Comprobar la configuración global

3. **Rendimiento lento**
   - Optimizar consultas de verificación
   - Revisar índices en campos de verificación

### Debugging
- Revisar logs de conflictos
- Monitorear frecuencia de colisiones
- Analizar patrones de uso concurrente