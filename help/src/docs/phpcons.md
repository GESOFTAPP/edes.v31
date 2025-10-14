# Documentación de Constantes PHP - Etiqueta FIELDS

## Descripción General

Las constantes PHP se utilizan para definir los subíndices de la etiqueta `[FIELDS]`, permitiendo configurar campos y controles en formularios de manera estructurada.

## Constantes Principales

### Tabla de Constantes FIELDS

| Constante | Descripción | Uso | Ejemplo |
|-----------|-------------|-----|---------|
| `LABEL` | Etiqueta del campo | Define el texto visible del campo | `"Nombre de Usuario"` |
| `FIELD` | Nombre del campo/control | Identificador único del campo | `"username"` |
| `EDITION` | Tipo de edición | Especifica el modo de edición | `"text"`, `"password"` |
| `CONTROL` | Tipo de control | Define el tipo de control HTML | `"input"`, `"select"`, `"textarea"` |
| `SIZE` | Longitud del campo | Tamaño máximo de caracteres | `255`, `50`, `100` |
| `WIDTH` | Ancho del control | Ancho en píxeles | `200`, `300`, `"100%"` |
| `MODE` | Modo de edición | Configuración de ayudas al usuario | `"required"`, `"readonly"` |
| `DEFAULT` | Valor por defecto | Valor inicial en altas | `"valor_inicial"` |
| `CONDITION` | Condición individual | Validación específica del campo | `"not_empty"`, `"email"` |
| `MESSAGE` | Mensaje de error | Texto mostrado en caso de error | `"Campo obligatorio"` |
| `_TAB` | Número de formulario | Formulario en multifichas | `1`, `2`, `3` |

## Implementación

### Estructura Básica

```php
$fields = [
    'username' => [
        LABEL => 'Nombre de Usuario',
        FIELD => 'username',
        EDITION => 'text',
        CONTROL => 'input',
        SIZE => 50,
        WIDTH => 200,
        MODE => 'required',
        DEFAULT => '',
        CONDITION => 'not_empty',
        MESSAGE => 'El nombre de usuario es obligatorio',
        _TAB => 1
    ]
];
```

### Ejemplos por Tipo de Campo

#### Campo de Texto

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `LABEL` | `"Nombre"` | Etiqueta visible |
| `FIELD` | `"name"` | Nombre del campo |
| `EDITION` | `"text"` | Tipo de edición |
| `CONTROL` | `"input"` | Control HTML |
| `SIZE` | `100` | Máximo 100 caracteres |
| `WIDTH` | `250` | 250 píxeles de ancho |

#### Campo de Contraseña

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `LABEL` | `"Contraseña"` | Etiqueta visible |
| `FIELD` | `"password"` | Nombre del campo |
| `EDITION` | `"password"` | Tipo de edición |
| `CONTROL` | `"input"` | Control HTML |
| `SIZE` | `20` | Máximo 20 caracteres |
| `WIDTH` | `200` | 200 píxeles de ancho |

#### Campo Selección

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `LABEL` | `"País"` | Etiqueta visible |
| `FIELD` | `"country"` | Nombre del campo |
| `EDITION` | `"select"` | Tipo de edición |
| `CONTROL` | `"select"` | Control HTML |
| `WIDTH` | `180` | 180 píxeles de ancho |
| `DEFAULT` | `"ES"` | España por defecto |

## Tipos de Edición

### Valores Comunes para EDITION

| Valor | Descripción | Control Recomendado |
|-------|-------------|-------------------|
| `text` | Texto simple | `input` |
| `password` | Contraseña | `input` |
| `email` | Correo electrónico | `input` |
| `number` | Numérico | `input` |
| `date` | Fecha | `input` |
| `select` | Selección | `select` |
| `textarea` | Texto largo | `textarea` |
| `checkbox` | Casilla de verificación | `input` |
| `radio` | Botón de radio | `input` |

## Tipos de Control

### Valores para CONTROL

| Valor | Descripción | Uso Típico |
|-------|-------------|------------|
| `input` | Campo de entrada | Texto, número, fecha |
| `select` | Lista desplegable | Selección única |
| `textarea` | Área de texto | Texto largo |
| `checkbox` | Casilla | Valores booleanos |
| `radio` | Botón radio | Selección múltiple |

## Modos de Edición

### Valores para MODE

| Valor | Descripción | Efecto |
|-------|-------------|--------|
| `required` | Campo obligatorio | Validación requerida |
| `readonly` | Solo lectura | No editable |
| `hidden` | Oculto | No visible |
| `disabled` | Deshabilitado | No interactivo |

## Condiciones de Validación

### Valores para CONDITION

| Valor | Descripción | Validación |
|-------|-------------|------------|
| `not_empty` | No vacío | Campo obligatorio |
| `email` | Formato email | Validación de correo |
| `numeric` | Solo números | Validación numérica |
| `date` | Formato fecha | Validación de fecha |
| `length:min,max` | Longitud específica | Rango de caracteres |

## Multifichas (_TAB)

### Configuración de Formularios

| Número TAB | Descripción | Uso |
|------------|-------------|-----|
| `1` | Primera ficha | Formulario principal |
| `2` | Segunda ficha | Datos adicionales |
| `3` | Tercera ficha | Configuración avanzada |
| `n` | Ficha n | Datos específicos |

### Ejemplo Multificha

```php
$fields = [
    'basic_info' => [
        LABEL => 'Información Básica',
        _TAB => 1
    ],
    'advanced_settings' => [
        LABEL => 'Configuración Avanzada',
        _TAB => 2
    ]
];
```

## Mejores Prácticas

### Recomendaciones

| Aspecto | Recomendación | Motivo |
|---------|---------------|--------|
| Nombres de campos | Usar snake_case | Consistencia |
| Etiquetas | Descriptivas y claras | Usabilidad |
| Tamaños | Apropiados al contenido | Optimización |
| Validaciones | Específicas y claras | Seguridad |
| Mensajes de error | Informativos | Experiencia de usuario |

## Notas Importantes

- **Obligatorio**: Las constantes `LABEL` y `FIELD` son fundamentales
- **Validación**: Siempre incluir `CONDITION` y `MESSAGE` para campos críticos
- **Multifichas**: Usar `_TAB` para organizar formularios complejos
- **Compatibilidad**: Verificar que los tipos de control sean compatibles con el navegador objetivo