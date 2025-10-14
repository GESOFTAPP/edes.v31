# addCode
```php
[Title]   =DEVOLUCIONES DE CORREO POSTAL

[LoadIni] dirdev/gdev_procesar.php
[LoadProcedure] gest_devol, gestionar_devol

[PHPIni] *
	echo '<style>BODY { font-size:17px;}</style>';
	sql_Query("select numero as num from gdev_tampon cd_gs_user='{$_User}'");
	$row = sql_Array();
	$row['num'] = ($row['num']*1)+1;
	$num = number_format($row['num'],0,',','.');
?>
	<div width='100%' style='position: absolute; top: 20; left: 0;'>
		<table  align=right style='font-size:62px;'>
			<tr>
				<td align=right style='padding-right:30'>
					<b id='miDiv' title='Próximo número de orden'>
						<!--? echo substr($num,0,-1).'<span style="color:red;">'.substr($num,-1).'</span>';?-->
					</b>
				</td>
			</tr>
		</table>
	</div>
<?PHP 
[NoButton] a

[OnChange] a | fecha_franqueo |_validaFecha()
[OnChange] a | referencia     |_validaDatos()

[CC] #nodo | $_Node==700

[Chr] ref | U | 0123456789-/'
[Chr] fe | U | 0123456789-/
[AddCode] a,mR     | _ultima_ref | A | &nbsp;<img id='imp' src='g/l_print.gif' onclick='imprimir();' title='Imprimir última etiqueta' width='26' height='30'>
[AddCode] a,m,b,mR | cd_remesa   | A | <img src='./g/buscar.gif' onClick='FunPadre(this,"B","FRM1;_remera=desc_remesa,cd_remesa=cd_remesa: dirdev/sel_remesa");'>
[AddCode] *        | _remesa     | I | readOnly='yes'


[Fields] 3
#nodo ¿
    Remesa                | _remesa        | #X  | T | 60 | 344    | MQ   |        | # | 
   ,                      | cd_remesa      | 0   | T | 6  |        | *MQL |        |   | 
 +3 Reenvío online        | online         | 0   | C | 1  |        | MQ   |        |   | 
?¿
                          | cd_remesa      | X   | T | 6  | 344    | *    |        |   | 
 +3 <td>Reenvío online    | online         | 0   | C | 1  |        | MQ   |        |   | 
?
    Fecha Franqueo        | fecha_franqueo | fe  | T | 60 | 100    | MQ   |        |   | 
 +2 Ultimo Franqueo       | _ultima_fecha  | F4  | T | 10 | 100    | -    |        |   | 
 +3 Sin Franqueo          | _sin_franqueo  | 0   | C | 1  |        | M    |        |   | 
    Referencia            | referencia     | ref | T | 15 | 100    | MQ   |        |   | 
 +2 Ultima Referencia     | _ultima_ref    | ref | T | 10 | 100    | -    |        |   | 
 +3 Sincronizar cada      | _sincronizar   | +   | T | 3  | 33     | M    | 100    |   | 
    Usuario               | cd_gs_user     | +   | T | 6  |        | *    | _User  |   | 
                          | reenvio        | 0   | T | 1  |        | *    |        |   | 
{H} mensaje

[H] mensaje
	<div id='message' style="font-size:14px;height: 35px;" align=center valign=center  height=100></div>
	<iframe name=PDF id=IPDF src='' width='100%' height='100%' style="display:none;"></iframe>

[PHPIni] a
global $_User;
sql_Query("select circuito_devolucion from gs_user where cd_gs_user = ".$_User);
$row = sql_Fila();
if( $row[0] != "S" ) eMessage('USUARIO NO AUTORIZADO','HS');


[OnLoad] a | eGO("fecha_franqueo").onpaste=null; eGO("fecha_franqueo").onfocusout=null;eGO("referencia").onpaste=null; eGO("referencia").onfocusout=null;

[JSIni] a
var conta_sincro = 0;

[JSEnd] a
function _muestra_numero(){
	eCallSrv(window, 'dirdev/gdev_numeracion.php?remesa=' + eGF('cd_remesa') );
}

var _FFranqueo = document.FRM1.fecha_franqueo;
var _RReferencia = document.FRM1.referencia;
function _validaFecha(){
	_FFranqueo.value  = _FFranqueo.value.replace(/[/]/gi,'-' );

	if(_FFranqueo.value.length<10){
		top.eAlert('MENSAJE','ERROR: Introducir fecha en formato "dd-mm-YYYY"','A','I');
		_FFranqueo.value='';
		return false;
	}

	if(_FFranqueo.value.length>10){
		var fecha = _FFranqueo.value.substr(15,6);
		_FFranqueo.value = fecha.substr(0,2)+'-'+fecha.substr(2,2)+'-20'+ fecha.substr(4,2);
	}
	if(_FFranqueo.value.length==10){
		Validar(_FFranqueo.value);
	}else{
		top.eAlert('MENSAJE','ERROR: Fecha de franqueo no válida','A','I');
		_FFranqueo.value='';
		return false;
	}
	setTimeout("_RReferencia.focus();",1);

}

function Validar(Cadena){
    var Fecha= new String(Cadena)   // Crea un string
    var RealFecha= new Date()   // Para sacar la fecha de hoy
    if(Fecha.indexOf("-") <0){
		top.eAlert('MENSAJE','ERROR: Introducir fecha en formato "dd-mm-YYYY"','A','I');
 		ePF('fecha_franqueo','',false);
 		return false;
    }
    // Cadena Año
    var Ano= new String(Fecha.substring(Fecha.lastIndexOf("-")+1,Fecha.length))
   // Cadena Mes
    var Mes= new String(Fecha.substring(Fecha.indexOf("-")+1,Fecha.lastIndexOf("-")))
    // Cadena Día
    var Dia= new String(Fecha.substring(0,Fecha.indexOf("-")))

    // Valido el año
    if (isNaN(Ano) || Ano.length<4 || parseFloat(Ano)<1900){
        top.eAlert('MENSAJE','ERROR: Año inválido','A','I');
        ePF('fecha_franqueo','',false);
        return false;
    }
    // Valido el Mes
    if (isNaN(Mes) || parseFloat(Mes)<1 || parseFloat(Mes)>12){
        top.eAlert('MENSAJE','ERROR: Mes inválido','A','I');
        ePF('fecha_franqueo','',false);
        return false;
    }
    // Valido el Dia
    if (isNaN(Dia) || parseInt(Dia, 10)<1 || parseInt(Dia, 10)>31){
        top.eAlert('MENSAJE','ERROR: Día inválido','A','I');        
        ePF('fecha_franqueo','',false);
        return false;
    }
    if ( Mes==4 || Mes==6 || Mes==9 || Mes==11 || Mes==2 ) {
        if ( Mes==2 && Dia > 28 || Dia>30 ){
        		top.eAlert('MENSAJE','ERROR: Día inválido','A','I');                    
        		ePF('fecha_franqueo','',false);            
            return false;
        }
    }
  return true;
}

function _validaDatos(){
	var online ='';

 	ePF('referencia',eGF('referencia').replace("'","-"),false);	
  	ePF('referencia',eGF('referencia').replace("/","-"),false);	
	
	if(eGF('_sin_franqueo')==''){
		if(eGF('fecha_franqueo') =='' ){
        	top.eAlert('MENSAJE','La "FECHA DE FRANQUEO" es un campo obligatorio','A','I');                    			
         ePF('referencia','',false);
			eFocus('fecha_franqueo');
		}
	}
	if(eGF('online')=='S') online=1;
	if( eGF('referencia')!='' ){
		document.all['message'].innerHTML ='';
		eCallSrv(window, 'dirdev/gdev_procesar.php?referencia=' + eGF('referencia') + '&fecha_franqueo=' + eGF('fecha_franqueo') + '&remesa=' + eGF('cd_remesa')+  '&usuario=' + eGF('cd_gs_user')+ '&online=' + online );
	}
}

function imprimir(){
	if(eGF('_ultima_ref')!=''){
		if(eGF('reenvio')=='5'){
			window.PDF.location.replace('edes.php?D:' + '/_tmp/pdf/eti_dev' + _User + '.pdf' + '&FILE=ETIQUETAS');
		}else{
        	top.eAlert('MENSAJE','La devolución no tiene reenvío','A','I');                    						
         ePF('referencia','',false);			
			eFocus('referencia');
		}
	}
}
```