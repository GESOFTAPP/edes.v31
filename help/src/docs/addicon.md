# AddIcon

## Sintaxis
```
[AddIcon] Mode | Html
```

## Descripción
Añade iconos personalizados en las fichas, posicionándolos en la parte inferior izquierda del formulario. Esta función permite agregar elementos visuales interactivos que mejoran la experiencia del usuario.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Mode` | String | Modo de visualización del icono |
| `Html` | String | Código HTML del icono a insertar |

## Ejemplo

```
[AddIcon] a,?R | <img style="margin-left: 10px;" title="Menú de opciones" onclick="" src="g/op_menu.gif" />
```

### Desglose del ejemplo:
- **Mode**: `a,?R` - Define el modo de visualización
- **Html**: Elemento `<img>` con:
  - **style**: `margin-left: 10px;` - Espaciado izquierdo
  - **title**: `"Menú de opciones"` - Tooltip al pasar el mouse
  - **onclick**: `""` - Evento de click (vacío en este ejemplo)
  - **src**: `"g/op_menu.gif"` - Ruta de la imagen del icono

## Notas de implementación
- Los iconos se posicionan automáticamente en la parte inferior izquierda
- Se pueden agregar múltiples iconos usando diferentes llamadas a `[AddIcon]`
- El código HTML permite personalización completa del estilo y comportamiento
- Compatible con eventos JavaScript para interactividad

## Casos de uso comunes
- Botones de acción rápida
- Menús contextuales
- Indicadores de estado
- Enlaces a funcionalidades adicionales