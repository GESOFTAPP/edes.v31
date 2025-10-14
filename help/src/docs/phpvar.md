# Variables PHP - Documentación Completa

## Variables PHP Principales

### Variables del Sistema

| Variable | Descripción |
|----------|-------------|
| `$_Mode` | Variable Modo |
| `$_SubMode` | Variable SubModo, solo en listados (cl, ml, bl) |
| `$_Form` | Matriz con los datos de la etiqueta [Fields] |
| `$_pF` | Puntero a la matriz $_Form |
| `$_HndDB` | Conexión con la base de datos |
| `$_InsertId` | Matriz con los valores seriales |
| `$_PSOURCE` | Nombre del script que ejecutó la página |
| `$_Records` | Variable pública para almacenar el total de registros en un qCount() |
| `$_vF` | Valor de los campos tanto en fichas como en listados |
| `$EmptyList` | Mostrará el listado aunque no tenga registros (por defecto: false) |
| `$_SourceScript` | Nombre del fichero de definición DF principal |
| `$_DownloadPDF` | Modifica el comportamiento de los listados |

### Ejemplos de Uso

```php
// Acceso a campos mediante puntero
$_Form[$pF["NomCampo"]]

// Valores seriales por tabla
$_InsertId[NomTabla]

// Valores de campos
$_vF[NomField]
```

### Valores de $_PSOURCE
- **WDESKTOP**: Ejecutado desde el Desktop
- **WWORK**: Ejecutado desde la ventana de trabajo

### Valores de $_DownloadPDF
- **"P"**: Se descargará directamente un PDF
- **"X"**: Se descargará un fichero Excel

## Variables de Visualización de Valores Numéricos

### $_ShowZero
Valor numérico que indica cómo se visualizan los valores numéricos en las fichas (se insertará en [PHPStart]):

| Valor | Comportamiento |
|-------|---------------|
| **1** | Se muestra el valor cero |
| **0** | Si es cero se muestra el campo vacío (valor por defecto) |
| **-1** | Se muestra cero solo si se mete el valor cero |

### $_ShowZeroFields
Variable hash que indica cómo se visualiza el valor numérico de un campo específico en una ficha:

| Valor | Comportamiento |
|-------|---------------|
| **1** | Se muestra el valor cero |
| **0** | Si es cero se muestra el campo vacío (valor por defecto) |
| **-1** | Se muestra cero solo si se mete el valor cero |

## Variables de Comportamiento

### $_AutoJump
Define si al escribir en un input, al rellenar todos los caracteres se salta de campo automáticamente:

```php
// Para todos los inputs
$_AutoJump = true;

// Para campos específicos (matriz hash)
$_AutoJump = array("cd_auto" => 1, ...);
$_AutoJump["cd_auto"] = true;
```

> **Nota**: En `desktop5.css` existe la clase `AutoJump` con el color para el efecto visual de los campos de salto automático cuando se pone el foco.

### $_SummaryNoHeaders
Si se establece como `true`, los informes con agrupaciones (`[ColsOp] S`) no mostrarán la cabecera del grupo, solo los subtotales.

### $_NOSELECTFILL
Los campos select aunque no sean editables contienen todos los registros. Para campos de solo lectura:

```php
// Anula el relleno de select específicos
$_NOSELECTFILL[NmField] = true;

// Anula el relleno de todos los select
$_NOSELECTFILL["*"] = true;
```

### $_DBSEQUENCE
Si estamos en el controlador Oracle y queremos configurar que todas las tablas con secuenciales los generen triggers, pondremos esta variable como `"NO"`.

## Etiquetas y Variables

Se tiene acceso a todas las etiquetas del lenguaje mediante la variable pública del mismo nombre en mayúsculas precedida de una barra baja:
- **Cadena**: Si la etiqueta tiene solo un parámetro
- **Matriz**: Si tiene más de uno

## Variables de Sesión

| Variable | Descripción |
|----------|-------------|
| `$_Node` | Código del nodo |
| `$_Tree` | Código del árbol de opciones |
| `$_User` | Código del usuario |
| `$_pxH` | Altura en píxeles del monitor |

## Valores por Defecto

Estas variables van en la etiqueta `[FIELDS]` en la columna ocho (valores por defecto):

| Variable | Descripción | Formato |
|----------|-------------|---------|
| `#clock#` | Hora actual | "HH:MM:SS" (dependiendo de la longitud del campo) |
| `#default#` | Valor por defecto almacenado | En los modos (a,b,c,m) toma el valor del desktop si está almacenado |
| `#sy2s#` | Fecha desde inicio del día | ">YYYY-MM-DD 00:00:00" (para búsquedas) |
| `#today#` | Fecha actual | "DD-MM-YYYY" |
| `#y2s#` | Fecha y hora actual | "YYYY-MM-DD HH:MM:SS" |

## Variables en sql.ini

### Variables de Descarga

| Variable | Descripción |
|----------|-------------|
| `$_DownloadUrl` | URL para cuando las descargas se hacen desde otro Apache |
| `$_DownloadPath` | Directorio donde se guardarán los ficheros de las extracciones |
| `$_DownloadDays` | Días que se guardan las descargas |

### Variables de Interfaz

#### $_TABFormType
Define el tamaño de las fichas del grupo de fichas:

| Valor | Descripción |
|-------|-------------|
| **Different** | Valor por defecto. Cada ficha tendrá el tamaño en función de su contenido |
| **Equal** | Todas las fichas tendrán el mismo tamaño (ancho y alto del más desfavorable) |

#### Otras Variables de Configuración

| Variable | Descripción |
|----------|-------------|
| `$_NoContentTree` | Indica si al dar de alta o modificar usuarios los árboles asignados deben estar dentro del tuyo (por defecto: false) |
| `$_CompressedPages` | Para desactivar la compresión de las páginas en Procesos |
| `$_DEFAULTNOTOOLS` | Prestaciones que se desactivan en los listados (como la etiqueta [NoTools] pero global) |

### Variables de Checkbox

#### $_CheckBox
Configuración de valores de checkbox para diferentes formatos:

```php
// HTML
$_CheckBox['H']['ON'] = '';   // HTML True
$_CheckBox['H']['OFF'] = '';  // HTML False

// PDF
$_CheckBox['P']['ON'] = 'S';  // PDF True
$_CheckBox['P']['OFF'] = '';  // PDF False

// Excel
$_CheckBox['X']['ON'] = 'S';  // XLS True
$_CheckBox['X']['OFF'] = '';  // XLS False
```

#### $_CheckBoxSave
Valor de los checkbox al grabar (por defecto: `array("S","")` - matriz bidimensional con el valor true y false).

### Variables de Interfaz Avanzada

#### $_MarkVisited
Clase para marcar las filas en los listados cuando se abre una subventana.

#### Variables de Preguntas en Select

```php
// Al preguntar en los select añade dos opciones "Sin datos" y "Con datos"
$_QuestionsEmptyData = false;

// Color de las opciones especiales
$_QuestionsEmptyDataColor = '#666666';
```

#### Variables de Exportación

```php
// Añade dos opciones en los LTools: "Exportar con Clave" y "Exportar por EMail"
$_ExportExtras = false;

// Requiere clave para ciertas operaciones
$_KeyRequired = false;
```

## Ejemplos Prácticos

### Configuración de Salto Automático
```php
// Activar salto automático para todos los campos
$_AutoJump = true;

// Activar solo para campos específicos
$_AutoJump = array(
    "cd_auto" => 1,
    "nm_cliente" => 1,
    "telefono" => 1
);
```

### Configuración de Visualización de Ceros
```php
// Configuración global
$_ShowZero = 1; // Mostrar siempre el cero

// Configuración por campo
$_ShowZeroFields = array(
    "precio" => 1,     // Mostrar cero
    "descuento" => 0,  // Campo vacío si es cero
    "cantidad" => -1   // Mostrar cero solo si se introduce explícitamente
);
```

### Configuración de Select
```php
// No llenar ningún select en modo de solo lectura
$_NOSELECTFILL["*"] = true;

// No llenar select específicos
$_NOSELECTFILL["categoria"] = true;
$_NOSELECTFILL["estado"] = true;
```