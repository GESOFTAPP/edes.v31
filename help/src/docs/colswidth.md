# ColsWidth

## Sintaxis

```
[ColsWidth] ColWidth1 [,ColWidth2] ...... [,ColWidthN] [ | ListaColumnasAnchoDesfavorable | word-break ]
```

**Sintaxis alternativa:**
```
[ColsWidth] NomCampo=Width, ...
```

## Descripción

Define el ancho en píxeles de cada columna del listado. Los parámetros se pueden dejar en blanco para usar el ancho por defecto. En columnas de texto con ancho fijo, si el contenido desborda se mostrarán puntos suspensivos ("...") usando `text-overflow: ellipsis`.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `ColWidth` | Ancho en píxeles de la columna (puede estar vacío) |
| `NomCampo` | Nombre del campo en sintaxis alternativa |
| `Width` | Valor del ancho para el campo especificado |

### Parámetros opcionales avanzados

| Parámetro | Descripción |
|-----------|-------------|
| `ListaColumnasAnchoDesfavorable` | Lista de campos que tomarán el ancho de la columna más desfavorable |
| `word-break` | Parámetro CSS para el comportamiento de ruptura de palabras en la columna |

## Comportamiento

- **Valores en blanco**: Toman el ancho por defecto para visualización correcta
- **Valor cero (0)**: Deja el ancho más desfavorable (solo en HTML)
- **Desbordamiento de texto**: Se aplica `text-overflow: ellipsis` automáticamente
- **Ancho desfavorable**: Múltiples campos pueden compartir el ancho de la columna más ancha

## Ejemplos

### Ejemplo 1: Anchos específicos
```
[ColsWidth] 55,250,,,,,,,,150,200
```
- Primera columna: 55px
- Segunda columna: 250px
- Columnas 3-9: ancho por defecto (valores vacíos)
- Décima columna: 150px
- Undécima columna: 200px

### Ejemplo 2: Sintaxis alternativa
```
[ColsWidth] codigo=55, descripcion=250, total=150
```
- Campo 'codigo': 55px
- Campo 'descripcion': 250px  
- Campo 'total': 150px

### Ejemplo 3: Con parámetros avanzados
```
[ColsWidth] 100,200,300 | campo1,campo2,campo3 | word-break
```
- Define anchos específicos
- Los campos listados compartirán el ancho más desfavorable
- Aplica comportamiento `word-break` de CSS