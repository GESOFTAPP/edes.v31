# DBGatewayOne

## Ejemplo 1
```php
[DBGatewayOne] ?R | uSelUser()
[PHPIni] ?R 
//funcion redirecciona si encuenta un solo registro.
function uSelUser(){
	global $_PSOURCE, $_Fila;
	echo <<<EOD
		<SCRIPT LANGUAGE="JavaScript" SRC="edes.php?R:$edes.js"></SCRIPT>
		<SCRIPT> location='edes.php?GmR:varios/usuario.gdf&_origen=1&_SEEK&cd_gs_user={$_Fila['cd_gs_user']}'; </SCRIPT>
EOD;
}
```

## Ejemplo 2
```php
[Fields]
    Usuario   | cd_gs_user| 0   | T  | 8  | 	  | QLcp |        |  | 
    Apellidos | apel      | N   | T  | 30 | 255   | MQ   |        |  | 
    Nombre    | nombre    | N   | T  | 20 | 255   | MQ   |        |  | 




[DBTable] persona
[DBIndex] cd_persona
[DBGatewayOne] cR | file/ficha_pdf.php
[Fields]
    DNI 	  | dni       | DNI | T  | 8   |       | MQcp |        |  | 
   ,Persona   | cd_persona  | 0   | T  | 8 |  	   | QLcp |        |  | 
    Apellidos | apel      | N   | T  | 30  | 255   | MQ   |        |  | 
    Nombre    | nombre    | N   | T  | 20  | 255   | MQ   |        |  | 

// fichero ficha_pdf.php para sacar un pdf con los datos encontrados
<?php
	include_once( eScript('/lib/pdf/PdfCabeceras.class.php') );
	$nombre = "../_tmp/pdf/proceso_{$_vF['dni']}.pdf";	// Fichero PDF.
	if( file_exists($nombre) ) unlink($nombre);
```