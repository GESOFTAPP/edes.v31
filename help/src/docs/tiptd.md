# TipTD

## Descripción

Muestra una ventana emergente (tooltip) con información adicional cuando el usuario coloca el puntero del ratón sobre una celda específica en un listado. Esta funcionalidad es especialmente útil para visualizar columnas ocultas o información complementaria sin aumentar el ancho del listado principal.

### Casos de uso típicos:
- Mostrar descripciones detalladas de códigos
- Visualizar información adicional sin ampliar la tabla
- Proporcionar contexto adicional para campos abreviados

## Sintaxis

```
[TipTD] WhatCol | WhatInfo [ [ | Title | Width ]]
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `WhatCol` | Requerido | Números de columna o nombres de campos donde se activará el tooltip. Use `*` para aplicar a todas las columnas |
| `WhatInfo` | Requerido | Números de columna o nombres de campos (separados por comas) que se mostrarán en el tooltip |
| `Title` | Opcional | Título que aparecerá en la parte superior del tooltip |
| `Width` | Opcional | Ancho de la ventana emergente en píxeles |

### Notas sobre parámetros:
- Los parámetros opcionales `Title` y `Width` deben incluirse entre dobles corchetes `[[ ]]`
- Múltiples campos en `WhatInfo` se separan con comas
- Los nombres de campos deben coincidir con los definidos en `[Fields]`

## Ejemplos

### Ejemplo básico: Información adicional de empresa

```
[TipTD] empresa | cif,tlf | INF.ADICIONAL
[Fields]   
| Empresa   | empresa   | X   | T | 40 || AQ |||   
| TLF       | tlf       | T   | T |  9 || -  |||   
| CIF       | cif       | CIF | T |  9 || -  |||   
| Dirección | direccion | D   | T | 40 || M  |||   
```

**Resultado**: Al posicionar el cursor sobre el nombre de una empresa, se muestra una subventana con el CIF y teléfono, titulada "INF.ADICIONAL".

### Ejemplo con múltiples columnas objetivo

```
[TipTD] cod_estado,descripcion | fecha_creacion,usuario_creacion | DETALLES | 300
[Fields]   
| Código    | cod_estado     | #   | T |  5 || AQ |||   
| Estado    | descripcion    | X   | T | 30 || M  |||   
| Creado    | fecha_creacion | F   | T | 10 || -  |||   
| Usuario   | usuario_creacion| U  | T | 20 || -  |||   
```

### Ejemplo con todas las columnas

```
[TipTD] * | observaciones,notas | INFORMACIÓN COMPLETA
[Fields]   
| ID        | id_registro   | #   | T |  8 || AQ |||   
| Nombre    | nombre        | X   | T | 25 || M  |||   
| Notas     | observaciones | X   | T | 50 || -  |||   
| Comentario| notas         | X   | T | 100|| -  |||   
```

## Comportamiento

- **Activación**: El tooltip se activa al colocar el puntero del ratón sobre las celdas especificadas
- **Contenido**: Muestra la información de los campos especificados en `WhatInfo`
- **Posicionamiento**: La ventana emergente se posiciona automáticamente cerca del cursor
- **Ocultación**: Se oculta automáticamente cuando el cursor se aleja de la celda

## Ventajas

- **Optimización del espacio**: Reduce el ancho necesario de las tablas
- **Información contextual**: Proporciona detalles adicionales bajo demanda
- **Experiencia de usuario**: Mejora la usabilidad sin sobrecargar la interfaz
- **Flexibilidad**: Permite mostrar cualquier combinación de campos disponibles