# FC

## Sintaxis

```
{FC}{ [ ParametroOpcional ] ... }
```

## Descripción

La sub-etiqueta `{FC}` (Fields Column) permite agrupar múltiples campos en la misma celda, organizándolos en columna vertical. Esta etiqueta solo puede utilizarse dentro de la etiqueta `[Fields]` y es útil para optimizar el espacio del formulario agrupando campos relacionados.

### Características principales:
- **Ámbito**: Solo funciona dentro de la etiqueta `[Fields]`
- **Agrupación**: Ubica los campos especificados en la misma celda
- **Disposición**: Los campos se organizan en columna (verticalmente)
- **Optimización**: Permite un mejor aprovechamiento del espacio del formulario

## Parámetros

### ParametroOpcional
Texto opcional que se incluye en la definición de la tabla HTML para personalizar la apariencia de la celda.

#### Ejemplos de parámetros:
- `border=1`: Añade borde a la celda
- `style='border: 1px solid blue;'`: Estilo CSS personalizado
- `class='mi-clase'`: Asigna una clase CSS
- `bgcolor='#f0f0f0'`: Color de fondo

## Ejemplo de uso

### Agrupación de campos de superficie
```
{FC}{
    M2.Construidos\M2 Construidos | mconstruido  | -,| T | 6|42 | M ||#|
    M2.Utiles                     | vutil        | + | T | 6|42 | ML|| |
    M2.Registrados\M2 Reg.        | vregistrad   | + | T | 6|42 | M || |
    M2.Parcela\M2 Parcela         | mparcela     | + | T | 6|42 | M || |
    Dormitorios                   | _dormitorios | + |[*]| 4|28 | ML|| |
}
```

### Con parámetros de estilo
```
{FC}{ style='border: 1px solid blue; background-color: #f9f9f9;'
    Campo1 | campo1 | X | T | 10 | | M | | |
    Campo2 | campo2 | X | T | 15 | | M | | |
    Campo3 | campo3 | X | T | 20 | | M | | |
}
```

### Con borde simple
```
{FC}{ border=1
    Nombre     | nombre    | X | T | 25 | | M | | |
    Apellido   | apellido  | X | T | 30 | | M | | |
    Teléfono   | telefono  | X | T | 12 | | M | | |
}
```

## Análisis del ejemplo

En el ejemplo proporcionado se agrupan 5 campos relacionados con medidas de superficie:

- **M2.Construidos**: Metros cuadrados construidos
- **M2.Utiles**: Metros cuadrados útiles  
- **M2.Registrados**: Metros cuadrados registrados
- **M2.Parcela**: Metros cuadrados de parcela
- **Dormitorios**: Número de dormitorios

### Características del ejemplo:
- Todos los campos son de tipo texto (`T`) excepto Dormitorios que es de selección (`[*]`)
- Utilizan diferentes máscaras de entrada (`-,`, `+`)
- Algunos campos tienen etiquetas abreviadas (`\M2 Construidos`, `\M2 Reg.`)
- Los campos se muestran verticalmente en una sola celda del formulario

## Casos de uso comunes

- **Datos relacionados**: Agrupar campos que pertenecen a la misma categoría
- **Optimización del espacio**: Reducir el número de filas del formulario
- **Organización visual**: Crear secciones visuales coherentes
- **Formularios compactos**: Hacer formularios más compactos sin perder funcionalidad
- **Campos de medidas**: Agrupar diferentes tipos de medidas o cálculos