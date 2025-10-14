# eBkgNote

## Descripción

La función `eBkgNote()` es utilizada para **registrar notas informativas y mensajes de seguimiento** durante la ejecución de procesos en segundo plano (background). Esta función permite documentar el progreso, hitos importantes y información relevante del proceso sin tratarse de errores, facilitando el monitoreo y la auditoría de las operaciones.

## Sintaxis

```php
eBkgNote($mensaje, $categoria = null, $datos = null, $prioridad = 'INFO')
```

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|------------------|
| `$mensaje` | `string` | Mensaje informativo a registrar | ✓ | - |
| `$categoria` | `string` | Categoría o etiqueta de la nota | ✗ | `null` |
| `$datos` | `array` | Datos adicionales del contexto | ✗ | `null` |
| `$prioridad` | `string` | Nivel de prioridad (INFO, DEBUG, WARN) | ✗ | `'INFO'` |

## Funcionalidad

### Registro de Información
- **Documentación**: Registra hitos y eventos importantes
- **Progreso**: Informa sobre el avance del proceso
- **Métricas**: Almacena estadísticas y mediciones
- **Auditoría**: Mantiene rastro de operaciones realizadas

### Categorización
- **Clasificación**: Organiza notas por tipo o módulo
- **Filtrado**: Permite búsqueda y filtrado posterior
- **Análisis**: Facilita análisis de patrones y tendencias
- **Reporting**: Genera informes basados en categorías

## Ejemplos

### Ejemplo 1: Progreso de Procesamiento
```php
function procesarPedidos($pedidos) {
    $total = count($pedidos);
    eBkgNote(
        "Iniciando procesamiento de pedidos",
        'INICIO_PROCESO',
        ['total_pedidos' => $total]
    );
    
    foreach ($pedidos as $indice => $pedido) {
        procesarPedido($pedido);
        
        // Registrar progreso cada 10 pedidos
        if (($indice + 1) % 10 === 0) {
            $progreso = round((($indice + 1) / $total) * 100, 2);
            eBkgNote(
                "Progreso del procesamiento: $progreso%",
                'PROGRESO',
                [
                    'procesados' => $indice + 1,
                    'total' => $total,
                    'porcentaje' => $progreso
                ]
            );
        }
    }
    
    eBkgNote(
        "Procesamiento completado",
        'FIN_PROCESO',
        ['total_procesados' => $total]
    );
}
```

### Ejemplo 2: Métricas de Rendimiento
```php
function importarDatos($archivo) {
    $inicioTiempo = microtime(true);
    $memoriaInicial = memory_get_usage();
    
    eBkgNote(
        "Iniciando importación de datos",
        'IMPORTACION',
        [
            'archivo' => $archivo,
            'tamaño_archivo' => filesize($archivo),
            'memoria_inicial' => $memoriaInicial
        ]
    );
    
    $registros = 0;
    $handle = fopen($archivo, 'r');
    
    while (($data = fgetcsv($handle)) !== FALSE) {
        importarRegistro($data);
        $registros++;
        
        // Registrar métricas cada 1000 registros
        if ($registros % 1000 === 0) {
            $tiempoTranscurrido = microtime(true) - $inicioTiempo;
            $memoriaActual = memory_get_usage();
            $velocidad = $registros / $tiempoTranscurrido;
            
            eBkgNote(
                "Métricas de importación",
                'METRICAS',
                [
                    'registros_procesados' => $registros,
                    'tiempo_transcurrido' => round($tiempoTranscurrido, 2),
                    'memoria_usada' => $memoriaActual - $memoriaInicial,
                    'velocidad_registros_seg' => round($velocidad, 2)
                ]
            );
        }
    }
    
    fclose($handle);
    
    $tiempoTotal = microtime(true) - $inicioTiempo;
    eBkgNote(
        "Importación finalizada",
        'IMPORTACION_COMPLETADA',
        [
            'total_registros' => $registros,
            'tiempo_total' => round($tiempoTotal, 2),
            'memoria_pico' => memory_get_peak_usage() - $memoriaInicial
        ]
    );
}
```

### Ejemplo 3: Configuración y Validación
```php
function inicializarSistema($configuracion) {
    eBkgNote(
        "Iniciando configuración del sistema",
        'CONFIGURACION',
        ['version' => $configuracion['version']]
    );
    
    // Validar configuración
    $configValida = validarConfiguracion($configuracion);
    eBkgNote(
        $configValida ? "Configuración válida" : "Configuración con advertencias",
        'VALIDACION_CONFIG',
        ['resultado' => $configValida ? 'VALIDA' : 'ADVERTENCIAS'],
        $configValida ? 'INFO' : 'WARN'
    );
    
    // Conectar a base de datos
    $conexion = conectarBaseDatos($configuracion['database']);
    eBkgNote(
        "Conexión a base de datos establecida",
        'CONEXION_DB',
        [
            'host' => $configuracion['database']['host'],
            'database' => $configuracion['database']['name']
        ]
    );
    
    // Cargar módulos
    $modulos = cargarModulos($configuracion['modulos']);
    eBkgNote(
        "Módulos cargados",
        'MODULOS',
        [
            'modulos_solicitados' => count($configuracion['modulos']),
            'modulos_cargados' => count($modulos)
        ]
    );
    
    eBkgNote(
        "Sistema inicializado correctamente",
        'SISTEMA_LISTO'
    );
}
```

### Ejemplo 4: Sincronización de Datos
```php
function sincronizarConSistemaExterno($configuracion) {
    eBkgNote(
        "Iniciando sincronización con sistema externo",
        'SINCRONIZACION',
        [
            'sistema' => $configuracion['nombre'],
            'endpoint' => $configuracion['url']
        ]
    );
    
    // Obtener datos locales
    $datosLocales = obtenerDatosLocales();
    eBkgNote(
        "Datos locales obtenidos",
        'DATOS_LOCALES',
        ['total_registros' => count($datosLocales)]
    );
    
    // Obtener datos remotos
    $datosRemotos = obtenerDatosRemotos($configuracion);
    eBkgNote(
        "Datos remotos obtenidos",
        'DATOS_REMOTOS',
        ['total_registros' => count($datosRemotos)]
    );
    
    // Comparar