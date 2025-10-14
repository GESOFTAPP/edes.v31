# SubList

## Sintaxis

```
[SubList] Mode | Id [ | TituloSuperior [ | TituloVentana [ | NOBR ] ] ]
```

## Descripción

**SubList** crea un listado con posibilidad de mantenimiento dentro de una ficha o grupo de fichas. Esta etiqueta utiliza subetiquetas que se delimitan con llaves `{}`.

### Características Importantes

- El orden de los campos de la subficha debe ser el mismo que el de la sublista
- En el último campo visible se coloca el botón de gestión
- **IMPORTANTE**: El campo que va en el `where` no se incluye en la SubFicha ni en la SubLista

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Id** | Nombre del identificador. En la etiqueta `[FIELDS]` se pone entre corchetes |
| **NOBR** | Pone el botón de submit de la subficha a continuación |

## Obtención de Datos de la SubLista

Para obtener los datos de la sublista, crear la siguiente variable:

```php
[PHPIni] A,M
$_SubListGetRecords = array();

[DBIni] A,M
// Se obtiene la variable "$_SubListGetRecords" con la siguiente información:
```

### Estructura del Array `$_SubListGetRecords`

#### Cabecera
- `[0][0]` Total de registros
- `[0][1]` Nombre de la tabla
- `[0][2]` Índice principal
- `[0][3]` Lista de campos

#### Registros
- `[1][...]` Una matriz con los valores de los campos

### Para Campos con Alias

Los campos con alias no son recogidos por el array. Para recibirlos, definir:

```javascript
[JSIni] a,mR
_SubListGetRecords = true;
```

## Sublistas Tipo FormStatic

### Evitar Cierre Automático de Ventana
```javascript
[JSCheck] a
top._eSWMini( window.frameElement.id.substring(4) );
```

### Variable de Modo
Para conocer el modo actual: `_ModeSubList`

## Sublistas Tipo FormOnLine

Para sublistas FormOnLine con subficha de mantenimiento, es **obligatorio** que la subficha empiece con una línea de texto como delimitador superior.

## Funciones Opcionales

Si existe la función `FUNCTION_[Id]`, se llamará al principio y final de cada proceso:

### Para Listado ("L")
```javascript
// Start
FUNCTION_[NomSubList]('L', 'S', MODO, rowIndex, ObjTR, window, slCol);
// Return: [] / true / false

// End
FUNCTION_[NomSubList]('L', 'E', MODO, rowIndex, ObjTR, window, slCol);

// Start (Ver documento)
FUNCTION_[NomSubList]('L', 'S', 'F', -1, ObjTR, window, slCol);
// Return: [] / true / false
```

### Para Ficha ("F")
```javascript
// Start
FUNCTION_[NomSubList]('F', 'S', MODO, -1, ObjTR, window, slCol);
// Return: [] / true / false

// End
FUNCTION_[NomSubList]('F', 'E', MODO, rowIndex, ObjTR, window, slCol);
```

## Subetiquetas Principales

### {slGroupLabels}
Define las columnas del listado con sus propiedades:

| Columna | Descripción |
|---------|-------------|
| **slSql** | Nombre del campo en SQL |
| **slAlign** | Alineación (I=Izquierda, D=Derecha, C=Centro, H=Oculto) |
| **slColsWidth** | Ancho de la columna en píxeles |
| **slFormat** | Función de formato |
| **slMenu** | Campo asociado para el menú |
| **slTH** | Título de la cabecera |

### {slSql}
Define la consulta SQL para obtener los datos:
```sql
{slSql} select # from tabla where campo='{campo_padre}'
```

### {slMenu}
Configura las opciones del menú contextual:
```
{slMenu} modos | acciones | campos | parámetros | tipo | títulos
```

### {slWin}
Define el tamaño de la ventana:
```
{slWin} ancho,alto
```

## Ejemplos Prácticos

### Ejemplo 1: SubLista Básica con FormOnLine

```
[Fields]
- | SUPLEMENTO
Nombre |_nombre       |#X|T|50|350|M| |#|
,Importe|_importe      |+ |T|3 |    |M| |#|
-|LISTA DE SUPLEMENTOS
         | [_suplementos] |o |  |   |    |  | |  |

[SubList]a,?R|_suplementos
{slGroupLabels} slSql|slAlign|slColsWidth|slFormat|slMenu |slTH
     ''              |  CH   |    27     |  AMB() | IMG   | Alta suplemento    
     nombre          |   I   |   400     |        |_nombre| NOMBRE
     importe         |   D   |           |   M    |_importe| IMPORTE

{slSql} select # from w_suplemento_od where cd_w_oferta='{cd_w_oferta}'
{slMenu} a,mR|Alta:i, Modificar:u, Borrar:d|#| |FormOnLine|Modificar suplemento|Borrar suplemento
{slWin} ,4
```

### Ejemplo 2: SubLista con FormStatic

```
[SubList] a,?R | _mar
{slSql} select '', cd_marca, nm_marca from marca where cd_prove='{cd_prove}' | cd_marca
{slFormat} MBmarca()
{slTH} Alta de Marca,CODIGO,NOMBRE DE LA MARCA COMERCIAL
{slColsWidth} , ,500
{slAlign} o,R,I
{slWin} ,7
{slMenu} a,mR | Alta:i, Modificar:u, Borrar:d | ''=IMG, cd_marca=_cd_marca, nm_marca=_nm_marca | | FormOnLine | Modificar Marca|Borrar Marca
```

### Ejemplo 3: SubLista con Múltiples Tablas (JOIN)

```
[SubList] a,?R | _muestra
{slGroupLabels} slSql | slAlign | slColsWidth | slFormat | slMenu      | slTH
    ''                |   CH    |    40       |  AMB()   | IMG         | Alta dirección
    c.cd_clidir       |   H     |    10       |          | _cd_clidir  |
    c.direccion       |   I     |   200       |          | _direccion  | Dirección
    c.num             |   I     |    50       |          | _num        | Núm
    a.nm_auto         |   I     |   100       |          | *_cd_auto   | Autonomía 
    p.nm_prov         |   I     |   150       |          | *_cd_prov   | Provincia
  
{slSql} select # from clidir c 
        left join auto a on c.cd_auto=a.cd_auto 
        left join prov p on c.cd_prov=p.cd_prov 
        where cd_cli='{cd_cli}' | a.cd_clidir
{slMenu} a,?R | Alta:i, Modificar:u, Borrar:d, Consultar:v | # | cd_clidir=1, cd_cli=0 | FormOnLine | Modificar Dir|Borrar dir|Consultar Dir
{slWin} ,4
```

### Ejemplo 4: SubLista con Gestión de Archivos

```
[UploadFile] _fichero | //doc_afi | cd_afi_doc | 6.000.000 | Seleccionar documento | *

[SubList] a,?R | _documentos
{slGroupLabels} slSql|slAlign|slTypeData |slColsWidth|slFormat|slMenu       |slTH
     ''              |   C   |           |   3710    |  AMB() | IMG         |Alta documento
     a.fichero       |   I   |           |    200    |        |_fichero     |FICHERO
     a.nota          |   I   |           |    400    |        |_nota        |DESCRIPCION
     d.nm_tipo_doc   |   I   |           |     12    |        |*_cd_tipo_doc|TIPO
     a.cdi           |   I   |           |     70    |        |_cdi         |CDI

{slSql} select # from afi_doc a 
        left join tipo_doc d on a.cd_tipo_doc=d.cd_tipo_doc 
        where a.cd_persona='{cd_persona}' | cd_afi_doc | fichero
{slMenu} a,mR | Alta:i, Modificar:u, Borrar:d | # | | FormOnLine | Modificar documento|Borrar documento
{slWin} ,4
```

## Funciones PHP de Apoyo

### Función AMB para Botones
```php
[PHPIni] cR,bR
function AMB(){}

[PHPIni] a,mR
function AMB(){
    echo '<img src="..." onclick="accion_modificar(...)">';
    echo '<img src="..." onclick="accion_borrar(...)">';
    return "[u][d]";
}
```

### Función de Formato Personalizada
```php
[PHPIni] a,?R
function TipoInner($v){
    global $row;
    $Tipo = array( 
        'T'=>'Teléfono', 
        'M'=>'Móvil', 
        'F'=>'Fax' 
    );
    return $Tipo[$v];
}
```

## Validaciones JavaScript

### Validación en SubLista
```javascript
{slJSCheck}
if( slMODE=='I' ){
    if( document.all.cod_sup.value!='' ){
        document.all._cod_sup.value = document.all.cod_sup.value;
    }else{
        top.eAlert( 'MENSAJE', 'Necesita introducir el dato "Código"', 'A', 'W' );
        return false;
    }
}
```

### Recálculo Automático
```javascript
{slJSCheck}
for( var n=1; n<slROWS.length; n++ ){
    if( eTrim(slROWS[n].cells[3].innerText)!='' ) 
        slROWS[n].cells[2].innerText = n;
}
ePF('suplidos',total);
return;
```

## Notas Importantes

1. **Orden de Campos**: Mantener consistencia entre la SubFicha y SubLista
2. **Campos WHERE**: No incluir en la definición de campos
3. **Alias**: Requieren configuración especial para ser recogidos
4. **FormStatic vs FormOnLine**: Elegir según las necesidades de interfaz
5. **Gestión de Archivos**: Usar `[UploadFile]` para manejo de documentos
6. **Validaciones**: Implementar tanto en cliente (JS) como servidor (PHP)

## Tipos de Alineación

| Código | Descripción |
|--------|-------------|
| **I** | Izquierda |
| **D** | Derecha |
| **C** | Centro |
| **H** | Oculto |
| **CH** | Centro con cabecera |
| **L** | Left (izquierda) |
| **R** | Right (derecha) |

## Modos de Acceso

| Código | Descripción |
|--------|-------------|
| **a** | Alta |
| **m** | Modificación |
| **c** | Consulta |
| **b** | Baja |
| **R** | Solo lectura |
| **?** | Condicional |