# FR

## Sintaxis

```
{FR}{ [ParametroOpcional] ... }
```

## Descripción

La sub-etiqueta `{FR}` (Fields Row) ubica múltiples campos en la misma celda, organizándolos en fila horizontal. Es una abreviatura de "FieldsRow" y solo puede utilizarse dentro de la etiqueta `[Fields]`. 

Aunque aparentemente hace lo mismo que el prefijo "," (coma) de la etiqueta Fields, `{FR}` fuerza que todos los campos especificados permanezcan en la misma línea, evitando el "wrap" automático que puede ocurrir cuando los campos se salen por la derecha de la ventana del explorador.

### Características principales:
- **Ámbito**: Solo funciona dentro de la etiqueta `[Fields]`
- **Agrupación horizontal**: Ubica los campos en la misma celda en fila
- **Anti-wrap**: Previene el salto de línea automático del navegador
- **Control de layout**: Mantiene la integridad visual de la fila

### Diferencias con la coma (,)
- **Coma (,)**: Permite wrap automático si los campos no caben
- **{FR}**: Fuerza que todos los campos permanezcan en una sola línea

## Parámetros

### ParametroOpcional
Texto opcional que se incluye en la definición de la tabla HTML para personalizar la apariencia de la celda.

#### Ejemplos de parámetros:
- `border=1`: Añade borde a la celda
- `style='border: 1px solid blue;'`: Estilo CSS personalizado
- `class='mi-clase'`: Asigna una clase CSS
- `bgcolor='#f0f0f0'`: Color de fondo
- `nowrap`: Evita el wrap de texto (redundante ya que FR ya lo hace)

## Ejemplo de uso

### Agrupación horizontal de campos de superficie
```
{FR}{
    M2.Construidos\M2 Construidos | mconstruido  | -,| T | 6|42 | M ||#|
    M2.Utiles                     | vutil        | + | T | 6|42 | ML|| |
    M2.Registrados\M2 Reg.        | vregistrad   | + | T | 6|42 | M || |
    M2.Parcela\M2 Parcela         | mparcela     | + | T | 6|42 | M || |
    Dormitorios                   | _dormitorios | + |[*]| 4|28 | ML|| |
}
```

### Con parámetros de estilo
```
{FR}{ style='border: 1px solid blue; background-color: #f9f9f9;'
    Campo1 | campo1 | X | T | 10 | | M | | |
    Campo2 | campo2 | X | T | 15 | | M | | |
    Campo3 | campo3 | X | T | 20 | | M | | |
}
```

### Con borde y sin wrap
```
{FR}{ border=1 nowrap
    Fecha Inicio | fecha_inicio | X | D | 10 | | M | | |
    Fecha Fin    | fecha_fin    | X | D | 10 | | M | | |
    Duración     | duracion     | X | T | 5  | | M | | |
}
```

### Comparación con coma
```
# Con coma (puede hacer wrap)
Campo1 | campo1 | X | T | 15 | | M | | |
,Campo2 | campo2 | X | T | 15 | | M | | |
,Campo3 | campo3 | X | T | 15 | | M | | |

# Con {FR} (no hace wrap)
{FR}{
    Campo1 | campo1 | X | T | 15 | | M | | |
    Campo2 | campo2 | X | T | 15 | | M | | |
    Campo3 | campo3 | X | T | 15 | | M | | |
}
```

## Análisis del ejemplo

En el ejemplo proporcionado se agrupan horizontalmente 5 campos relacionados con medidas:

- **M2.Construidos**: Metros cuadrados construidos
- **M2.Utiles**: Metros cuadrados útiles  
- **M2.Registrados**: Metros cuadrados registrados
- **M2.Parcela**: Metros cuadrados de parcela
- **Dormitorios**: Número de dormitorios

### Características del ejemplo:
- Todos los campos son de tipo texto (`T`) excepto Dormitorios que es de selección (`[*]`)
- Utilizan diferentes máscaras de entrada (`-,`, `+`)
- Algunos campos tienen etiquetas abreviadas (`\M2 Construidos`, `\M2 Reg.`)
- Los campos se muestran horizontalmente en una sola fila garantizada
- Anchos de campo compactos (6 y 4 caracteres) para optimizar el espacio horizontal

## Cuándo usar {FR}

### Usar {FR} cuando:
- Los campos deben permanecer juntos visualmente
- Se trabaja con pantallas de diferentes anchos
- Se necesita control preciso del layout horizontal
- Los campos son cortos y caben en una línea
- Se requiere consistencia visual independiente del tamaño de ventana

### Usar coma (,) cuando:
- Se acepta el wrap automático
- Los campos son largos y pueden necesitar salto de línea
- Se prefiere la flexibilidad del navegador
- El layout puede adaptarse dinámicamente

## Casos de uso comunes

- **Campos de medidas**: Agrupar diferentes tipos de medidas en una línea
- **Fechas relacionadas**: Fecha inicio, fecha fin, duración
- **Coordenadas**: Latitud, longitud, altitud
- **Datos financieros**: Precio, descuento, total
- **Formularios compactos**: Maximizar el uso del espacio horizontal
- **Datos tabulares**: Simular filas de tabla dentro del formulario