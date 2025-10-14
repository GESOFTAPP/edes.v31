# slFormat

## Sintaxis
```
{slFormat} FormatCol1 [, FormatCol2] ..... [, FormatColN] ...
```

## Descripción
Permite formatear las columnas de datos en los listados de las sublistas. Proporciona control sobre la presentación visual, funciones personalizadas, contenido HTML y gráficos dinámicos basados en el contenido de los datos.

## Parámetros

### Tipos de Formato Básico

| Tipo | Descripción |
|------|-------------|
| `L` o (vacío) | Alineación a la izquierda |
| `C` | Alineación centrada |
| `R` | Alineación a la derecha |
| `H` | Ocultar columna |
| `M` | Separador de millares con punto |
| `M2` | Separador de millares con punto y dos decimales |
| `B` | No muestra nada si el valor es cero |

## Funciones de Usuario

### Sintaxis Básica
```
'uPinta("#")'
```

### Parámetros para Funciones

| Símbolo | Descripción | Ejemplo |
|---------|-------------|---------|
| `#` | Valor de la columna actual | `'uPinta("#")'` |
| `,` | Separador de parámetros (coma decimal) | `'uFunction("#", "param2")'` |
| `$_vF` | Cursor completo con todos los valores | `'uProcess("$_vF")'` |

### Paso por Referencia
Para modificar valores en la función, definir el parámetro por referencia en la función PHP.

## Contenido HTML y Gráficos

### HTML Personalizado
Se puede incluir cualquier código HTML válido:
```
{slFormat} ,,<strong>#</strong>,,<span style="color:red">#</span>
```

### Gráficos Dinámicos por Extensión
```html
<img src='g/t_file_@.gif' onclick='NomFuncion()' style='cursor:hand' title='_@_'>
```

**Sustituciones automáticas:**
- `@` → Se reemplaza por la extensión del archivo
- `_@_` → Se reemplaza por el valor del título

## Campos Virtuales con Cálculo

### Sintaxis
```
"Calculo() \ M2"
```
- **Primera parte:** Función PHP para el cálculo
- **Segunda parte:** Formato de presentación

## Ejemplos de Uso

### Ejemplo Básico
```
{slFormat} ,,,,,,<img src='g/d_@.gif' onclick='VerFoto()' title='_@_'>
```

### Ejemplos por Tipo de Contenido

#### Formateo Numérico
```
{slFormat} ,M,M2,R,B
```
- **Columna 2:** Separador de millares
- **Columna 3:** Millares con 2 decimales
- **Columna 4:** Alineado a la derecha
- **Columna 5:** Oculta ceros

#### Funciones Personalizadas
```
{slFormat} 'uFormatCode("#")',,'uCalculateTotal("#", "$_vF")',M2
```

#### Contenido HTML
```
{slFormat} ,<a href="detail.php?id=#">#</a>,<span class="status-#">#</span>
```

#### Gráficos e Iconos
```
{slFormat} ,,<img src='icons/@.png' alt='_@_'>,<button onclick='edit(#)'>Editar</button>
```

### Casos de Uso Avanzados

#### Listado de Archivos
```
{slFormat} ,,'uFormatFileName("#")',<img src='g/file_@.gif' onclick='openFile("#")' title='Abrir _@_'>
```

#### Estado con Colores
```
{slFormat} ,<span style="color:'uGetStatusColor("#")'">#</span>,'uFormatDate("#")'
```

#### Campos Calculados
```
{slFormat} ,,,'uCalculateDiscount("#", "$_vF") \ M2',B
```

## Funciones de Usuario - Estructura de Datos

### Variable $data en Funciones
```php
// $data es una variable hash con los siguientes índices:
// _vF, _CellsStyle, _CellsClass, nFila, _RowStyle, _RowClass, _RowDisabled

// Si la sublist tiene totales "nFila" contiene el valor "-1"
if( $data["nFila"] == -1 ){
    $data["_CellsStyle"][3] = "color:green";
    return;
}
$data["_RowStyle"] = "background-color:red";
$data["_CellsStyle"][3] = "color:red";
```

### Propiedades Disponibles

| Propiedad | Descripción |
|-----------|-------------|
| `_vF` | Array con todos los valores de la fila |
| `_CellsStyle` | Estilos CSS para celdas específicas |
| `_CellsClass` | Clases CSS para celdas específicas |
| `nFila` | Número de fila (-1 para fila de totales) |
| `_RowStyle` | Estilo CSS para toda la fila |
| `_RowClass` | Clase CSS para toda la fila |
| `_RowDisabled` | Estado deshabilitado de la fila |

## Ejemplos Completos

### Listado de Productos
```sql
SELECT codigo, nombre, precio, stock, imagen FROM productos
```
```
{slFormat} 'uFormatCode("#")',,'uFormatPrice("#") \ M2','uFormatStock("#")',<img src='products/@.jpg' onclick='showProduct("#")' title='Ver _@_'>
```

### Listado de Documentos
```sql
SELECT id, titulo, fecha, autor, archivo FROM documentos
```
```
{slFormat} ,'uTruncateText("#", 50)','uFormatDate("#")',,'<img src="icons/file_@.gif" onclick="openDoc(#)" title="Abrir _@_">'
```

### Reporte Financiero
```sql
SELECT concepto, debe, haber, saldo FROM movimientos
```
```
{slFormat} ,'uFormatCurrency("#") \ M2','uFormatCurrency("#") \ M2','uFormatBalance("#") \ M2'
```

## Funciones de Usuario Recomendadas

### Formateo de Texto
```php
function uTruncateText($text, $length = 50) {
    return strlen($text) > $length ? substr($text, 0, $length) . '...' : $text;
}
```

### Formateo de Fechas
```php
function uFormatDate($date) {
    return date('d/m/Y', strtotime($date));
}
```

### Formateo de Moneda
```php
function uFormatCurrency($amount) {
    return number_format($amount, 2, ',', '.') . ' €';
}
```

### Estados con Color
```php
function uFormatStatus($status, $data) {
    $colors = ['activo' => 'green', 'inactivo' => 'red', 'pendiente' => 'orange'];
    $color = $colors[$status] ?? 'black';
    $data["_CellsStyle"][array_search($status, $data["_vF"])] = "color:$color; font-weight:bold";
    return $status;
}
```

## Notas Importantes

- **Posición:** Cada formato debe corresponder con la posición de la columna
- **Funciones:** Las funciones de usuario deben estar definidas en el contexto PHP
- **HTML:** Se puede incluir cualquier HTML válido, incluyendo JavaScript
- **Parámetros:** Usar coma decimal (`,`) para separar parámetros en funciones
- **Rendimiento:** Las funciones complejas pueden afectar el rendimiento en listados grandes
- **Seguridad:** Validar siempre los datos antes de mostrarlos en HTML

## Recomendaciones

### Mejores Prácticas
- Combinar formateo básico con funciones para máxima flexibilidad
- Usar funciones específicas para lógica compleja
- Mantener las funciones simples y reutilizables
- Validar datos antes del formateo

### Optimización
- Cachear resultados de funciones costosas
- Usar formateo básico cuando sea suficiente
- Evitar HTML complejo en funciones de usuario
- Considerar el impacto en el rendimiento para listados grandes