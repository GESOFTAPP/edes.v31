# slCSS

## Sintaxis
```
{slCSS} StyleInline
```

## Descripción
Permite aplicar estilos CSS inline directamente al contenedor de la SubLista, proporcionando control sobre la apariencia visual del componente completo.

## Parámetros

### StyleInline
Atributos CSS que se aplicarán al elemento contenedor de la SubLista. Se puede incluir cualquier propiedad CSS válida usando la sintaxis de estilos inline.

**Formato:** `style='propiedad:valor; propiedad:valor;'`

## Ejemplos de Uso

### Ejemplo Básico
```
{slCSS} style='background-color:#cccccc'
```
Aplica un fondo gris claro al contenedor de la sublista.

### Ejemplos de Estilos Comunes

#### Colores de Fondo
```
{slCSS} style='background-color:#f5f5f5'          // Gris muy claro
{slCSS} style='background-color:#e3f2fd'          // Azul claro
{slCSS} style='background-color:#fff3e0'          // Naranja claro
{slCSS} style='background-color:#f1f8e9'          // Verde claro
```

#### Bordes y Sombras
```
{slCSS} style='border:1px solid #ddd'                           // Borde simple
{slCSS} style='border:2px solid #007bff; border-radius:5px'     // Borde azul redondeado
{slCSS} style='box-shadow:0 2px 4px rgba(0,0,0,0.1)'          // Sombra sutil
{slCSS} style='border-left:4px solid #28a745'                  // Borde izquierdo verde
```

#### Espaciado y Dimensiones
```
{slCSS} style='padding:10px'                      // Espaciado interno
{slCSS} style='margin:20px 0'                     // Margen vertical
{slCSS} style='max-width:800px'                   // Ancho máximo
{slCSS} style='height:400px; overflow-y:auto'     // Altura fija con scroll
```

#### Tipografía
```
{slCSS} style='font-family:Arial,sans-serif'              // Familia de fuente
{slCSS} style='font-size:12px'                           // Tamaño de fuente
{slCSS} style='color:#333; font-weight:bold'             // Color y peso
```

### Combinaciones de Estilos

#### Diseño de Tarjeta
```
{slCSS} style='background-color:#fff; border:1px solid #e0e0e0; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); padding:15px; margin:10px 0'
```

#### Estilo de Panel
```
{slCSS} style='background-color:#f8f9fa; border-left:4px solid #007bff; padding:12px; margin:8px 0'
```

#### Diseño Compacto
```
{slCSS} style='font-size:11px; line-height:1.3; padding:5px; background-color:#fafafa'
```

#### Estilo de Alerta
```
{slCSS} style='background-color:#fff3cd; border:1px solid #ffeaa7; border-radius:4px; padding:10px; color:#856404'
```

## Casos de Uso por Contexto

### Informes y Reportes
```
{slCSS} style='background-color:#fff; border:1px solid #ddd; padding:15px; margin:20px 0; box-shadow:0 1px 3px rgba(0,0,0,0.12)'
```

### Listados de Estado
```
{slCSS} style='border-left:4px solid #28a745; background-color:#f8fff9; padding:10px'  // Estado positivo
{slCSS} style='border-left:4px solid #dc3545; background-color:#fff5f5; padding:10px'  // Estado negativo
{slCSS} style='border-left:4px solid #ffc107; background-color:#fffbf0; padding:10px'  // Estado advertencia
```

### Sublistas Anidadas
```
{slCSS} style='margin-left:20px; border-left:2px solid #e9ecef; padding-left:15px; background-color:#f8f9fa'
```

### Diseño Responsive
```
{slCSS} style='width:100%; max-width:1200px; margin:0 auto; padding:10px; box-sizing:border-box'
```

## Propiedades CSS Más Utilizadas

### Apariencia Visual
| Propiedad | Descripción | Ejemplo |
|-----------|-------------|---------|
| `background-color` | Color de fondo | `#f5f5f5` |
| `border` | Borde completo | `1px solid #ddd` |
| `border-radius` | Esquinas redondeadas | `5px` |
| `box-shadow` | Sombra | `0 2px 4px rgba(0,0,0,0.1)` |

### Espaciado
| Propiedad | Descripción | Ejemplo |
|-----------|-------------|---------|
| `padding` | Espaciado interno | `10px` |
| `margin` | Espaciado externo | `20px 0` |
| `width` | Ancho | `100%` |
| `max-width` | Ancho máximo | `800px` |

### Texto
| Propiedad | Descripción | Ejemplo |
|-----------|-------------|---------|
| `font-size` | Tamaño de fuente | `12px` |
| `font-family` | Familia de fuente | `Arial, sans-serif` |
| `color` | Color del texto | `#333` |
| `font-weight` | Peso de la fuente | `bold` |

## Notas Importantes

- **Sintaxis:** Usar siempre comillas simples o dobles para encerrar el valor del atributo style
- **Separadores:** Las propiedades CSS deben separarse con punto y coma (`;`)
- **Compatibilidad:** Asegurar que los estilos sean compatibles con los navegadores objetivo
- **Cascada:** Los estilos inline tienen alta prioridad sobre otros estilos CSS
- **Mantenimiento:** Para estilos complejos, considerar el uso de clases CSS externas
- **Rendimiento:** Evitar estilos inline excesivamente complejos que puedan afectar el rendimiento

## Recomendaciones

### Buenas Prácticas
- Mantener los estilos simples y específicos
- Usar valores hexadecimales para colores (`#cccccc` en lugar de `gray`)
- Incluir unidades en los valores numéricos (`10px` en lugar de `10`)
- Agrupar propiedades relacionadas

### Estilos Recomendados
```
// Estilo estándar limpio
{slCSS} style='background-color:#fff; border:1px solid #e0e0e0; padding:10px'

// Estilo con énfasis
{slCSS} style='background-color:#f8f9fa; border-left:3px solid #007bff; padding:12px'

// Estilo compacto
{slCSS} style='font-size:11px; padding:5px; background-color:#fafafa'
```