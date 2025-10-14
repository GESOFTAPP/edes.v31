# Format

## Sintaxis

```
[Format] FormatCol1 [, FormatCol2] ..... [, FormatColN] [ | iSubList / NoZero ]
```

**Sintaxis alternativa:**
```
[Format] NomCampo=FormatCol
```

## Descripción

En los listados, formatea las columnas de datos que se deseen. Permite aplicar funciones PHP donde el símbolo `#` se sustituye por el valor del campo a formatear. También es multilínea de código PHP para modificar la fila a imprimir.

Los valores de la fila están disponibles en la matriz `$_vF`, tanto por posición numérica como por nombre del campo. En campos que contienen nombres de ficheros, la extensión se puede obtener con el símbolo `@`.

## Variables disponibles

| Variable | Tipo | Descripción |
|----------|------|-------------|
| `$_vF` | Array (por referencia) | Valores de la fila actual |
| `$_CellsStyle` | Array (por referencia) | Estilo CSS de cada celda |
| `$_CellsClass` | Array (por referencia) | Clase CSS de cada celda |
| `$_RowStyle` | String (por referencia) | Estilo CSS de la fila |
| `$_RowClass` | String (por referencia) | Clase CSS de la fila |
| `$_RowDisabled` | Boolean (por referencia) | Desactiva la fila |
| `$_RowAdd` | String (por referencia) | Contenido adicional para la fila |
| `$_CellsAdd` | Array (por referencia) | Contenido adicional para cada celda |
| `$RowNumber` | Integer | Número de registro del listado completo |
| `$_pCol` | Variable | Información de columna |
| `$_pF` | Variable | Información de campo |

### Variables específicas para PDF

| Variable | Descripción |
|----------|-------------|
| `$_PDFColor` | Color del texto (cadena o matriz) |
| `$_PDFBackgroundColor` | Color de fondo (cadena o matriz) |
| `$_PDFLineRows` | Configuración de líneas (uso futuro) |
| `$_PDFRowShadow` | Sombra de fila |

## Parámetros de formato

| Parámetro | Descripción |
|-----------|-------------|
| `L` | Alineación a la izquierda (o en blanco) |
| `C` | Alineación centrada |
| `R` | Alineación a la derecha |
| `H` | Ocultar columna |
| `M` | Separar millares (automático en campos numéricos) |
| `M2` | Separar millares con punto y mostrar 2 decimales |
| `B` | No pintar si el valor es cero |
| `N` | No separar millares |
| `IMG` | Mostrar icono según tipo de fichero (no en PDF/XLS) |
| `ICON` | Mostrar imagen para ficheros gráficos (no en PDF/XLS) |

## Modificadores especiales

| Modificador | Descripción |
|-------------|-------------|
| `NoZero` | Equivale a aplicar "B" a todas las columnas |
| `ZERO` | Muestra el valor cero |
| `iSubList` | Solo aplica cuando el listado se ejecuta como iSubList |

## Funciones especiales

### eImgName()
```php
eImgName(NombreCampo [, Prefijo [, Titulo [, OnClick]]])
```
Calcula el nombre de imagen para mostrar en el listado.

### Otras funciones
```php
eImgDocType(NmField [, Titulo [, OnClick]])  // Tipo de documento
eDocView(NmField)                            // Ver documento
eDocEdit(NmField)                            // Editar documento
```

### Función eShell()
Si en `$_CellsStyle` solo se especifica un color o varios separados por comas, se ejecuta automáticamente la función `eShell()` para decorar el texto.

## Ejemplos

### Ejemplo 1: Formatos básicos
```php
[Format] ,,,,,,M,M2,M2,,,
```
Aplica separación de millares a las columnas 7, 8 y 9.

### Ejemplo 2: Función con sustitución
```php
[Format] ,,mb_substr('#', 0, 3),M2
```
Toma los primeros 3 caracteres del valor de la tercera columna.

### Ejemplo 3: Concatenación con extensión
```php
[Format] '#'.mb_substr($_vF[2], mb_strpos($_vF[2], '.'))
```
Concatena el valor con la extensión del archivo.

### Ejemplo 4: Imagen con evento
```php
[Format] ,,,"<img src='g/l_d_@.gif' onclick='NameFunction()'>"
```
Muestra imagen con evento onclick.

### Ejemplo 5: Código multilínea con modificadores
```php
[Format] | NoZero
     $_vF[6] = $_vF[4]-$_vF[5];
     $_vF[7] = $_vF[6]/$_vF[4]*100;
     if( $_vF[7]>50 ) $_CellsStyle[7] = 'color:red;font-weight:bold';
```
Calcula valores y aplica estilo condicional.

### Ejemplo 6: Uso con UploadFile
```php
[UploadFile] foto | /http/w_test/http/g | cd_w_op_colectivo | 300000 | Ver gráfico | jpg,gif,png | cl_
[Format]
     $_vF["foto"] = eImgName("foto");
```

### Ejemplo 7: Con prefijo personalizado
```php
[UploadFile] foto | /http/w_test/http/g | cd_w_op_colectivo | 300000 | Ver gráfico | jpg,gif,png | cl_ | 120,120 | clr_ | /../w_g7/http/g
[Format]
     $_vF["foto"] = eImgName("foto", "clr_");
```

### Ejemplo 8: Modificación por nombre de campo
```php
[Format]
     if( isZero($_vF["cdi"]) ) $_vF["cdi"] = '';
```
Modifica el contenido usando el nombre del campo.