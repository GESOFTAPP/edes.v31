# Multiples solapas
## multitab_organizacion.gdf
```php
/* 
 Se define la iSublist en "misNotas.edf" y se gestiona desde "per/notas.edf" 
 la ficha principal debe tener extension (.gdf), grupo de fichas, y los tabs deben tener extension .edf 
*/

[Tab] abcm | Básicos  	| multitab_organizacion.edf
[Tab] abcm  | Representante	| multitab_representante.edf

[DBTable]  ges_organizacion
[DBIndex]  id_organizacion; nm_ges_organizacion || true | | | | oracle 
[DBOrder]  nm_ges_organizacion
[DBSerial] id_organizacion
[DBLimit]  10000,100
[DBIni] * 
	qQuery('alter session set nls_sort=binary_ai');
	qQuery('alter session set nls_comp=linguistic');

[JSIni] ?,a,mR
_WithAccents['nm_ges_organizacion'] = true;

[FixZone] * | 1
[NoEditFilled] * | Session

[PHPStart] l,?R
	if(!isset($_POST['_id_encuadramiento']))$_POST['_id_encuadramiento']='';
	if($_POST['_id_encuadramiento']!=''){
		$_DBADDFILTER = "#.id_dependencia in (select id_dependencia from ges_dependencia where id_encuadramiento='{$_POST['_id_encuadramiento']}')";
	}

[PHPStart] A,M
if( $_POST['cd_auto']=='' ) $_POST['cd_auto'] = '00';
if( $_POST['cd_prov']=='' ) $_POST['cd_prov'] = '00';


[PHPIni] *
global $_User;
if( $_User<>881 && qCount("ges_admin","cd_gs_user='{$_User}'")==0 ){
	eMessage('NO TIENE PERMISOS SUFICIENTES','HS');
}	


.[Debug] * | saveSQLH
[PHPIni] cR,bR
	function AMB(){
		echo '<IMG SRC="g/l_op_view.gif" title="Consultar" onclick=eSLAction(null,"v")>';
	}
[PHPIni] a,mR
	function AMB(){
		echo '<IMG SRC="g/l_op_delete.gif" title="Borrar" onclick=eSLAction(null,"d")>';
		echo '<IMG SRC="g/l_op_view.gif" title="Consultar" onclick=eSLAction(null,"v")>';
		echo '<IMG SRC="g/l_op_update.gif" title="Modificar" onclick=eSLAction(null,"u")>';
	}

[JSIni] *	
	function _cargaDni(){
		if(eGF('_dni')!=''){
			ePadLeft(eGO('_dni'),8);
			eCallSrv( window, 'per/carga_persona.php&dni=' + eGF('_dni'));
		}else{
			ePF('_id_persona,_nombre,_e_mail,_e_mail_trab,_sexo,_fnacim','',false);
		}
	}
	function uModPersona(){
		if( eGF('_id_persona')=='' ){
			top.eInfo(window,'Falta definir la Persona');
		}else{
			top.eSWOpen( window, "edes.php?FmR:per/ges_datos_persona.edf&_SEEK&_ModDatos=1&id_persona="+eGF('_id_persona') );
		}
	}

	
[PHPEnd] ?,a,mR
	//"select id_encuadramiento from ges_dependencia where id_dependencia in (select id_dependencia from ges_admin where cd_gs_user='{$_User}')"
	qQuery("select a.id_encuadramiento,a.id_dependencia from ges_dependencia a, ges_admin b where a.id_dependencia=b.id_dependencia and b.cd_gs_user='{$_User}'",$p);
	$row = sql_Array($p);
	if($row['id_dependencia']!=''){
		echo <<<EOD
				<script>
					ePF('_id_encuadramiento',"{$row['id_encuadramiento']}",1);
					ePF('id_dependencia',"{$row['id_dependencia']}",1);
					eEF('_id_encuadramiento,id_dependencia',0);
				</script>
EOD;
	}


[DBIni] B
sql_Query("select count(*) n from ges_cargo where id_organizacion=".$id_organizacion);
$row=sql_Fila();
$n=$row[0]*1;
if ($n>0){
	eMessage("ESE ORGANO NO SE PUEDE BORRAR AL ESTAR RELACIONADO CON {$n} CARGO".(($n>1)?"S":""),"HSE");
}		
```

## multitab_organizacion.edf
```php
[Title] = organizacion 

[DBTable]  ges_organizacion
[DBIndex]  id_organizacion
[DBOrder]  nm_ges_organizacion
[DBSerial] id_organizacion


[PHPStart] l,?R
	if(!isset($_POST['_id_encuadramiento']))$_POST['_id_encuadramiento']='';
	if($_POST['_id_encuadramiento']!=''){
		$_DBADDFILTER = "#.id_dependencia in (select id_dependencia from ges_dependencia where id_encuadramiento='{$_POST['_id_encuadramiento']}')";
	}

[PDFCol] 0,150,30,30,30,30
[PDFVar] PDF_AltoLetra = 5.0 
[PDFSaveVar] _TITLE
[PDFVar] PDF_Grid = true

[NoEditFilled] * | session

[AddOption] * | cd_auto | 00,TERRITORIAL
[AddOption] * | cd_prov | 00,AUTONOMICO


[SlideCol]

[ColsWidth] ,600

[EditList] cd_organizacion,cd_ambito,tf_retribucion | | | | | | oracle
[AddOption]   ?    | cd_organizacion | ,; <=,SIN DATOS; F,FUNDACIONES; O,ONG; P,PRIVADO; U,PÚBLICO	
[AddOption] a,?R,l | cd_organizacion | ,; F,FUNDACIONES; O,ONG; P,PRIVADO; U,PÚBLICO
[AddOption]   ?    | cd_ambito    | ,; <=,SIN DATOS; L,LOCAL; M,MUNICIPAL;C,COMARCAL;P,PROVINCIAL;A,AUTONOMÍA; S,ESTATAL; E,EUROPEO; I,INTERNACIONAL
[AddOption] a,?R,l | cd_ambito    | ,; L,LOCAL; M,MUNICIPAL;C,COMARCAL;P,PROVINCIAL;A,AUTONOMÍA; S,ESTATAL; E,EUROPEO; I,INTERNACIONAL
[ShowFields] ?R | _id_encuadramiento | select id_encuadramiento from ges_dependencia where id_dependencia='{$_vF['id_dependencia']}'
[AddOption] * 	   | tf_retribucion | ,;S,SI;R,SI,AL REPRESENTANTE;E,SI,A LA ESTRUCTURA RESPONSABLE;N,NO
#!(l)[RelationFields]  _id_encuadramiento,id_dependencia


[Format]
if( substr($_vF[1],-1)=='?' ) $_CellsStyle[1] = 'color:red';


[Fields] l
                               | id_organizacion       | X | T  | 7        |                  | * |  |   | 
    Nombre                     | nm_ges_organizacion   | D | T  | 400      | 350              | A |  | # | 
    Estructura        | id_dependencia     | X | Ss | 300      | nm_ges_organizacion | A |  |   | 
    Forma·jurídica             | cd_organizacion       | D | SV | 15       | nm_ges_organizacion | A |  |   | 
    Ámbito·territorial         | cd_ambito          | D | SV | 15       | nm_ges_organizacion | A |  |   | 
    Adscripción·administrativa | adscrip_admin      | # | A  | 500,80,2 | nm_ges_organizacion | A |  |   | 
.  Participación·retribuida    | tf_retribucion     | D | SV | 1        | nm_ges_organizacion | A |  |   | 

[Fields] else
                               | id_organizacion                                                                        | X | T  | 7        |                  | *  |        |   | 
    Nombre                     | nm_ges_organizacion                                                                    | D | T  | 400      | 350              | QM |        | # | 
.    Órgano de participación   | id_organo                                                                           | X | S  | 300      | nm_ges_organizacion | QM |        |   | 
    Estructura       | _id_encuadramiento{ges_encuadramiento,id_encuadramiento,nm_ges_encuadramiento}      | X | S  | 300      | nm_ges_organizacion | QM |        |   | 
                               | id_dependencia                                                                      | X | Ss | 300      | nm_ges_organizacion | QM |        |   | 
{Z}
.    -|
    Forma jurídica             | cd_organizacion                                                                        | D | SV | 15       | nm_ges_organizacion | QM |        |   | 
    Ámbito territorial         | cd_ambito                                                                           | D | SV | 15       | nm_ges_organizacion | QM |        |   | 
    Adscripción administrativa | adscrip_admin                                                                       | # | A  | 500,80,2 | nm_ges_organizacion | M  |        |   | 
    Participación retribuida   | tf_retribucion                                                                      | D | SV | 1        | nm_ges_organizacion | QM |        |   | 
    Autonomia                  | cd_auto                                                                             | X | T  | 2,30     | 25,350           | *  | _Auto_ |   | 
    Provincia                  | cd_prov                                                                             | X | T  | 2,30     | 25,350           | *  | _Prov_ |   | 
    

	      

.[JSIni] a,mR
._WithAccents['nm_ges_organizacion'] = 1;

[JSCheck] a,mR
if( eGF('cd_auto')=='' ) ePF('cd_auto','00',0);
if( eGF('cd_prov')=='' ) ePF('cd_prov','00',0);


	
[DBIni] B
sql_Query("select count(*) n from ges_cargo where id_organizacion=".$id_organizacion);
$row=sql_Fila();
$n=$row[0]*1;
if ($n>0){
	eMessage("ESE ORGANO NO SE PUEDE BORRAR","HS");
}		


[PHPIni] l
$_ShowTotalRecords = true;
```

## mumultitab_representante.edf
```php
[Title] =REPRESENTANTE

[DBTable]  ges_organizacion
[DBIndex]  id_organizacion
[DBOrder]  nm_ges_organizacion
[DBSerial] id_organizacion
[AddCode] a,mR  | _dni | A | &nbsp;<img src='g/op_nview.gif' onclick='top.eSWOpen( window, "edes.php?Fc:per/ges_cargo.fdf" );' title='Buscar Persona'> <span style='margin-left:250px'><img src='g/op_nupdate.gif' onclick='uModPersona()' title='Modificar Persona'>&nbsp;<img src='g/op_ninsert.gif' onclick='top.eSWOpen( window, "edes.php?Fa:per/personas.edf" );' title='Dar Alta Persona'></span>
[AddOption] * | _sexo | ,; H,Hombre; M,Mujer
[OnChange] a,mR | _dni | _cargaDni();
[AddOption] * | _tipo_cargo | Asesor,Asesor; Titular,Titular; Suplente,Suplente 
[DelOption] * | _id_organo | 5,6

[Fields] 2
   - | REPRESENTANTE
    Id persona               | _id_persona                                                    | -   | T  | 22       |               | *  |  |   | 
    DNI                      | _dni                                                           | DNI | T  | 8        |               | M  |  | # | 
    Nombre                   | _nombre                                                        | #   | T  | 200      | 380           | -  |  |   | 
 +2 F.Nacimiento             | _fnacim                                                        | F4  | T  | 10       |               | -  |  |   | 	
    Email                    | _e_mail                                                        | X   | T  | 30       | _nombre       | -  |  |   | 
 +2 Fecha nombramiento       | _fecha_nombra                                                  | F4  | T  | 10       |               | MF |  |   | 
    Email trabajo            | _e_mail_trab                                                   | X   | T  | 30       | _nombre       | -  |  |   | 
 +2 Inicio mandato           | _f_inicio_mandato                                              | F4  | T  | 10       |               | MF |  |   | 
    Sexo                     | _sexo                                                          | 0   | SV | 1        | 55            | -  |  |   | 
   ,Titulación               | _cd_titulacion{titulacion,cd_titulacion,nm_titulacion}         | +   | S  | 4        | +_nombre      | -  |  |   | 
 +2 Fin mandato              | _f_fin_mandato                                                 | F4  | T  | 10       |               | MF |  |   | 	     
    Órgano de participación  | _id_organo{ges_organo,id_organo,nm_ges_organo} | X   | S  | 300      | _nombre       | QM |  |   | 
 +2 Modo representación      | _tipo_cargo                                                    | X   | SV | 10       | _fecha_nombra | M  |  |   | 	
    Órgano que designa       | _id_organo{organos,id_organo,nom_organo} nom_organo            | X   | S  | 300      | _nombre       | QM |  |   | 
    Responsabilidad          | _des_cargo                                                     | X   | T  | 150      | _nombre       | ML |  |   | 
    Notas                    | _notas                                                         | #   | A  | 500,80,3 | _nombre       | ML |  |   | 
   - | LISTADO REPRESENTANTES
                             | [__ges_cargo]                                                | o   |    |          |               |    |  |   | 

[SubList] a,mR,bR,cR | __ges_cargo
{slGL} Sql              | Align | ColsWidth | TypeData | Format 	| ColsOp | Fields                | TH
   ''       			  |   L   |   48\25   |          |  AMB() 	|        | IMG                   | <IMG SRC='g/l_op_insert.gif' title='' onclick='eSLAction(null,"i")'>\
	a.id_persona        |   H   |           |    -     |        	|        | _id_persona           | ID PERSONA
	p.dni		      	  |   H   |   50      |          | 			   | 		   |_dni					      |<center>DNI</center>
	p.nombre &#124;&#124; ' ' &#124;&#124; p.apellido1 &#124;&#124; ' ' &#124;&#124; p.apellido2 nombre  |   I  	|   200     |    #       | 			| 		 |_nombre				 |Nombre
	.p.nombre 			  |   I   |   200     |          | 			   | 		   | _nombre				   |<center>Nombre</center>	
	p.fnacim		        |   H   |           |    F4    |        	|        | _fnacim         		| FECHA NACIMIENTO
	p.e_mail		        |   H   |   115     |          | 			   | 		   | _e_mail			 	   | Email
	a.fecha_nombra      |   H   |           |    F4    |        	|        | _fecha_nombra         | FECHA NOMBRA
	p.e_mail_trab	     |   H   |   115     |          | 			   | 		   | _e_mail_trab			   | Email trab.
	a.f_inicio_mandato  |   C   |           |    F4    |        	|        | _f_inicio_mandato     | INICIO MANDATO
	p.sexo			     |   H   |           |    	   |        	|        | _sexo    	 		      | SEXO
	p.cd_titulacion	  |   H   |           |    	   |        	|        | _cd_titulacion 		   | TITULACIÓN
	a.f_fin_mandato     |   C   |           |    F4    |        	|        | _f_fin_mandato        | FIN MANDATO
	a.id_organo         |   H   |        	 |          |        	|        | _id_organo            | ÓRGANO
   o.nm_ges_organo     |   I   | 160       |          |			   | 		   | *_id_organo           | ÓRGANO
	a.id_organo   		  |   H   |        	 |          |        	|        | _id_organo     		   | ÓRGANO DESIGNA
   od.nom_organo	     |   I   | 160       |          |			   | 		   | *_id_organo     		| ÓRGANO<br>QUE DESIGNA
	a.des_cargo         |   H   | 150       |    #     |        	|        | _des_cargo            | CARGO
	a.tipo_cargo        |   I   | 80        |          |        	|        | _tipo_cargo           | MODO<br>REPRE
	a.notas             |   H   |           |    #     |        	|        | _notas                | NOTAS

{slSql} select # from ges_cargo a, personas p, ges_organo o , organos od where a.id_persona=p.id_persona and a.id_organo=o.id_organo(+) and a.id_organo=od.id_organo(+) and a.id_organizacion='{id_organizacion}' order by a.f_fin_mandato desc
{slMenu}  a,mR | Borrar:d, Consultar:v, Insertar:i, Modificar:u | # || FormOnLine | <IMG SRC='g/l_op_delete.gif' title='Borrar' onclick=eSLAction(null,'d')><IMG SRC='g/l_op_view.gif' title='Consultar' onclick=eSLAction(null,'v')><IMG SRC='g/l_op_update.gif' title='Modificar' onclick=eSLAction(null,'u')>
{slMenu} cR,bR |           Consultar:v                          | # || FormOnLine |
{slWin} ,6

```