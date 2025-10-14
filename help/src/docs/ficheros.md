# Documentación de Ficheros de Configuración y Tipos de Archivo

## Descripción General

El sistema utiliza diversos tipos de archivos de configuración ubicados en diferentes directorios para gestionar la aplicación, el entorno de desarrollo y funcionalidades específicas.

## Ficheros de Configuración Principal

### Ubicación: `/_datos/config/`

| Archivo | Descripción | Función |
|---------|-------------|---------|
| `about.htm` | Página acerca de la empresa | Información corporativa |
| `alerts.ini` | Configuración de alertas | Gestión de notificaciones |
| `aux_page.ini` | Definición de página auxiliar | Listados y selects para cliente |
| `desktop.ini` | Configuración del desktop | Parámetros de escritorio |
| `desktop_user.ini` | Personalización por usuario | Configuración individual |
| `empty_page.htm` | Página central vacía | Página base sin contenido |
| `empty_html.htm` | Página HTML vacía | Plantilla HTML base |
| `index.htm` | Protección de directorio | Evita ejecución de subdirectorio |
| `install.php` | Instalación del sistema | Configuración inicial |
| `pdf.ini` | Configuración PDF | Parámetros para listados PDF |
| `session.ini` | Variables de sesión | Configuración de sesiones |
| `sql.ini` | Configuración SQL | Conexión y parámetros generales |
| `stop.php` | Control de parada | Gestión de detención |
| `stop_off.ini` | Configuración parada OFF | Estado desactivado |
| `stop_on.ini` | Configuración parada ON | Estado activado |

## Ficheros de Configuración de Desarrollo

### Ubicación: `/_d_/cfg/`

| Archivo | Descripción | Función |
|---------|-------------|---------|
| `avisos.ini` | Avisos sin driver | Notificaciones básicas |
| `edes.ini` | Configuración gsEdit | Parámetros del editor |

## Ficheros del Sistema

### Ubicación: `/_tmp/err/`

| Archivo | Descripción | Tecla | Función |
|---------|-------------|-------|---------|
| `stop.web` | Control de parada web | - | Detención del sistema |
| `_log.err` | Log de errores | F3 | Registro de errores |
| `{$_User}.ord` | Orden de usuario | F9 | Configuración personal |
| `stop_mod.web` | Parada de módulo | F8 | Detención específica |
| `location.php` | Redirección post-login | F2 | Desvío después del LOGIN |
| `_remote.err` | Errores remotos | - | Log de errores remotos |

### Otros Ficheros del Sistema

| Archivo | Ubicación | Función |
|---------|-----------|---------|
| `__pirata.txt` | `/_tmp/` | Control de seguridad |
| `__tron.{$_User}` | `/_tmp/` | Traza de usuario |
| `{$REMOTE_ADDR}.remote` | `/_datos/config/` | Configuración remota |
| `favicon.ico` | `/http/` | Icono del sitio (F1) |

## Tipos de Archivo Gestionados por el Sistema

### Archivos de Definición

| Extensión | Nombre | Descripción | Uso |
|-----------|--------|-------------|-----|
| `.edf` | Definición de fichas | Configuración de formularios | Formularios individuales |
| `.gdf` | Definición de grupos | Configuración de grupos de fichas | Formularios múltiples |
| `.ldf` | Definición de listados | Listados de búsqueda | Parámetro 7 con 'b' |
| `.fdf` | Definición de campos | Campos tipo 'SS' (subselects) | Parámetro 7 con 'B' |
| `.idf` | Definición include | Archivo incluido desde otro | Directiva #Include() |
| `.zdf` | Definición encriptada | Archivo de definición cifrado | Seguridad adicional |

### Características de Archivos de Definición

| Tipo | Gestión | Encriptación | Inclusión |
|------|---------|--------------|-----------|
| `edf` | Directa | No | No |
| `gdf` | Directa | No | No |
| `ldf` | Directa | No | No |
| `fdf` | Directa | No | No |
| `idf` | Directa | No | Sí |
| `zdf` | Directa | Sí | No |

## Tipos de Archivo NO Gestionados Directamente

### Archivos de Código y Configuración

| Extensión | Descripción | Lenguaje | Uso |
|-----------|-------------|----------|-----|
| `.sel` | Código para campos 'SX' | PHP | Select especial |
| `.ini` | Archivo de configuración | INI | Configuración por defecto |
| `.css` | Hojas de estilo | CSS | Estilos en cascada |
| `.gs` | Código del sistema | PHP | Código PHP específico |
| `.php` | Código PHP | PHP | Archivos PHP estándar |
| `.inc` | Código de inclusión | JS/PHP | Inclusiones dinámicas |
| `.js` | Código JavaScript | JavaScript | Scripts del cliente |

### Archivos de Datos y Estructura

| Extensión | Descripción | Contenido | Función |
|-----------|-------------|-----------|---------|
| `.str` | Estructura SQL | SQL DDL | Definición de tablas |
| `.unl` | Descarga de datos | Datos tabulares | Exportación de tablas |
| `.imp` | Importación de datos | Datos variados | Importación (no gestionado) |
| `.html` | Código HTML | HTML | Páginas web |
| `.txt` | Texto plano | Texto | Documentación/datos |

## Configuración Desktop.ini

### Variable $_TreeType

La configuración del árbol de opciones se controla mediante la variable `$_TreeType`:

| Valor | Descripción | Comportamiento |
|-------|-------------|----------------|
| `""` (vacío) | Comportamiento normal | Toma archivo del directorio "tree" |
| `"T"` | Table | Opciones directamente de la tabla |
| `"A"` | Array | Opciones de la variable $_TreeArray |

### Disponibilidad por Desktop

| Tipo Desktop | $_TreeType Disponible | Comportamiento |
|--------------|----------------------|----------------|
| 0 | No | Solo directorio "tree" |
| 1 | No | Solo directorio "tree" |
| 2+ | Sí | Configurable |

### Estructura $_TreeArray

Cada índice del array se construye con:

| Componente | Descripción | Formato |
|------------|-------------|---------|
| Tabuladores | Nivel de indentación | `\t` repetido |
| Label | Texto de la opción | Texto libre |
| Delimitador | Separador | `|` |
| Orden | Comando a ejecutar | Acción del sistema |
| Delimitador | Separador | `~` |
| Número | ID de la opción | Numérico |
| Delimitador | Separador | `~` |
| Title | Título opcional | Texto libre |

### Ejemplo de $_TreeArray

```php
$_TreeArray = [
    "Usuarios|#F:usuarios.edf~1~Gestión de usuarios",
    "\tAlta|#a:usuarios.edf~2~Dar de alta usuario",
    "\tBaja|#b:usuarios.edf~3~Dar de baja usuario",
    "Configuración|#F:config.edf~4~Configuración del sistema"
];
```

## Install.ini

### Configuración de Instalación

| Parámetro | Descripción | Función |
|-----------|-------------|---------|
| Clave de instalación | Solicitud opcional | Control de acceso a instalación |
| Parámetros iniciales | Configuración base | Valores por defecto |
| Validaciones | Verificaciones | Integridad del sistema |

### Proceso de Instalación

| Paso | Descripción | Archivo Involucrado |
|------|-------------|-------------------|
| 1 | Verificación de permisos | `install.ini` |
| 2 | Configuración SQL | `sql.ini` |
| 3 | Configuración desktop | `desktop.ini` |
| 4 | Configuración sesiones | `session.ini` |
| 5 | Finalización | `install.php` |

## Gestión de Archivos por Directorio

### Directorio /_datos/config/

| Categoría | Archivos | Función |
|-----------|----------|---------|
| Configuración principal | `sql.ini`, `session.ini` | Parámetros base |
| Interface | `desktop.ini`, `desktop_user.ini` | Configuración UI |
| Contenido | `about.htm`, `empty_page.htm` | Páginas del sistema |
| Seguridad | `install.php`, `stop.php` | Control de acceso |

### Directorio /_tmp/err/

| Categoría | Archivos | Función |
|-----------|----------|---------|
| Control | `stop.web`, `stop_mod.web` | Gestión de paradas |
| Logging | `_log.err`, `_remote.err` | Registro de eventos |
| Usuario | `{$_User}.ord`, `__tron.{$_User}` | Datos personales |
| Navegación | `location.php` | Redirecciones |

### Directorio /_d_/cfg/

| Categoría | Archivos | Función |
|-----------|----------|---------|
| Desarrollo | `edes.ini` | Configuración del editor |
| Avisos | `avisos.ini` | Notificaciones de desarrollo |

## Mejores Prácticas

### Mantenimiento de Archivos

| Aspecto | Recomendación | Motivo |
|---------|---------------|--------|
| Backups | Copia regular de `/_datos/config/` | Recuperación ante fallos |
| Permisos | Restringir acceso a archivos `.ini` | Seguridad |
| Validación | Verificar sintaxis antes de desplegar | Estabilidad |
| Documentación | Comentar configuraciones complejas | Mantenimiento |

### Seguridad

| Archivo | Nivel de Seguridad | Recomendación |
|---------|-------------------|---------------|
| `sql.ini` | Crítico | Acceso solo administrador |
| `session.ini` | Alto | Permisos restringidos |
| `desktop_user.ini` | Medio | Acceso por usuario |
| `about.htm` | Bajo | Acceso público |

## Notas Importantes

- **Ubicaciones**: Respetar la estructura de directorios del sistema
- **Extensiones**: Cada extensión tiene un propósito específico
- **Encriptación**: Los archivos `.zdf` requieren manejo especial
- **Desarrollo**: Los archivos en `/_d_/cfg/` son solo para desarrollo
- **Usuarios**: Algunos archivos son específicos por usuario (usar variables)
- **Teclas de función**: Algunos archivos están asociados a teclas de función específicas