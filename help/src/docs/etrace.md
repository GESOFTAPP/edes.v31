# eTrace

## Descripción

La función `eTrace()` es una herramienta de **depuración y rastreo inmediato** que muestra información directamente en pantalla durante el desarrollo. A diferencia de `eTron()`, esta función proporciona feedback visual inmediato.

> ⚠️ **Importante**: Esta función solo debe utilizarse durante el desarrollo, nunca en producción.

## Sintaxis

```php
eTrace($txt, $tipo=false)
eTrace(Array)
```

### Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| `$txt` | `string\|array` | Contenido a mostrar en pantalla | ✓ |
| `$tipo` | `boolean` | Controla el modo de visualización | ✗ |

## Funcionalidad

### Modos de Visualización

#### Modo JavaScript (tipo = true)
```php
eTrace($mensaje, true);
```
- **Salida**: Alert de JavaScript `alert()`
- **Uso**: Depuración de scripts del lado cliente
- **Ventaja**: Interrupción visual inmediata

#### Modo HTML (tipo = false)
```php
eTrace($mensaje, false); // o simplemente eTrace($mensaje)
```
- **Salida**: Texto HTML sin resaltar
- **Uso**: Depuración de scripts del lado servidor
- **Ventaja**: No interrumpe el flujo de ejecución

### Comportamiento por Contexto

#### Proceso Normal
- **JavaScript**: Muestra `alert()` en el navegador
- **HTML**: Muestra texto plano en la página

#### Proceso Background
- **Ubicación**: `/_tmp/err/_log.err`
- **Función**: Graba la información en fichero de log
- **Persistencia**: Mantiene historial de trazas

## Comparación con eTron

| Característica | eTrace | eTron |
|----------------|--------|-------|
| **Visualización** | Inmediata en pantalla | Fichero de trazas |
| **Interrupción** | Puede interrumpir (alert) | No interrumpe |
| **Persistencia** | Solo en background | Siempre persiste |
| **Acceso** | Directo visual | Desde gsEdit |

## Ejemplos Prácticos

### Ejemplo 1: Depuración JavaScript
```php
function validarFormulario() {
    $errores = [];
    
    if (empty($_POST['nombre'])) {
        $errores[] = "Nombre requerido";
    }
    
    if (!empty($errores)) {
        // Mostrar errores en alert
        eTrace("Errores encontrados: " . implode(", ", $errores), true);
        return false;
    }
    
    eTrace("Formulario validado correctamente", true);
    return true;
}
```

### Ejemplo 2: Depuración HTML
```php
function procesarDatos($datos) {
    eTrace("Iniciando procesamiento de datos");
    eTrace($datos); // Mostrar array completo
    
    foreach ($datos as $key => $valor) {
        eTrace("Procesando: $key = $valor");
        // Lógica de procesamiento
    }
    
    eTrace("Procesamiento completado");
}
```

### Ejemplo 3: Depuración de Arrays
```php
function analizarConfiguracion() {
    $config = [
        'database' => [
            'host' => 'localhost',
            'port' => 3306,
            'name' => 'mi_db'
        ],
        'cache' => [
            'enabled' => true,
            'ttl' => 3600
        ]
    ];
    
    // Mostrar configuración completa
    eTrace("Configuración del sistema:");
    eTrace($config);
}
```

## Casos de Uso Específicos

### Depuración de Formularios
```php
function manejarFormulario() {
    eTrace("Datos POST recibidos:", true);
    eTrace($_POST, true);
    
    if (validarDatos($_POST)) {
        eTrace("Validación exitosa", true);
        // Procesar datos
    } else {
        eTrace("Error en validación", true);
    }
}
```

### Depuración de APIs
```php
function procesarAPI($request) {
    eTrace("Request API:");
    eTrace($request);
    
    $response = generarRespuesta($request);
    
    eTrace("Response API:");
    eTrace($response);
    
    return $response;
}
```

### Depuración de Consultas
```php
function ejecutarConsulta($sql, $params = []) {
    eTrace("Ejecutando consulta: $sql");
    eTrace("Parámetros:", false);
    eTrace($params, false);
    
    $resultado = /* ejecutar consulta */;
    
    eTrace("Filas afectadas: " . count($resultado));
    return $resultado;
}
```

## Flujo de Trabajo

```mermaid
graph TD
    A[Llamada a eTrace] --> B{Contexto de ejecución}
    B -->|Navegador| C{$tipo = true?}
    B -->|Background| D[Graba en _log.err]
    C -->|Sí| E[Muestra alert()]
    C -->|No| F[Muestra texto HTML]
    D --> G[Log persistente]
    E --> H[Usuario ve alert]
    F --> I[Usuario ve texto]
```

## Estrategias de Depuración

### Depuración Progresiva
```php
function algoritmoComplejo($datos) {
    eTrace("=== Inicio algoritmo ===");
    
    // Paso 1
    eTrace("Paso 1: Validación");
    $validados = validarDatos($datos);
    eTrace("Datos validados: " . count($validados));
    
    // Paso 2
    eTrace("Paso 2: Transformación");
    $transformados = transformarDatos($validados);
    eTrace("Datos transformados: " . count($transformados));
    
    // Paso 3
    eTrace("Paso 3: Guardado");
    $guardados = guardarDatos($transformados);
    eTrace("Datos guardados: " . count($guardados));
    
    eTrace("=== Fin algoritmo ===");
    return $guardados;
}
```

### Depuración Condicional
```php
function depurarSiError($datos, $resultado) {
    if ($resultado === false) {
        eTrace("ERROR: Procesamiento fallido", true);
        eTrace("Datos que causaron el error:", true);
        eTrace($datos, true);
    }
}
```

## Buenas Prácticas

### ✅ Recomendaciones
- Usar `$tipo = true` para errores críticos que requieren atención inmediata
- Usar `$tipo = false` para trazas de flujo que no interrumpan
- Combinar con `eTron()` para depuración completa
- Usar mensajes descriptivos y estructurados

### ❌ Evitar
- Dejar llamadas a `eTrace()` en producción
- Usar alerts excesivos que molesten al usuario
- Trazar información sensible en pantalla
- Sobrecargar la salida con demasiadas trazas

### Ejemplo de Uso Completo
```php
function procesarPedido($pedido) {
    eTrace("=== Procesando pedido ===");
    eTrace($pedido);
    
    try {
        // Validar pedido
        if (!validarPedido($pedido)) {
            eTrace("ERROR: Pedido inválido", true);
            return false;
        }
        
        // Procesar pago
        eTrace("Procesando pago...");
        $pago = procesarPago($pedido['pago']);
        
        if ($pago['success']) {
            eTrace("Pago procesado exitosamente");
        } else {
            eTrace("ERROR: Pago falló - " . $pago['error'], true);
            return false;
        }
        
        // Actualizar inventario
        eTrace("Actualizando inventario...");
        actualizarInventario($pedido['items']);
        
        eTrace("Pedido procesado exitosamente");
        return true;
        
    } catch (Exception $e) {
        eTrace("EXCEPCIÓN: " . $e->getMessage(), true);
        return false;
    }
}
```

## Notas Técnicas

- **Rendimiento**: Impacto mínimo en desarrollo
- **Compatibilidad**: Funciona en contextos web y CLI
- **Formato**: Preserva la estructura de arrays y objetos
- **Logging**: Los procesos background mantienen historial automáticamente