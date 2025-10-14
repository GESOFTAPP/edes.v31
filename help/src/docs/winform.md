# WinForm

## Sintaxis
```
[WinForm] Width, Height [ , Scroll [ , Title ] ]
```

## Descripción
Define las dimensiones y características de una subventana que contiene un formulario. Permite especificar el ancho, alto, comportamiento del scroll y título de la ventana.

## Parámetros

### Width y Height *(obligatorios)*
- **Valor en píxeles**: Dimensiones específicas de la ventana
- **-1**: Utiliza el ancho o alto máximo disponible
- **Ejemplos**: `800`, `600`, `-1`

### Scroll *(opcional)*
Controla el comportamiento de las barras de desplazamiento:
- **YES**: Siempre muestra barras de scroll
- **NO**: Nunca muestra barras de scroll *(por defecto)*
- **AUTO**: Muestra barras solo cuando el contenido lo requiere

### Title *(opcional)*
- **Texto**: Título que aparecerá en la barra de título de la ventana
- **Sin espacios problemáticos**: Evitar caracteres especiales

## Ejemplos

### Ejemplo básico
```
[WinForm] 810,550,NO,Empresa
```
Crea una ventana de 810x550 píxeles, sin scroll, con título "Empresa".

### Ventana con scroll automático
```
[WinForm] 600,400,AUTO,Gestión de Usuarios
```
Ventana de 600x400 píxeles con scroll automático.

### Ventana de tamaño máximo
```
[WinForm] -1,-1,YES,Panel de Control
```
Ventana que ocupa todo el espacio disponible con scroll siempre visible.

### Solo dimensiones
```
[WinForm] 500,300
```
Ventana de 500x300 píxeles con configuración por defecto (sin scroll, sin título).

## Casos de uso típicos
- 📝 **Formularios de edición**: Ventanas para editar registros
- 👥 **Gestión de usuarios**: Formularios de alta/modificación de usuarios
- 🏢 **Datos maestros**: Formularios para empresas, departamentos, etc.
- 📊 **Configuración**: Paneles de configuración del sistema
- 🔍 **Búsqueda avanzada**: Formularios de filtros complejos
- 📋 **Entrada de datos**: Formularios de captura masiva

## Dimensiones recomendadas

### Por tipo de formulario
| Tipo de Formulario | Dimensiones Sugeridas | Scroll |
|-------------------|----------------------|--------|
| **Formulario simple** | 400x300 | NO |
| **Formulario estándar** | 600x450 | AUTO |
| **Formulario complejo** | 800x600 | AUTO |
| **Panel completo** | -1x-1 | YES |

### Por resolución de pantalla
| Resolución | Ancho Máximo | Alto Máximo |
|------------|--------------|-------------|
| **1024x768** | 900 | 650 |
| **1366x768** | 1200 | 650 |
| **1920x1080** | 1600 | 900 |

## Comportamiento del scroll

### YES - Siempre visible
```
[WinForm] 600,400,YES,Formulario con Scroll
```
- ✅ Barras siempre presentes
- 📊 Útil para formularios largos conocidos
- 🎯 Interfaz consistente

### NO - Nunca visible
```
[WinForm] 600,400,NO,Formulario Fijo
```
- 🚫 Sin barras de desplazamiento
- ⚡ Interfaz más limpia
- ⚠️ Riesgo de contenido oculto

### AUTO - Automático
```
[WinForm] 600,400,AUTO,Formulario Adaptable
```
- 🔄 Aparece según necesidad
- 💡 Mejor experiencia de usuario
- 📱 Recomendado para la mayoría de casos

## Consideraciones de diseño
- 📱 **Responsividad**: Considerar diferentes tamaños de pantalla
- 🎯 **Usabilidad**: No hacer ventanas demasiado pequeñas o grandes
- 📊 **Contenido**: Ajustar dimensiones al contenido esperado
- 🔍 **Accesibilidad**: Asegurar que todos los elementos sean visibles
- ⚡ **Rendimiento**: Ventanas muy grandes pueden afectar rendimiento

## Buenas prácticas
- ✅ **Usar AUTO**: Para scroll, preferir AUTO sobre YES/NO
- 📏 **Dimensiones apropiadas**: Ni muy pequeñas ni excesivamente grandes
- 🎨 **Títulos descriptivos**: Usar títulos claros y concisos
- 📱 **Pruebas multi-resolución**: Probar en diferentes tamaños de pantalla
- 🔧 **Contenido dinámico**: Considerar cómo crece el contenido

## Ejemplos avanzados

### Formulario de empresa completo
```
[WinForm] 900,650,AUTO,Datos de la Empresa
[Fields]
// Campos del formulario
```

### Panel de configuración máximo
```
[WinForm] -1,800,YES,Configuración del Sistema
[Tab] General,Usuarios,Seguridad
```

### Ventana de búsqueda compacta
```
[WinForm] 450,250,NO,Búsqueda Rápida
[Fields] codigo,nombre
```

## Etiquetas relacionadas
- `[WinTitle]`: Título alternativo de ventana
- `[SubWin]`: Definir subventanas
- `[WinClose]`: Cierre automático
- `[WinCloseESC]`: Cierre con ESC