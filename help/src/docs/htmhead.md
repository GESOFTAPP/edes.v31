# HTMHead

## SINTAXIS

```
[HTMHead] Mode [ | NomDF,... [ | UNIQUE/Condition ] ] ... código_html
```

## DESCRIPCIÓN

Permite incluir código HTML personalizado dentro de la sección `<head>` del documento. Esta etiqueta es especialmente útil para agregar metaetiquetas, hojas de estilo, enlaces a recursos externos y código JavaScript que debe ejecutarse en el encabezado del documento.

El código insertado se incluye directamente en el `<head>` y se ejecuta antes de que se cargue el contenido del `<body>`.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Mode** | Cadena | Modo de inclusión del código (ej: `cR,bR`) |
| **NomDF** | Cadena (opcional) | Nombres de formularios específicos separados por comas |
| **UNIQUE/Condition** | Cadena (opcional) | Condición única o específica para la inclusión |
| **código_html** | HTML/JS | Código HTML o JavaScript a incluir en el head |

## ELEMENTOS COMUNES A INCLUIR

### Meta etiquetas
- `<META>` - Metadatos del documento
- `<META charset>` - Codificación de caracteres
- `<META viewport>` - Configuración de viewport para responsive design

### Recursos externos
- `<LINK>` - Enlaces a hojas de estilo CSS externas
- `<LINK rel="icon">` - Favicon del sitio

### Estilos y scripts
- `<STYLE>` - CSS interno
- `<SCRIPT>` - JavaScript interno o externo

## EJEMPLOS

### Configuración de charset
```
[HTMHead] cR,bR <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

### Viewport para responsive design
```
[HTMHead] * <META name="viewport" content="width=device-width, initial-scale=1.0">
```

### Inclusión de CSS externo
```
[HTMHead] * <LINK rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

### Favicon
```
[HTMHead] * <LINK rel="icon" type="image/x-icon" href="/favicon.ico">
```

### CSS interno
```
[HTMHead] * <STYLE>
    body { font-family: Arial, sans-serif; }
    .custom-class { color: #333; }
</STYLE>
```

### JavaScript interno
```
[HTMHead] * <SCRIPT>
    function customFunction() {
        console.log('Función personalizada ejecutada');
    }
</SCRIPT>
```

### Script externo
```
[HTMHead] * <SCRIPT src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></SCRIPT>
```

## CASOS DE USO COMUNES

- **SEO y metadatos**: `[HTMHead] * <META name="description" content="Descripción de la página">`
- **Estilos globales**: `[HTMHead] * <STYLE>/* CSS personalizado */</STYLE>`
- **Librerías externas**: `[HTMHead] * <SCRIPT src="libreria.js"></SCRIPT>`
- **Configuración mobile**: `[HTMHead] * <META name="viewport" content="width=device-width">`
- **Favicons**: `[HTMHead] * <LINK rel="icon" href="favicon.png">`

## NOTAS IMPORTANTES

- El código se incluye directamente en la sección `<head>` del HTML
- Se ejecuta antes de cargar el contenido del `<body>`
- Ideal para recursos que deben estar disponibles desde el inicio
- Permite personalizar completamente el encabezado del documento
- Útil para integración con librerías de terceros
- El modo `*` aplica a todos los formularios
- Soporta tanto HTML estático como JavaScript dinámico

## CONSIDERACIONES

- **Rendimiento**: Evitar incluir recursos pesados que bloqueen la carga
- **Orden**: El orden de inclusión puede ser importante para dependencias
- **Compatibilidad**: Asegurar que el código sea compatible con los navegadores objetivo