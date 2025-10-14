# Permisos
## permisos.edf
```php
[Title]    =Asignar permisos 
[DBTable]  usuarios 
[DBIndex]  id


[LoadIni] midir/carga_empresas.php

[OnLoad] ? | cargaRol();
[OnChange] ? | cd_rol | _cargaOpcion();

[FormButtons]
[JSIni] ?
	function cargaRol(){
		eCallSrv(window, 'midir/carga_rol.php');
	}

	function _cargaOpcion(){
		_eCallSrv(window, 'midir/carga_opcion.php?'+eGF('cd_rol'));
	}


[Fields] l
    DNI       | dni           | X | T | 8  |     | - |  |  | 
    Nombre    | nombre        | X | T | 20 |     | - |  |  | 
    Apellidos | apellidos     | X | T | 30 |     | - |  |  | 
    Email     | id            | X | T | 57 | 200 | - |  |  | 

	
[Fields] ?
    DNI       | dni                | 0 | T  | 8  |  | AQcp |   |  | 
    Apellidos | apellidos          | X | T  | 30 |  | QL   |   |  | 
    Nombre    | nombre             | X | T  | 20 |  | QL   |   |  | 
    E-Mail    | id                 | @ | T  | 65 |  | QLE  |   |  | 

[Fields] else
	DNI        | dni                | DNI | T | 8  |  | M |  | # | 
	Nombre     | nombre             | X   | T | 20 |  | M |  | # | 
	Apellidos  | apellidos          | X   | T | 60 |  | M |  | # | 
	Login      | id           	    | @   | T | 65 |  | M |  | # |
	-          | Permisos Asignados |     |   |    |  |   |  |   | 
	Rol        | cd_rol  			| # | SV | 60  |  | M |  | # | 
    Opcion     | cd_opcion			| # | SV | 60  |  | M |  | # | 

```    
## midir/carga_rol.php 
```php
//El fichero midir/carga_rol.php carga los roles cuando se ejecuta [OnLoad]
<?php
	eInclude( $_Sql ); 
?>
<SCRIPT LANGUAGE="JavaScript" SRC="edes.php?R:$edes.js"></SCRIPT>
<SCRIPT>
	<?php 
		echo 'var Obj = _WOPENER;';
		echo "Obj.eClearSelect( 'cd_rol' );";
		qQuery("SELECT cd_rol, nm_rol FROM roles");
		while($row=qRow()){
			echo "Obj.eAddOption( 'cd_rol', Array( Array( '" . $row[0]. "','" . $row[1]. "') )  );";
		}
	?>
</SCRIPT>
``` 
## midir/carga_opcion.php 
```php
//El fichero midir/carga_opcion.php carga las opciones cuando se ejecuta [OnChange] del campo cd_rol del formulario
<?php
	eInclude( $_Sql ); 
?>
<SCRIPT LANGUAGE="JavaScript" SRC="edes.php?R:$edes.js"></SCRIPT>
<SCRIPT>
	<?php 
		$tmp = $argv[0];
		list($cd_rol) = explode( ',', $tmp );	
		echo 'var Obj = _WOPENER;';
		echo "Obj.eClearSelect( 'cd_opcion' );";
		qQuery("SELECT cd_opcion, nm_opcion FROM opciones where cd_rol='{$cd_rol}'");
		while($row=qArray()){
			echo "Obj.eAddOption( 'cd_rol', Array( Array( '" . $row['cd_opcion']. "','" . $row['nm_opcion']. "') )  );";
		}
	?>
</SCRIPT>
``` 