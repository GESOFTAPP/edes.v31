# DBSelRec
```php
[Title]  SELECCIONA USUARIO

[DBTable]  gs_user
[DBOrder]  user_name, user_surname
[DBLimit]  100

[WinTitle] VENTANA DE SELECCIÓN
[WinForm]  600,300
[WinList]  600,300

[NoSort]

[Fields]
  DNI / NIF		| dni					| DNI | T |  8|   | MQ | |#|
  Nombre		| user_name				| X   | T | 20|   | MQ | |#|
, Apellidos		| user_surname			| X   | T | 30|   | MQ | |#|
  Teléfonos		| phone			| 0   | T | 10|   | M  | | |
  Local			| cd_gs_node			| X   | S |  7|270| MQ | |#|


/*
1.- Si llamamos a la ventana de seleccion desde varios/fichero.edf se aplica: 
			- si se selecciona mediante click de un listado [JSSelRow] l | varios/fichero.edf 
			- si solo encuentra un registro   [DBSelRec] * | varios/fichero.edf
2.- Si no llamamos deasde desde varios/fichero.edf se aplica:
			- si se selecciona mediante click de un listado  [JSSelRow] l | else 
			- si solo encuentra un registro   [DBSelRec] * | else
*/


[JSSelRow] l | varios/fichero.edf
	ePPF('dni',_Columna[0],0);

[JSSelRow] l | else
	var uO = _WOPENER.document.FRM1;
	uO.usuario.value = _Columna[1]+' '+_Columna[2];
	uO.telefono.value = _Columna[3];
	uO.nodo.value = _Columna[4];


//si llamamos a la ventana de seleccion desde varios/fichero.edf se aplica esta
[DBSelRec] * | varios/fichero.edf
	function selUser(){
		global $_Fila;
		echo "ePPF('dni' ,'{$_Fila['dni']}');";
	}

[DBSelRec] * | else
	function selUser(){
		global $_Fila;
		echo 'var uO = _WOPENER.document.FRM1;';
		echo 'uO.usuario.value = "'.trim($_Fila['nombre']).' '.trim($_Fila['apellidos']).'";';
		echo "uO.telefono.value = '{$_Fila['telefono']}';";
		qQuery( 'select nm_gs_node from gs_node where cd_gs_node='{$_Fila['cd_gs_node']}'",  $p1 );
		$dato = qArray( $p1 );
		echo "uO.nodo.value = '$dato['nm_gs_node']';";
	}
```