# FormButtons

## Sintaxis

```
[FormButtons] OpFicha [ | OpcionesNoDisponibles ]
```

## Descripción

La etiqueta **FormButtons** define las acciones que se pueden ejecutar desde las fichas. Por defecto, desde las fichas se puede cambiar el modo de ejecución y ejecutar opciones de búsqueda en distintos modos.

### Configuración Global

Para definir la configuración de forma global, se puede usar la variable `$_FORMBUTTONS` en el archivo `sql.ini`, afectando a todas las fichas que no tengan definición particular en su DF.

### Integración con DBLog

Si la ficha tiene la etiqueta `[DBLog]`, aparecerá un icono para visualizar las modificaciones realizadas. Este icono:
- Se muestra automáticamente cuando la ficha se abre desde el menú principal
- Para mostrarlo en subventanas, se debe declarar la variable `$_GET["_LOG"] = "S"`

## Parámetros

### OpFicha
Cadena con las iniciales de las acciones permitidas.

| Inicial | Acción | Descripción |
|---------|--------|-------------|
| **V** | View | Ver la ficha en modo consulta |
| **v** | View | Buscar ficha a consultar |
| **U** | Update | Ver la ficha en modo modificación |
| **u** | Update | Buscar ficha a modificar |
| **I** | Insert | Ficha en modo alta |
| **D** | Delete | Ver la ficha en modo borrado |
| **d** | Delete | Buscar ficha a borrar |

### OpcionesNoDisponibles
Cadena con las iniciales de las acciones NO permitidas.

| Inicial | Acción | Descripción |
|---------|--------|-------------|
| **S** | SubVentana | Deshabilita subventanas |
| **L** | Búsqueda con SubListado | Deshabilita búsqueda con sublistado |
| **C** | Convertir en Contar | Deshabilita función de conteo |
| **-** | Suprimir todas | Suprime todas las prestaciones |

### Supresión de Prestaciones

- **`$_FORMBUTTONSDELETE = "-"`**: Suprime todas las prestaciones, dejando solo el icono de limpiar datos del formulario en los modos "c", "m", "b"
- **`$_FORMBUTTONSDELETE = "--"`**: Suprime también el icono de limpiar datos

## Ejemplos

### Ejemplo Básico
```
[FormButtons] VU
```
Solo permite alternar la ficha entre modo consulta y modo modificación.

### Ejemplo Completo
```
[FormButtons] VvUuIDd | SLC
```
- **Permitidas**: Todas las acciones de vista, modificación, alta y borrado
- **No disponibles**: SubVentana, Búsqueda con SubListado, Convertir en Contar

### Ejemplo con Solo Consulta
```
[FormButtons] Vv
```
Solo permite consultar y buscar fichas para consultar.

## Configuración Dinámica por URL

Se puede condicionar el comportamiento introduciendo en la URL la variable `_FORMBUTTONS` con las iniciales de las opciones permitidas.

### Ejemplo de URL para Modificación Específica
```
#mR:nodo.edf&_SEEK&cd_gs_node=#node#&_FORMBUTTONS&_STOP
```

**Desglose de la URL:**
- **`#mR`**: Ejecutar una ficha en modo modificación (no "m" que preguntaría qué ficha modificar)
- **`nodo.edf`**: Script a ejecutar (archivo de definición)
- **`&_SEEK`**: Indica que los siguientes campos son de búsqueda (excepto virtuales que empiezan por "_")
- **`cd_gs_node=#node#`**: Campo índice y su valor del registro a modificar
- **`&_FORMBUTTONS`**: Al no poner valores, deshabilita todas las acciones
- **`&_STOP`**: Después de modificar el registro se detiene, no continúa preguntando por otra ficha

## Casos de Uso

### Solo Lectura
```
[FormButtons] Vv
```
Para formularios de consulta únicamente.

### Mantenimiento Completo
```
[FormButtons] VvUuIDd
```
Para formularios con todas las operaciones CRUD disponibles.

### Modificación Restringida
```
[FormButtons] VU | SLC
```
Permite consulta y modificación, pero sin subventanas ni funciones avanzadas.

### Formulario de Alta Únicamente
```
[FormButtons] I
```
Solo permite crear nuevos registros.

## Configuración Global en sql.ini

```ini
$_FORMBUTTONS = "VvUu"
```
Esta configuración se aplicará a todas las fichas que no tengan definición particular.

## Integración con Otras Funcionalidades

### Con DBLog
```
[DBLog] tabla_log, campo_fecha, campo_usuario
[FormButtons] VvUuIDd
```
Automáticamente aparecerá el icono de historial de modificaciones.

### Con Subventanas
```
[FormButtons] VvUuIDd | S
```
Deshabilita la funcionalidad de subventanas.

## Comportamiento por Defecto

Sin configuración específica, las fichas permiten:
- Cambio entre modos de ejecución
- Opciones de búsqueda en distintos modos
- Todas las acciones estándar (Ver, Modificar, Insertar, Borrar)

## Notas Importantes

- **Mayúsculas vs minúsculas**: Las mayúsculas ejecutan directamente, las minúsculas buscan primero
- **Combinaciones flexibles**: Se pueden combinar las acciones según las necesidades
- **Seguridad**: Útil para restringir acciones según el contexto o permisos del usuario
- **URL dinámica**: Permite comportamientos diferentes según cómo se acceda al formulario