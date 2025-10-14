# PHPIni

## SINTAXIS
```
[PHPIni] Mode [[ | NomDF/else,... ] | UNIQUE/Condition ] ...
```

## DESCRIPCIÓN
Permite insertar código PHP personalizado que se ejecuta después de la etiqueta, durante la inicialización del documento. Esta etiqueta es útil para definir funciones, variables y lógica PHP que será utilizada en el procesamiento del lado del servidor antes de generar el HTML.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de ejecución del código PHP |
| **NomDF** | Nombre del formulario de datos o condición específica |
| **else** | Condición alternativa si no se cumple la condición principal |
| **UNIQUE** | Incluye el código una sola vez, evitando conflictos con declaraciones de funciones |
| **Condition** | Condición específica para la ejecución del código |

## PARÁMETRO UNIQUE
El parámetro **UNIQUE** es especialmente importante cuando se declaran funciones PHP, ya que evita errores de "función ya declarada" en caso de que el código se ejecute múltiples veces debido a diferentes modos o condiciones.

```php
[PHPIni] | | UNIQUE
<?php
function miFuncionPersonalizada() {
    // Esta función se declara solo una vez
    return "Resultado";
}
?>
```

## FUNCIONAMIENTO
- Se ejecuta durante la inicialización del procesamiento PHP
- Permite definir funciones y variables que estarán disponibles en todo el documento
- El código se ejecuta antes de la generación del HTML
- Soporta condiciones para ejecución condicional
- Puede utilizarse múltiples veces en el mismo documento

## EJEMPLOS

### Ejemplo básico - Variables y configuración
```
[PHPIni]
<?php
$configuracion = array(
    'version' => '2.1',
    'debug' => true,
    'limite_registros' => 100
);

$fecha_actual = date('Y-m-d H:i:s');
?>
```

### Ejemplo con función única
```
[PHPIni] | | UNIQUE
<?php
function formatearFecha($fecha) {
    return date('d/m/Y', strtotime($fecha));
}

function validarEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}
?>
```

### Ejemplo con condición de formulario
```
[PHPIni] | FormularioUsuarios
<?php
// Solo se ejecuta en el formulario de usuarios
$permisos_usuario = obtenerPermisos($_SESSION['usuario_id']);
$puede_editar = in_array('editar', $permisos_usuario);
?>
```

### Ejemplo con condición else
```
[PHPIni] | FormularioAdmin/else
<?php
if ($es_admin) {
    $opciones_disponibles = array('crear', 'editar', 'eliminar', 'reportes');
} else {
    $opciones_disponibles = array('ver');
}
?>
```

### Ejemplo con inicialización de base de datos
```
[PHPIni] | | UNIQUE
<?php
function conectarBD() {
    global $conexion_bd;
    if (!isset($conexion_bd)) {
        $conexion_bd = new PDO($dsn, $usuario, $password);
        $conexion_bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    return $conexion_bd;
}

function ejecutarConsulta($sql, $parametros = array()) {
    $bd = conectarBD();
    $stmt = $bd->prepare($sql);
    $stmt->execute($parametros);
    return $stmt;
}
?>
```

## CASOS DE USO
- **Definición de funciones**: Crear funciones PHP reutilizables
- **Configuración de variables**: Establecer configuraciones globales
- **Conexiones de base de datos**: Inicializar conexiones persistentes
- **Validaciones personalizadas**: Crear funciones de validación específicas
- **Carga de librerías**: Incluir archivos PHP adicionales
- **Inicialización de sesiones**: Configurar variables de sesión
- **Cálculos iniciales**: Realizar operaciones matemáticas o de datos

## RELACIÓN CON OTRAS ETIQUETAS

| Etiqueta | Momento de ejecución | Propósito |
|----------|---------------------|-----------|
| **PHPIni** | Inicialización del documento | Definir funciones y variables globales |
| **PHPHead** | En la sección `<head>` | Código PHP para metadatos y configuración |
| **PHPEnd** | Al final del procesamiento | Limpieza y operaciones finales |
| **PHPCheck** | Validación de formularios | Validaciones específicas de datos |

## BUENAS PRÁCTICAS
- **Use UNIQUE** siempre que declare funciones para evitar conflictos
- **Organice el código** por funcionalidad (conexiones, validaciones, utilidades)
- **Documente las funciones** para facilitar el mantenimiento
- **Maneje errores** adecuadamente en las funciones personalizadas
- **Use condiciones** para código específico de formularios

## EJEMPLO COMPLETO
```
[PHPIni] | | UNIQUE
<?php
// Configuración global
$config = array(
    'app_name' => 'Mi Aplicación',
    'version' => '1.0.0',
    'debug' => false
);

// Función para logging
function escribirLog($mensaje, $nivel = 'INFO') {
    $fecha = date('Y-m-d H:i:s');
    $linea = "[$fecha] [$nivel] $mensaje" . PHP_EOL;
    file_put_contents('logs/aplicacion.log', $linea, FILE_APPEND);
}

// Función para formatear datos
function formatearNumero($numero, $decimales = 2) {
    return number_format($numero, $decimales, ',', '.');
}

// Inicialización
escribirLog('Aplicación iniciada');
?>
```

## NOTAS
⚠️ **Importante**:
- Siempre use el parámetro UNIQUE cuando declare funciones
- El código PHP se ejecuta en el servidor antes de generar el HTML
- Las variables definidas aquí estarán disponibles en todo el documento
- Maneje los errores PHP adecuadamente para evitar interrumpir la generación de la página