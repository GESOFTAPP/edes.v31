# Documentación gsObject

## Descripción General

gsObject es una herramienta de desarrollo que proporciona acceso a un menú contextual avanzado (iTools) en todas las páginas cuando se activa el modo desarrollador. Permite inspeccionar y navegar por los objetos y elementos de la página de forma interactiva.

## Activación

Para acceder a gsObject es necesario estar en **modo desarrollador**. Una vez activado, estará disponible en todas las páginas del sistema.

## Funcionalidades Principales

### Menú Contextual iTools

| Acción | Descripción |
|--------|-------------|
| **Activación** | Clic derecho en cualquier elemento de la página |
| **Disponibilidad** | Todas las páginas cuando se está en modo desarrollador |
| **Funcionalidad** | Muestra menú contextual iTools en el elemento seleccionado |

### Ventana de Inspección de Objetos

| Característica | Descripción |
|----------------|-------------|
| **Contenido** | Muestra todos los valores del objeto seleccionado |
| **Navegación padre** | Permite navegar al elemento padre del objeto actual |
| **Historial** | Navegación por los datos visitados anteriormente |
| **Visualización** | Presenta la información de forma estructurada y legible |

## Navegación y Controles

### Navegación por Objetos

| Acción | Función |
|--------|---------|
| **Elemento padre** | Navega hacia el elemento contenedor |
| **Datos visitados** | Navega por el historial de objetos inspeccionados |
| **Valores del objeto** | Muestra todas las propiedades y valores |

### Función de Búsqueda

| Control | Función |
|---------|---------|
| **Enter** | Inicia la búsqueda de la cadena introducida |
| **Cursor ↑** | Se desplaza al resultado anterior |
| **Cursor ↓** | Se desplaza al resultado siguiente |
| **Campo de búsqueda** | Introduce la cadena a buscar |

## Flujo de Trabajo

### Inspección de Elementos

1. **Activar modo desarrollador**
2. **Clic derecho** en el elemento a inspeccionar
3. **Seleccionar opción** del menú contextual iTools
4. **Explorar valores** en la ventana de inspección
5. **Navegar** por elementos padre o historial según necesidad

### Búsqueda en Objetos

1. **Abrir ventana** de inspección de objeto
2. **Introducir cadena** en el campo de búsqueda
3. **Pulsar Enter** para iniciar búsqueda
4. **Usar cursores** ↑↓ para navegar entre resultados

## Características Técnicas

### Requisitos

- ✅ Modo desarrollador activado
- ✅ Acceso a todas las páginas del sistema
- ✅ Navegador compatible con menús contextuales

### Capacidades

- 🔍 Inspección completa de objetos
- 🧭 Navegación jerárquica (padre/hijo)
- 📝 Historial de navegación
- 🔎 Búsqueda integrada con navegación
- 🎯 Activación contextual por elemento

## Beneficios para Desarrolladores

| Beneficio | Descripción |
|-----------|-------------|
| **Debugging** | Inspección rápida de objetos y propiedades |
| **Navegación** | Exploración intuitiva de la estructura de objetos |
| **Búsqueda** | Localización eficiente de valores específicos |
| **Historial** | Seguimiento de elementos inspeccionados |
| **Accesibilidad** | Disponible en todas las páginas del sistema |

## Casos de Uso Comunes

- **Debugging de aplicaciones**: Inspeccionar valores de objetos en tiempo real
- **Análisis de estructura**: Entender la jerarquía de elementos
- **Búsqueda de propiedades**: Localizar valores específicos dentro de objetos complejos
- **Navegación de DOM**: Explorar elementos padre e hijos
- **Auditoría de código**: Verificar valores y propiedades de elementos