# AddOptionValue

## Sintaxis
```
[AddOptionValue] Field | ListaFields
```

## Descripción
De los controles tipo select (S) y subselect (Ss) se pueden recuperar más valores de campos de la tabla añadiéndolos como atributos en el "option". Por ejemplo, tienes un select con los tipos de acabado de un objeto y de forma oculta te has traído el valor de incremento para el coste total. En un select se puede visualizar aparte del texto una imagen asociada si el campo a añadir se llama "img_sel".

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Field` | String | Nombre del campo select al que añadir los atributos |
| `ListaFields` | String | Lista de campos separados por comas que se añaden como atributos |

## Funcionalidades especiales

### Imagen en select
- Si el campo se llama `img_sel`, se mostrará una imagen en el desplegable
- Se puede usar un prefijo para generar nombres de imagen dinámicos

## Ejemplos de uso

### Ejemplo 1: Añadir atributos de valor y descuento
```
[AddOptionValue] cd_tipo | valor,descuento
```
Al select `cd_tipo` se le añaden dos atributos a cada `<option>` que son los campos `valor` y `descuento`, pudiendo obtener el valor mediante la función `eGA('NomCampo', 'NomAtributo')`.

### Ejemplo 2: Mostrar imagen en select
```
[AddOptionValue] cd_gs_language | img_sel
```
Mostrará al desplegar el select la imagen indicada en `img_sel`.

### Ejemplo 3: Imagen con prefijo dinámico
```
[AddOptionValue] cd_gs_language | img_sel | lng_
```
Mostrará al desplegar el select la imagen que se llamará con el prefijo `lng_` más el valor del campo `cd_gs_language` más la extensión de la imagen.

### Ejemplo completo del código fuente
Del archivo de ejemplo proporcionado, podemos ver su implementación:

```
[Title]    MANUALES

[DBTable]  manual
[DBIndex]  cd_manual
[DBOrder]  nm_manual
[DBSerial] cd_manual

#(cR) [DBAddFilter] (privado<>'S' or privado is null)

[DB] >/config/mioracle.ini

[AddOption] * | cd_grupomanual | ,;1,ACUERDOS;2,CIRCULARES;3,MANUALES;4,MODELOS;5,AYUDA;6,DOCUMENTACIÓN

[AddCode] a,A,?R,? | cd_aplicacion | I | DynamicSQL=SqlMan

[UploadFile] fichero | //manual | cd_manual | 10000000 | Seleccionar documento | pdf,xls,xlsx | man_
[Format] ,,,,,,,IMG
[AddOptionValue] cd_guia | grupo
[OnChange] * | cd_aplicacion | ocultar()

[PDFVar] PDF_Grid = true
[PDFVar] PDF_AltoLetra=7.0

[Fields] 
    Código           | cd_manual                             | *  | T  | 9        |          | *      |         |   | 
    Fecha·Alta       | fecha                                 | F4 | T  | 10       | 81       | MQF    |         |   | 
    ,Activo          | activo                                | N  | C  | 1        | <nm_guia | MQ     | S       |   | 
    Guía rápida      | cd_guia                               | 0  | S  | 9        | 300      | MQ     |         |   | 
    Aplicacion       | cd_aplicacion{gs_op,cd_gs_op,caption} | 0  | Ss | 9        | +cd_guia | MQ     |         |   | 
    Grupo            | cd_grupomanual                        | X  | SV | 2        | +cd_guia | MQ     |         |   | 
    Manual           | nm_manual                             | X  | T  | 50       | +cd_guia | MQ     |         | # | 
    Descripción      | descripcion                           | #  | A  | 500,80,3 | +cd_guia | MQ     |         | # | 
    Documento        | fichero                               | f  | F  | 60       | +cd_guia | MDUCPL |         | # | 
                     | cd_manual                             | +  | T  | 5        |          | *Q     |         |   | 

[JSEnd] ?
if( _User==1 ) ePF('cd_manual',124);

[JSIni] c,m,b
_Question = false;

[PHPIni] a,A,?R,?
function SqlMan(){
    global $_vF;
    sql_Query( "select grupo from guia where cd_guia='".$_vF['cd_guia']."'");
    $row=sql_Array();
    $valor = $row['grupo'];
    if( $valor!="" ){
        sql_Query( "select cd_gs_op, caption from gs_op where seq>(select seq from gs_op where cd_gs_op='".$valor."') and seq<=(select min(seq) from gs_op where seq>(select seq from gs_op where cd_gs_op='".$valor."') and indent=0) and indent=1 order by seq" );
    }
}

[JSIni] *
function ocultar(){
    if(eGF('cd_aplicacion')=='1531' && eGF('_INPUT_cd_aplicacion')!=''){
         eShow( 'cd_grupomanual', 'L' );
    }else{
        ePF('cd_grupomanual','');
        eHide( 'cd_grupomanual', 'L' );
    }
}

[JSIni] a,A,?R,?
function SqlMan(){
    var Valor = '';
    ePF('cd_aplicacion','');
    var cd_aplicacion = eGA( 'cd_guia', 'grupo' ) ;
    if( eGO('cd_aplicacion').oValue!=undefined ) Valor = eGO('cd_aplicacion').oValue;
    if( cd_aplicacion!='' ){
        return Array( "select cd_gs_op, caption from gs_op where seq>(select seq from gs_op where cd_gs_op="+cd_aplicacion+") and seq<=(select min(seq) from gs_op where seq>(select seq from gs_op where cd_gs_op="+cd_aplicacion+") and indent=0) and indent=1 order by seq", Valor );
    }else{
        eClearSelect('cd_aplicacion',0);
        ePF('cd_aplicacion','',false);
    }
}

[JSCheck] a,mR
if(eGF('_INPUT_cd_aplicacion')=='')ePF('cd_aplicacion','',false);

[Note]
create table guia(
       cd_guia  serial,
       nm_guia  char(50),
       descripcion             char(500),
       fichero                 char(60),
       fecha                   date
);

create table manual(
       cd_manual        serial,
       cd_guia          integer,
       nm_manual        char(50),
       descripcion      char(500),
       fichero          char(60),
       fecha            date
);
```

En este ejemplo, `[AddOptionValue] cd_guia | grupo` añade el campo `grupo` como atributo al select `cd_guia`, permitiendo recuperar este valor mediante JavaScript con `eGA('cd_guia', 'grupo')`.

## Funciones relacionadas

### JavaScript
- `eGA('NomCampo', 'NomAtributo')` - Obtiene el valor del atributo especificado
- `eGF('NomCampo')` - Obtiene el valor del campo
- `ePF('NomCampo', 'Valor')` - Establece el valor del campo

## Casos de uso comunes

1. **Campos de cálculo**: Añadir valores de precio, descuento, porcentajes
2. **Información adicional**: Descripciones, códigos internos, estados
3. **Imágenes**: Iconos o imágenes representativas en los selects
4. **Datos de configuración**: Parámetros adicionales para procesamiento

## Notas importantes

- Solo funciona con controles tipo S (select) y Ss (subselect)
- Los valores se añaden como atributos HTML en las etiquetas `<option>`
- Para imágenes, usar el nombre especial `img_sel`
- Los atributos están disponibles inmediatamente después de la selección
- Se pueden añadir múltiples campos separados por comas