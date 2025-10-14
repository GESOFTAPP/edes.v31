# eScript

## Descripción

La función `eScript()` es una utilidad del sistema que **resuelve y devuelve la trayectoria real** de un fichero dentro de la estructura de directorios de la aplicación. Esta función maneja automáticamente diferentes ubicaciones según el prefijo del nombre del fichero.

## Sintaxis

```php
eScript($File)
```

### Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| `$File` | `string` | Nombre del fichero a localizar | ✓ |

### Valor de Retorno

| Tipo | Descripción |
|------|-------------|
| `string` | Ruta completa del fichero en el sistema |

## Reglas de Resolución de Rutas

La función `eScript()` maneja **cuatro tipos de rutas** según el prefijo del nombre del fichero:

### 1. Ruta Relativa (sin prefijo)
```php
eScript('empresa.edf')
```
- **Patrón**: Sin `/` al inicio
- **Directorio**: `.../Aplicacion/d/`
- **Resultado**: `.../Aplicacion/d/empresa.edf`

### 2. Ruta Absoluta Aplicación (un `/`)
```php
eScript('/http/publico.html')
```
- **Patrón**: Comienza con `/`
- **Directorio**: `.../Aplicacion/`
- **Resultado**: `.../Aplicacion/http/publico.html`

### 3. Ruta Absoluta Archivos (dos `//`)
```php
eScript('//documento.pdf')
```
- **Patrón**: Comienza con `//`
- **Directorio**: `.../Aplicacion.file/`
- **Resultado**: `.../Aplicacion.file/documento.pdf`

### 4. Ruta Paralela (prefijo `=`)
```php
eScript('=config/settings.ini')
```
- **Patrón**: Comienza con `=`
- **Directorio**: Paralelo al directorio principal
- **Resultado**: Directorio hermano a la aplicación

## Ejemplos Detallados

### Ejemplo 1: Ficheros de Definición
```php
// Fichero en directorio d/
$rutaEmpresa = eScript('empresa.edf');
// Resultado: .../Aplicacion/d/empresa.edf

// Fichero en subdirectorio
$rutaAgencia = eScript('em/agencia.edf');
// Resultado: .../Aplicacion/d/em/agencia.edf

// Fichero en subdirectorio profundo
$rutaDetalle = eScript('modulos/ventas/producto.edf');
// Resultado: .../Aplicacion/d/modulos/ventas/producto.edf
```

### Ejemplo 2: Ficheros Web
```php
// Fichero HTML público
$rutaPublico = eScript('/http/publico.html');
// Resultado: .../Aplicacion/http/publico.html

// Fichero CSS
$rutaEstilo = eScript('/assets/css/main.css');
// Resultado: .../Aplicacion/assets/css/main.css

// Fichero JavaScript
$rutaScript = eScript('/js/utils.js');
// Resultado: .../Aplicacion/js/utils.js
```

### Ejemplo 3: Ficheros de Documentos
```php
// Documento PDF
$rutaDocumento = eScript('//documento.pdf');
// Resultado: .../Aplicacion.file/documento.pdf

// Documento en subdirectorio
$rutaLaboral = eScript('//laboral/documento.pdf');
// Resultado: .../Aplicacion.file/laboral/documento.pdf

// Imagen
$rutaImagen = eScript('//imagenes/logo.png');
// Resultado: .../Aplicacion.file/imagenes/logo.png
```

### Ejemplo 4: Ficheros de Configuración
```php
// Fichero de configuración paralelo
$rutaConfig = eScript('=config/database.ini');
// Resultado: .../config/database.ini (fuera de Aplicacion/)

// Logs paralelos
$rutaLogs = eScript('=logs/error.log');
// Resultado: .../logs/error.log
```

## Casos de Uso Prácticos

### Carga de Ficheros de Definición
```php
function cargarDefinicion($nombre) {
    $rutaCompleta = eScript($nombre . '.edf');
    
    if (file_exists($rutaCompleta)) {
        return include($rutaCompleta);
    } else {
        throw new Exception("Definición no encontrada: $nombre");
    }
}

// Uso
$definicionEmpresa = cargarDefinicion('empresa');
$definicionProducto = cargarDefinicion('productos/producto');
```

### Inclusión de Recursos Web
```php
function incluirRecurso($tipo, $nombre) {
    switch ($tipo) {
        case 'css':
            $ruta = eScript("/assets/css/$nombre.css");
            break;
        case 'js':
            $ruta = eScript("/assets/js/$nombre.js");
            break;
        case 'template':
            $ruta = eScript("/templates/$nombre.html");
            break;
        default:
            throw new Exception("Tipo de recurso no válido: $tipo");
    }
    
    return $ruta;
}

// Uso
$rutaCSS = incluirRecurso('css', 'main');
$rutaJS = incluirRecurso('js', 'utils');
```

### Gestión de Documentos
```php
function obtenerDocumento($categoria, $nombre) {
    $rutaDocumento = eScript("//$categoria/$nombre");
    
    if (file_exists($rutaDocumento)) {
        return [
            'ruta' => $rutaDocumento,
            'size' => filesize($rutaDocumento),
            'modified' => filemtime($rutaDocumento)
        ];
    }
    
    return null;
}

// Uso
$documento = obtenerDocumento('contratos', 'contrato_123.pdf');
$manual = obtenerDocumento('manuales', 'manual_usuario.pdf');
```

### Configuración Dinámica
```php
function cargarConfiguracion($entorno) {
    $configuraciones = [
        'desarrollo' => eScript('=config/dev.ini'),
        'produccion' => eScript('=config/prod.ini'),
        'testing' => eScript('=config/test.ini')
    ];
    
    $rutaConfig = $configuraciones[$entorno] ?? null;
    
    if ($rutaConfig && file_exists($rutaConfig)) {
        return parse_ini_file($rutaConfig, true);
    }
    
    throw new Exception("Configuración no encontrada para: $entorno");
}
```

## Estructura de Directorios

```
Aplicacion/
├── d/                          # Ficheros de definición (sin prefijo)
│   ├── empresa.edf
│   ├── em/
│   │   └── agencia.edf
│   └── modulos/
│       └── ventas/
│           └── producto.edf
├── http/                       # Ficheros web (prefijo /)
│   ├── publico.html
│   └── assets/
│       ├── css/
│       └── js/
├── templates/                  # Plantillas (prefijo /)
└── api/                       # APIs (prefijo /)

Aplicacion.file/               # Ficheros de documentos (prefijo //)
├── documento.pdf
├── laboral/
│   └── documento.pdf
└── imagenes/
    └── logo.png

config/                        # Configuraciones paralelas (prefijo =)
├── database.ini
├── dev.ini
└── prod.ini

logs/                          # Logs paralelos (prefijo =)
└── error.log
```

## Tabla de Referencia Rápida

| Prefijo | Directorio Base | Uso Típico | Ejemplo |
|---------|-----------------|------------|---------|
| *(ninguno)* | `Aplicacion/d/` | Definiciones, lógica de negocio | `empresa.edf` |
| `/` | `Aplicacion/` | Recursos web, APIs, plantillas | `/http/index.html` |
| `//` | `Aplicacion.file/` | Documentos, archivos estáticos | `//docs/manual.pdf` |
| `=` | Paralelo a aplicación | Configuraciones, logs externos | `=config/app.ini` |

## Funciones Auxiliares Recomendadas

### Verificación de Existencia
```php
function scriptExiste($archivo) {
    $rutaCompleta = eScript($archivo);
    return file_exists($rutaCompleta);
}

// Uso
if (scriptExiste('empresa.edf')) {
    $definicion = include(eScript('empresa.edf'));
}
```

### Obtener Información del Fichero
```php
function infoScript($archivo) {
    $rutaCompleta = eScript($archivo);
    
    if (!file_exists($rutaCompleta)) {
        return null;
    }
    
    return [
        'ruta' => $rutaCompleta,
        'tamaño' => filesize($rutaCompleta),
        'modificado' => filemtime($rutaCompleta),
        'extension' => pathinfo($rutaCompleta, PATHINFO_EXTENSION)
    ];
}
```

### Listar Ficheros por Directorio
```php
function listarScripts($directorio = '') {
    $rutaBase = eScript($directorio);
    $rutaCompleta = dirname($rutaBase);
    
    if (is_dir($rutaCompleta)) {
        return scandir($rutaCompleta);
    }
    
    return [];
}
```

## Buenas Prácticas

### ✅ Recomendaciones
- Utilizar prefijos consistentes según el tipo de fichero
- Verificar existencia antes de incluir ficheros
- Usar rutas relativas para ficheros de definición
- Documentar la estructura de directorios del proyecto

### ❌ Evitar
- Mezclar tipos de ficheros en directorios incorrectos
- Hardcodear rutas absolutas del sistema
- Omitir validaciones de existencia de ficheros
- Usar rutas con caracteres especiales sin escapar

### Ejemplo de Uso Completo
```php
class GestorArchivos {
    public function cargarDefinicion($nombre) {
        $ruta = eScript($nombre . '.edf');
        
        if (!file_exists($ruta)) {
            throw new Exception("Definición no encontrada: $nombre");
        }
        
        return include($ruta);
    }
    
    public function servirDocumento($categoria, $documento) {
        $ruta = eScript("//$categoria/$documento");
        
        if (!file_exists($ruta)) {
            http_response_code(404);
            return false;
        }
        
        $mime = mime_content_type($ruta);
        header("Content-Type: $mime");
        header("Content-Length: " . filesize($ruta));
        
        readfile($ruta);
        return true;
    }
    
    public function obtenerConfiguracion($archivo) {
        $ruta = eScript("=$archivo");
        
        if (file_exists($ruta)) {
            return parse_ini_file($ruta, true);
        }
        
        return [];
    }
}
```

## Notas Técnicas

- **Rendimiento**: Resolución inmediata de rutas
- **Seguridad**: No permite acceso fuera de directorios permitidos
- **Compatibilidad**: Funciona en todos los contextos de ejecución
- **Portabilidad**: Abstrae las diferencias de sistema operativo