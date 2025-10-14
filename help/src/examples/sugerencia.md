# Sugerencias y observaciones
## sugerencia.edf
```php
[Title] SUGERENCIAS Y OBSERVACIONES

[DBTable]  sugerencia
[DBIndex]  cd_sugerencia
[DBSerial] cd_sugerencia
[DBOrder]  cd_sugerencia desc
[DBLimit]  10000,10000
[MaxRec] 15,15

[Cursor]

¿ $_PSOURCE=='' ? [CSSAdd] * | fondo_blanco

[AddOption] * | estado | ,; P,PENDIENTE; E,VISTO POR EXPLOTACION; D,DENEGADA; A,ACEPTADA; R,FINALIZADA

[MsgAnswer] A | SUGERENCIA GRABADA<script>location='edes.php?Ll:sugerencia.edf'</script>

[AddButton] a | <IMG src='g/buscar.gif'> Consultar todas| Consultar otras incidencias | document.location='edes.php?Fc:sugerencia.edf'
.[AddButton] a | Cancelar | Volver al listado | document.location='edes.php?Ll:sugerencia.edf'

[Button] a | Insertar nueva sugerencia

[PDFTh]  REF
[PDFCol] 4,,56,56,20,20
[PDFVar] PDF_Grid = true
[PDFWrap] 7


#(L)  [ColsWidth] ,270,270
#(?l) [ColsWidth] ,,270,270

[Fields] a
    Fecha      | dt_sugerencia | F4 | T | 10       |     | - | #today# |   | 
    Sugerencia | nm_sugerencia | #  | A | 255,85,7 | 450 | A |         | # | 
    Usuario    | cd_gs_user    | 0  | T | 10       |     | * | _User   |   | 
    Estado     | estado        | X  | T | 1        | 280 | * | P       |   | 
[Fields] ?
    Referencia | cd_sugerencia                                              | *  | T  | 8  |     | Q  |  |  | 
    Fecha      | dt_sugerencia                                              | F4 | T  | 10 |     | QF |  |  | 
    Estado     | estado                                                     | X  | SV | 90 | 280 | Q  |  |  | 
    Usuario    | cd_gs_user{gs_user,cd_gs_user,user_surname,", ",user_name} | 0  | S  | 50 | 280 | Q  |  |  | 
[Fields] L
    Referencia | cd_sugerencia | *  | T  | 8        |     | - |         |  | 
    Fecha      | dt_sugerencia | F4 | T  | 10       |     | F | #today# |  | 
    Sugerencia | nm_sugerencia | #  | A  | 255,85,7 | 500 | - |         |  | 
    Respuesta  | respuesta     | #  | A  | 255,85,7 | 500 | M |         |  | 
    Estado     | estado        | X  | SV | 90       | 280 | M |         |  | 
[Fields] else
    Referencia | cd_sugerencia                                              | *  | T  | 8        |     | - |         |   | 
    Fecha      | dt_sugerencia                                              | F4 | T  | 10       |     | - | #today# |   | 
    Sugerencia | nm_sugerencia                                              | #  | A  | 255,85,7 | 500 | M |         | # | 
    Respuesta  | respuesta                                                  | #  | A  | 255,85,7 | 500 | M |         |   | 
    Estado     | estado                                                     | X  | SV | 90       | 280 | M |         |   | 
    Usuario    | cd_gs_user{gs_user,cd_gs_user,user_surname,", ",user_name} | 0  | S  | 50       | 280 | - |         |   | 

[JSEnd] c
ePF('cd_gs_user',_User);
var n=eSelectValue( 'cd_gs_user' );
eClearSelect('cd_gs_user');
eAddOption( 'cd_gs_user', Array( Array('',' '), Array(_User,n)) ); 
ePF('cd_gs_user',_User);


[PHPIni]l
$EmptyList = true;		// Mostrar el listado aunque la tabla no tenga registros

[HTMIni] a
<p>Si tienes alguna sugerencia que hacer en cuanto a mejoras, este es el sitio.
<br><br>
También puedes consultar el estado de todas las observaciones y sugerencias recibidas.
<p>

[HTMIni] c
<p>Puedes consultar tus sugerencias, las de otros usuarios y el estado de las mismas.<p>

[HTMEnd] l
<br>
<center>
	<button onclick='document.location="edes.php?Fa:sugerencia.edf";'class='boton'>NUEVA SUGERENCIA</button>
	<button onclick='document.location="edes.php?Fc:sugerencia.edf";'class='boton'>NUEVA CONSULTA</button>
</center>
```   