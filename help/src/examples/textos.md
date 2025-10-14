# Textos comunicación
```php
 [Title]     TEXTOS COMUNICACION

[DBTable]  textos_comunicacion 
[DBIndex]  id_textos_comunicacion
[DBOrder]  tipo
[DBSerial] id_textos_comunicacion 
[DBMemo]   cuerpo

[AddOption] * | cd_idioma | 1,ESPAÑOL; 2,INGLES; 3,FRANCES; 4,ALEMAN
[AddOption] * | tipo |;W,Whatsapp; E,Email; S,Sms
[AddCode] a,mR | cuerpo | A | <img src='g/sop_ayuda.gif' onClick="mostrarCapa(window.event.x,window.event.y)" onmouseover="this.style.cursor='hand';" title='Ayuda'>

[JSIni] *
function calcularLongitudSMS(mensaje){
    var longitud = 0;
    for (var i = 0; i < mensaje.length; i++) {
        var codigoCaracter = mensaje.charCodeAt(i);
        if (codigoCaracter <= 127) {
            longitud++;
        } else {
            longitud += 2;
        }
    }
    return longitud;
}

[PHPIni] A,M
	function enviarEmail($emailTo,$mensaje,$asunto){
		$mailheaders = '';
		$mailheaders  = "MIME-Version: 1.0\r\n";
		$mailheaders .= "Content-type: text/html; charset=iso-8859-1\r\n";
		$mailheaders .= "From: GESTION - Soporte de usuarios <noreply@loquesea.es>\r\n";
		$mailheaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";
		if($emailTo=='') return 1;
		mail($emailTo, $asunto, $mensaje, $mailheaders);
		return 0;
	}		



[Fields] ? 
   Tipo comunicación  | tipo       | X | SV | 1  | 50    | Q |  |  | 
   Idioma             | cd_idioma  | 0 | SV | 4  | 200   | Q |  |  | 
   

[Fields] l 
    Id         | id_textos_comunicacion | + | T  | 9        |  | * |  |  | 
    Asunto     | asunto                 | # | A  | 255,80,3 |  | M |  |  | 	
    Canal      | tipo                   | X | SV | 1        |  | M |  |  | 
    Idioma     | cd_idioma              | 0 | SV | 4        |  | M |  |  | 

[Fields] else
.   Label       | Field                  | TE | TC | Lng         | Px    | Mod | Default | Cnd | Msg Error
    Id          | id_textos_comunicacion | +  | T  | 9           |       | *   |         |     | 
   ,Canal       | tipo                   | X  | SV | 1           | 50    | M   |         | #   | 
    Idioma      | cd_idioma              | 0  | SV | 4           | 200   | M   |         | #   | 
    Asunto      | asunto                 | #  | A  | 255,80,3    | +tipo | M   |         |     | 
    Cuerpo      | cuerpo                 | #  | A  | 5000,150,20 | +tipo | ML  |         |     | 

[JSCheck] a,mR
	if(eGF('tipo')=='S' && calcularLongitudSMS(eGF('cuerpo')) > 160 ){
		ePE( 'cuerpo', 'El mensaje no puede superar los 160 caracteres' );
	}

[JSEnd] a,mR
	function mostrarCapa(x,y){
		var eldiv = document.getElementById("miDiv");
		if (eldiv.style.visibility == "hidden"){
			eldiv.style.left = x - eldiv.width;
			eldiv.style.top = 10;
			eldiv.style.visibility = "visible";
		}
	}


[HTMEnd] a,mR
	<div id='miDiv' width='200' style="position: absolute; top: -100; left: -200; visibility: hidden; border: 1px solid #316500; background: #F7EFAD; z-index: 100; display: block" onmouseleave="this.style.visibility='hidden';">
       <table cellpadding=1 cellspacing=1 border=0 class=contenedor width='200'>
         <tr><td class=titulo><b>AYUDA AL CAMPO TEXTO</b></td></tr>
         <tr><td><br><b><u>CAMPOS VARIABLES</u></b></td></tr>
         <tr><td>
         		  <b>Sustitución simple de campos de la tabla usuarios</b>
         		  <br>
         		  Se sustituye por los nombres de los campos de la tabla usuario las cadenas entre almohadillas (##).<br>
         		  Los nombres de los campos de la tabla usuario se deben preceder de "usu_".<br>
         		  <br>
         		  &nbsp;&nbsp;Ejemplos:<br>
         		  &nbsp;&nbsp;Estimado: #usu_nombre#<br>
         		  <br><br>
         </td></tr>
         <tr><td><br></td></tr>
       </table>
	</div>	

[PHPEnd] A,M
	global $_UserActual;
	if($_sendPrueba){
		$data = qRecord( "select user_name, filtro_org, email from gs_user where cd_gs_user='{$_UserActual}'" );  
		$emailTo = $data['email'];

		$cuerpo = html_entity_decode(ereg_replace( "\n", '<br>', $cuerpo));
		$mensaje  = file_get_contents("/plantillas/plantilla_{$tipo}_{$cd_idioma}.html");
		$mensaje = str_replace("<!--{{FECHA}}-->",date('d-m-Y H:i:s'),$mensaje);
		$mensaje  = str_replace("<!--{{CABECERA}}-->",$asunto, $mensaje);
		$mensaje  = str_replace("<!--{{CUERPO}}-->",$cuerpo, $mensaje);
		$mensaje  = str_replace("#usu_nombre#", $data['user_name'], $mensaje);
		enviarEmail($emailTo,$mensaje,$asunto);
	}
	
[Note]
Aqui van las notas que queramos incluir para este script es como poner todo lo que hay dentro de esta etiqueta entre /* */
```