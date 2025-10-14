# eBkgError

## Descripción

La función `eBkgError()` es utilizada para **registrar y manejar errores** que ocurren durante la ejecución de procesos en segundo plano (background). Esta función permite documentar errores, enviar notificaciones de problemas y mantener un registro detallado de fallos para diagnóstico y resolución posterior.

## Sintaxis

```php
eBkgError($mensaje, $codigo = null, $datos = null, $critico = false)
```

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|------------------|
| `$mensaje` | `string` | Mensaje descriptivo del error | ✓ | - |
| `$codigo` | `int\|string` | Código de error para categorización | ✗ | `null` |
| `$datos` | `array` | Datos adicionales del contexto del error | ✗ | `null` |
| `$critico` | `boolean` | Indica si el error es crítico | ✗ | `false` |

## Funcionalidad

### Registro de Errores
- **Documentación**: Registra errores con timestamp y contexto
- **Categorización**: Clasifica errores por tipo y severidad
- **Trazabilidad**: Mantiene historial de errores del proceso
- **Debugging**: Proporciona información para diagnóstico

### Notificaciones
- **Alertas**: Notifica errores críticos inmediatamente
- **Logs**: Registra en ficheros de log del sistema
- **Monitoreo**: Integra con sistemas de monitoreo
- **Escalado**: Eleva errores críticos según configuración

## Ejemplos

### Ejemplo 1: Error Básico
```php
function procesarArchivo($archivo) {
    if (!file_exists($archivo)) {
        eBkgError(
            "Archivo no encontrado: $archivo",
            'FILE_NOT_FOUND',
            ['archivo' => $archivo, 'directorio' => dirname($archivo)]
        );
        return false;
    }
    
    // Continuar procesamiento...
}
```

### Ejemplo 2: Error de Base de Datos
```php
function actualizarRegistros($datos) {
    try {
        $conexion = obtenerConexion();
        
        foreach ($datos as $registro) {
            $sql = "UPDATE usuarios SET activo = ? WHERE id = ?";
            $stmt = $conexion->prepare($sql);
            
            if (!$stmt->execute([$registro['activo'], $registro['id']])) {
                eBkgError(
                    "Error al actualizar registro",
                    'DB_UPDATE_ERROR',
                    [
                        'usuario_id' => $registro['id'],
                        'sql' => $sql,
                        'error_db' => $stmt->errorInfo()
                    ]
                );
            }
        }
        
    } catch (PDOException $e) {
        eBkgError(
            "Error de conexión a base de datos",
            'DB_CONNECTION_ERROR',
            [
                'error' => $e->getMessage(),
                'codigo' => $e->getCode()
            ],
            true // Error crítico
        );
    }
}
```

### Ejemplo 3: Error de API Externa
```php
function sincronizarConAPI($datos) {
    $url = 'https://api.externa.com/sync';
    $maxReintentos = 3;
    
    for ($intento = 1; $intento <= $maxReintentos; $intento++) {
        $response = realizarPeticionAPI($url, $datos);
        
        if ($response['success']) {
            return $response['data'];
        }
        
        // Registrar error del intento
        eBkgError(
            "Intento $intento fallido en API externa",
            'API_REQUEST_FAILED',
            [
                'url' => $url,
                'intento' => $intento,
                'max_intentos' => $maxReintentos,
                'codigo_http' => $response['http_code'],
                'respuesta' => $response['body']
            ],
            $intento === $maxReintentos // Crítico solo en el último intento
        );
        
        // Esperar antes del siguiente intento
        sleep(pow(2, $intento)); // Backoff exponencial
    }
    
    return false;
}
```

### Ejemplo 4: Error de Validación
```php
function validarDatosImportacion($datos) {
    $errores = [];
    
    foreach ($datos as $indice => $registro) {
        $erroresRegistro = [];
        
        // Validar campos requeridos
        if (empty($registro['email'])) {
            $erroresRegistro[] = 'Email requerido';
        }
        
        if (empty($registro['nombre'])) {
            $erroresRegistro[] = 'Nombre requerido';
        }
        
        // Validar formato email
        if (!empty($registro['email']) && !filter_var($registro['email'], FILTER_VALIDATE_EMAIL)) {
            $erroresRegistro[] = 'Email inválido';
        }
        
        // Registrar errores del registro
        if (!empty($erroresRegistro)) {
            eBkgError(
                "Errores de validación en registro $indice",
                'VALIDATION_ERROR',
                [
                    'registro_indice' => $indice,
                    'registro' => $registro,
                    'errores' => $erroresRegistro
                ]
            );
            
            $errores[$indice] = $erroresRegistro;
        }
    }
    
    return $errores;
}
```

### Ejemplo 5: Error de Procesamiento con Recuperación
```php
function procesarLoteFacturas($facturas) {
    $procesadas = 0;
    $errores = 0;
    
    foreach ($facturas as $factura) {
        try {
            procesarFactura($factura);
            $procesadas++;
            
        } catch (Exception $e) {
            $errores++;
            
            // Clasificar tipo de error
            $critico = $e instanceof ErrorCritico;
            $codigo = $critico ? 'CRITICAL_PROCESSING_ERROR' : 'PROCESSING_ERROR';
            
            eBkgError(
                "Error al procesar factura {$factura['id']}: " . $e->getMessage(),
                $codigo,
                [
                    'factura_id' => $factura['id'],
                    'factura_numero' => $factura['numero'],
                    'error_tipo' => get_class($e),
                    'trace' => $e->getTraceAsString()
                ],
                $critico
            );
            
            // Si es crítico, detener el proceso
            if ($critico) {
                eBkgError(
                    "Proceso detenido por error crítico",
                    'PROCESS_STOPPED',
                    [
                        'procesadas' => $procesadas,
                        'errores' => $errores,
                        'total' => count($facturas)
                    ],
                    true
                );
                break;
            }
        }
    }
    
    return ['procesadas' => $procesadas, 'errores' => $errores];
}
```

### Ejemplo 6: Error de Recursos del Sistema
```php
function procesarArchivoGrande($archivo) {
    $memoriaInicial = memory_get_usage();
    $limiteMemoria = ini_get('memory_limit');
    
    try {
        $handle = fopen($archivo, 'r');
        
        if (!$handle) {
            eBkgError(
                "No se pudo abrir archivo para lectura",
                'FILE_OPEN_ERROR',
                [
                    'archivo' => $archivo,
                    'permisos' => substr(sprintf('%o', fileperms($archivo)), -4)
                ],
                true
            );
            return false;
        }
        
        $linea = 0;
        while (($data = fgetcsv($handle)) !== FALSE) {
            $linea++;
            
            // Verificar uso de memoria
            $memoriaActual = memory_get_usage();
            $porcentajeMemoria = ($memoriaActual / $memoriaInicial) * 100;
            
            if ($porcentajeMemoria > 80) {
                eBkgError(
                    "Uso excesivo de memoria detectado",
                    'MEMORY_WARNING',
                    [
                        'memoria_actual' => $memoriaActual,
                        'memoria_inicial' => $memoriaInicial,
                        'porcentaje' => $porcentajeMemoria,
                        'linea_procesada' => $linea,
                        'limite_memoria' => $limiteMemoria
                    ]
                );
            }
            
            // Procesar línea
            procesarLinea($data);
            
            // Liberar memoria periódicamente
            if ($linea % 1000 === 0) {
                gc_collect_cycles();
            }
        }
        
        fclose($handle);
        
    } catch (Exception $e) {
        eBkgError(
            "Error durante procesamiento de archivo",
            'FILE_PROCESSING_ERROR',
            [
                'archivo' => $archivo,
                'linea' => $linea ?? 0,
                'error' => $e->getMessage(),
                'memoria_usada' => memory_get_usage() - $memoriaInicial
            ],
            true
        );
    }
}
```

### Ejemplo 7: Sistema de Reintentos con Errores
```php
function operacionConReintentos($operacion, $parametros = []) {
    $maxIntentos = 3;
    $tiempoEspera = 1;
    
    for ($intento = 1; $intento <= $maxIntentos; $intento++) {
        try {
            return call_user_func_array($operacion, $parametros);
            
        } catch (Exception $e) {
            $esUltimoIntento = ($intento === $maxIntentos);
            
            eBkgError(
                "Intento $intento fallido para operación",
                $esUltimoIntento ? 'OPERATION_FAILED' : 'OPERATION_RETRY',
                [
                    'operacion' => is_string($operacion) ? $operacion : 'callable',
                    'parametros' => $parametros,
                    'intento' => $intento,
                    'max_intentos' => $maxIntentos,
                    'error' => $e->getMessage(),
                    'tiempo_espera' => $tiempoEspera
                ],
                $esUltimoIntento
            );
            
            // Si no es el último intento, esperar antes del siguiente
            if (!$esUltimoIntento) {
                sleep($tiempoEspera);
                $tiempoEspera *= 2; // Incrementar tiempo de espera
            }
        }
    }
    
    return false;
}
```

## Casos de Uso Comunes

- **Errores de conectividad** (base de datos, APIs externas)
- **Errores de validación** de datos de entrada
- **Errores de recursos** (memoria, disco, permisos)
- **Errores de procesamiento** de archivos o datos
- **Errores de integración** con sistemas externos
- **Errores de configuración** del sistema
- **Errores de negocio** específicos de la aplicación

## Buenas Prácticas

### ✅ Recomendaciones
- Proporcionar mensajes de error descriptivos y útiles
- Incluir contexto suficiente para diagnóstico
- Clasificar errores por severidad (crítico vs. no crítico)
- Usar códigos de error consistentes para categorización
- Incluir información técnica relevante en los datos
- Implementar estrategias de reintento para errores temporales

### ❌ Evitar
- Mensajes de error genéricos sin contexto
- Registrar errores sin información de diagnóstico
- Marcar todos los errores como críticos
- Exponer información sensible en los logs de error
- Ignorar errores no críticos sin documentarlos

## Notas Importantes

- Los errores críticos pueden desencadenar notificaciones inmediatas
- Los datos del contexto ayudan en la resolución de problemas
- Los códigos de error facilitan la categorización y filtrado
- El sistema puede configurarse para diferentes acciones según la severidad