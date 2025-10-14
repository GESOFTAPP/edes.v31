# CSSAdd

## SINTAXIS

```
[CSSAdd] Mode [ [ | Filename [ , Filename2, ... ] ] | VarInSql ... ]
```

## DESCRIPCIÓN

Añade nuevos archivos de hojas de estilo en cascada (CSS) al documento actual, sin suprimir o eliminar la hoja de estilo por defecto. Permite personalizar el diseño visual de formularios y listados.

## PARÁMETROS

### Mode
Especifica el modo en el que se ejecuta la funcionalidad:

| Valor | Descripción |
|-------|-------------|
| `a` | Modo alta (creación) |
| `m` | Modo modificación |
| `R` | Mode consulta/lectura |
| `?` | Fichas de consulta |
| `*` | Todos los modos |

### Filename
- **Tipo**: Cadena (opcional)
- **Descripción**: Nombre de archivo CSS sin subdirectorio ni extensión
- Puede contener variables incrustadas
- Si se omite, se convierte en una etiqueta multilínea para escribir código CSS directamente

> **Importante**: En modo multilínea, el punto (`.`) **NO** es un comentario, sino una clase CSS válida.

### VarInSql
Matriz definida en `sql.ini` con 4 índices específicos:

| Índice | Descripción |
|--------|-------------|
| `TabFontSizeBody` | Tamaño de fuente en fichas |
| `TabFontSizeIcon` | Tamaño de iconos en fichas |
| `ListFontSizeBody` | Tamaño de fuente en listados |
| `ListFontSizeIcon` | Tamaño de iconos en listados |

#### Valores predefinidos para VarInSql:
- **`BIG`**: Contenido más grande
- **`SMALL`**: Contenido más pequeño
- **`paddingSmall`**: Padding pequeño en listados
- **`paddingBig`**: Padding grande en listados

## NOTAS IMPORTANTES

- Si no están definidos `ListFontSizeBody` o `ListFontSizeIcon`, se establecerán automáticamente como `TabFontSizeBody` y/o `TabFontSizeIcon`
- Cuando se usa el tercer parámetro, la etiqueta `[CSSAdd]` debe colocarse **antes** de las etiquetas `[Fields]`

## EJEMPLOS

### Ejemplo 1: Incluir archivo CSS en modos específicos
```
[CSSAdd] a,mR | MyCss
```
Incluye el archivo de estilos `MyCss` en los modos de alta, modificación y consulta.

### Ejemplo 2: CSS condicional con variables
```
[CSSAdd] ? | {$NomFileCss}
```
En las fichas de consulta se carga una CSS adicional definida en la variable `$NomFileCss`.

### Ejemplo 3: Configuración de fuentes con matriz
```
[CSSAdd] * || $_FontSizeSettings
```

Donde `$_FontSizeSettings` se declara en el archivo `sql.ini`:
```ini
$_FontSizeSettings = [18,15,0,0];
```

**Parámetros de la matriz:**
1. **18** - Tamaño de fuente en fichas
2. **15** - Tamaño de iconos en fichas  
3. **0** - Tamaño de fuente en listas (se usará el valor de fichas)
4. **0** - Tamaño de iconos en listas (se usará el valor de fichas)

### Ejemplo 4: Configuración rápida con valores predefinidos
```
[CSSAdd] * || big paddingBig
```
Aplica fuente grande en fichas y listados, con padding grande en el listado.

### Ejemplo 5: CSS multilínea
```
[CSSAdd] *
.mi-clase {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
}

.boton-personalizado {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    border: none;
    padding: 8px 16px;
}
[/CSSAdd]
```

## CASOS DE USO COMUNES

- **Personalización por modo**: Aplicar estilos diferentes según el contexto (alta, modificación, consulta)
- **Temas dinámicos**: Cargar CSS basado en variables de configuración
- **Responsive design**: Ajustar tamaños de fuente e iconos según el dispositivo
- **Branding**: Aplicar colores y estilos corporativos específicos