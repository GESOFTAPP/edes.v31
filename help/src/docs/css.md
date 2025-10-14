# CSS

## SINTAXIS

```
[CSS] Mode | Filename
```

## DESCRIPCIÓN

Sustituye la hoja de estilos CSS que se carga por defecto por una personalizada especificada en el parámetro `Filename`. Esta etiqueta permite personalizar completamente la apariencia visual de la aplicación reemplazando los estilos predeterminados de EDES.

Las hojas de estilo personalizadas deben ubicarse en el directorio `DirRaíz/css/`. Si no se especifica un archivo externo, la etiqueta funciona en modo multilínea, permitiendo incluir CSS directamente en el código.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Mode** | Cadena | Modo de ejecución donde se aplicará la hoja de estilos |
| **Filename** | Cadena | Nombre del archivo CSS sin la extensión `.css` |

## UBICACIÓN DE ARCHIVOS

```
DirRaíz/
├── css/
│   ├── filename.css      ← Archivo CSS personalizado
│   ├── list.css          ← CSS por defecto para listados
│   └── tab.css           ← CSS por defecto para formularios
```

## HOJAS DE ESTILO POR DEFECTO DE EDES

| Archivo | Propósito | Descripción |
|---------|-----------|-------------|
| `list.css` | **Listados** | Estilos para tablas, filtros y elementos de listado |
| `tab.css` | **Formularios** | Estilos para campos, botones y elementos de formulario |

## EJEMPLOS

### CSS externo para múltiples modos
```
[CSS] c,b,m | mycss
```
Carga la hoja de estilos `mycss.css` en los modos "c" (crear), "b" (buscar) y "m" (modificar).

### CSS específico para listados
```
[CSS] l | custom_list
```
Carga `custom_list.css` solo para el modo listado.

### CSS global
```
[CSS] * | global_styles
```
Aplica `global_styles.css` a todos los modos.

### CSS para formularios específicos
```
[CSS] c,m | form_styles
```
Carga `form_styles.css` solo en modos de creación y modificación.

## MODO MULTILÍNEA

Si no se especifica un archivo externo, se puede usar CSS inline:

```
[CSS] *
body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
}

.custom-header {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    padding: 20px;
}
```

## CASOS DE USO COMUNES

- **Tema personalizado**: `[CSS] * | custom_theme`
- **Estilos de listado**: `[CSS] l | enhanced_list`
- **Formularios específicos**: `[CSS] c,m | form_custom`
- **Modo de impresión**: `[CSS] p | print_styles`
- **Responsive design**: `[CSS] * | responsive`

## ESTRUCTURA DE ARCHIVO CSS TÍPICA

```css
/* mycss.css - Ejemplo de estructura */

/* Variables globales */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-family: 'Segoe UI', sans-serif;
}

/* Estilos generales */
body {
    font-family: var(--font-family);
    line-height: 1.6;
}

/* Estilos para listados */
.list-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Estilos para formularios */
.form-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
```

## PRECEDENCIA Y CARGA

1. **CSS por defecto de EDES** (list.css, tab.css)
2. **CSS personalizado** especificado en la etiqueta
3. **CSS inline** (si se usa modo multilínea)

## NOTAS IMPORTANTES

- **Ubicación**: Los archivos CSS deben estar en `DirRaíz/css/`
- **Extensión**: No incluir `.css` en el nombre del archivo
- **Sustitución**: La hoja personalizada **reemplaza** completamente la por defecto
- **Modos**: Especificar correctamente los modos donde se aplicará
- **Compatibilidad**: Asegurar compatibilidad con navegadores objetivo

## BUENAS PRÁCTICAS

- **Organización**: Usar estructura clara y comentarios en el CSS
- **Responsive**: Incluir media queries para diferentes dispositivos
- **Variables**: Usar variables CSS para mantener consistencia
- **Optimización**: Minimizar el CSS para producción
- **Fallbacks**: Incluir fallbacks para propiedades CSS modernas
- **Testing**: Probar en diferentes navegadores y dispositivos

## CONSIDERACIONES DE RENDIMIENTO

- Mantener archivos CSS pequeños y optimizados
- Usar compresión cuando sea posible
- Evitar selectores excesivamente complejos
- Considerar el impacto en la velocidad de carga