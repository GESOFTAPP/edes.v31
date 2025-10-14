# Variables JavaScript - Documentación Completa

## Variables del Desktop

| Variable | Descripción | Alias |
|----------|-------------|--------|
| `_D2S` | Fecha en formato "YYYYMMDD" | `_ymd` |
| `_Node` | Código del nodo | - |
| `_Tree` | Código del árbol | - |
| `_Source` | Nombre del script | - |
| `_ToDay` | Fecha en formato "DD-MM-YYYY" | `_dmy` |
| `_User` | Código del usuario | - |
| `_Y2S` | Fecha y hora formato "YYYY-MM-DD HH:MM:SS" | `_cdi` |
| `_WebMaster` | Indica si el usuario es "_WebMaster" | - |
| `_Desktop` | Tipo de desktop | - |
| `_WithAccents` | Para que los campos de texto en mayúsculas admitan acento | - |

### Tipos de Desktop
- **0**: Horizontal
- **1**: Vertical
- **2**: Menús flotantes

### Ejemplo de uso de _WithAccents
```javascript
_WithAccents['nm_auto'] = 1;
```

## Variables de Listado

| Variable | Descripción |
|----------|-------------|
| `_aTR` | Array con los valores de la fila seleccionada |
| `_oTD` | Objeto TD de la celda pulsada |
| `_oTR` | Objeto TR de la fila pulsada |
| `_SubMode` | Submodo: cl, bl, ml |
| `_MarkVisited` | Clase para marcar las filas en los listados cuando se abre una subventana |

## Variables de Ficha

### Variables de Configuración General

| Variable | Descripción |
|----------|-------------|
| `_Action` | URL a ejecutar al hacer el submit |
| `_Question` | Desactiva el tercer estado de los checkbox (=) y permite desmarcar los radiobutton |
| `_SelectMultiple` | Indica que todos los select son de multiple selección (true/false) |
| `_SelectMultipleField` | Indica individualmente que campos son de múltiple selección (matriz asociativa) |
| `_WrapForm` | Indica la acción a ejecutar cuando estás en el último campo de un formulario |

### Variables de Visualización de Valores Numéricos

#### _ShowZero
Valor numérico que indica cómo se visualizan los valores numéricos en las fichas:

| Valor | Comportamiento |
|-------|---------------|
| **1** | Se muestra el valor cero |
| **0** | Si es cero se muestra el campo vacío (valor por defecto) |
| **-1** | Se muestra cero solo si se mete el valor cero |

#### _ShowZeroFields
Variable hash para campos específicos con el subíndice del nombre del campo:

| Valor | Comportamiento |
|-------|---------------|
| **1** | Se muestra el valor cero |
| **0** | Si es cero se muestra el campo vacío (valor por defecto) |
| **-1** | Se muestra cero solo si se mete el valor cero |

### Variables de Acentos en Fichas

#### _WithAccents
En las fichas, los campos de texto en mayúsculas por defecto no admiten acentos:

```javascript
// Para un solo campo
_WithAccents[name_field] = true;

// Para todos los campos
_WithAccents['*'] = true;
```

### Variable WrapForm
- **true** (por defecto): Vuelve al primer campo editable
- **false**: Se queda el foco en el último campo

## Variables Generales

| Variable | Descripción |
|----------|-------------|
| `_D2S` | Fecha en formato "YYYYMMDD" |
| `_WType` | Tipo de ventana |
| `_HndWeb` | Código de la conexión |
| `_Mode` | Modo de ejecución |
| `_Node` | Código del nodo |
| `_Obj` | Objeto que se está ejecutando |
| `_PSOURCE` | Nombre del script de la ventana padre |
| `_Source` | Nombre del script |
| `_User` | Código del usuario |
| `_WOPENER` | Puntero a la ventana padre |
| `_StatusVar` | Variable para ayuda a la depuración |

### Tipos de Ventana (_WType)
- **0**: Desktop
- **1**: SubVentana
- **2**: Ventana Deslizante

### Objetos (_Obj)
- **F**: Formulario
- **G**: 
- **L**: Listado
- **M**: Mensaje

### Valores de _PSOURCE
- **"WDESKTOP"**: Ventana abierta por el Desktop
- **"WWORK"**: Se está ejecutando en la ventana de trabajo

### Ejemplo de _StatusVar
```javascript
var _StatusVar = "var1,var2,var3";
```

## Parámetros de URL

| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| `_SEEK` | Busca un determinado registro por la URL | `edes.php?FmR:script.edf&_SEEK&campo=[VALOR]&...` |
| `_ASSIGN` | Asigna variables en la llamada por la URL | `edes.php?Fa:script.gdf&_ASSIGN=a&campo=[VALOR]&...` |
| `_NOBUTTON` | Muestra una ficha de consulta quitando el botón de nueva búsqueda | `edes.php?FcR:script.gdf&_NOBUTTON&_SEEK&campo=[VALOR]&...` |
| `_NOEDITFILLED` | Asigna variables y las pone no editables | `edes.php?Fa:script.gdf&_NOEDITFILLED&_ASSIGN=a&campo=[VALOR]&...` |
| `_FILTER` | Busca un grupo de registros | `edes.php?Ll:script.edf&_FILTER="+escape("A.campo='"+valor+"'")` |
| `_DB` | Primera ejecución con diccionario específico | `edes.php?Ll:script.edf&_DB=congreso` |
| `_PERSISTENTDB` | Ejecuta todas las opciones con diccionario específico | `edes.php?Ll:script.edf&_PERSISTENTDB=congreso` |
| `_STOP` | La subventana se cerrará al pulsar el botón y terminar la operación | - |
| `_CLOSE` | La subventana se cerrará después de hacer la operación | - |
| `_BUTTONCLOSE` | Muestra la ventana con el icono de cerrar (modo "cR") | - |
| `_SHOWFILTER` | Activa/Desactiva que se vean las condiciones en los listados | - |
| `_TRANSPARENT` | El body de la página será transparente (valor=1) | - |
| `_FORMBUTTONSDELETE` | Desactiva el icono de las fichas para cambiar el modo de ejecución | - |
| `_EMPTYLIST` | Si el listado no tiene datos lo mostrará de todas formas | - |

## Subventanas

Desde cualquier ventana se puede saber desde qué ventana fue abierta mediante:
- Variable JavaScript: `window.frameElement.WOPENER`
- Variable global: `_WOPENER`

Desde los scripts del motor se puede acceder a los datos del padre mediante las funciones:
- `ePPF()`
- `ePGF()`

## Campos Virtuales

Los campos virtuales son aquellos que empiezan por barra baja (`_`) y no tienen su contrapartida en la DB. Su uso es para pasar información adicional a los scripts.

### Campo Virtual del Sistema: _gs_formato_

Sirve para elegir el tipo de listado a mostrar desde una ficha de consulta:

| Valor | Formato |
|-------|---------|
| **H** | HTML (valor por defecto) |
| **P** | PDF |
| **X** | XLS |

### Ejemplo de select virtual:
```
[AddOption] * | _gs_formato_ | H,HTML; P,PDF
```

## Contracciones del DOM

Para simplificar el código JavaScript, se proporcionan métodos abreviados:

| Contracción | Equivalente |
|-------------|-------------|
| `DA` | `document.all` |
| `DB` | `document.body` |
| `DF` | `document.forms` |
| `DGI` | `document.getElementById` |
| `DGT` | `document.getElementsByTagName` |
| `W` | `window` |
| `WO` | `window.open` |

## Conmutación de Modos en Fichas

La variable `_FORMBUTTONS` (disponible tanto en JS como en PHP, también existe la etiqueta `[FormButtons]`) controla los modos a los que se puede intercambiar.

### Caracteres de Modo

| Carácter | Modo | Descripción |
|----------|------|-------------|
| **V** | View | Ver la ficha en modo consulta |
| **v** | View | Buscar ficha a consultar |
| **U** | Update | Ver la ficha en modo modificación |
| **u** | Update | Buscar ficha a modificar |
| **I** | Insert | Ficha en modo alta |
| **D** | Delete | Ver la ficha en modo borrado |
| **d** | Delete | Buscar ficha a borrar |

## Teclas de Acceso Rápido

Para tener teclas de acceso rápido con la tecla Control/Option más la definida en la variable.

### En Fichas
Define la posición del botón:

```javascript
[JSIni] ?,?R,a
var _ShortcutKey = {
    "KeyA": "1",
    "KeyB": "2",
    "Digit1": "3"
};
```

### En Listados
Para definir los dos iconos de acceso directo:

```javascript
[JSIni] l     
var _ShortcutKey = {
    "KeyI": "insert",
    "KeyS": "seek"
};
```