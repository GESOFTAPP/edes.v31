# PHPEnd

## Sintaxis

```
[PHPEnd] Mode [[ | NomDF/else,... ] | UNIQUE/Condition ]
```

## Descripción

Añade código PHP justo antes del final del BODY, es decir, antes de la etiqueta `</body>`.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Mode | String | Modo de aplicación (A=alta, M=modificación, etc.) |
| NomDF/else | Opcional | Nombre del dataframe o condición alternativa |
| UNIQUE/Condition | Opcional | Para incluir esta zona de código una sola vez en caso de tener funciones declaradas y haya conflicto con los modos |

## Ejemplos

### Ejemplo completo - Sistema de envío de emails con plantillas
```php
[PHPEnd] A,M
global $_UserActual;
if($_sendPrueba){
    $data = qRecord( "select user_name, filtro_org, email from gs_user where cd_gs_user='{$_UserActual}'" );  
    $emailTo = $data['email'];
    $cuerpo = html_entity_decode(ereg_replace( "\n", '<br>', $cuerpo));
    $mensaje  = file_get_contents("/plantillas/plantilla_{$tipo}_{$cd_idioma}.html");
    $mensaje = str_replace("<!--{{FECHA}}-->",date('d-m-Y H:i:s'),$mensaje);
    $mensaje  = str_replace("<!--{{CABECERA}}-->",$asunto, $mensaje);
    $mensaje  = str_replace("<!--{{CUERPO}}-->",$cuerpo, $mensaje);
    $mensaje  = str_replace("#usu_nombre#", $data['user_name'], $mensaje);
    enviarEmail($emailTo,$mensaje,$asunto);
}
```

### Ejemplo básico - Log de actividad
```php
[PHPEnd] *
if ($_POST) {
    $logEntry = date('Y-m-d H:i:s') . " - Usuario: {$_UserActual} - Acción realizada\n";
    file_put_contents('/logs/actividad.log', $logEntry, FILE_APPEND);
}
```

### Ejemplo con UNIQUE - Definición de funciones
```php
[PHPEnd] * | UNIQUE
function calcularDescuento($importe, $porcentaje) {
    return $importe * ($porcentaje / 100);
}

function formatearMoneda($cantidad) {
    return number_format($cantidad, 2, ',', '.') . ' €';
}
```

### Ejemplo condicional - Procesamiento específico
```php
[PHPEnd] A | cd_tipo_documento=1
// Solo para documentos tipo "Informe"
$rutaArchivo = "/documentos/informes/" . $cd_documento . ".pdf";
if (file_exists($rutaArchivo)) {
    echo "<script>console.log('Documento PDF disponible');</script>";
}
```

### Ejemplo de limpieza y estadísticas
```php
[PHPEnd] c,l
// Registrar consulta para estadísticas
if (!$_SESSION['consulta_registrada']) {
    qExecute("INSERT INTO estadisticas_consultas (fecha, usuario, tabla) VALUES (NOW(), '{$_UserActual}', '{$_Table}')");
    $_SESSION['consulta_registrada'] = true;
}

// Limpiar variables temporales
unset($_SESSION['filtros_temp']);
```

### Ejemplo con validación de permisos
```php
[PHPEnd] M,B | UNIQUE
function verificarPermisos($accion) {
    global $_UserActual, $_UserProfile;
    
    $permisos = qRecord("SELECT permisos FROM user_permissions WHERE cd_user='{$_UserActual}' AND tabla='{$_Table}'");
    
    if (strpos($permisos['permisos'], $accion) === false) {
        echo "<script>alert('No tiene permisos para realizar esta acción'); history.back();</script>";
        exit;
    }
}

// Verificar permisos antes de continuar
verificarPermisos('modificar');
```