# Cursos
```php
#!(l)[Title] CURSOS
#(l) [Title] =LISTADO DE CURSOS DE FORMACION 
#(c) [Title] CURSO 
[SubTitle]

.Etiquetas de BD
[DBTable]  cursos
[DBIndex]  cd_curso
[DBOrder]  cd_curso
[DBSerial] cd_curso
[DBLimit]  1000

.Formateo del listado
.[RowColor] tipoCurso == 1 |id=p
[Align] ,,,,C,C,,C,C,C,C,C,,C
[TipTH] |||||Duración|||Ocupación|Celebrado|Completo|Ver alumnos||Solicitar Plaza|

.Etiquetas para modificar o crear eventos en los campos
[AutoMenu] l | 1
#!(l)[AddOption] * | tipo_curso | ,; 1,UAR; 2,Gestel

[AddCode]  * | duracion | A |  &nbsp;días
[AddCode]  a | fe_desde | I |  onMouseOver = _cargaFecha(); onChange = _cargaFecha();
[AddCode]  a | fe_hasta | I |  onMouseOver = _cargaFecha(); onChange = _cargaFecha();
[AddCode]  a | duracion | I |  onClick = _cargaFecha();
[AddCode] cR | titulo   | A |  &nbsp;&nbsp;<img src='./g/alumn.gif' onClick="top.eSWOpen(window,'edes.php?FcR:cur/c_realizados.edf&cd_curso=' + eGF('cd_curso'), 'Alumnos', false );" alt="Alumnos">
[AddCode]  a,mR | _cd_m   | I |  onClick = codDesde(1);
[AddCode]  a,mR | _cd_d   | I |  onClick = codDesde(2);
[Button] c | CONSULTA | Consulta Cursos
#(c,b,m) [Width] L | cd_celebrado,cd_completo,_pendiente | 117

[PDFCol] ,25,70,10,10,3,60,5,4,2,2,4,8
[PDFVar]     PDF_AltoLetra = 6.0
[PDFSaveVar] _TITLE
[PDFVar]     PDF_Grid = true

.Definición de los campos
[Fields]
#!(a,l) Nº de Curso                                     | cd_curso      | +  | T  | 7        | 70  | AQ*  |  |   | 
#(l) Nº de Curso                                        | cd_curso      | +  | T  | 7        |     | *    |  |   | 
#!(c,m,b)¿
    Título                                              | titulo        | X  | T  | 70       | 420 | MQL  |  | # | 
    Fechas:Desde                                        | fe_desde      | F4 | T  | 10       |     | MQFL |  | # | 
   ,Hasta                                               | fe_hasta      | F4 | T  | 10       |     | MFQL |  | # | 
   ,Madrid                                              | _cd_m         | 0  | C  | 1        |     | MQL  |  |   | 
   ,Desplazado                                          | _cd_d         | 0  | C  | 1        |     | MQL  |  |   | 
   ,                                                    | cd_donde      | N  | T  | 1        |     | *L   |  |   | 
    Duración                                            | duracion      | +  | T  | 3        |     | -MQL |  |   | 
   ,Lugar                                               | lugar         | X  | T  | 60       | 303 | MQL  |  | # | 
    Tipo de curso                                       | tipo_curso    | 0  | SV | 1        | 60  | MQL  |  | # | 
   ,<span style='margin-left:108'>Plazas: Aforo</span>  | aforo         | +  | T  | 3        |     | MQL  |  | # | 
   ,Ocupadas                                            | asist         | +  | T  | 3        |     | MQL  |  |   | 
    Celebrado                                           | cd_celebrado  | 0  | C  | 1        |     | MQL  |  |   | 
   ,Completo                                            | cd_completo   | 0  | C  | 1        |     | MQL  |  |   | 
    Observaciones                                       | observaciones | #  | A  | 225,83,3 | 420 | MQL  |  |   | 
?¿
    Tipo de curso                                       | tipo_curso    | 0  | SV | 1        | 70  | MQL  |  | # | 
    Fecha celebración: Desde                            | _fe_desde     | F4 | T  | 10       |     | MQFL |  | # | 
   ,Hasta                                               | _fe_hasta     | F4 | T  | 10       |     | FQL  |  | # | 
    Lugar de Celebración                                | lugar         | X  | T  | 60       | 286 | MQL  |  | # | 
{FS}{ Estado de Curso
   <Celebrado                                           | cd_celebrado  | 0  | C  | 1        |     | MQL  |  |   | 
   ,Completo                                            | cd_completo   | 0  | C  | 1        |     | MQL  |  |   | 
   ,Pendiente                                           | _pendiente    | 0  | C  | 1        |     | Q    |  |   | 
}

?

.Campos para mostrar en el listado
#(l)¿
    TIPO CURSO                                          | tipo_curso    | X  | T  | 2        |     | A    |  |   | 
    TITULO                                              | titulo        | X  | T  | 2        |     | A    |  |   | 
    DESDE                                               | fe_desde      | X  | T  | 2        |     | A    |  |   | 
    HASTA                                               | fe_hasta      | X  | T  | 2        |     | A    |  |   | 
    DU                                                  | duracion      | X  | T  | 2        |     | A    |  |   | 
    LUGAR CELEBRACION                                   | lugar         | X  | T  | 2        |     | A    |  |   | 
    AFORO                                               | aforo         | X  | T  | 2        |     | A    |  |   | 
    OCC.                                                | asist         | X  | T  | 2        |     | A    |  |   | 
    CE                                                  | cd_celebrado  | X  | T  | 2        |     | A    |  |   | 
    CO                                                  | cd_completo   | X  | T  | 2        |     | A    |  |   | 
    ALUM                                                | ver           | X  | T  | 2        |     | A    |  |   | 
                                                        | tipoCurso     | X  | T  | 2        |     | *    |  |   | 
.    SOL PLAZA                                          | s_plaza       | X  | T  | 2        |     | A    |  |   | 
    ENCUESTA                                            | val           | X  | T  | 2        |     | A    |  |   | 
?

[JSIni] c,b,m
_Question = false;

[JSHead]  a,mR
fecha_inicio = new Date();
fecha_fin = new Date();
var dias_diferencia;

.Definicion de las funciones que utilizaremos en el formulario
[JSIni] a,mR
.Función que asigna el valor de la fecha desde a hasta y al contrario y devuelve el num de dias que hay entre inicio y fin.
function _cargaFecha(){
	if(eGF('fe_desde')!='' || eGF('fe_hasta')!=''){
			var matchArray ="";
			if(eGF('fe_desde')!='' && eGF('fe_hasta')==''){ePF('fe_hasta', eGF('fe_desde'));}
			else if(eGF('fe_hasta')!='' && eGF('fe_desde')==''){ePF('fe_desde', eGF('fe_hasta'));}

			matchArray = document.all.fe_desde.value.split("-");
			fecha_inicio = new Date(parseInt(matchArray[2]),parseInt(matchArray[1],10)-1,parseInt(matchArray[0],10));

			matchArray = document.all.fe_hasta.value.split("-")
			fecha_fin = new Date(parseInt(matchArray[2]),parseInt(matchArray[1],10)-1,parseInt(matchArray[0],10));

			if(eGF('fe_desde')!='' && eGF('fe_hasta')!=''){
				dias_diferencia = ((fecha_fin-fecha_inicio)/(24*60*60*1000));
				if(dias_diferencia>0){ePF('duracion', dias_diferencia + 1);}
				else if(dias_diferencia==0){ePF('duracion',1);}
				else{ePF('duracion', '-');}
		  }
	}
}

function codDesde(n){
	if(n==1){
		ePF('_cd_m','S');
		ePF('_cd_d','');
		ePF('cd_donde','M');
	}else if (n==2){
		ePF('_cd_m','');
		ePF('_cd_d','S');
		ePF('cd_donde','D');
	}
}


[JSCheck] a,mR,A,M
_cargaFecha();
if(fecha_fin < fecha_inicio){ePE('fe_desde','La fecha de inicio del curso debe ser menor o igual que la fecha fin');}


[JSEnd] a,mR
setInterval("_cargaFecha()", 500);
if(_Accion=='A') ePF('_cd_m','S');

[JSEnd] a
eEditField('asist',false);

[JSEnd] mR,cR,bR
if(eGF('cd_donde')=='M') ePF('_cd_m','S');
else ePF('_cd_d','S');


[JSEnd] l
var valor;
function preguntar(cod,opc){
	posleft = (screen.availWidth / 2) - (300 / 2);
	postop = (screen.availHeight / 2) - (150 / 2);

	if (opc == 1){
		if (cod == ''){
			document.getElementById('preg').style.display = 'none';
		} else {
			document.getElementById('preg').style.display = 'block';
			document.getElementById('preg').style.top = postop;
			document.getElementById('preg').style.left = posleft;
			valor = cod;
		}
	} else {
		top.eCallSrv(window,'edes.php?E:cur/soli_curso.php?cd_curso='+valor);
		document.getElementById('preg').style.display = 'none';
	}
	AnulaKey();
}
</script>
<TABLE id='preg' style='position:absolute; display:none; border: 3 outset #aacc99;'>
	<TR><TH colspan=2 align=center><font size=2><b>SOLICITAR CURSO</b></font></TH></TR>
	<TR>
		<TD colspan=2 align='center'><font size=2><b>Esta solicitando un curso de UAR Confederal</b></font></TD>
	</TR>
	<TR>
		<TD colspan=2 align=center>&nbsp;
			<INPUT TYPE="button" VALUE="CONTINUAR" onclick="preguntar('',2);">&nbsp;&nbsp;&nbsp;
			<INPUT TYPE="button" VALUE="CANCELAR" onclick="preguntar('',1);">&nbsp;
		</TD>
	</TR>
</TABLE>


[DBSql] l			// generamos el filtro de búsqueda
if( !isset($titulo) ) $titulo = '';
if( !isset($aforo) ) $aforo = 0;

$filtro = '';
if ($tipo_curso>0){ $filtro.=" AND a.tipo_curso='$tipo_curso' "; }

if( trim($_pendiente)!='' ){
	$filtro .= " AND a.cd_celebrado!='S' ";
}else if ($cd_celebrado=='S'){
	$filtro .= " AND a.cd_celebrado='$cd_celebrado' ";
}
if ($cd_completo=='S'){$filtro.=" AND a.cd_completo='$cd_completo' ";}
if ($aforo!=''){$filtro.=" AND a.aforo='$aforo' ";}
if( $_WebMaster=='S' ){			// Si Ranmón ve todo
	$ant = '';
}else{
	$y = date("Y") - 1;		// Un año atras
	$ant = date("d-m-").$y;
}

if($_fe_desde!='') $filtro.=" AND a.fe_desde >='$_fe_desde' ";
if($_fe_hasta!='') $filtro.=" AND a.fe_desde <='$_fe_hasta' ";
if( $_fe_desde == '' and $_fe_hasta == '' and $ant!='' ) $filtro.=" AND a.fe_desde >= '$ant' ";

if($lugar!=''){$lugar = str_replace('*','%',$lugar);$filtro.=" AND a.lugar like ('$lugar')";}
if($titulo!=''){$titulo = str_replace('*','%',$titulo);$filtro.=" AND a.titulo like ('$titulo') ";}

.Obtenemos los datos del curso y del usuario para poderlos mostrar en el listado.

$query = " select a.cd_curso, a.titulo,a.fe_desde,a.fe_hasta,a.duracion,a.tipo_curso,a.aforo,a.asist,a.cd_celebrado,a.cd_completo, a.lugar ";
$query.=	" FROM cursos a WHERE a.cd_curso > 0 $filtro ORDER BY a.fe_desde, a.tipo_curso ";
sql_Query ($query);
$usuCursor = array();
while($row = sql_Fila()){
		if($row[5]=='1'){$tipo_curso="UAR";}else{$tipo_curso="GESTEL";}
   	$correo=$ver="";
		if($row[7]!='' && $row[7]>0){
			$ver="<img src='./g/alumn.gif' onClick=\"top.eSWOpen(window,'edes.php?FcR:cur/c_realizados.edf&cd_curso=".$row[0]."', 'CONSULTAR ALUMNOS', false );\" alt='Alumnos'>";
		}
//		$valEnc="<img src='./g/encuesta.gif' onClick=\"top.eSWOpen(window,'edes.php?FcR:varios/std_encuesta.edf&code_encuesta=&cd_curso='+$row[0], 'CONSULTAR ENCUESTA', false );AnulaKey();\" alt='Ver Valoración'>";
		$valEnc="<img src='./g/encuesta.gif' onClick=\"top.eSWOpen(window,'edes.php?FcR:varios/std_encuesta.edf&cd_curso=".$row[0]."', 'CONSULTAR ENCUESTA', false );AnulaKey();\" alt='Ver Valoración'>";
   	array_push( $usuCursor, array($row[0],$tipo_curso,$row[1],$row[2],$row[3],$row[4],$row[10],$row[6],$row[7],$row[8],$row[9],$ver,$row[5],$valEnc)); //$correo,
}
sql_Libera();


[Note]
create table cursos
  (
    cd_curso serial,
    titulo varchar(90),
    observaciones varchar(255),
    duracion smallint,
    cd_gs_node integer, Eliminar ahora el que se usa es lugar
    fe_desde date,
    fe_hasta date,
    tipo_curso smallint,
	 lugar varchar(60),
    cd_celebrado char(1),
    cd_completo char(1)
  );
  create index curso_cod on cursos (cd_curso);

 UPDATE cursos SET cursos.lugar=(SELECT nm_gs_node FROM gs_node WHERE cursos.cd_gs_node=nodo.cd_gs_node);
 alter table cursos add cd_donde char(1);
```
