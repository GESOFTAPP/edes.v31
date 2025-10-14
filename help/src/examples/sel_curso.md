# Selección curso (sel_curso.fdf)
```php
/*
Viene del ejemplo "Alumnos"
[AddCode] c | _dni | A | <img src='./g/buscar.gif' onClick='FunPadre(this,"B", "FRM1;_dni=dni, cd_gs_user=cd_gs_user, _nombre=user_name, _apel=user_surname, cd_rama=cd_rama,  cd_auto=cd_auto, cd_prov=cd_prov, cd_coma=cd_coma : sel_usuario")'> 
//llama en modo "c" subventana que se abre a sel_curso.fdf
*/

[Title]  SELECCIONA CURSO

[DBTable]  cursos
[DBIndex]  cd_curso
[DBOrder]  cd_curso
[DBSerial] cd_curso
[DBLimit]  100


[WinTitle] VENTANA DE SELECCIÓN
[RowColor] tipoCurso == 1 |id=p
[Align] ,,,C,C,C,,,C

[NoSort]

[Fields]

#!(a,l) Nº de Curso | cd_curso     | +  | T |  7 || AQL* |||
#(l) Nº de Curso    | cd_curso     | +  | T |  7 || *    |||

    Titulo          | titulo       | X  | T | 50 |342| MQL  |||
    Fechas: \Desde  | fe_desde     | F4 | T | 10 || MFQL  |||
   ,Hasta           | fe_hasta     | F4 | T | 10 || MFQL  |||
   ,Duración        | duracion     | +  | T |  3 || MQL  |||
    Lugar           | lugar        | 0  | T |  5 || *L   |||
    Tipo de curso   | tipo_curso   | 0  | T |  1 || *L   |||
    Celebrado       | cd_celebrado | 0  | C |  1 || *L   |||
    Completo        | cd_completo  | 0  | C |  1 || *L   |||
    Plazas libres   | p_libres     | 0  | T |  1 || *L   |||
.Campos para montar en los listados

#(l)¿
    Tipo de curso   | tipo_curso   | 0  | T |  1 || A    |||
    Titulo          | titulo       | X  | T | 80 || A    |||
    Desde           | fe_desde     | F4 | T | 10 || A    |||
   ,Hasta           | fe_hasta     | F4 | T | 10 || A    |||
    Duración        | duracion     | +  | T |  3 || A    |||
   ,Lugar           | lugar        | 0  | T |  5 || A    |||
                    | tipoCurso    | 0  | T |  1 || *    |||
    Plazas libres   | p_libres     | 0  | T |  1 || A    |||
?

.[DBAddSql] select nm_gs_node as lugar FROM gs_node where cd_gs_node={cd_gs_node}

[DBAddSql] select (a.aforo-a.asist) AS p_libres	from cursos a where cd_curso='{cd_curso}'
[DBSql] l
.Obtenemos los datos del curso y del usuario para poderlos mostrar en el listado.
$filtro = '';
if(!isset($_vF['cd_curso'])) $_vF['cd_curso']='';
if( $_vF['cd_curso']>0 ){$filtro= "AND a.cd_curso='{$_vF['cd_curso']}' ";}

$query = " SELECT a.cd_curso, a.titulo, a.fe_desde, a.fe_hasta, a.duracion, a.lugar, a.tipo_curso, a.aforo, a.asist ";
$query.=	" FROM cursos a WHERE a.cd_curso>0 $filtro ORDER BY a.fe_desde,a.tipo_curso";
sql_Query ($query);
$usuCursor = array();
while( $row = sql_Fila() ){
		$p_libres=$row[7]-$row[8];
		if($row[6]=='1'){$tipo_curso="PROGRAMACION";}else{$tipo_curso="DISEÑO";}
   	array_push( $usuCursor, array($row[0],$tipo_curso,$row[1],$row[2],$row[3],$row[4],$row[5],$row[6],$p_libres));
}
sql_Libera();


[JSSelRow] l
var uO = _WOPENER.document.FRM1;
if(_Columna[8]==0){
	top.eAlert('MENSAJE','EL CURSO SELECCIONADO ESTA COMPLETO','A','I');
	return;
}else{
	uO._curso.value = _Columna[0];
	uO.cd_curso.value = _Columna[0];
	uO._titulo.value = _Columna[2];
	uO._fe_desde.value = _Columna[3];
	uO._fe_hasta.value = _Columna[4];
	uO._duracion.value = _Columna[5];
	uO._lugar.value = _Columna[6];
	uO._tipo_curso.value = _Columna[1];
	uO._p_libres.value = _Columna[8];
}
```