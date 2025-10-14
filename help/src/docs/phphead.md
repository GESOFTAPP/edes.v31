# PHPHead

## SINTAXIS

```
[PHPHead] Mode [[ | NomDF/else,... ] | UNIQUE/Condition ] ...
código_php
```

## DESCRIPCIÓN

Permite incluir código PHP personalizado que se ejecuta en la sección HEAD del documento, antes de generar el contenido HTML. Esta etiqueta es ideal para definir funciones, variables globales, configuraciones y lógica que debe estar disponible durante toda la ejecución de la página.

El código PHP se ejecuta en el servidor antes de enviar cualquier contenido al navegador, permitiendo realizar configuraciones, conexiones a bases de datos, validaciones y otras operaciones del lado del servidor.

## PARÁMETROS

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Mode** | Cadena | Modo de ejecución donde se ejecutará el código PHP |
| **NomDF** | Cadena (opcional) | Nombres de formularios específicos separados por comas |
| **else** | Palabra clave | Para ejecutar en formularios no especificados |
| **UNIQUE** | Palabra clave | Evita la ejecución múltiple del mismo código |
| **Condition** | Cadena | Condición específica para la ejecución |

## PARÁMETRO UNIQUE

El parámetro `UNIQUE` es especialmente importante cuando se declaran funciones PHP, ya que evita errores de redeclaración cuando el mismo código se incluye en múltiples modos.

```php
// Sin UNIQUE - Puede causar error "Cannot redeclare function"
[PHPHead] c,m | 
function miFuncion() { ... }

// Con UNIQUE - Se declara solo una vez
[PHPHead] c,m | UNIQUE
function miFuncion() { ... }
```

## EJEMPLOS

### Función personalizada con UNIQUE
```php
[PHPHead] * | UNIQUE
<?php
function formatearFecha($fecha) {
    return date('d/m/Y', strtotime($fecha));
}

function validarEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
?>
```

### Variables globales por modo
```php
[PHPHead] c,m
<?php
$modo_edicion = true;
$timestamp_inicio = time();
?>
```

### Configuración de base de datos
```php
[PHPHead] * | UNIQUE
<?php
// Configuración de conexión
define('DB_HOST', 'localhost');
define('DB_NAME', 'mi_base_datos');
define('DB_CHARSET', 'utf8');

// Función de conexión
function conectarBD() {
    static $conexion = null;
    if ($conexion === null) {
        $conexion = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET,
            DB_USER, DB_PASS
        );
    }
    return $conexion;
}
?>
```

### Código específico para formularios
```php
[PHPHead] c | usuarios,clientes
<?php
$campos_requeridos = ['nombre', 'email', 'telefono'];
$validaciones_activas = true;
?>
```

### Utilidades de sesión
```php
[PHPHead] * | UNIQUE
<?php
function iniciarSesionSegura() {
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
        session_regenerate_id(true);
    }
}

function obtenerUsuarioActual() {
    return $_SESSION['usuario'] ?? null;
}

function esAdministrador() {
    $usuario = obtenerUsuarioActual();
    return $usuario && $usuario['rol'] === 'admin';
}
?>
```

## CASOS DE USO COMUNES

### Funciones de utilidad
```php
[PHPHead] * | UNIQUE
<?php
function limpiarTexto($texto) {
    return htmlspecialchars(trim($texto), ENT_QUOTES, 'UTF-8');
}

function generarToken() {
    return bin2hex(random_bytes(32));
}
?>
```

### Configuración de idioma
```php
[PHPHead] *
<?php
$idioma = $_SESSION['idioma'] ?? 'es';
$textos = cargarIdioma($idioma);
?>
```

### Validaciones personalizadas
```php
[PHPHead] c,m | UNIQUE
<?php
function validarCamposRequeridos($datos, $campos) {
    foreach ($campos as $campo) {
        if (empty($datos[$campo])) {
            return "El campo $campo es requerido";
        }
    }
    return true;
}

function validarTelefono($telefono) {
    return preg_match('/^[0-9]{9,15}$/', $telefono);
}
?>
```

### Configuración de permisos
```php
[PHPHead] * | UNIQUE
<?php
function verificarPermisos($accion) {
    $usuario = obtenerUsuarioActual();
    $permisos = $usuario['permisos'] ?? [];
    return in_array($accion, $permisos);
}

function redirigirSinPermisos() {
    header('Location: /sin-permisos.php');
    exit;
}
?>
```

## ESTRUCTURA TÍPICA

```php
[PHPHead] * | UNIQUE
<?php
// 1. Constantes y configuración
define('VERSION_APP', '1.0.0');
define('DEBUG_MODE', false);

// 2. Funciones de utilidad
function log_error($mensaje) {
    if (DEBUG_MODE) {
        error_log($mensaje);
    }
}

// 3. Funciones de validación
function es_email_valido($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// 4. Funciones de formato
function formatear_moneda($cantidad) {
    return number_format($cantidad, 2, ',', '.') . ' €';
}
?>
```

## CONSIDERACIONES IMPORTANTES

### Uso de UNIQUE
- **Siempre usar** `UNIQUE` cuando se declaren funciones
- **Evita errores** de redeclaración en múltiples modos
- **Mejora rendimiento** al no ejecutar código repetidamente

### Buenas prácticas
- **Validar datos** antes de procesarlos
- **Manejar errores** adecuadamente
- **Usar funciones** para código reutilizable
- **Documentar** funciones complejas

### Seguridad
- **Sanitizar entradas** del usuario
- **Validar permisos** antes de operaciones sensibles
- **Usar prepared statements** para consultas SQL
- **No exponer** información sensible

## NOTAS IMPORTANTES

- **Ejecución**: El código se ejecuta antes del HTML
- **Alcance**: Las variables y funciones están disponibles en toda la página
- **Orden**: Se ejecuta antes que el contenido del BODY
- **Errores**: Los errores PHP pueden impedir la carga de la página
- **Rendimiento**: Evitar código pesado que retrase la carga

## DEBUGGING

```php
[PHPHead] * | UNIQUE
<?php
function debug($variable, $etiqueta = 'DEBUG') {
    if (defined('DEBUG_MODE') && DEBUG_MODE) {
        echo "<pre>[$etiqueta]: ";
        print_r($variable);
        echo "</pre>";
    }
}

function log_consulta($sql) {
    if (defined('DEBUG_MODE') && DEBUG_MODE) {
        error_log("SQL: " . $sql);
    }
}
?>
```