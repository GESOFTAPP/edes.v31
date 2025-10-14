# Template

## SINTAXIS

```
[Template] Modo | NombreScript
```

## DESCRIPCIÓN

Toma un fichero en HTML o PHP que genera un listado y el motor incrusta las filas automáticamente. La zona a repetir por cada fila se delimita mediante comentarios HTML específicos.

**Delimitadores de zona repetitiva:**
- **Inicio:** `<!--{TR}-->`
- **Final:** `<!--{/TR}-->`

El motor procesa el template y replica la sección delimitada para cada registro de la base de datos, sustituyendo los marcadores de posición por los valores correspondientes.

## PARÁMETROS

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| **Modo** | String | Modo de ejecución del template. Valores típicos: `l` (listado), `?R` (condicional) | Sí |
| **NombreScript** | String | Nombre del archivo template (HTML/PHP) a utilizar | Sí |

## EJEMPLOS

### Ejemplo 1: Sistema completo de novedades

**Archivo EDF (novedades.edf):**
```
[Title]=ULTIMAS NOVEDADES Y AVISOS
#(a) [Title] NOVEDADES Y AVISOS
[DBTable]gs_novedad
[DBIndex]codigo
[DBOrder]cdi DESC
[DBSerial]codigo
[DBMemo]resumen
[DBLimit]1000,20
[OnLoad]l|if( top.eIsWindow(window) ){ top.eSWResize(window); }
[AutoMenu]l|1
[Cursor]
[ColsWidth]60,160,550
[PDFCol]19, 50, 95
[PDFWrap]5
[PDFVar]PDF_Grid = true
¿ $GLOBALS['_PSOURCE']=='WDESKTOP' ? [TEMPLATE] l | novedades.html

[AddButton] ?R | <IMG src='g/l_d_pdf.gif'> Imprimir | | imprimirNovedades() 

[JSIni] ?R
    function imprimirNovedades(){
        top.eCallSrvPost( 'edes.php?E:novedades_pdf.php', {
            'codigo'    :eGF('codigo'),
            'cdi'       :eGF('cdi'),
            'titulo'    :eGF('titulo'),
            'resumen'   :eGF('resumen')
        }, window );
    }

[Fields]
    Instante     | cdi        | CDI | T | 19           |         | AQ | #sy2s#  |   | 
    Título       | titulo     | X   | T | 90           | 600     | MQ |         | # | 
    Descripción  | resumen    | #   | H | 1000000,90,8 | 600,350 | MQ |         | # | 
                 | codigo     | 0   | T | 7            |         | *  |         |   | 
                 | cd_gs_user | 0   | T | 7            |         | *  | _User   |   | 
                 | dt_alta    | 0   | T | 7            |         | *  | #today# |   | 

[JSEnd]l|WDESKTOP
    function uFin(){
        top.eToDoRun();
    }
    function uLeido(){
        uLEIDO.style.display='none';
        top.eCallSrv( window, 'edes.php?E:$a/d/gs_novedades.gs' );
    }
    var usObj = document.getElementById('BROWSE');
    if( usObj.rows.length == 1 ){
        top.eShowHelp('@No hay novedades este mes@',3);
        document.all.UtilListICO.style.display = 'none';
    }else{
        if( !top._SinNovedad ){
            document.write('<br><center><INPUT id="uLEIDO" class="Boton" TYPE="button" VALUE="@LEIDO@" onclick="uLeido()" style="cursor:hand"></center>');
        }
        document.body.style.marginTop = 15;
        if( top.DA['MainMenu']!=undefined ){
            window.frameElement.eExit = uFin;
            top.DA['MainMenu'].style.zIndex = top.DA['swM_'+window.frameElement.id.substring(4)].style.zIndex - 1;
        }
    }
```

**Archivo template (novedades.html):**
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
    <TITLE>Novedades</TITLE>
    <LINK REL='stylesheet' HREF='css/new.css' TYPE='text/css'>
    <LINK REL='off' id=CssOffWindow HREF='css/new_off.css' TYPE='text/css'>
    <SCRIPT LANGUAGE="JavaScript" SRC='edes.php?R:$edes.js'></SCRIPT>
    <SCRIPT>
        function eClearEvent(){}
        function uLeido(){
            uLEIDO.style.display = 'none';
            top.eCallSrv( window, 'edes.php?E:$a/d/gs_novedades.gs' );
        }
        function uHRef(){
            var Obj = event.srcElement;
            if( Obj.tagName=='A' ){
                try{
                    window.open( Obj.href, "", 'top=0,left=0,width='+top.document.body.clientWidth+',height='+top.document.body.clientHeight+',resizable=1' );
                }catch(e){}
                try{
                    event.cancelBubble = true;
                    event.returnValue = false;
                }catch(e){}
                return false;
            }
        }
    </SCRIPT>
</HEAD>
<BODY scroll=yes>
    <center>
        <TABLE border=0 cellspacing=1 cellpadding=2 width=600 onclick=uHRef()>
            <COL width=120><COL width=480>
            
            <!--{TR}-->
            <TR>
                <TH id=CDI>{0}</TH>
                <TH align=left style="padding-left:10">{1}</TH>
            </TR>
            <TR>
                <TD colspan=2>{2}</TD>
            </TR>
            <!--{/TR}-->
            
        </TABLE>
    </center>

    <SCRIPT LANGUAGE="JavaScript">
        function uFin(){
            top.eToDoRun();
        }
        
        if( !top._SinNovedad ){
            document.write('<center><INPUT id="uLEIDO" class="Boton" TYPE="button" VALUE="LEIDO" onclick="uLeido()"></center>');
        }
        
        if( top.eIsWindow(window) ){
            setTimeout(function(){
                top.eSWView(window);
                top.eSWIResize(window,document.body.scrollWidth,document.body.scrollHeight);
                window.frameElement.eExit = uFin;
            },1000);
        }
    </SCRIPT>
</BODY>
</HTML>
```

**Correspondencia de campos:**
- `{0}` → Campo `cdi` (Instante)
- `{1}` → Campo `titulo` (Título)
- `{2}` → Campo `resumen` (Descripción)

### Ejemplo 2: Template condicional

```
¿ $GLOBALS['_PSOURCE']=='WDESKTOP' ? [Template] l | novedades.html
```

Este ejemplo muestra cómo aplicar el template solo cuando se cumple una condición específica (cuando la fuente es 'WDESKTOP').

## NOTAS ADICIONALES

- Los marcadores `{0}`, `{1}`, `{2}`, etc. corresponden a los campos definidos en la sección `[Fields]`
- El template puede incluir JavaScript y CSS para funcionalidad adicional
- Se pueden usar funciones PHP dentro del template para lógica más compleja
- El motor automáticamente maneja la iteración sobre todos los registros de la consulta