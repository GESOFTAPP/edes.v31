# eTron

## Descripción

La función `eTron()` es una herramienta de **depuración y rastreo** diseñada exclusivamente para tiempo de desarrollo. Permite grabar el contenido de variables en un fichero de texto personal para su posterior análisis.

> ⚠️ **Importante**: Esta función solo debe utilizarse durante el desarrollo, nunca en producción.

## Sintaxis

```php
eTron($txt [, $ConDelimitador=false [, $InicializarTron=false/SQL]])
eTron(Array)
```

### Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| `$txt` | `string\|array\|null` | Contenido a grabar en el fichero de trazas | ✓ |
| `$ConDelimitador` | `boolean` | Indica si usar delimitadores en la salida | ✗ |
| `$InicializarTron` | `boolean\|string` | Si es "sql", las trazas se verán en "Ver SQL" | ✗ |

## Funcionalidad

### Grabación de Trazas

- **Fichero personal**: La información se graba en un fichero específico para cada usuario
- **Visualización**: Accesible desde el editor `gsEdit` → opción **"TRON leer"**
- **Formato flexible**: Acepta tanto cadenas como matrices

### Comportamiento Especial

#### Modo SQL
```php
eTron($consulta, false, "sql");
```
- Cuando `$InicializarTron = "sql"`, las trazas se visualizan en la opción **"Ver SQL"**
- Útil para depurar consultas de base de datos

#### Procesos Background
- **Ubicación**: `/_tmp/err/__tron.[$_User]`
- **Limpieza**: Si `$txt = NULL`, limpia el fichero de trazas
- **Automático**: Se gestiona automáticamente en procesos de fondo

### Casos de Uso

#### Depuración de Variables
```php
// Trazar una variable simple
$usuario = "admin";
eTron($usuario);

// Trazar un array
$datos = ["nombre" => "Juan", "edad" => 30];
eTron($datos);
```

#### Depuración de SQL
```php
$query = "SELECT * FROM usuarios WHERE activo = 1";
eTron($query, false, "sql");
```

#### Limpieza de Trazas
```php
// Limpiar el fichero de trazas
eTron(NULL);
```

## Flujo de Trabajo

```mermaid
graph TD
    A[Llamada a eTron] --> B{Proceso Background?}
    B -->|Sí| C[Graba en /_tmp/err/__tron.[$_User]]
    B -->|No| D[Graba en fichero personal]
    C --> E{$txt es NULL?}
    E -->|Sí| F[Limpia fichero]
    E -->|No| G[Añade contenido]
    D --> H{$InicializarTron = 'sql'?}
    H -->|Sí| I[Visible en 'Ver SQL']
    H -->|No| J[Visible en 'TRON leer']
```

## Ejemplos Prácticos

### Ejemplo 1: Depuración Básica
```php
function procesarUsuario($datos) {
    eTron("Iniciando procesamiento de usuario");
    eTron($datos);
    
    // Lógica de procesamiento
    $resultado = validarDatos($datos);
    
    eTron("Resultado de validación: " . $resultado);
    return $resultado;
}
```

### Ejemplo 2: Depuración SQL
```php
function obtenerUsuarios($filtros) {
    $sql = "SELECT * FROM usuarios";
    if (!empty($filtros)) {
        $sql .= " WHERE " . implode(" AND ", $filtros);
    }
    
    // Trazar la consulta SQL
    eTron($sql, false, "sql");
    
    return ejecutarConsulta($sql);
}
```

### Ejemplo 3: Limpieza de Trazas
```php
function inicializarDepuracion() {
    // Limpiar trazas anteriores
    eTron(NULL);
    eTron("=== Nueva sesión de depuración ===");
}
```

## Visualización de Resultados

### Desde gsEdit
1. Abrir el editor `gsEdit`
2. Seleccionar la opción **"TRON leer"**
3. Visualizar las trazas grabadas

### Desde Ver SQL
1. Acceder a la opción **"Ver SQL"**
2. Visualizar las trazas marcadas como SQL

## Buenas Prácticas

### ✅ Recomendaciones
- Utilizar nombres descriptivos en las trazas
- Limpiar las trazas al inicio de nuevas sesiones
- Usar el modo SQL para consultas de base de datos
- Combinar con otros métodos de depuración

### ❌ Evitar
- Dejar llamadas a `eTron()` en código de producción
- Trazar información sensible (contraseñas, tokens)
- Sobrecargar el fichero con demasiadas trazas

### Ejemplo de Uso Completo
```php
// Inicializar depuración
eTron(NULL); // Limpiar trazas anteriores
eTron("=== Inicio de procesamiento ===");

// Trazar datos de entrada
$requestData = $_POST;
eTron("Datos recibidos:", true);
eTron($requestData);

// Trazar consulta SQL
$sql = "SELECT * FROM productos WHERE categoria = ?";
eTron($sql, false, "sql");

// Trazar resultado
$productos = ejecutarConsulta($sql, [$categoria]);
eTron("Productos encontrados: " . count($productos));

eTron("=== Fin de procesamiento ===");
```

## Notas Técnicas

- **Rendimiento**: Mínimo impacto en desarrollo
- **Seguridad**: Solo para entornos de desarrollo
- **Persistencia**: Los ficheros se mantienen entre sesiones
- **Concurrencia**: Cada usuario tiene su propio fichero de trazas