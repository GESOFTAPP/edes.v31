# BackgroundImage

## SINTAXIS

```
[BackgroundImage] Mode | Image [ | Repeat=no-repeat [ | Position=bottom right [ | AreaPrincipal=true ] ] ]
```

## DESCRIPCIÓN

Establece una imagen de fondo para las pantallas utilizando la propiedad CSS `background-image`. Esta etiqueta permite personalizar la apariencia visual de la aplicación agregando imágenes de fondo con control completo sobre su repetición, posición y área de aplicación.

Por defecto, establece automáticamente el atributo CSS `background-attachment: fixed` para mantener la imagen fija durante el desplazamiento.

## PARÁMETROS

| Parámetro | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| **Mode** | Cadena | - | Modo de ejecución de la etiqueta |
| **Image** | Cadena | - | Ruta de la imagen, normalmente `g/[nombreImagen]` |
| **Repeat** | Cadena | `no-repeat` | Tipo de repetición de la imagen |
| **Position** | Cadena | `bottom right` | Posición de la imagen en el contenedor |
| **AreaPrincipal** | Booleano | `true` | Si se aplica solo al área principal o también a subventanas |

## VALORES DE PARÁMETROS

### Repeat (Repetición)
- `no-repeat` - La imagen no se repite
- `repeat` - La imagen se repite en ambas direcciones
- `repeat-x` - La imagen se repite solo horizontalmente
- `repeat-y` - La imagen se repite solo verticalmente
- `space` - La imagen se repite con espaciado uniforme
- `round` - La imagen se repite ajustando el tamaño

### Position (Posición)
- `top left` - Esquina superior izquierda
- `top center` - Centro superior
- `top right` - Esquina superior derecha
- `center left` - Centro izquierda
- `center center` - Centro absoluto
- `center right` - Centro derecha
- `bottom left` - Esquina inferior izquierda
- `bottom center` - Centro inferior
- `bottom right` - Esquina inferior derecha (por defecto)

### AreaPrincipal
- `true` - Solo se aplica al área principal (por defecto)
- `false` - Se aplica también a las subventanas

## EJEMPLOS

### Imagen básica en esquina inferior derecha
```
[BackgroundImage] * | g/logo.png
```

### Imagen centrada sin repetición
```
[BackgroundImage] * | g/background.jpg | no-repeat | center center
```

### Imagen repetida horizontalmente en la parte superior
```
[BackgroundImage] * | g/pattern.png | repeat-x | top center
```

### Imagen de fondo para toda la aplicación
```
[BackgroundImage] * | g/wallpaper.jpg | no-repeat | center center | false
```

### Patrón repetido como textura
```
[BackgroundImage] * | g/texture.png | repeat | top left
```

## CASOS DE USO COMUNES

- **Logo de marca**: `[BackgroundImage] * | g/logo.png | no-repeat | bottom right`
- **Fondo decorativo**: `[BackgroundImage] * | g/background.jpg | no-repeat | center center`
- **Patrón de textura**: `[BackgroundImage] * | g/pattern.png | repeat | top left`
- **Marca de agua**: `[BackgroundImage] * | g/watermark.png | no-repeat | center center | false`
- **Bordes decorativos**: `[BackgroundImage] * | g/border.png | repeat-x | top center`

## FORMATO DE IMÁGENES

### Ruta típica
```
g/nombreimagen.extension
```

### Formatos soportados
- **PNG** - Recomendado para logos y gráficos con transparencia
- **JPG/JPEG** - Ideal para fotografías y fondos complejos
- **GIF** - Para imágenes simples o animadas
- **SVG** - Para gráficos vectoriales escalables

## CONSIDERACIONES CSS

La etiqueta genera automáticamente las siguientes propiedades CSS:

```css
background-image: url('ruta/imagen');
background-repeat: valor_repeat;
background-position: valor_position;
background-attachment: fixed;
```

## NOTAS IMPORTANTES

- **Rendimiento**: Usar imágenes optimizadas para no afectar la velocidad de carga
- **Resolución**: Considerar diferentes tamaños de pantalla al elegir imágenes
- **Transparencia**: Las imágenes PNG con transparencia funcionan mejor para logos
- **Contraste**: Asegurar que el texto sea legible sobre la imagen de fondo
- **Responsividad**: La imagen se adapta automáticamente al tamaño del contenedor

## BUENAS PRÁCTICAS

- Usar imágenes de tamaño apropiado para evitar distorsión
- Optimizar las imágenes para web (compresión adecuada)
- Considerar el contraste con el contenido superpuesto
- Probar en diferentes resoluciones de pantalla
- Usar `AreaPrincipal=false` solo cuando sea necesario