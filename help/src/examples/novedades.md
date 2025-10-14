# Novedades
## novedades.edf
```php
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

[AddButton] ?R | <IMG src='g/l_d_pdf.gif'> Imprimir	|  | imprimirNovedades() 
[JSIni] ?R
	function imprimirNovedades(){
		top.eCallSrvPost( 'edes.php?E:novedades_pdf.php', {
			'codigo'	:eGF('codigo'),
			'cdi'		:eGF('cdi'),
			'titulo'	:eGF('titulo'),
			'resumen'	:eGF('resumen')
		}, window );
	}


[Fields]
    Instante	    | cdi        | CDI | T | 19           |         | AQ | #sy2s#  |   | 
    Título    	  | titulo     | X   | T | 90           | 600     | MQ |         | # | 
    Descripción 	| resumen    | #   | H | 1000000,90,8 | 600,350 | MQ |         | # | 
                  | codigo     | 0   | T | 7            |         | *  |         |   | 
                  | cd_gs_user | 0   | T | 7            |         | *  | _User   |   | 
                  | dt_alta    | 0   | T | 7            |         | *  | #today# |   | 
[SetVar]_MaxImageSize = 565,-1
[SetVar]_MaxImageLength = 500000
[PHPForm]a,mR
	$MaxSize = eFileGetVar('New.PageSize');
	if( $MaxSize > 0 ){
	$_Form['resumen'][_SIZE] = $MaxSize.',90,8';
	$GLOBALS['_MAXIMAGELENGTH'] = $MaxSize;
}
[JSEnd]l
	var Color = top.eGetCss( window, '.Celda', Array('BACKGROUND','COLOR') );
	_PapelOnOn = top.eColorTone( Color['BACKGROUND'], 2 );
	_LapizOn = Color['COLOR'];
	setTimeout("Recalcula();",1000);
[PHPIni]a,?R
	eInclude('lib');
	$cPapel = $cLapiz = '';
	echo '<style>';
	$Dim = file( "{$_SESSION['_PathCSS']}/lista.css" );
	for( $n=0; $n<count($Dim); $n++ ){
		$tmp = explode('{',$Dim[$n]);
		if( trim($tmp[0])=='.Celda' ){
			echo '.edOUT{';
			for( $i=$n+1; $i<count($Dim); $i++ ){
				$tmp = explode(';',$Dim[$i]);
				$tmp = explode(':',$tmp[0]);
				if( strToUpper(trim($tmp[0]))=='BACKGROUND' ){
					echo 'BACKGROUND:'.$tmp[1].';';
					$cPapel = trim($tmp[1]);
				}else if( strToUpper(trim($tmp[0]))=='COLOR' ){
					echo 'COLOR:'.$tmp[1].';';
					$cLapiz = trim($tmp[1]);
				}else if( trim($tmp[0])=='}' ){
					break;
				}
			}
			echo '}';
			break;
		}
	}
	$r = new eColor();
	echo '.edOVER{';
	echo 'BACKGROUND:'.$r->Tone($cPapel,2).';';
	echo 'COLOR:'.$cLapiz.';';
	echo '}';
	echo '#edMENUS {';
	echo 'BACKGROUND:'.$r->Tone($cPapel,2).';';
	echo '}';
	echo '</style>';

[PHPIni]l
	$EmptyList = true;

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
		}else{
		}
		document.body.style.marginTop = 15;
		if( top.DA['MainMenu']!=undefined ){
			window.frameElement.eExit = uFin;
			top.DA['MainMenu'].style.zIndex = top.DA['swM_'+window.frameElement.id.substring(4)].style.zIndex - 1;
		}
	}
```      
## novedades.html
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD>
<TITLE> Novedades </TITLE>
<LINK REL='stylesheet' HREF='css/new.css' TYPE='text/css'>
<LINK REL='off' id=CssOffWindow HREF='css/new_off.css' TYPE='text/css'>
<style MEDIA="print">
	BODY {
		margin-top:30;
	}
</style>
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
				try{ event.keyCode = 0; }catch(e){}
				event.cancelBubble = true;
				event.returnValue = false;
			}catch(e){}
			return false;
		}
	}
	var _WinCaption = top.eIsWindow(window);
	if( top.eIsWindow(window) ) top.eSWTools(window,'H','maxi');
</SCRIPT>
</HEAD>
<BODY scroll=yes>
<center>
<TABLE border=0 cellspacing=1 cellpadding=2 width=600 onclick=uHRef()>
<COL width=120><COL width=480>

	<!--{TR}-->
	<TR><TH id=CDI>{0}</TH><TH align=left style="padding-left:10">{1}</TH></TR>
	<TR><TD colspan=2>{2}</TD></TR>
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