# Documentación del Desktop

## Descripción General

El desktop es un entorno de trabajo integrado dividido en tres componentes principales que proporcionan una experiencia de desarrollo completa y personalizable.

## Arquitectura del Desktop

### 1. Zona de Usuario
- **Configuración**: `desktop_user.ini`
- **Función**: Área personalizable para cada usuario
- **Personalización**: Completamente configurable mediante archivo INI

### 2. Árbol de Opciones
- **Configuración**: Aplicación `gsTree`
- **Función**: Navegación jerárquica de opciones y funcionalidades
- **Gestión**: Interface gráfica para configurar opciones del sistema

### 3. Zona Central de Trabajo (IWORK)
- **Función**: Área principal de ejecución de aplicaciones
- **Características**: Ventana central donde se ejecutan las páginas
- **Extensibilidad**: Soporte para nuevos exploradores

## Menús de Desarrollo

### mTools
- **Activación**: Clic derecho del ratón en zona de usuarios o árbol de opciones
- **Función**: Menú principal de utilidades de desarrollo
- **Acceso**: Disponible desde zonas de usuario y árbol de opciones

### iTools
- **Activación**: `Ctrl + Clic derecho` en zona IWORK
- **Función**: Menú de opciones de desarrollo específicas
- **Contexto**: Disponible desde ventana central o nuevos exploradores

## Configuración de Opciones

### Script URL en gsTree
Para configurar objetos del motor desde el árbol de opciones:

1. Acceder a la aplicación `gsTree`
2. Seleccionar la opción a configurar
3. Completar el campo **"Script URL"** en la ficha de definición
4. Guardar la configuración

**Parámetros disponibles**: [Documentar parámetros específicos según necesidades]

## Desktop Libre

### Configuración
- **Variable**: `$_DesktopType = "4"`
- **Archivo**: `desktop.ini`
- **Función**: Permite crear un desktop personalizado

### Características
- Menú horizontal personalizable
- Todas las prestaciones del desktop estándar
- Configuración mediante `/_datos/config/desktop.php`

### Plantilla Base

```html
<!DOCTYPE HTML>
<HTML>
<HEAD>
    <META HTTP-EQUIV="Window-target" CONTENT="_top">
    <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Configuraciones adicionales -->
</HEAD>
<BODY style='margin:0px' scroll=no onhelp='return false' onselectstart='return false'>
    <!-- Contenido del desktop -->
    <?php include(DIREDES.'main_free.gs'); ?>
    <!-- Contenido adicional -->
</BODY>
</HTML>
```

## Archivos de Configuración

| Archivo | Función | Ubicación |
|---------|---------|-----------|
| `desktop_user.ini` | Configuración de zona de usuario | Directorio de configuración |
| `desktop.ini` | Configuración general del desktop | Directorio de configuración |
| `desktop.php` | Configuración de desktop libre | `/_datos/config/` |
| `main_free.gs` | Componente principal del desktop libre | `DIREDES` |

## Funcionalidades Clave

### Desarrollo
- Acceso rápido a utilidades de desarrollo
- Menús contextuales especializados
- Configuración flexible de opciones

### Personalización
- Desktop completamente personalizable
- Configuración por usuario
- Plantillas modificables

### Integración
- Soporte para múltiples exploradores
- Ejecución centralizada de aplicaciones
- Configuración jerárquica de opciones

## Consideraciones Técnicas

### Requisitos
- Servidor web con soporte PHP
- Navegador compatible con JavaScript
- Acceso a archivos de configuración

### Seguridad
- Validación de permisos de usuario
- Configuración de acceso a utilidades
- Protección contra selección de contenido

### Rendimiento
- Carga optimizada de componentes
- Gestión eficiente de recursos
- Navegación fluida entre secciones