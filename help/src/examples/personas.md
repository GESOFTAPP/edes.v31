# Personas
## informe_personas.edf
```php
[Title]  =INFORME PERSONAS POR NACIONALIDAD
[SubTitle]

[DB] mysql

[DBTable] personas
[DBLimit] 10000

[FormAction] c | Ll:

[Expire] 180
[NoAbort]

[AddOption] a,mR,c | _cd_filtro | A,AUTONOMIA; P,PROVINCIA
[SlideCol]

[RelationFields] cd_auto,cd_prov


[Assign] c
[NoEditFilled] c
[PDFSaveVar] _TITLE,_PDFTH,PDF_ShadowRows
[PDFVar] PDF_Grid = true


[Fields] ?
    Ver por   | _cd_filtro | X | SV | 1 | 90     | Q  |        |   | 
   -          |            |   |    |   |        | Q  |        |   | 
    Autonomía | cd_auto    | 0 | S  | 2 | 21,280 | IQ | _Auto_ |   | 
    Provincia | cd_prov    | 0 | Ss | 2 | 21,280 | IQ | _Prov_ |   | 

[OnChange] ? | _cd_filtro | PoneFiltro()
[JSIni] ?
	function PoneFiltro(){
        console.log('Sin uso solo para ejemplo de "[JSIni]"');
	}

[JSCheck] ?
	if( eGF('_cd_filtro')=='C' && eGF('cd_prov')=='' ){
		ePE('cd_prov','Falta introducir la provincia',true);
		return false;
	}


[Fields] l
    NACIONALIDAD | nacionalidad | X | T | 50 |  | - |  |  | 

	
[PHPIni] l
	function eStrSplitByLines( $txt, $nLineas, $Dividor ){
		$sDim = $txt;
		$Mejor = -1;
		for( $n=0; $n<strlen($txt); $n++ ){
			$Dim = wordwrap( $txt, $n, $Dividor, false );
			$aLineas = count(explode($Dividor,$Dim));
			if( $aLineas==$nLineas ){
				return $Dim;
			}else if( $aLineas<$nLineas ){
				if( $Mejor<$aLineas ){
					$Mejor = $aLineas;
					$sDim = $Dim;
				}
			}
		}
		return $sDim;
	}
	
	$_POST['autonomia'] = $_POST['cd_auto'];
	$_POST['provincia'] = $_POST['cd_prov'];
	unset( $_POST['cd_auto'], $_POST['cd_prov'] );
	
	$Where = '';
	switch( $_POST['_cd_filtro'] ){
		case 'A':
			if( $_POST['autonomia']<>'' ) $Where = " where autonomia='".$_POST['autonomia']."'";
			qQuery( "select autonomia, nom_autonomia from autonomias {$Where} order by nom_autonomia" );
			$NomGrupo = 'AUTONOMIAS';
			break;
			
		case 'P':
			if( $_POST['autonomia']<>'' ){
				if( $Where<>'' ) $Where .' and ';
				$Where .= "autonomia='".$_POST['autonomia']."'";
			}
			if( $_POST['provincia']<>'' ){
				if( $Where<>'' ) $Where .' and ';
				$Where .= "provincia='".$_POST['provincia']."'";
			}
			if( $Where<>'' ) $Where = ' where '.$Where;
			qQuery( "select provincia, nom_provincia from provincias {$Where} order by nom_provincia" );
			$NomGrupo = 'PROVINCIAS';
			break;
	}
	
	$eColsOp = 'C';
	$eRowsOp = 'C';
	$eFormat = '';
	$DimPosicion = array();
	$n = 1;
	while( $r=qRow() ){
		$eColsOp .= ',+';
		$eRowsOp .= ',+';
		$eFormat .= ',Mb';
		eAddField( eStrSplitByLines( $r[1], 2, "<br>" )."| campo_".$n." | + | T | 9 || - |||" );
		$DimPosicion[$r[0]] = $n++;
	}
	eColsOp($eColsOp);
	eRowsOp($eRowsOp);
	eFormat($eFormat.',Mb');
	$_THCOLSPAN[0] = 'campo_1,campo_'.($n-1).','.$NomGrupo;

[RowColor] $_vF[0]=='ESPAÑOLA' | style='color:#FF0000'


[DBSql] l
	$Where = qGetWhere('a');
	if( $Where<>'' ) $Where = ' and '.$Where;
	
	switch( $_POST['_cd_filtro'] ){
		case 'A':
			qQuery( "
				select 
				      v.d_nacionalidad, l.autonomia, l.nom_autonomia, count(*)       
				from 
                    personas v, autonomias l
				where 
                    l.autonomia=v.autonomia
				group by 
                    l.nom_autonomia, l.autonomia, d_nacionalidad    
				order by 1,2,3
			" );
			break;
	
		case 'P':
			qQuery( "
				select 
				      v.d_nacionalidad, l.provincia, l.nom_provincia, count(*)       
				from 
                    personas v, autonomias l
				where 
                    l.provincia=v.provincia
				group by 
                    l.nom_provincia, l.provincia, d_nacionalidad    
				order by 1,2,3
			" );
			break;
	}
	
	$DatoUltimo = '';
	$Max = 0;
	$n = -1;
	$Total = 0;
	while( $r=qRow() ){
		$DatoActual = $r[0];
		if( $DatoUltimo<>$DatoActual ){
			$n++;
			$usuCursor[$n][0] = trim($r[0]);
			$Max = max( strlen(trim($r[0])), $Max );
			for( $i=0; $i<count($DimPosicion); $i++ ) $usuCursor[$n][$i+1] = 0;
		}
		$Total += $r[3];
		$usuCursor[$n][$DimPosicion[$r[1]]] += $r[3];
		$DatoUltimo = $DatoActual;
	}
	$_Form[0][4] = $Max;
	if($_Development) eTrace( $Total);
}
```    	