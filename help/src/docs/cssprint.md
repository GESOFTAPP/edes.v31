# CSSPrint

## SINTAXIS

```
[CSSPrint] Mode | Filename
```

## DESCRIPCIÓN

Define la hoja de estilo específica para la impresión de documentos. Permite personalizar el diseño y formato cuando el usuario imprime la página, sobrescribiendo el archivo CSS de impresión por defecto.

> **Por defecto**: Si no se especifica, se utiliza el archivo `ficha_print.css`

## PARÁMETROS

### Mode
Especifica el modo en el que está activa la etiqueta:

| Valor | Descripción |
|-------|-------------|
| `a` | Modo alta (creación) |
| `m` | Modo modificación |
| `R` | Modo consulta/lectura |
| `?` | Fichas de consulta |
| `*` | Todos los modos |

### Filename
- **Tipo**: Cadena obligatoria
- **Descripción**: Nombre del archivo de hoja de estilo para impresión
- **Formato**: Sin extensión (se añade automáticamente `.css`)
- **Ubicación**: Debe estar en el directorio de estilos del sistema

## EJEMPLO

```
[CSSPrint] m | MyStylePrint
```

Este ejemplo establece que en modo modificación se utilizará el archivo `MyStylePrint.css` para el formato de impresión.

## EJEMPLOS ADICIONALES

### Estilo de impresión para todos los modos
```
[CSSPrint] * | ReporteProfesional
```

### Estilo específico para consultas
```
[CSSPrint] ? | ConsultaSimple
```

### Estilo diferente según el modo
```
[CSSPrint] a | FormularioNuevo
[CSSPrint] m | FormularioEdicion
[CSSPrint] R | VistaLectura
```

## CONSIDERACIONES PARA CSS DE IMPRESIÓN

Al crear hojas de estilo para impresión, ten en cuenta:

### Mejores prácticas
- **Ocultar elementos innecesarios**: navegación, botones, elementos interactivos
- **Optimizar para papel**: usar colores apropiados para impresión
- **Ajustar tipografía**: tamaños de fuente legibles en papel
- **Gestionar saltos de página**: evitar cortes inapropiados

### Ejemplo de CSS de impresión típico
```css
/* Ocultar elementos no necesarios para impresión */
.no-print, .navegacion, .botones {
    display: none !important;
}

/* Ajustar colores para impresión */
body {
    background: white !important;
    color: black !important;
}

/* Optimizar tipografía */
h1, h2, h3 {
    color: black !important;
    page-break-after: avoid;
}

/* Gestionar tablas */
table {
    page-break-inside: avoid;
}
```

## CASOS DE USO COMUNES

- **Reportes financieros**: Formato específico para estados financieros
- **Formularios oficiales**: Diseño optimizado para documentos legales
- **Facturas**: Layout especializado para documentos comerciales
- **Certificados**: Formato elegante para documentos oficiales
- **Listados**: Diseño compacto para informes tabulares