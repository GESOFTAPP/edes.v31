# DBGateway

## Sintaxis
```
[DBGateway] Mode | ScriptPHP
```

## Descripción
Esta etiqueta **solo tiene validez en archivos EDF simples** (no en grupos de fichas). Cuando se solicita una búsqueda desde un formulario y se encuentra algún registro, se ejecutará el script PHP especificado.

### Características importantes:
- **Solo se ejecuta si se encuentran registros**
- **Exclusivo para archivos EDF simples**
- **Ejecución post-búsqueda**: Se ejecuta después de encontrar resultados

## Modos de operación

| Modo | Descripción |
|------|-------------|
| **s** | Ejecuta el script recibiendo la variable `$_SQL` con la sentencia SQL **sin ejecutar** |
| **q** | Similar al modo "s" pero recibe el **cursor** después de ejecutar la sentencia SQL |

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de ejecución (s, q, etc.) |
| **ScriptPHP** | Ruta al script PHP a ejecutar |

### Paso de parámetros
Se pueden pasar parámetros al script PHP usando el formato:
```php
[DBGateway] S | script.php?=$variable=valor
```

**Ejemplo:**
```php
[DBGateway] S | inf_productos.php?=$cd_fabrica=12
```

## Variables disponibles
- **`$_SQL`**: Sentencia SQL (en modo "s")
- **Cursor de datos**: Resultados de la consulta (en modo "q")
- **`$_PSOURCE`**: Fuente de datos
- **`$_Fila`**: Datos de la fila actual

## Ejemplos prácticos

### Ejemplo básico
```php
[Title] INFORMES DE PRODUCCION 
[DBGateway] S | inf_produc.php
```

### Ejemplo 1: Procesamiento cuando se encuentran registros
```php
[DBGateway] q | procesarUsuarios()

[PHPIni] 
//función que se ejecuta si se encuentran registros (uno o más).
function procesarUsuarios(){
	global $_PSOURCE, $usuCursor;
	
	$totalRegistros = count($usuCursor);
	
	if($totalRegistros == 1) {
		// Un solo registro - redirigir directamente
		$registro = $usuCursor[0];
		echo <<<EOD
			<SCRIPT LANGUAGE="JavaScript" SRC="edes.php?R:$edes.js"></SCRIPT>
			<SCRIPT> location='edes.php?GmR:varios/usuario.gdf&_origen=1&_SEEK&cd_gs_user={$registro['cd_gs_user']}'; </SCRIPT>
EOD;
	} else {
		// Múltiples registros - mostrar mensaje informativo
		echo "<div class='info'>Se encontraron {$totalRegistros} usuarios. Seleccione uno de la lista.</div>";
		// Opcional: marcar registros para resaltar
		foreach($usuCursor as $index => $registro) {
			echo "<script>marcarRegistro({$index}, '{$registro['cd_gs_user']}');</script>";
		}
	}
}
```
**Explicación**: Se ejecuta cuando se encuentran registros (uno o más). Si es un solo registro, redirige automáticamente; si son varios, muestra información y puede realizar acciones adicionales.

### Ejemplo 2: Generación de informe cuando se encuentran datos
```php
[Fields]
    Usuario   | cd_gs_user| 0   | T  | 8  | 	  | QLcp |        |  | 
    Apellidos | apel      | N   | T  | 30 | 255   | MQ   |        |  | 
    Nombre    | nombre    | N   | T  | 20 | 255   | MQ   |        |  | 

[DBTable] persona
[DBIndex] cd_persona
[DBGateway] s | file/informe_personas.php

[Fields]
    DNI 	  | dni       | DNI | T  | 8   |       | MQcp |        |  | 
   ,Persona   | cd_persona  | 0   | T  | 8 |  	   | QLcp |        |  | 
    Apellidos | apel      | N   | T  | 30  | 255   | MQ   |        |  | 
    Nombre    | nombre    | N   | T  | 20  | 255   | MQ   |        |  | 
```

**Archivo: file/informe_personas.php**
```php
<?php
	include_once( eScript('/lib/pdf/PdfCabeceras.class.php') );
	
	// Ejecutar la consulta para obtener todos los registros
	$resultado = sql_Query($_SQL);
	$registros = [];
	while($row = qArray($resultado)) {
		$registros[] = $row;
	}
	
	$totalRegistros = count($registros);
	$nombre = "../_tmp/pdf/informe_personas_{$totalRegistros}_registros.pdf";
	
	if( file_exists($nombre) ) unlink($nombre);
	
	// Generar PDF con todos los registros encontrados
	if($totalRegistros == 1) {
		// Informe individual
		generarPdfIndividual($registros[0], $nombre);
	} else {
		// Informe colectivo
		generarPdfColectivo($registros, $nombre);
	}
	
	echo "<script>window.open('$nombre', '_blank');</script>";
?>
```
**Explicación**: Cuando se encuentran personas (una o varias), genera automáticamente un PDF. Si es una persona, crea un informe individual; si son varias, genera un informe colectivo con todos los datos.

## Relación con DBGatewayOne
- **DBGateway**: Se ejecuta cuando se encuentran registros (uno o varios)
- **DBGatewayOne**: Se ejecuta específicamente cuando se encuentra **un solo registro**

## Casos de uso comunes
- **Informes automáticos**: Generar reportes cuando se encuentran datos
- **Redirecciones inteligentes**: Redirigir automáticamente si solo hay un resultado
- **Procesamiento de datos**: Realizar cálculos o transformaciones post-búsqueda
- **Generación de documentos**: Crear PDFs, emails, etc. basados en los resultados
- **Integraciones**: Conectar con sistemas externos cuando se encuentran datos

## Consideraciones importantes
- ⚠️ **Solo funciona en archivos EDF simples**
- ✅ **Se ejecuta únicamente si se encuentran registros**
- 🔄 **Ideal para automatizar acciones post-búsqueda**
- 📄 **Perfecto para generación de informes dinámicos**