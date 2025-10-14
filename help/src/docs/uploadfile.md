# UploadFile

## Descripción General

La etiqueta `UploadFile` configura el envío y gestión de archivos al servidor, proporcionando un sistema completo de carga con múltiples opciones de configuración, validación y procesamiento automático.

## Sintaxis

```
[UploadFile] Field | Folder | Filename | Bytes [ | Title ] [ | Extensiones | Prefijo/Sufijo | Tamaños | Prefijos | ConCopia ]
```

## Parámetros

### Parámetros Obligatorios

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Nombre del campo de archivo a subir |
| **Folder** | Carpeta de destino en el servidor |
| **Filename** | Nombre que se asignará al archivo |
| **Bytes** | Tamaño máximo del archivo (con separadores de miles) |

### Parámetros Opcionales

| Parámetro | Descripción |
|-----------|-------------|
| **Title** | Título del icono para visualizar el archivo (por defecto: "Ver fichero") |
| **Extensiones** | Lista de extensiones permitidas separadas por comas |
| **Prefijo/Sufijo** | Prefijo o sufijo para el nombre del archivo |
| **Tamaños** | Dimensiones para redimensionamiento automático |
| **Prefijos** | Prefijos para múltiples copias |
| **ConCopia** | Directorio para crear copias adicionales |

## Configuración Avanzada

### Variables de Ubicación

Para obtener la ruta donde se guardó el archivo:

```php
// Opción 1: Variable $_FILES
$_FILES[Field]["tmp_name"]

// Opción 2: Variable global
$GLOBALS["Field_tmp_name"]
```

### Control de Espacio en Disco

```php
// Activar control de espacio disponible
$_CNTFREEDISKSPACE = true;

// Definir tamaño máximo en Gigabytes
$_CNTDISKSPACE = 10; // 10 GB máximo
```

### Rutas por Defecto

```php
// Tipo de ruta: "G" (global) o "S" (script actual)
$_DefaultPathType = "G";

// Sufijo del archivo de configuración de directorio
$_DefaultPathFile = "config";

// Directorio de lectura
$PathLoad = "/uploads/read/";

// Directorio de escritura
$PathSave = "/uploads/save/";
```

## Funcionalidades Especiales

### 1. Balanceo de Directorios

Utiliza el símbolo `!` para distribuir archivos entre múltiples directorios:

```
Folder: /doc/!!!
Archivo: 1234.pdf
Resultado: /doc/234/1234.pdf
```

**Reglas del balanceo**:
- Los `!` se reemplazan por los últimos caracteres del nombre del archivo
- Si el nombre es más corto, se rellena con ceros por la izquierda
- Todos los `!` deben ir juntos
- Se crean los directorios automáticamente si no existen

### 2. Almacenamiento en Base de Datos

```
Folder: [vacío]
Resultado: El archivo se guarda en la base de datos en el campo "Filename"
```

### 3. Nombres de Archivo Dinámicos

#### Nombre Constante
```
Filename: =manual
Resultado: manual.pdf (extensión automática)
```

#### Con Variables
```
Filename: documento_{$usuario}_{$fecha}
Resultado: documento_juan_20250618.pdf
```

## Carga Asíncrona

### Activación Básica

```
[AddCode] a,mR | fichero | I | e-async=1
```

### Con Script de Procesamiento

```
[AddCode] * | fichero | I | e-async='dir/upload_file.php'
```

### Parámetros del Script de Procesamiento

```php
$DBTable  = $argv[1];  // Nombre de la tabla
$field    = $argv[2];  // Nombre del campo file
$DBSerial = $argv[3];  // Nombre del campo serial
$serial   = $argv[4];  // Valor del serial
$file     = $argv[5];  // Nombre del fichero
```

## Redimensionamiento de Imágenes

### Sintaxis de Tamaños

```
Tamaños: Ancho,Alto[,Ancho2,Alto2,...]
```

### Opciones de Redimensionamiento

- **Proporcional**: `120,` o `,80` (calcula automáticamente la otra dimensión)
- **Máximo**: `Max 200` (ajusta al tamaño máximo manteniendo proporción)
- **Múltiples**: `120,120,60,60` (crea varias versiones)

## Ejemplos Prácticos

### Ejemplo 1: Carga Básica de Fotos

```
[UploadFile] fichero | /_datos/fotos | cd_foto | 300.000 | Ver foto | gif,jpg,png
```

**Resultado**:
- Campo: `fichero`
- Directorio: `/_datos/fotos/`
- Nombre: Valor del campo `cd_foto`
- Límite: 300KB
- Extensiones: GIF, JPG, PNG

### Ejemplo 2: Múltiples Tamaños con Copias

```
[UploadFile] foto | /http/go | cd_regalo | 300.000 | Ver gráfico | jpg,gif,png | i_ | 120,120,60,60 | ig_,ip_ | /http/g
```

**Resultado**:
- Original en `/http/go/` con prefijo `i_`
- Copia en `/http/g/` con prefijo `ig_` (120x120)
- Copia en `/http/g/` con prefijo `ip_` (60x60)

### Ejemplo 3: Balanceo de Directorios

```
[UploadFile] fichero | //doc/!!! | cd_gs_store | 20.000.000 | | avi,wav,mp3,mp4,txt,doc,docx,xls,xlsx,pdf,htm,html,pps,ppt
```

**Resultado**:
- Distribuye archivos entre 999 directorios
- Archivos grandes hasta 20MB
- Múltiples formatos de archivo

### Ejemplo 4: Directorio Dinámico

```
[UploadFile] archivo | =intranet.datos/{SESS::$_Cli_}/files | cd_docu | 5.000.000 | Seleccionar documento | txt,doc,pdf,xls,htm,html,rtf,ppt,docx,xlsx,gif,jpeg,jpg,png,tiff | | | | | true
```

**Resultado**:
- Directorio personalizado por cliente
- Documentos hasta 5MB
- Amplia variedad de formatos

## Funciones de Usuario

### Función eBeforeUploadFile()

```php
function eBeforeUploadFile() {
    // Código personalizado antes de mover archivos
    // Se ejecuta después del alta del registro
}
```

### Modificación de Extensiones

```php
[PHPIni] A,M
if(mb_substr($_POST["filename"], -4) == ".txt") {
    $_POST["filename"] = str_replace(".txt", ".csv", $_POST["filename"]);
    $_POST["_FILE_filename"] = str_replace(".txt", ".csv", $_POST["_FILE_filename"]);
}
```

## Configuración JavaScript

### Recorte Automático de Nombres

```javascript
// Permite recortar nombres largos para que entren en el campo
var _FileTrimName = true;
```

## Consideraciones de Seguridad

### Validación de Extensiones

- Siempre especifique extensiones permitidas
- Evite extensiones ejecutables (.php, .exe, .bat)
- Valide el contenido del archivo, no solo la extensión

### Control de Tamaño

- Establezca límites apropiados para evitar ataques DoS
- Configure límites a nivel de servidor (PHP.ini)
- Monitoree el espacio en disco disponible

### Nombres de Archivo

- Evite caracteres especiales en nombres de archivo
- Sanitice nombres de archivo para prevenir ataques de directorio
- Use nombres únicos para evitar conflictos

## Mejores Prácticas

1. **Validación múltiple**: Cliente y servidor
2. **Límites apropiados**: Tamaño y tipos de archivo
3. **Estructura de directorios**: Organización lógica
4. **Respaldos**: Copias de seguridad de archivos importantes
5. **Monitoreo**: Seguimiento del uso de espacio en disco
6. **Limpieza**: Eliminación de archivos temporales

## Solución de Problemas

### Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| "File too large" | Archivo excede límite | Verificar configuración PHP y parámetro Bytes |
| "Invalid extension" | Extensión no permitida | Revisar lista de extensiones |
| "Directory not found" | Carpeta no existe | Crear directorio o verificar permisos |
| "Upload failed" | Error de servidor | Verificar permisos y espacio en disco |

---

*Esta documentación describe el sistema UploadFile para la gestión completa de carga de archivos en aplicaciones web.*