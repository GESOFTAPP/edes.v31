# Alumnos
```php
#!(l)[Title] ALUMNOS EN CURSOS
#(l) [Title] =LISTADO DE ALUMNOS EN CURSOS
#(c) [Title] PARTICIPACION EN CURSOS DE FORMACION

[SubTitle]
[MsgTime] 3000,4000

[DBTable]  alumnos
[DBIndex]  cd_alumno;cd_gs_user,cd_curso
[DBOrder]  cd_alumno
[DBSerial] cd_alumno
[DBLimit]  1500

.Formateo del listado
[NoSort]
[RowColor] tipoCurso == 1 | id=P
[Align] ,,,C,C,C,C,,,C
[PDFVar] PDF_AltoLetra = 6.5
[PDFCol],15,40,10,10,5,10,25,25,12,,40
[PDFVar] PDF_Grid = true
#include(*) dni.inc

.Indicamos que campos dependen de otros y añadimos el código necesario a los campos que queramos
[RelationFields] cd_auto,cd_prov,cd_coma
[WhereSelect] * | cd_rama | nm_rama[1,3] != "(F)"

[AddCode] c        | _dni        | A | <img src='./g/buscar.gif' onClick='FunPadre(this,"B","FRM1;_dni=dni, cd_gs_user=cd_gs_user, _nombre=user_name, _apel=user_surname, cd_rama=cd_rama,  cd_auto=cd_auto, cd_prov=cd_prov, cd_coma=cd_coma : sel_usuario")'> //llama en modo "c" subventana que se abre a sel_curso.fdf
[AddCode] a,m,b    | _dni        | A | <img src='./g/buscar.gif' onClick='FunPadre(this,"B","FRM1;_dni=dni, cd_gs_user=cd_gs_user, _nombre=user_name, _apel=user_surname, cd_rama=cd_rama, cd_auto=cd_auto, cd_prov=cd_prov, cd_coma=cd_coma : sel_usuario")'> //llama en los modos "a,m,b " subventana que se abre a sel_usuario.fdf
[AddCode] *        | _dni        | I | readOnly='yes'
[AddCode] a,m,b,mR | cd_curso   | A | <img src='./g/buscar.gif' onClick='FunPadre(this,"B","FRM1;cd_curso=cd_curso,_curso =cd_curso,_titulo = titulo,_fe_desde = fe_desde,_fe_hasta = fe_hasta,_duracion = duracion,_lugar = lugar,_tipo_curso=tipo_curso,_p_libres=p_libres: sel_curso")'>//llama en los modos "a,m,b,mR" subventana que se abre a sel_curso.fdf

[AddCode] *        | cd_curso   | I | readOnly='yes'
[AddCode] a        | _tipo_curso | I | onChange = cambioValor();

[AutoMenu] l | 1
[NoEditFilled] * | session
[AddCode] * | _dni  | I | style='FONT-SIZE: 110%;FONT-WEIGHT: bold; width:65'
[FormAction] c | edes.php?Ll:



[Fields]
.Campos correspondientes a la definicion del alumno
   -                                           | ALUMNO      |     | +  |    |        | Q     |        |   | 
#!(a,l) Nº de Alumno                           | cd_alumno   | +   | T  | 7  |        | *AQL  |        |   | 
#(l) Nº de Alumno                              | cd_alumno   | +   | T  | 7  |        | *     |        |   | 
    DNI o NIE                                  | _dni        | DNI | T  | 8  |        | MQL   |        | # | 
   ,                                           | cd_gs_user  | 0   | T  | 5  |        | -*MQL |        |   | 
#(c) ,<span style='margin-left:178'>NAF</span> | _afiliado   | +   | T  | 8  |        | -MQL  |        |   | 
    Apellidos                                  | _apel       | N   | T  | 30 | 433    | -MQL  |        |   | 
    Nombre                                     | _nombre     | N   | T  | 20 | 433    | -MQL  |        |   | 
#!(c)¿
.Campos correspondientes a la definicion de las características del curso
   -                                           | CURSO       |     | +  |    |        | Q     |        |   | 
.Nº de Curso                                   | cd_curso    | +   | T  | 7  |        | MQL   |        | # | 
    Nº de Curso                                | _curso      | +   | T  | 7  |        | MQL   |        | # | 
   ,                                           | cd_curso    | +   | T  | 7  |        | *MQL  |        |   | 
    Titulo                                     | _titulo     | X   | T  | 60 | 433    | -MQL  |        |   | 
    Fechas: Desde                              | _fe_desde   | F4  | T  | 10 |        | -MQL  |        |   | 
   ,Hasta                                      | _fe_hasta   | F4  | T  | 10 |        | -MQL  |        |   | 
   ,Duración                                   | _duracion   | +   | T  | 3  |        | -MQL  |        |   | 
   ,Plazas libres                              | _p_libres   | +   | T  | 3  |        | -MQL  |        |   | 
    Tipo de curso                              | _tipo_curso | 0   | T  | 2  | 100    | -MQL  |        |   | 
   ,Lugar                                      | _lugar      | 0   | T  | 40 | 277    | -MQL  |        |   | 
?
.Campos para mostrar en el listado
#(l)¿
    TIPO CURSO                                 |             | X   | T  | 2  |        | A     |        |   | 
    TITULO                                     |             | X   | T  | 2  |        | A     |        |   | 
    INICIO                                     |             | X   | T  | 2  |        | A     |        |   | 
    FIN                                        |             | X   | T  | 2  |        | A     |        |   | 
    DIAS                                       |             | X   | T  | 2  |        | A     |        |   | 
    DNI                                        |             | X   | T  | 2  |        | A     |        |   | 
    APELLIDOS                                  |             | X   | T  | 2  |        | A     |        |   | 
    NOMBRE                                     |             | X   | T  | 2  |        | A     |        |   | 
                                               | tipoCurso   | X   | T  | 2  |        | *     |        |   | 
    LUGAR CELEBRACION                          |             | X   | T  | 2  |        | A     |        |   | 
?


[JSIni] a,m,mR,bR,cR
.Función que asigna el valor de la fecha desde a hasta y al contrario.
function cambioValor(){
	if(eGF('_dni')!=''){
//		eGO('_dni').disabled = true;
		eEditField('_dni',false);
	}
	if(eGF('_curso')!=''){
//		eGO('_curso').disabled = true;
		eEditField('_curso',false);
	}
	if(eGF('_tipo_curso')==1 && eGF('_tipo_curso')!=''){ePF('_tipo_curso', 'PROGRAMACION');}
	if(eGF('_tipo_curso')==2 && eGF('_tipo_curso')!=''){ePF('_tipo_curso', 'DISEÑO');}
	if(eGF('_tipo_curso')=='PROGRAMACION' || eGF('_tipo_curso')=='DISEÑO' ){
		window.clearInterval(cambiar);
	}
}


[JSEnd] a,m,mR,bR,cR
cambiar = window.setInterval("cambioValor()", 100);

[JSCheck] a,mR,A,M,m
if(eGF('_p_libres')!='' && eGF('_p_libres')==0){ePE('cd_curso','EL CURSO SELECCIONADO ESTA COMPLETO');}

.Etiquetas para cargar los valores de un usuario y de un curso que están en tablas diferentes
#(m,mR,c,cR,bR)¿
	[DBAddSql] select cd_gs_user as usuario, user_name as _nombre, user_surname as _apel, dni as _dni from gs_user where cd_gs_user='{cd_gs_user}'
	[DBAddSql] select (a.aforo-a.asist) AS _p_libres, a.cd_curso as _curso, a.titulo as _titulo,a.fe_desde as _fe_desde,a.fe_hasta as _fe_hasta,a.duracion  as _duracion, a.tipo_curso as _tipo_curso ,a.lugar as _lugar	from cursos a where cd_curso='{cd_curso}'
?

[DBIni] A
$num = sql_Cuenta( "alumnos", "cd_curso='{$cd_curso}'AND cd_gs_user='{$cd_gs_user}'" );
if($num>0){eMessage('EXISTE UN REGISTRO CON LOS DATOS SELECCIONADOS','HS');}
else{
	sql_Inserta('alumnos',"cd_gs_user,cargo,cd_rama,cd_auto,cd_prov,cd_coma,cd_curso","'{$cd_gs_user}','{$cargo}','{$cd_rama}','{$cd_auto}','{$cd_prov}','{$cd_coma}','{$cd_curso}'");
	$num = sql_Cuenta( "alumnos", "cd_curso='{$cd_curso}'" );
	sql_Modifica('cursos', "asist='$num'", "cd_curso={$cd_curso}" );
	eMessage('GRABADO','HS', '', 'location.href("edes.php?Fa:cur/c_realizados.edf");');
}


[DBIni] M
sql_Modifica('alumnos',"cd_gs_user='{$cd_gs_user}',cargo='{$cargo}',cd_curso='{$cd_curso}'","cd_alumno={$cd_alumno}");
$num=sql_Cuenta( "alumnos", "cd_curso='{$cd_curso}'" );
sql_Modifica('cursos', "asist='{$num}'", "cd_curso={$cd_curso}" );
eMessage('MODIFICADO','HS', '', 'location.href("edes.php?Fm:cur/c_realizados.edf");');


[DBIni] B
sql_Borra( 'alumnos',  "cd_curso = '{$cd_curso}' and cd_alumno='{$cd_alumno}'");
$num=sql_Cuenta( "alumnos", "cd_curso='{$cd_curso}'" );
sql_Modifica('cursos', "asist='{$num}'", "cd_curso={$cd_curso}" );
eMessage('BORRADO','HS', '', 'location.href("edes.php?Fb:cur/c_realizados.edf");');


[DBSql] l
if( !isset($cargo) ) $cargo = '';
if( !isset($cd_curso) ) $cd_curso = '';

.generamos el filtro de búsqueda
$filtro='';
if( isset($cd_gs_user) && $cd_gs_user>0){$filtro.=" AND a.cd_gs_user='$cd_gs_user' ";}
if( isset($cd_curso) && $cd_curso>0){$filtro.=" AND b.cd_curso='$cd_curso' ";}


.Obtenemos los datos del curso y del usuario para poderlos mostrar en el listado.
$query = ' select a.cd_alumno,a.cd_curso,a.cd_gs_user, ';
$query.=	" b.fe_desde,b.fe_hasta,b.duracion,b.tipo_curso, ";
$query.=	" c.dni,c.user_name,c.user_surname,b.titulo,b.lugar ";
$query.=	" FROM alumnos a, cursos b, gs_user c ";
$query.=	" WHERE a.cd_curso = b.cd_curso AND a.cd_gs_user=c.cd_gs_user ";
$query.= " $filtro ORDER BY b.fe_desde, c.filtro_org";

sql_Query ($query);
$usuCursor = array();
$fe_ant='';
$tipo=2;
while($row = sql_Fila()){
		if($fe_ant==""){$fe_ant=$row[3];}
		if($row[3]==$fe_ant){$tipo=$tipo;}else{$fe_ant=$row[3];if($tipo==1){$tipo=2;}else if ($tipo==2){$tipo=1;}}
		if($row[11]=='' || $row[11]==0){$row[11]='00';}if($row[12]=='' || $row[12]==0){$row[12]='00';}
		if($row[13]=='' || $row[13]==0){$row[13]='00';}if($row[14]=='' || $row[14]==0){$row[14]='00';}
		$cd_org=$row[11].$row[12].$row[13].$row[14];
		if($row[6]=='1'){$tipo_curso="APLICACION";}else{$tipo_curso="GESTEL";}
   	array_push( $usuCursor, array($row[0],$tipo_curso,$row[15],$row[3],$row[4], $row[5],$row[7],$row[9],$row[8],$cd_org,$tipo,$row[16]));
}
sql_Libera();

[Note]
	create table alumnos
	  (
	    cd_alumno serial,
	    cd_curso integer,
	    cd_gs_user integer,
	    cargo varchar(35)
	  );
	  create index alumno_cod on alumnos (cd_alumno);
```