# eBkgEnd

## Descripción

La función `eBkgEnd()` es utilizada para **finalizar un proceso en segundo plano (background)** de manera controlada. Esta función marca el final de la ejecución de un proceso background, permitiendo realizar tareas de limpieza, notificaciones de finalización y liberación de recursos antes de que el proceso termine completamente.

## Sintaxis

```php
eBkgEnd($resultado = null, $mensaje = null, $datos = null)
```

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|------------------|
| `$resultado` | `mixed` | Resultado del proceso ejecutado | ✗ | `null` |
| `$mensaje` | `string` | Mensaje de finalización | ✗ | `null` |
| `$datos` | `array` | Datos adicionales del proceso | ✗ | `null` |

## Funcionalidad

### Finalización Controlada
- **Limpieza de recursos**: Libera memoria y conexiones
- **Registro de finalización**: Documenta el fin del proceso
- **Notificación**: Informa sobre el resultado de la ejecución
- **Estado del proceso**: Actualiza el estado a "terminado"

### Gestión de Resultados
- **Éxito**: Registra finalización exitosa
- **Error**: Registra finalización con errores
- **Datos**: Almacena resultados para consulta posterior
- **Logs**: Genera entradas de log apropiadas

## Ejemplos

### Ejemplo 1: Finalización Exitosa
```php
function procesarLoteFacturas($facturas) {
    $procesadas = 0;
    $errores = [];
    
    foreach ($facturas as $factura) {
        try {
            procesarFactura($factura);
            $procesadas++;
        } catch (Exception $e) {
            $errores[] = [
                'factura' => $factura['id'],
                'error' => $e->getMessage()
            ];
        }
    }
    
    // Finalizar proceso con resultados
    eBkgEnd(
        $procesadas > 0 ? 'SUCCESS' : 'PARTIAL_ERROR',
        "Procesadas $procesadas facturas",
        [
            'total' => count($facturas),
            'procesadas' => $procesadas,
            'errores' => $errores
        ]
    );
}
```

### Ejemplo 2: Finalización con Error
```php
function sincronizarDatos($origen, $destino) {
    try {
        $conexionOrigen = conectar($origen);
        $conexionDestino = conectar($destino);
        
        $datos = obtenerDatos($conexionOrigen);
        insertarDatos($conexionDestino, $datos);
        
        // Finalización exitosa
        eBkgEnd(
            'SUCCESS',
            'Sincronización completada',
            ['registros_sincronizados' => count($datos)]
        );
        
    } catch (Exception $e) {
        // Finalización con error
        eBkgEnd(
            'ERROR',
            'Error en sincronización: ' . $e->getMessage(),
            ['error_code' => $e->getCode()]
        );
    }
}
```

### Ejemplo 3: Proceso de Limpieza
```php
function limpiarArchivosTemporales() {
    $archivosEliminados = 0;
    $directorioTemp = '/tmp/aplicacion/';
    
    $archivos = glob($directorioTemp . '*');
    
    foreach ($archivos as $archivo) {
        if (is_file($archivo) && time() - filemtime($archivo) > 3600) {
            if (unlink($archivo)) {
                $archivosEliminados++;
            }
        }
    }
    
    eBkgEnd(
        'SUCCESS',
        "Limpieza completada: $archivosEliminados archivos eliminados",
        [
            'directorio' => $directorioTemp,
            'archivos_eliminados' => $archivosEliminados
        ]
    );
}
```

### Ejemplo 4: Proceso de Backup
```php
function crearBackupBaseDatos($configuracion) {
    $inicio = microtime(true);
    
    try {
        $nombreBackup = 'backup_' . date('Y-m-d_H-i-s') . '.sql';
        $rutaBackup = $configuracion['ruta_backup'] . '/' . $nombreBackup;
        
        // Crear backup
        $comando = "mysqldump -u{$configuracion['usuario']} " .
                  "-p{$configuracion['password']} " .
                  "{$configuracion['base_datos']} > $rutaBackup";
        
        exec($comando, $output, $returnCode);
        
        if ($returnCode === 0) {
            $tamaño = filesize($rutaBackup);
            $tiempo = microtime(true) - $inicio;
            
            eBkgEnd(
                'SUCCESS',
                "Backup creado exitosamente: $nombreBackup",
                [
                    'archivo' => $nombreBackup,
                    'ruta' => $rutaBackup,
                    'tamaño' => $tamaño,
                    'tiempo_ejecucion' => round($tiempo, 2)
                ]
            );
        } else {
            throw new Exception("Error al crear backup: " . implode("\n", $output));
        }
        
    } catch (Exception $e) {
        eBkgEnd(
            'ERROR',
            'Error al crear backup: ' . $e->getMessage(),
            ['tiempo_ejecucion' => microtime(true) - $inicio]
        );
    }
}
```

### Ejemplo 5: Proceso de Reportes
```php
function generarReporteMensual($mes, $año) {
    $datosReporte = [];
    
    try {
        // Obtener datos del mes
        $ventas = obtenerVentas($mes, $año);
        $gastos = obtenerGastos($mes, $año);
        $clientes = obtenerNuevosClientes($mes, $año);
        
        // Generar reporte
        $datosReporte = [
            'periodo' => "$mes/$año",
            'total_ventas' => array_sum($ventas),
            'total_gastos' => array_sum($gastos),
            'nuevos_clientes' => count($clientes),
            'beneficio' => array_sum($ventas) - array_sum($gastos)
        ];
        
        // Guardar reporte
        $archivoReporte = "reporte_mensual_{$año}_{$mes}.json";
        file_put_contents($archivoReporte, json_encode($datosReporte, JSON_PRETTY_PRINT));
        
        eBkgEnd(
            'SUCCESS',
            "Reporte mensual generado para $mes/$año",
            array_merge($datosReporte, ['archivo' => $archivoReporte])
        );
        
    } catch (Exception $e) {
        eBkgEnd(
            'ERROR',
            'Error al generar reporte: ' . $e->getMessage(),
            ['periodo' => "$mes/$año"]
        );
    }
}
```

### Ejemplo 6: Integración con Sistema de Monitoreo
```php
function procesoCompleto($configuracion) {
    $inicioTiempo = microtime(true);
    $pasos = [
        'validacion' => false,
        'procesamiento' => false,
        'guardado' => false,
        'notificacion' => false
    ];
    
    try {
        // Paso 1: Validación
        validarConfiguracion($configuracion);
        $pasos['validacion'] = true;
        
        // Paso 2: Procesamiento
        $resultados = procesarDatos($configuracion['datos']);
        $pasos['procesamiento'] = true;
        
        // Paso 3: Guardado
        guardarResultados($resultados);
        $pasos['guardado'] = true;
        
        // Paso 4: Notificación
        enviarNotificacion($resultados);
        $pasos['notificacion'] = true;
        
        // Finalización exitosa
        eBkgEnd(
            'SUCCESS',
            'Proceso completado exitosamente',
            [
                'pasos_completados' => array_keys(array_filter($pasos)),
                'tiempo_total' => round(microtime(true) - $inicioTiempo, 2),
                'registros_procesados' => count($resultados)
            ]
        );
        
    } catch (Exception $e) {
        eBkgEnd(
            'ERROR',
            'Error en proceso: ' . $e->getMessage(),
            [
                'pasos_completados' => array_keys(array_filter($pasos)),
                'paso_fallido' => obtenerPasoFallido($pasos),
                'tiempo_transcurrido' => round(microtime(true) - $inicioTiempo, 2)
            ]
        );
    }
}

function obtenerPasoFallido($pasos) {
    foreach ($pasos as $paso => $completado) {
        if (!$completado) {
            return $paso;
        }
    }
    return 'desconocido';
}
```

## Casos de Uso Comunes

- **Procesos de importación/exportación de datos**
- **Generación de reportes extensos**
- **Operaciones de backup y restauración**
- **Sincronización entre sistemas**
- **Procesamiento de archivos grandes**
- **Limpieza y mantenimiento del sistema**
- **Cálculos complejos y análisis de datos**

## Notas Importantes

- Siempre llamar a `eBkgEnd()` al final de procesos background
- Proporcionar información útil sobre el resultado del proceso
- Incluir métricas de rendimiento cuando sea relevante
- Manejar tanto casos de éxito como de error
- Los datos almacenados pueden ser consultados posteriormente