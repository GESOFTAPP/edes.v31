# PDFWrap

## Sintaxis

```
[PDFWrap] MáximasLineas [ [ [,RespetarRetornosDeCarro=true] [, Grid=false ] ] | ListaCamposWrap ]
```

## Descripción

Configura el comportamiento multilínea in los PDF para textos que sean más anchos que la columna a visualizar. Permite controlar cómo se ajustan y muestran los textos largos en las columnas del listado PDF.

## Parámetros

| Parámetro | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| **MáximasLineas** | Entero | - | Máximo número de líneas a mostrar por registro |
| **RespetarRetornosDeCarro** | Boolean | true | Mantiene los saltos de línea originales del texto |
| **Grid** | Boolean | false | Pinta líneas de separación entre filas |
| **ListaCamposWrap** | String | - | Campos específicos donde aplicar wrap (separados por coma) |

### Detalles de parámetros

#### MáximasLineas
- **Valor positivo**: Número máximo de líneas a mostrar por registro
- **Valor negativo**: Siempre utilizará el alto máximo disponible

#### RespetarRetornosDeCarro
- **true**: Mantiene los saltos de línea originales
- **false**: Sustituye los retornos de carro por espacios

#### ListaCamposWrap
- **No especificado**: Se aplica wrap a todos los campos más anchos que su columna
- **Lista de campos**: Solo aplica wrap a los campos especificados

## Ejemplos

### Ejemplo básico con máximo de líneas
```
[PDFWrap] 3
```
Máximo 3 líneas por registro, respetando retornos de carro.

### Ejemplo sin respetar retornos de carro
```
[PDFWrap] 3, false
```
Máximo 3 líneas por registro, los retornos de carro se sustituyen por espacios.

### Ejemplo con grid activado
```
[PDFWrap] 2, true, true
```
Máximo 2 líneas por registro, respetando retornos de carro y mostrando líneas de separación.

### Ejemplo con campos específicos
```
[PDFWrap] 4 | descripcion, observaciones, comentarios
```
Máximo 4 líneas, aplicando wrap solo a los campos especificados.

### Ejemplo con configuración completa
```
[PDFWrap] 5, true, true | descripcion_larga, notas_adicionales
```
- Máximo 5 líneas por registro
- Respeta retornos de carro
- Muestra grid de separación
- Solo aplica wrap a "descripcion_larga" y "notas_adicionales"

### Ejemplo con alto máximo ilimitado
```
[PDFWrap] -1
```
Utiliza siempre el alto máximo disponible para mostrar todo el contenido.

### Ejemplo sin grid y campos específicos
```
[PDFWrap] 3, false, false | titulo, resumen, conclusion
```
- Máximo 3 líneas
- No respeta retornos de carro
- Sin grid
- Solo wrap en campos específicos

### Ejemplo práctico con listado de productos
```
[PDFWrap] 2, true | descripcion, caracteristicas
```
Para un listado de productos donde solo la descripción y características necesitan ajuste multilínea.

### Ejemplo para informes con mucho texto
```
[PDFWrap] -1, true, true
```
Para informes donde se necesita mostrar todo el texto disponible con separación visual clara.