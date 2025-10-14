# Preview

## Sintaxis

```
[Preview] Mode | field | calcX | calcY | calcX2 | calcY2 | borderColor
```

## Descripción

Define una zona donde se visualizará una imagen al seleccionarla y al traer los datos del servidor. Permite crear una vista previa dinámica de imágenes que se posiciona automáticamente en relación a otros elementos del formulario.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de funcionamiento del preview |
| **field** | Campo que contiene la imagen a previsualizar |
| **calcX** | Cálculo de coordenada X inicial |
| **calcY** | Cálculo de coordenada Y inicial |
| **calcX2** | Cálculo de coordenada X final o ancho fijo |
| **calcY2** | Cálculo de coordenada Y final o alto fijo |
| **borderColor** | Color del borde en formato hexadecimal |

## Sistema de Coordenadas

Los parámetros que empiezan con "calc" definen cómo calcular las coordenadas de la zona de Preview y constan de hasta 3 partes:

### Estructura de Cálculo
```
Objeto:Coordenada[±Valor]
```

1. **Objeto:** Elemento de referencia para el cálculo
2. **Coordenada:** Coordenada a obtener (`x`, `y`, `x2`, `y2`)
3. **Valor:** (Opcional) Ajuste con `+Valor` o `-Valor`

### Tipos de Objetos de Referencia

#### Campos del Formulario
```
:_INPUT_nombre_campo
```
Hace referencia a un campo específico del formulario.

#### Elementos CSS
```
.CLASE_CSS
```
Hace referencia a un elemento por su clase CSS.

#### Campos con Prefijo
```
:nombre_campo
```
Referencia directa a campos del formulario.

### Coordenadas Disponibles

| Coordenada | Descripción |
|------------|-------------|
| `x` | Posición horizontal izquierda |
| `y` | Posición vertical superior |
| `x2` | Posición horizontal derecha |
| `y2` | Posición vertical inferior |

### Valores Fijos

Para `calcX2` y `calcY2` se puede definir un **ancho o alto fijo** usando simplemente un número:

```
300    // Ancho fijo de 300 píxeles
200    // Alto fijo de 200 píxeles
```

## Ejemplos de Uso

### Ejemplo 1: Posicionamiento Relativo a Campos
```
[Preview] a,?R | imagen | :_INPUT_cd_auto, x2+30 | :_INPUT_cd_auto, y | :_usuario, x2 | :_usuario, y-10 | #dddddd
```

**Explicación:**
- **Mode:** `a,?R` (modos de adición y consulta con escritura)
- **Field:** `imagen` (campo que contiene la imagen)
- **calcX:** Se posiciona 30 píxeles a la derecha del campo `cd_auto`
- **calcY:** Misma altura que el campo `cd_auto`
- **calcX2:** Hasta la posición derecha del campo `usuario`
- **calcY2:** 10 píxeles por encima del campo `usuario`
- **borderColor:** Borde gris claro `#dddddd`

### Ejemplo 2: Posicionamiento con Clases CSS
```
[Preview] a,?R | imagen | .IMGBOX, x2+30 | .IMGBOX, y | :hora_2, x2 | :hora_2, y-10 | #dddddd
```

**Explicación:**
- Usa la clase CSS `.IMGBOX` como referencia para las coordenadas iniciales
- Se extiende hasta el campo `hora_2` con un ajuste vertical

### Ejemplo 3: Dimensiones Fijas
```
[Preview] a,?R | imagen | .IMGBOX, x2+30 | .IMGBOX, y | 300 | 200 | #dddddd
```

**Explicación:**
- Posición inicial basada en `.IMGBOX`
- **Ancho fijo:** 300 píxeles
- **Alto fijo:** 200 píxeles

## Casos de Uso Comunes

### Vista Previa de Avatar de Usuario
```
[Preview] mR | foto_perfil | :nombre, x2+20 | :nombre, y | :email, x2 | :telefono, y2 | #4a90e2
```

### Previsualización de Producto
```
[Preview] a,mR | imagen_producto | .product-info, x2+15 | .product-info, y | 250 | 200 | #e74c3c
```

### Documento Adjunto
```
[Preview] vR | documento | :titulo, x | :titulo, y2+10 | :descripcion, x2 | 150 | #2ecc71
```

### Galería de Imágenes
```
[Preview] a,mR,vR | galeria | .gallery-container, x | .gallery-container, y2+20 | 400 | 300 | #9b59b6
```

## Colores de Borde Comunes

| Color | Código | Uso Recomendado |
|-------|--------|-----------------|
| Gris claro | `#dddddd` | Uso general, neutro |
| Azul | `#4a90e2` | Información, datos de usuario |
| Verde | `#2ecc71` | Éxito, confirmación |
| Rojo | `#e74c3c` | Errores, alertas |
| Púrpura | `#9b59b6` | Destacar, premium |
| Naranja | `#f39c12` | Advertencias |
| Negro | `#000000` | Contraste alto |
| Transparente | `transparent` | Sin borde visible |

## Consideraciones de Diseño

### ✅ Buenas Prácticas

1. **Posicionamiento lógico:** Colocar el preview cerca del campo relacionado
2. **Tamaño apropiado:** No hacer el preview demasiado grande que interfiera con el formulario
3. **Colores consistentes:** Usar colores que coincidan con el diseño general
4. **Responsive:** Considerar cómo se verá en diferentes tamaños de pantalla
5. **Performance:** Optimizar imágenes para carga rápida

### ❌ Evitar

1. **Solapamiento:** Que el preview tape elementos importantes
2. **Tamaños extremos:** Muy pequeño (ilegible) o muy grande (molesto)
3. **Colores llamativos:** Que distraigan de la funcionalidad principal
4. **Posicionamiento fijo:** En pantallas muy pequeñas puede causar problemas

## Integración con Campos

### Campo de Imagen Típico
```
[Fields] Imagen | imagen | N | F | 100 | 200 | - | | |

[Preview] mR | imagen | :imagen, x2+20 | :imagen, y | 200 | 150 | #cccccc
```

### Con Validación de Archivo
```
[Fields] Foto Perfil | foto | N | F | 50 | 150 | M | | | Solo imágenes JPG, PNG

[Preview] a,mR | foto | :foto, x2+25 | :foto, y | :bio, x2 | :bio, y+100 | #007bff
```

## Comportamiento Dinámico

### Mostrar/Ocultar según Contenido
```javascript
// El preview se muestra automáticamente cuando:
// 1. Se selecciona un archivo
// 2. Se cargan datos desde el servidor que contienen imagen
// 3. Se actualiza el campo de imagen programáticamente
```

### Actualización en Tiempo Real
```javascript
// El preview se actualiza cuando:
// - Cambia el valor del campo
// - Se redimensiona la ventana (si usa coordenadas relativas)
// - Se modifican los elementos de referencia
```

## Troubleshooting

### Problemas Comunes

| Problema | Causa Probable | Solución |
|----------|----------------|----------|
| Preview no aparece | Campo vacío o archivo inválido | Verificar contenido del campo |
| Posición incorrecta | Objeto de referencia no existe | Comprobar nombres de campos/clases |
| Tamaño incorrecto | Coordenadas mal calculadas | Revisar sintaxis de cálculo |
| Borde no visible | Color de borde incorrecto | Verificar código hexadecimal |

### Debug de Coordenadas

Para verificar el posicionamiento:

```javascript
// En la consola del navegador
console.log(document.querySelector('.preview-container').getBoundingClientRect());
```

## Compatibilidad

### Tipos de Archivo Soportados
- **Imágenes:** JPG, JPEG, PNG, GIF, BMP
- **Documentos:** PDF (con vista previa limitada)
- **Otros:** Según configuración del servidor

### Navegadores
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Internet Explorer 11+ (funcionalidad limitada)

## Optimización

### Performance
```
// Recomendaciones para mejor rendimiento:
// 1. Usar imágenes optimizadas (< 2MB)
// 2. Implementar lazy loading para galerías
// 3. Cachear previews generados
// 4. Usar WebP cuando sea posible
```

### Accesibilidad
```html
<!-- El preview debe incluir atributos de accesibilidad -->
<img alt="Vista previa de imagen seleccionada" 
     title="Imagen: nombre_archivo.jpg" 
     role="img">
```