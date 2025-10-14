# WinTools

## SINTAXIS

```
[WinTools] mode | IconosAOcultar
```

## DESCRIPCIÓN

Controla la visibilidad de los iconos de la barra de herramientas en ventanas auxiliares. Esta etiqueta permite personalizar qué herramientas están disponibles para el usuario, ocultando iconos específicos según las necesidades de la aplicación.

La funcionalidad es equivalente a la función JavaScript `S(window).windowIcon("N", "iconos")`.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **mode** | Cadena | Modo de operación. Usar `*` para aplicar a todas las ventanas |
| **IconosAOcultar** | Cadena | Combinación de letras que representan los iconos a ocultar |

## ICONOS DISPONIBLES

| Código | Icono | Descripción |
|--------|-------|-------------|
| `m` | **minimize** | Botón para minimizar la ventana |
| `M` | **Maximize** | Botón para maximizar la ventana |
| `P` | **Print** | Botón para imprimir el contenido |
| `C` | **Close** | Botón para cerrar la ventana |
| `R` | **Resize** | Capacidad de redimensionar la ventana |

## EJEMPLOS

### Ocultar iconos específicos
```
[WinTools] * | mMP
```
Oculta los iconos de **minimize**, **Maximize** y **Print**.

### Ocultar solo el botón de cerrar
```
[WinTools] * | C
```
Oculta únicamente el botón de **Close**.

### Ocultar múltiples iconos
```
[WinTools] * | mMPR
```
Oculta **minimize**, **Maximize**, **Print** y **Resize**.

### Ocultar solo impresión
```
[WinTools] * | P
```
Oculta únicamente el botón de **Print**.

## CASOS DE USO COMUNES

- **Ventana de solo lectura**: `[WinTools] * | mMR` - Oculta minimize, maximize y resize
- **Ventana modal**: `[WinTools] * | mM` - Oculta minimize y maximize
- **Sin impresión**: `[WinTools] * | P` - Oculta el botón de imprimir
- **Ventana fija**: `[WinTools] * | mMPR` - Solo permite cerrar la ventana
- **Ventana simplificada**: `[WinTools] * | MP` - Oculta maximize y print

## EQUIVALENCIA JAVASCRIPT

```javascript
// Equivalente a [WinTools] * | mMP
S(window).windowIcon("N", "mMP");
```

## NOTAS

- Los códigos de iconos son sensibles a mayúsculas y minúsculas
- Se pueden combinar múltiples códigos en una sola cadena
- La configuración se aplica a las ventanas auxiliares, no a la ventana principal
- Útil para crear interfaces más limpias y específicas para cada contexto
- El modo `*` aplica la configuración a todas las ventanas auxiliares