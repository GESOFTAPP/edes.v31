# DBTable
## Ejemplo 1
```php
[DBTable]  pagos
[DBIndex]  cd_pagos
[DBSerial] cd_pagos
[DBOrder]  organizacion1, organizacion2

[Fields]
                                                                  | cd_pagos                          	| +    | T  | 2        |     | *Q* |   |                                    
    Organizacion pagadora                                         | organizacion1{org,cd_org,nm_org}    | 0    | S  | 8        | 340 | MQ  |   |     
    Organizacion recepcionaria                                    | organizacion2{org,cd_org,nm_org}    | 0    | S  | 8        | 340 | MQ  |   | 



//Despues de leer el registro genera deo variablkes javascrip para que puedan ser usadas en la ficha en modo modificación (mR)
[DBRead] mR
	echo <<<EOD
		<SCRIPT LANGUAGE="JavaScript">
			var _Organizacion1 = "{$_vF['organizacion1']}";
			var _Organizacion2 = "{$_vF['organizacion2']}";
		</SCRIPT>
EOD;
```


## Ejemplo 2
```php
[DBTable]  cnt_roles
[DBIndex]  cd_cnt_roles
[DBOrder]  cd_cnt_roles
[DBSerial] cd_cnt_roles

[Fields] else
    			    | cd_cnt_roles	                                         	| -  | T  | 9   |     | *   |  | # | 
    Usuario         | cd_gs_user{gs_user,cd_gs_user,user_name,' ',user_surname}	| -  | S  | 9   | 250 | -MQ |  |   | 
    Fecha           | fecha                                                		| F4 | T  | 10  |     | -M  |  |   | 
   ,Hora            | hora                                                   	| H  | T  | 8   | 60  | M   |  |   | 
    Opcion menú     | opcion_menu                                             	| #  | SV | 4   | 450 | M   |  |   | 
    Observaciones   | observa                                                	| #  | T  | 100 |     | ML  |  |   | 


[PHPIni] *
	// Llenar el array $aopcion_menu con los opciones de menú que hay en tbl_menu
	$aopcion_menu=array();
	sql_Query("select * from tbl_menu where cd_rol='1' and activo='S' order by fecha");
	while($r=sql_Array()){
		$aopcion_menu[$r['opcion_menu']] = $r['opcion_menu'];
	}

[DBRead] mR,bR
	// Cuando lee de la base de datos almacenar el código de la  opcion_menu para utilizarlo en el PHPEnd mR
	global $_vF;
	$_opcion_menu = $_vF['opcion_menu'];


	[PHPEnd] a,mR,bR
	// Llenar el select de opciones de menu y poner la opcion_menu que corresponde
	if( !isset($_opcion_menu) ) $_opcion_menu='';
	echo "<script>var aopcion_menu='".implode('|',$aopcion_menu)."';";
	?>
	aopcion_menu=aopcion_menu.split('|');
	for(var x=0; x<aopcion_menu.length;x++){
		var c=aopcion_menu[x].split('@');
		eAddOption('opcion_menu',Array(Array(c[0],c[1])));
	}
	<?PHP 
	echo "ePF('opcion_menu','{$_opcion_menu}');";
	echo "</script>";
```