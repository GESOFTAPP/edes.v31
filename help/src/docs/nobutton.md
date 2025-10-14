# NoButton

## Sintaxis

```
[NoButton] Mode [ | off ]
```

## Descripción

La etiqueta `NoButton` permite controlar la visibilidad de los botones predeterminados en diferentes modos de operación. En los modos especificados, no se pintará (no se mostrará) el botón correspondiente.

### Comportamiento especial en modo cR

En el modo `cR` (consulta en subventana), por defecto se pinta un botón de "cerrar subventana". Si no se desea mostrar este botón, se debe especificar el parámetro `off`.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo(s) de operación donde no mostrar el botón |
| **off** | Parámetro específico para el modo `cR` para desactivar el botón de cerrar |

## Modos de operación comunes

| Modo | Descripción | Botón afectado |
|------|-------------|----------------|
| **a** | Alta/Inserción | Botón de guardar/insertar |
| **m** | Modificación | Botón de actualizar/modificar |
| **b** | Eliminación | Botón de eliminar |
| **c** | Consulta | Botones de navegación |
| **cR** | Consulta en subventana | Botón de cerrar subventana |
| **l** | Listado | Botones de acción en listado |

## Ejemplos

### Ejemplo 1: Ocultar botón en modo alta
```
[NoButton] a
```
*No muestra el botón de guardar/insertar en modo alta*

### Ejemplo 2: Ocultar botones en múltiples modos
```
[NoButton] a,m
```
*No muestra botones en modos alta y modificación*

### Ejemplo 3: Ocultar botón de cerrar en subventana
```
[NoButton] cR | off
```
*No muestra el botón de cerrar en las subventanas de consulta*

### Ejemplo 4: Ocultar botón en modo eliminación
```
[NoButton] b
```
*No muestra el botón de eliminar en modo eliminación*

### Ejemplo 5: Combinación de modos
```
[NoButton] a,m,b
```
*No muestra botones en modos alta, modificación y eliminación*

## Casos de uso comunes

### Formularios de solo lectura
```
[NoButton] a,m,b
```
*Para formularios que solo permiten consulta sin modificaciones*

### Subventanas sin opción de cerrar
```
[NoButton] cR | off
```
*Para subventanas que se cierran mediante otros mecanismos*

### Modos específicos sin acción
```
[NoButton] a
```
*Cuando el alta se realiza mediante JavaScript personalizado*

### Listados sin acciones
```
[NoButton] l
```
*Para listados puramente informativos*

## Consideraciones importantes

- **Navegación alternativa**: Asegúrese de proporcionar métodos alternativos de navegación si oculta botones esenciales
- **Experiencia de usuario**: Considere el impacto en la usabilidad al ocultar botones predeterminados
- **Funcionalidad personalizada**: Útil cuando se implementan botones o acciones personalizadas
- **Consistencia**: Mantenga consistencia en la interfaz cuando oculte botones en diferentes formularios

## Funcionalidad relacionada

- **Botones personalizados**: Se puede combinar con la definición de botones personalizados
- **Modos de operación**: Trabaja en conjunto con el sistema de modos del formulario
- **JavaScript personalizado**: Permite implementar lógica de botones propia
- **Validaciones**: No afecta las validaciones, solo la visibilidad de botones

## Notas adicionales

- La etiqueta no elimina la funcionalidad, solo oculta los botones
- Los atajos de teclado pueden seguir funcionando aunque el botón esté oculto
- Es útil para crear interfaces personalizadas o simplificadas
- Se puede combinar con otras etiquetas de configuración de formularios
- No afecta a botones definidos manualmente en el formulario