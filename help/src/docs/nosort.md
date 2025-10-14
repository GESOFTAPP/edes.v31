# NoSort

## Sintaxis
```
[NoSort]
```

## Descripción
Desactiva la ordenación en los listados.

## Parámetros
Esta etiqueta no requiere parámetros.

## Ejemplo
```
[Title] =AGENDA 
[DB] oracle
[DBTable]  agenda
[DBIndex]  codigo
[DBOrder]  dia DESC
[DBSerial] codigo
.[DBMemo]   texto
¿ $_PSOURCE=='' ? [NoTools] *
[AddOption] ? | *p*desde, *p*hasta | verPeriodos()
[DBRange] * | dia | *desde | *hasta
[NoSort]
[Cursor]
[PDFWrap] 3
[PDFCol]      ,100
[ColsWidth] 65,450
[PHPIni] l
if( !isset($MesActual) ) $MesActual = 0;
if( $MesActual==1 ) $_DBADDFILTER = "to_char(dia,'yyyy-mm')>='".date('Y-m')."'";
[PHPIni] c,b,m
eInclude('lib');
function verPeriodos(){
	$per = array();
	$n = 0;
	$per[$n++] = array('','');
	for ($cont=0; $cont<(12+date("m")); $cont++){
	   $periodo = eAddMonth(date("Y-m"),-$cont);
	   $per[$n++] = array( $periodo, $periodo );
	}
	return $per;
}
[Fields] ? | 2
    Fecha desde   | _desde   | F4 | T  | 10 |        | QF |  | # | 
 +2 hasta         | _hasta   | F4 | T  | 10 |        | QF |  | # | 
    Periodo desde | *p*desde | P4 | SV | 7  | _desde | Q  |  | # | 
 +2 hasta         | *p*hasta | P4 | SV | 7  | _desde | Q  |  | # | 
                  | codigo   | *  | T  | 7  |        | *  |  |   | 
[Fields] else
    Fecha   | dia    | F4 | T | 10       |  | MF | #today# | # | 
    Resumen | texto  | #  | A | 255,80,6 |  | M  |         | # | 
            | codigo | *  | T | 7        |  | *  |         |   | 
[JSCheck] c,b,m
var *hasta = eGF('*hasta');
var *desde = eGF('*desde');
var *p*desde = eGO('_p_desde').value;
var *p*hasta = eGO('_p_hasta').value;
if( *hasta=='' && *desde=='' && ( *p*desde!='' || *p*hasta!='') ){
	var d='01';
	if(_p_desde!=''){
		var f_desde=d+'-';
		var m_d=_p_desde.substring(5);
		var an=_p_desde.substring(0,4);
		if(m_d*1<10) m_d='0'+m_d*1;
		var f_desde=d+'-'+m_d+'-'+an;
		ePF('_desde',f_desde);
		top.eAlert( 'MENSAJE',f_desde,'A','I');		
	}
	if(_p_hasta!=''){
		var dF = new Array('',31,28,31,30,31,30,31,31,30,31,30,31);
		var an=_p_hasta.substring(0,4);
		if(an*1%4==0) dF[2]=29;
		var m_h=_p_hasta.substring(5);
		if(m_h*1<10) m_h='0'+m_h*1;
		var f_hasta=dF[m_h*1]+'-'+m_h+'-'+an;
		ePF('_hasta',f_hasta);
		top.eAlert( 'MENSAJE',f_hasta,'A','I');		
	}
}
```

En este ejemplo se muestra una agenda donde:
- Se define la tabla `agenda` con ordenación por `dia DESC`
- **[NoSort]** desactiva la capacidad de reordenar las columnas haciendo clic en los encabezados
- Se mantiene el orden establecido en `[DBOrder]` pero se impide que el usuario pueda cambiar la ordenación interactivamente
- El listado incluye filtros por fecha y periodo, pero la ordenación queda fija

Esta etiqueta es útil cuando quieres mantener un orden específico en el listado sin permitir que los usuarios lo modifiquen.