# WinClose

## Sintaxis
```
[WinClose] [ NomDF,... ]
```

## Descripción
Al finalizar el proceso de selección en una ventana auxiliar, esta se cerrará automáticamente.

## Parámetros
- **NomDF** *(opcional)*: Lista de nombres de archivos DF separados por comas. Si se especifica, el cierre automático solo se aplicará a estos archivos específicos.

## Funcionamiento
- 🪟 **Ventanas auxiliares**: Se aplica a ventanas emergentes o secundarias
- ✅ **Al completar**: Se cierra cuando se completa la selección
- 🔄 **Automático**: No requiere intervención del usuario
- 🎯 **Específico**: Puede limitarse a DFs específicos

## Ejemplos

### Cierre automático general
```
[WinClose]
```
Cierra automáticamente cualquier ventana auxiliar al finalizar la selección.

### Cierre específico para ciertos DFs
```
[WinClose] clientes.edf,productos.edf
```
Solo cierra automáticamente las ventanas de los archivos `clientes.edf` y `productos.edf`.

### Múltiples archivos
```
[WinClose] usuarios.edf,roles.edf,permisos.edf
```
Aplica el cierre automático a múltiples archivos de definición.

## Casos de uso típicos
- 🔍 **Selección de registros**: Ventanas para elegir clientes, productos, etc.
- 👥 **Búsqueda de usuarios**: Selección de usuarios desde ventana auxiliar
- 📋 **Listas de referencia**: Selección de valores de listas maestras
- 🏢 **Datos relacionados**: Selección de datos vinculados (sucursales, departamentos)
- 📊 **Filtros dinámicos**: Ventanas de filtros que se cierran tras aplicar
- 🛒 **Catálogos**: Selección de productos desde catálogo

## Comportamiento del usuario
| Sin WinClose | Con WinClose |
|--------------|--------------|
| Usuario debe cerrar manualmente | Se cierra automáticamente |
| Puede quedar abierta accidentalmente | Limpia automáticamente |
| Requiere clic adicional | Flujo más fluido |

## Ventajas
- ✨ **Experiencia mejorada**: Flujo más natural para el usuario
- 🧹 **Limpieza automática**: Evita ventanas auxiliares acumuladas
- ⚡ **Eficiencia**: Reduce clics innecesarios
- 🎯 **Enfoque**: Mantiene al usuario enfocado en la tarea principal

## Consideraciones
- 🤔 **Expectativas del usuario**: Asegurar que el comportamiento sea intuitivo
- 📱 **Dispositivos móviles**: Especialmente útil en pantallas pequeñas
- 🔄 **Selección múltiple**: Evaluar si es apropiado para selecciones múltiples
- ⚠️ **Confirmación**: Considerar si se necesita confirmación antes del cierre

## Buenas prácticas
- 🎯 **Uso selectivo**: Aplicar solo donde mejore la experiencia
- 📝 **Documentar comportamiento**: Informar al usuario sobre el auto-cierre
- 🔍 **Pruebas de usabilidad**: Verificar que el comportamiento sea intuitivo
- 🛠️ **Configuración específica**: Usar parámetros NomDF para control granular

## Etiquetas relacionadas
- `[WinCloseESC]`: Cierre con tecla ESC
- `[WinNew]`: Crear nueva ventana
- `[SubWin]`: Definir sub-ventanas