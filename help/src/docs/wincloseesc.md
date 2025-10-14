# WinCloseESC

## Sintaxis
```
[WinCloseESC]
```

## Descripción
Permite cerrar subventanas mediante la tecla **ESC**. Solo funciona en el contexto de subventanas y proporciona un método rápido de cierre utilizando el teclado.

## Parámetros
Esta etiqueta no requiere parámetros.

## Funcionamiento
- ⌨️ **Tecla ESC**: Activa el cierre con la tecla Escape
- 🪟 **Solo subventanas**: Funciona exclusivamente en subventanas
- ⚡ **Cierre rápido**: Método rápido alternativo al botón de cierre
- 🎯 **Sin parámetros**: Comportamiento simple y directo

## Ejemplo
```
[WinCloseESC]
[SubWin] seleccion_cliente
// Contenido de la subventana
// Al presionar ESC, la subventana se cerrará
```

## Casos de uso típicos
- 🔍 **Diálogos de búsqueda**: Cerrar rápidamente ventanas de búsqueda
- 📋 **Formularios auxiliares**: Cancelar formularios secundarios
- 🎨 **Ventanas de configuración**: Cerrar paneles de configuración
- 📊 **Visualizadores**: Cerrar ventanas de gráficos o reportes
- 🖼️ **Galerías de imágenes**: Cerrar visualizadores de imágenes
- 🛠️ **Herramientas auxiliares**: Cerrar paneles de herramientas

## Ventajas
- ⚡ **Rapidez**: Cierre instantáneo sin necesidad del mouse
- 🎯 **Intuitividad**: Comportamiento estándar esperado por los usuarios
- ♿ **Accesibilidad**: Facilita el uso mediante teclado
- 🖱️ **Alternativa**: Opción adicional al botón de cierre
- 💨 **Eficiencia**: Mejora la velocidad de navegación

## Comportamiento del usuario
| Sin WinCloseESC | Con WinCloseESC |
|-----------------|-----------------|
| Solo botón de cierre | ESC + botón de cierre |
| Requiere mouse | Funciona con teclado |
| Un método de cierre | Dos métodos de cierre |

## Comparación con WinClose
| Característica | WinClose | WinCloseESC |
|----------------|----------|-------------|
| **Trigger** | Automático al completar | Manual con tecla ESC |
| **Control** | Sistema | Usuario |
| **Momento** | Tras selección | Cualquier momento |
| **Propósito** | Completar flujo | Cancelar/salir |

## Consideraciones de usabilidad
- 🎮 **Convención**: ESC es el estándar para cerrar ventanas
- 📱 **Dispositivos**: Menos útil en dispositivos táctiles
- 🔄 **Consistencia**: Mantener comportamiento consistente
- ⚠️ **Confirmación**: Considerar si se necesita confirmación para cambios no guardados

## Buenas prácticas
- ✅ **Siempre incluir**: Recomendado para todas las subventanas
- 🎯 **Comportamiento estándar**: Los usuarios esperan que ESC cierre ventanas
- 📝 **Documentar**: Informar a los usuarios sobre esta funcionalidad
- 🔍 **Pruebas**: Verificar que funciona correctamente en todos los navegadores
- 🛡️ **Validaciones**: Considerar validaciones antes del cierre

## Ejemplos de implementación

### Subventana de selección
```
[WinCloseESC]
[SubWin] seleccionar_producto
[Title] Seleccionar Producto
// Formulario de búsqueda y selección
```

### Formulario de configuración
```
[WinCloseESC]
[SubWin] configuracion
[Title] Configuración de Usuario
// Opciones de configuración
```

## Etiquetas relacionadas
- `[WinClose]`: Cierre automático tras selección
- `[SubWin]`: Definición de subventanas
- `[WinNew]`: Crear nueva ventana
- `[WinTitle]`: Título de ventana