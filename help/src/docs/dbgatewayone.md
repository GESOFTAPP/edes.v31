# DBGatewayOne

## SINTAXIS
```
[DBGatewayOne] Mode | ScriptPHP / Funcion
```

## DESCRIPCIÓN
Esta etiqueta sólo tiene validez en archivos EDF simples (no en grupos de fichas). Cuando solicitamos una búsqueda desde un formulario, una vez encontrado **UN SOLO registro**, se ejecutará el script PHP, no generando el motor ninguna salida.

Hay tres posibilidades:
1. El segundo parámetro puede ser la llamada a una función.
2. El segundo parámetro puede ser el nombre de un script para hacer include.
3. Dejando este parámetro en blanco se convertirá en una etiqueta multilínea poniendo el código PHP a continuación.

## PARÁMETROS
- **Mode**: Modo de ejecución (cR, ?R, etc.)
- **ScriptPHP / Funcion**: Función a ejecutar, archivo PHP a incluir, o vacío para código multilínea

## EJEMPLOS

### Ejemplo 1: Llamada a función con redirección
```php
[DBGatewayOne] ?R | uSelUser()

[PHPIni] ?R
//función redirecciona si encuentra un solo registro.
function uSelUser(){
    global $_PSOURCE, $_Fila;
    echo <<< EOD
        <script>
            window.location.href = 'detalle_usuario.php?id={$_Fila['cd_gs_user']}';
        </script>
    EOD;
}
```

### Ejemplo 2: Inclusión de archivo PHP para generar PDF
```php
[Fields]
    Usuario   | cd_gs_user| 0   | T  | 8  |       | QLcp |        |  |
    Apellidos | apel      | N   | T  | 30 | 255   | MQ   |        |  |
    Nombre    | nombre    | N   | T  | 20 | 255   | MQ   |        |  |

[DBTable] persona
[DBIndex] cd_persona
[DBGatewayOne] cR | file/ficha_pdf.php

[Fields]
    DNI       | dni       | DNI | T  | 8   |       | MQcp |        |  |
    ,Persona  | cd_persona| 0   | T  | 8   |       | QLcp |        |  |
    Apellidos | apel      | N   | T  | 30  | 255   | MQ   |        |  |
    Nombre    | nombre    | N   | T  | 20  | 255   | MQ   |        |  |

// Archivo: file/ficha_pdf.php
// Para generar un PDF con los datos encontrados
<?php
require_once 'pdf_library.php';
global $_Fila;

$pdf = new TCPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 16);
$pdf->Cell(0, 10, 'Ficha Personal', 0, 1, 'C');
$pdf->Ln(10);

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(30, 8, 'DNI:', 0, 0);
$pdf->Cell(0, 8, $_Fila['dni'], 0, 1);
$pdf->Cell(30, 8, 'Nombre:', 0, 0);
$pdf->Cell(0, 8, $_Fila['nombre'] . ' ' . $_Fila['apel'], 0, 1);

$pdf->Output('ficha_' . $_Fila['dni'] . '.pdf', 'D');
?>
```

### Ejemplo 3: Código PHP multilínea
```php
[DBGatewayOne] cR

    global $_Fila, $_PSOURCE;
    
    // Procesar datos encontrados
    $usuario_id = $_Fila['cd_gs_user'];
    $nombre_completo = $_Fila['nombre'] . ' ' . $_Fila['apel'];
    
    // Registrar acceso
    $sql = "INSERT INTO log_accesos (usuario_id, fecha_acceso, ip) 
            VALUES ('$usuario_id', NOW(), '{$_SERVER['REMOTE_ADDR']}')";
    mysql_query($sql);
    
    // Mostrar mensaje personalizado
    echo "<div class='alert alert-success'>";
    echo "<h3>Bienvenido, $nombre_completo</h3>";
    echo "<p>Último acceso registrado correctamente.</p>";
    echo "</div>";
    
    // Redireccionar después de 3 segundos
    echo "<script>
            setTimeout(function(){
                window.location.href = 'dashboard.php?user=$usuario_id';
            }, 3000);
          </script>";

[/DBGatewayOne]
```

### Ejemplo 4: Procesamiento de datos con validaciones
```php
[DBGatewayOne] cR | procesarUsuario()

[PHPIni] cR
function procesarUsuario() {
    global $_Fila, $_PSOURCE;
    
    // Validar estado del usuario
    if ($_Fila['estado'] != 'ACTIVO') {
        echo "<div class='alert alert-danger'>";
        echo "Usuario inactivo. Contacte con el administrador.";
        echo "</div>";
        return;
    }
    
    // Actualizar último acceso
    $cd_persona = $_Fila['cd_persona'];
    $sql = "UPDATE persona 
            SET ultimo_acceso = NOW() 
            WHERE cd_persona = '$cd_persona'";
    mysql_query($sql);
    
    // Cargar datos adicionales
    $sql_extra = "SELECT * FROM persona_detalle 
                  WHERE cd_persona = '$cd_persona'";
    $result = mysql_query($sql_extra);
    $detalle = mysql_fetch_assoc($result);
    
    // Mostrar información completa
    echo "<div class='user-info'>";
    echo "<h2>Información del Usuario</h2>";
    echo "<p><strong>Nombre:</strong> " . $_Fila['nombre'] . " " . $_Fila['apel'] . "</p>";
    echo "<p><strong>DNI:</strong> " . $_Fila['dni'] . "</p>";
    if ($detalle) {
        echo "<p><strong>Teléfono:</strong> " . $detalle['telefono'] . "</p>";
        echo "<p><strong>Email:</strong> " . $detalle['email'] . "</p>";
    }
    echo "</div>";
}
```

## NOTAS IMPORTANTES
- Solo funciona cuando se encuentra **exactamente UN registro**
- No genera salida normal del motor cuando se ejecuta
- Útil para procesos especiales como redirecciones, generación de PDFs, o procesamiento de datos
- Las variables globales `$_Fila` y `$_PSOURCE` están disponibles en el contexto
- Ideal para casos donde necesitas un comportamiento específico al encontrar un registro único