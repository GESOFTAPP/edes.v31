# FileVar

## Sintaxis

```
[FileVar] NomFile
```

## Descripción

La etiqueta `FileVar` permite consultar o modificar mediante un formulario un archivo plano que contiene variables de configuración. Esta funcionalidad está diseñada para facilitar la gestión de configuraciones sin necesidad de editar manualmente archivos PHP.

> **📋 Disponibilidad**: Solo está activo en los modos `cR` (consulta) y `mR` (modificación).

## Parámetros

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| **NomFile** | Nombre del archivo de configuración a procesar | ✓ |

## Etiquetas especiales reconocidas

El sistema identifica automáticamente las siguientes etiquetas dentro del archivo:

- **`[Title]`**: Define el título del formulario
- **`[Help]`**: Proporciona texto de ayuda

## Reglas de procesamiento

### Comentarios y separadores
- **`//` al inicio de línea**: Genera un separador horizontal (HR)
- **`//[Title]` o `//[Help]`**: Se interpretan como etiquetas especiales
- **Comentarios multilínea**: Se omiten del procesamiento
- **Comentarios multilínea**: Los delimitadores `/*` y `*/` deben estar al principio de línea

### Variables editables
- **Variables con `$`**: Solo se procesan las variables que comienzan con `$` al inicio de línea
- **Etiquetas**: El texto después de `//` se usa como etiqueta del campo
- **Comandos PHP**: Informa sobre `if`, `else`, `switch`, `case`, `default`

### Tipos de campo especiales

| Prefijo en etiqueta | Tipo de campo | Descripción |
|---------------------|---------------|-------------|
| `[...]` | Select virtual | Crea un campo de selección con opciones predefinidas |
| `[*]` | Campo clave | Campo de entrada tipo password/clave |
| `-` | Solo lectura | Variable de solo lectura, no editable |
| Sin prefijo | Texto normal | Campo de texto estándar |

### Funcionalidades adicionales
- **Colores**: Los valores con formato `#000000` muestran un selector de color automáticamente
- **Grabado selectivo**: Solo guarda las variables que tengan `$` al principio de línea

## Ejemplos de uso

### Archivo de configuración básico
```php
<?php
//[Title] Configuración del Sistema
//[Help] Configure los parámetros básicos del sistema

// Configuración de usuario
$Usuario = 'NomUsuario';        // Usuario del sistema
$Email = 'admin@ejemplo.com';   // - Correo del administrador (solo lectura)

// Configuración de colores
$ColorPrimario = '#3498db';     // Color principal de la interfaz
$ColorSecundario = '#2ecc71';   // Color secundario

// Configuración de base de datos  
$TipoDB = 'mysql';              // [mysql,MySQL;postgres,PostgreSQL;sqlite,SQLite] Tipo de base de datos
$ClaveDB = '';                  // [*] Contraseña de la base de datos

// Configuración de entorno
$Entorno = 'desarrollo';        // [desarrollo,Desarrollo;produccion,Producción;testing,Testing] Entorno de ejecución

/*
Este es un comentario multilínea
que será ignorado por el procesador
*/

if ($Entorno == 'produccion') {
    $Debug = false;             // Desactivar debug en producción
} else {
    $Debug = true;              // Activar debug en desarrollo
}
?>
```

### Ejemplo con separadores y secciones
```php
<?php
//[Title] Configuración Avanzada
//[Help] Parámetros avanzados del sistema

// === CONFIGURACIÓN DE USUARIO ===
$NombreUsuario = 'admin';       // Nombre de usuario
$PerfilUsuario = 'administrador'; // [admin,Administrador;user,Usuario;guest,Invitado] Perfil

// === CONFIGURACIÓN DE INTERFAZ ===
$Tema = 'claro';                // [claro,Tema Claro;oscuro,Tema Oscuro] Tema de la interfaz
$ColorFondo = '#ffffff';        // Color de fondo
$ColorTexto = '#333333';        // Color del texto

// === CONFIGURACIÓN DE SEGURIDAD ===
$ClaveSecreta = '';             // [*] Clave secreta del sistema
$TokenAPI = '';                 // [*] Token de la API
$Timeout = '3600';              // Tiempo de sesión en segundos
$Licencia = 'ABC123-DEF456';    // - Número de licencia (solo lectura)
?>
```

### Ejemplo con lógica condicional
```php
<?php
$ModoDebug = 'si';              // [si,Activado;no,Desactivado] Modo debug

if ($ModoDebug == 'si') {
    $NivelLog = 'debug';        // [debug,Debug;info,Info;warning,Warning] Nivel de log
} else {
    $NivelLog = 'error';        // Solo errores cuando debug está desactivado
}

switch ($Entorno) {
    case 'desarrollo':
        $CacheActivo = 'no';    // [si,Activado;no,Desactivado] Cache
        break;
    case 'produccion':
        $CacheActivo = 'si';    // Cache siempre activo en producción
        break;
    default:
        $CacheActivo = 'no';    // Cache desactivado por defecto
}
?>
```

## Casos de uso comunes

### Configuración de aplicaciones
- Parámetros de conexión a base de datos
- Configuración de APIs externas
- Ajustes de interfaz de usuario

### Gestión de entornos
- Configuraciones específicas por entorno
- Variables de desarrollo vs producción
- Parámetros de debug y logging

### Personalización de temas
- Colores de la interfaz
- Configuración de estilos
- Preferencias de usuario

## Ventajas

- **Interfaz amigable**: No requiere editar archivos manualmente
- **Validación automática**: Campos tipados según el formato
- **Seguridad**: Campos de contraseña protegidos
- **Flexibilidad**: Soporte para diferentes tipos de datos
- **Mantenimiento**: Fácil gestión de configuraciones

## Consideraciones

- **Formato del archivo**: Debe seguir la sintaxis PHP válida
- **Permisos**: El archivo debe tener permisos de escritura
- **Backup**: Recomendable hacer copias de seguridad antes de modificar
- **Validaciones**: Implementar validaciones adicionales si es necesario