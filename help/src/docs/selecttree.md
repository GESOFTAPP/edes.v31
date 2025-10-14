# SelectTree

## Sintaxis
```
[SelectTree] Mode | Field
```

## Descripción
Genera un selector en formato árbol que permite mostrar datos jerárquicos de forma visual e interactiva. El componente puede cargar todos los registros inicialmente o cargarlos de forma dinámica según se van expandiendo los nodos del árbol.

## Parámetros

### Configuración Básica
| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `load_level` | integer | Nivel inicial de carga del árbol (1 = solo raíz) |
| `load_view` | integer | Vista de carga (1 = carga inicial completa) |
| `multiple` | boolean | Permite selección múltiple (true/false) |

### Funciones Personalizadas
| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `function` | string | Función JavaScript personalizada (opcional) |
| `server` | string | Función PHP del servidor (opcional) |

### Configuración de Base de Datos
| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `table` | string | Tabla de la base de datos |
| `index` | string | Campo que actúa como clave primaria |
| `caption` | string | Campo que se muestra como texto del nodo |
| `level` | string | Campo que indica el nivel jerárquico |
| `parent` | string | Campo que referencia al nodo padre |
| `order` | string | Campos para ordenar los nodos |
| `type` | string | Campo que define el tipo de nodo |
| `filter` | string | Condición WHERE para filtrar registros |

### Iconografía
| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `icon_folder_open` | string | Icono para carpetas abiertas |
| `icon_folder_close` | string | Icono para carpetas cerradas |
| `icon_op` | string | Icono para operaciones |

## Ejemplo Completo

```php
[SelectTree] * | serial
    load_level: 1
    load_view : 1
    multiple: false

    function:   //functionJS           opcional
    server  :   //functionPHP          opcional

    table   : motivos
    index   : cd_reds_motivos_visita
    caption : nm_reds_motivos_visita
    level   : nivel
    parent  : dependencia
    order   : orden,nm_reds_motivos_visita
    type    : tipo

    icon_folder_open :
    icon_folder_close:
    icon_op:      

    filter: cd_auto='{$_Auto_}'

[Fields]
    Árbol | serial | + | ST | 4,40 | | iM | | # |
```

## Detalles del Campo en Fields

La definición del campo en `[Fields]` utiliza:
- **Etiqueta**: `Árbol`
- **Nombre**: `serial` (debe coincidir con el Field del SelectTree)
- **Tipo edición**: `+` (campo calculado)
- **Tipo control**: `ST` (SelectTree)
- **Longitud**: `4,40` (tamaño del campo y ancho del control)
- **Modo**: `iM` (invisible en modo consulta)
- **Condición**: `#` (campo requerido)

## Notas de Implementación

- El campo `serial` debe ser único y actuar como identificador del registro seleccionado
- La estructura de árbol se basa en la relación `parent` que referencia al `index` del nodo padre
- Los nodos raíz tienen `parent` nulo o vacío
- La carga dinámica se controla con `load_level` para optimizar el rendimiento
- El filtro permite restringir qué registros se muestran en el árbol