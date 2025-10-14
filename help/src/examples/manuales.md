# Manuales
```php
[Title]    MANUALES

[DBTable]  manual
[DBIndex]  cd_manual
[DBOrder]  nm_manual
[DBSerial] cd_manual

#(cR) [DBAddFilter] (privado<>'S' or privado is null)			// Solo en cnsultas no se ven los manuales privados

[DB] >/config/mioracle.ini //Si queremos conectar a una BBDD diferente a la que se conecta por defecto, todo lo que hace este script lo hara sobre "mioracle.ini" 

[AddOption] * | cd_grupomanual | ,;1,ACUERDOS;2,CIRCULARES;3,MANUALES;4,MODELOS;5,AYUDA;6,DOCUMENTACIÓN

#!(l)[RelationFields] cd_guia, cd_aplicacion
#(l)[RelationFields] cd_guia, cd_aplicacion{gs_op,cd_gs_op,caption}

[AddCode] a,A,?R,? | cd_aplicacion | I | DynamicSQL=SqlMan

[UploadFile] fichero | //manual | cd_manual | 10000000 | Seleccionar documento | pdf,xls,xlsx | man_
[Format] ,,,,,,,IMG
[AddOptionValue] cd_guia | grupo
[OnChange] * | cd_aplicacion | ocultar()

[PDFVar] PDF_Grid = true
[PDFVar] PDF_AltoLetra=7.0
[Fields] 
    Código           | cd_manual                             | *  | T  | 9        |          | *      |         |   | 
#!(c,m,b) Fecha·Alta | fecha                                 | F4 | T  | 10       | 81       | MQF    | #today# | # | 
#(c,m,b) Fecha·Alta  | fecha                                 | F4 | T  | 10       | 81       | MQF    |         |   | 
#!(c) ,Privado       | privado                               | X  | C  | 1        |          | MQL    |         |   | 
   ,Activo           | activo                                | N  | C  | 1        | <nm_guia | MQ     | S       |   | 	
    Guía rápida      | cd_guia                               | 0  | S  | 9        | 300      | MQ     |         |   | 
    Aplicacion       | cd_aplicacion{gs_op,cd_gs_op,caption} | 0  | Ss | 9        | +cd_guia | MQ     |         |   | 
    Grupo            | cd_grupomanual                        | X  | SV | 2        | +cd_guia | MQ     |         |   | 	
    Manual           | nm_manual                             | X  | T  | 50       | +cd_guia | MQ     |         | # | 
    Descripción      | descripcion                           | #  | A  | 500,80,3 | +cd_guia | MQ     |         | # | 
    Documento        | fichero                               | f  | F  | 60       | +cd_guia | MDUCPL |         | # | 	
#(l) Ver             | fichero                               | f  | F  | 60       | +nm_guia | MDUCP  |         |   | 	
                     | cd_manual                             | +  | T  | 5        |             | *Q     |         |   | 
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
