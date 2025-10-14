# ListCheckBox

## Sintaxis

```
[ListCheckBox] Tipo | ON | OFF
```

## Descripción

Define cómo se visualizan los "checkbox" en los listados según el formato de salida. Permite personalizar la representación de valores booleanos o de tipo checkbox para diferentes tipos de exportación.

## Configuración global

En el fichero de configuración `sql.ini` se puede establecer la visualización general mediante la variable:

```ini
$_CheckBox
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `Tipo` | Tipo de formato de salida |
| `ON` | Texto o imagen cuando el control está activo |
| `OFF` | Texto o imagen cuando el control está desactivado |

### Tipos de formato disponibles

| Tipo | Inicial | Descripción |
|------|---------|-------------|
| HTML | `H` | Formato de visualización web |
| PDF | `P` | Formato de documento PDF |
| XLS | `X` | Formato de hoja de cálculo Excel |

### Valores ON/OFF

- **Para HTML**: Puede ser texto plano o etiquetas HTML (incluyendo imágenes)
- **Para PDF**: Generalmente texto simple
- **Para XLS**: Texto que se mostrará en las celdas

## Ejemplos

### Ejemplo 1: HTML con imagen
```
[ListCheckBox] H | <img src='g/tf_1.gif'>
```
- **Formato**: HTML
- **Activo**: Muestra imagen `tf_1.gif`
- **Inactivo**: No especificado (comportamiento por defecto)

### Ejemplo 2: PDF con texto
```
[ListCheckBox] P | Yes | No
```
- **Formato**: PDF
- **Activo**: Muestra texto "Yes"
- **Inactivo**: Muestra texto "No"

### Ejemplo 3: Configuración completa HTML
```
[ListCheckBox] H | ✓ | ✗
```
- **Formato**: HTML
- **Activo**: Símbolo de check (✓)
- **Inactivo**: Símbolo de cruz (✗)

### Ejemplo 4: Excel con texto personalizado
```
[ListCheckBox] X | Sí | No
```
- **Formato**: Excel
- **Activo**: Texto "Sí"
- **Inactivo**: Texto "No"

### Ejemplo 5: HTML con iconos Font Awesome
```
[ListCheckBox] H | <i class='fa fa-check text-success'></i> | <i class='fa fa-times text-danger'></i>
```
- **Formato**: HTML
- **Activo**: Icono de check verde
- **Inactivo**: Icono de cruz roja

## Casos de uso recomendados

- **Reportes multiidioma**: Personalizar textos según el idioma
- **Branding**: Usar iconos o colores corporativos
- **Accesibilidad**: Usar símbolos más claros que checkbox estándar
- **Consistencia**: Mantener el mismo estilo en todos los formatos de salida