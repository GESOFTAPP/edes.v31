# Guía de Desarrollo
## Configuración y Creación de Proyectos (Configuración del Servidor Apache)
### Tipos de Configuración

SUID admite dos tipos principales de configuraciones en el servidor Apache, cada una orientada a diferentes necesidades:

#### 1. Configuración para Producción
- **IP dedicada** que apunta al subdirectorio `http` de la aplicación
- **Máxima seguridad**: Solo se exponen públicamente los iconos y hojas de estilo
- **Estructura**: Toda la aplicación queda protegida bajo el directorio `http` del servidor

#### 2. Configuración para Desarrollo
Según el nivel de seguridad que desees implementar, puedes optar por:

**Opción A: IP unificada**
- Una sola IP por encima del directorio `edesweb`
- Acceso tanto al motor como a las aplicaciones a través de la misma IP
- Estructura: `http://.../edesweb/`

**Opción B: IPs separadas**
- Una IP para el motor: `http://.../edesweb/http/`
- Una IP independiente por cada aplicación: `http://.../Aplicacion/http/`

---

## Proceso de Creación de Proyectos

### Paso 1: Diseño Preliminar
**Requisitos previos:**
- Diseñar el **diccionario de datos** completo
- Estructurar el **árbol de opciones** de la aplicación

> **Nota**: En la versión actual, estos procesos no están contemplados por el motor y se encuentran en fase de desarrollo.

### Paso 2: Acceso a gsCreate
- Acceder a la aplicación mediante la URL:
  ```
  http://[IP]/edesweb/http/edes.php?gscreate
  ```

### Paso 3: Configuración Inicial
En la opción **"Configurar"**, introducir:
- **Parámetros de configuración** de la base de datos
- **Orden y nombre** de las opciones a generar por cada tabla
- **Opciones estándar**: Consultar, Modificar, Insertar, Borrar y Listado

### Paso 4: Definición de Base de Datos
En la opción **"Definir Base de datos"**, pegar el diccionario de datos diseñado. Este paso define simultáneamente **cuatro conceptos fundamentales**:

#### 4.1 Diccionario de Datos
- Definición de tablas e índices
- Estructura completa de la base de datos

#### 4.2 Etiquetas de Formularios
- **Sintaxis**: `campo tipo # etiqueta : descripción`
- **Ejemplo**: `nombre varchar(50) # Nombre del Cliente : Nombre completo del cliente`
- **Posicionamiento**: Usar coma (`,`) antes de la etiqueta para campos consecutivos en la misma línea

#### 4.3 Solapas y Carpetas
- **Solapas**: `#Tab: NombreSolapa`
- **Carpetas**: Texto después del carácter `#` junto al nombre de la tabla
- **Orden**: El orden de las tablas define el orden en el árbol de opciones

#### 4.4 Ubicación de Fuentes
- **Comando**: `#Folder: NombreDirectorio`
- **Propósito**: Agrupar scripts en subdirectorios por conceptos para aplicaciones grandes

#### 4.5 Menús Personalizados
- **Comando**: `#Menu: NombreMenu : NombreScript`
- **Uso**: Crear menús sin crear la tabla asociada

### Paso 5: Generación de la Intranet
Al ejecutar **"Crear INTRANET"**, se genera automáticamente el **95% de la aplicación**, incluyendo:

#### Estructura Base
- **Estructura de directorios** completa
- **Sistema de login** de entrada
- **Desktop completo** con árbol de opciones por perfil de usuario

#### Componentes de Interfaz
- **Barra de iconos** funcional
- **Logotipo** y personalización visual
- **Información contextual**: nombre de aplicación, nodo y usuario
- **Ventana "Acerca de"** informativa

#### Mantenimiento Automático
- **Pantallas CRUD** completas para todas las tablas:
  - Alta, consulta, modificación, baja y listado
- **Exportación múltiple**: PDF, XLS e impresora
- **Funcionalidades avanzadas**:
  - Reordenación por cualquier columna
  - Búsquedas con comodines múltiples
  - Condiciones compuestas por campo
  - Control de edición para fechas, números, etc.

#### Opciones del Sistema
- Mantenimiento de árboles y opciones
- Gestión de PCs, nodos y usuarios
- Estadísticas del sistema
- Control de errores integrado

### Paso 6: Desarrollo Avanzado
Para continuar el desarrollo, acceder a la aplicación generada:

```
http://[IP]/Aplicacion/http/edes.gs
```

#### Credenciales de Acceso
- **Login**: Por defecto del sistema
- **Password**: Configurado inicialmente
- **Modo desarrollador**: Introducir el carácter `&` (Shift + 6) + clave de desarrollo

#### Vías de Desarrollo Disponibles

##### 6.1 Programación
- **Refinamientos** de opciones generadas automáticamente
- **Creación de scripts** personalizados
- **Nuevas opciones** verticales específicas
- **Herramientas**: gsEdit, gsShell, gsTree

##### 6.2 Diseño
- **Personalización estética**: colores y gráficos
- **Herramientas**: gsStyle, gsIcon

##### 6.3 Configuración
- **Creación de perfiles** de usuario
- **Herramientas**: gsTree

##### 6.4 Documentación
- **Creación de ayuda** contextual
- **Generación de manuales**
- **Herramientas**: gsHelp

#### Funcionalidades de Desarrollo

**Recarga rápida:**
- **Doble clic**: Recarga la página actual

**Edición directa:**
- **Ctrl + Clic derecho**: Edita el fuente desde cualquier página (incluso en páginas no encontradas)

**Integración flexible:**
- SUID puede usarse parcialmente en tu operativa
- Generar fichas para condiciones específicas
- Utilizar cursores generados por SUID y continuar con desarrollo propio
- Ejecutar listados y modificar cursores según necesidades

### Paso 7: Puesta en Producción
**Proceso de despliegue:**
1. **Instalar** el motor en el entorno de producción
2. **Sincronizar** la aplicación desde desarrollo mediante:
   - **FTP**: Transferencia de archivos tradicional
   - **HTTP**: Sincronización web directa

---

## Personalización del Entorno de Desarrollo

### Configuración de Herramientas Externas
En el submenú **"mTools"** se pueden añadir al sistema:
- **Editores de texto** personalizados
- **Editores de iconos** especializados
- **Configuración**: A través del archivo `edes.ini`

---

## Construcción de Páginas HTML

### Comprensión del Motor de Plantillas
Para un desarrollo eficiente, es fundamental entender:
- **Impacto de las etiquetas** en la generación de páginas
- **Ubicación de ejecución** de cada etiqueta
- **Momento de ejecución** en el ciclo de vida de la página

---

## Ventajas del Desarrollo con SUID

### Generación Automática
- **95% de funcionalidad** generada automáticamente
- **Interfaces completas** sin programación manual
- **Funcionalidades avanzadas** incluidas desde el inicio

### Flexibilidad de Desarrollo
- **Desarrollo incremental**: Refinar lo generado automáticamente
- **Integración parcial**: Usar SUID solo donde sea necesario
- **Extensibilidad**: Agregar funcionalidades verticales específicas

### Eficiencia en Producción
- **Despliegue simplificado**: Un solo proceso de sincronización
- **Mantenimiento remoto**: Desarrollo desde cualquier ubicación
- **Escalabilidad**: Soporte para múltiples usuarios concurrentes

### Herramientas Integradas
- **Editores integrados**: gsEdit, gsShell, gsTree
- **Gestión de estilos**: gsStyle, gsIcon
- **Documentación**: gsHelp para ayuda contextual