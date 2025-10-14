# Documentación de Objetos del Sistema

## Descripción General

El sistema cuenta con múltiples objetos especializados que proporcionan funcionalidades completas para el desarrollo y gestión de aplicaciones empresariales.

## Objetos de Interface

### Ficha

Una **ficha** es una ventana simple compuesta por un único archivo EDF que puede desempeñar múltiples propósitos.

#### Características
- **Archivo base**: Un solo archivo EDF
- **Propósitos**: Altas, modificaciones, bajas, filtros de datos, selección de registros
- **Modos de operación**: Consulta y modificación
- **Compatibilidad**: Manejo transparente de archivos `.ini`

#### Funcionalidades Especiales
- **JavaScript automático**: Si existe un archivo `.js` con el mismo nombre, se carga automáticamente como etiqueta `[JSEnd]`
- **Gestión de configuración**: Manejo directo de archivos de configuración
- **Operaciones CRUD**: Soporte completo para operaciones de base de datos

### MultiFicha

Las **multifichas** son agrupaciones organizadas de fichas individuales.

#### Características
- **Organización**: Cada ficha se muestra en una solapa diferente
- **Relación**: Las fichas están normalmente relacionadas entre sí
- **Visualización**: Información organizada sin necesidad de scroll
- **Eficiencia**: Máxima información en pantalla de forma ordenada

#### Ventajas
- Organización lógica de información relacionada
- Navegación intuitiva entre secciones
- Optimización del espacio de pantalla
- Flujo de trabajo mejorado

### Listado

Los **listados** proporcionan visualización y selección de datos en formato tabular.

#### Propósitos
- **Visualización**: Mostrar datos en forma de lista
- **Selección**: Elegir datos para transferir a otras ventanas

#### Tipos de Listado

| Tipo | Descripción |
|------|-------------|
| **Normal** | Listado estándar de registros |
| **Agrupaciones** | Datos organizados por categorías |
| **Comparativas** | Análisis comparativo de datos |
| **De rejilla** | Formato tabular avanzado |
| **Editable** | Modificación directa en lista |
| **De ordenación** | Reordenamiento interactivo |

#### Opciones de Exportación
- **PDF**: Blanco y negro / Color
- **XLS**: Formato Excel
- **XML**: Formato estructurado
- **CSV**: Valores separados por comas
- **TXT**: Texto plano

### Gráficas

Sistema de visualización de datos compatible con **PHP/SWF Charts** de Flash.

#### Características
- **Compatibilidad**: Flash-based charts
- **Referencia**: [PHP/SWF Charts](http://www.maani.us/charts/index.php)
- **Integración**: Totalmente integrado en el sistema

## Objetos de Gestión

### Etiquetas
- **Formato**: PDF para fichas
- **Propósito**: Generación de etiquetas personalizadas

### Count
- **Función**: Módulo especializado de recuentos
- **Aplicación**: Análisis estadístico y conteo de registros

### Visor
- **CSS**: `visor.css` y `about.css`
- **Función**: Visualización de contenido especializado

## Gestores del Sistema

### Gestor de Opciones

Sistema avanzado de gestión de múltiples árboles de opciones.

#### Características
- **Múltiples árboles**: Gestión de varios árboles de opciones
- **Agrupación**: Opciones organizadas por grupos según modo
- **Asignación flexible**: Por roles o individual
- **Personalización**: Iconos del desktop según perfil de usuario

#### Personalización por Usuario
- Fichas y Multifichas personalizables
- Listados adaptables por usuario
- Configuración individual de interface

### Gestor de Idiomas
- **Función**: Internacionalización completa del sistema
- **Soporte**: Múltiples idiomas simultáneos

### Gestor de Ayudas
- **Integración**: Ayuda incorporada en todas las entidades
- **Accesibilidad**: Disponible en todos los objetos del sistema

## Sistema de Autenticación

### Login

Sistema de autenticación robusto con múltiples opciones de seguridad.

#### Características de Seguridad
- **Encriptación**: Clave encriptada
- **Camuflaje**: Posibilidad de camuflar la clave en entrada de password
- **Múltiples métodos**: Contra base de datos, LDAP, SSO

#### Métodos de Autenticación
- **Base de datos**: Autenticación local
- **LDAP**: Integración con Active Directory
- **SSO**: Single Sign-On

## Desktop

### Tipos de Desktop
- **Cuatro tipos diferentes** disponibles
- **Ventana "Acerca de"** integrada
- **Múltiples opciones** del sistema configurables

## Controladores de Base de Datos

### Compatibilidad
- **MySQL**: Controlador estándar
- **MySQLi**: Controlador mejorado
- **Informix**: Soporte empresarial
- **Oracle**: Base de datos corporativa
- **PDO**: Abstracción de datos PHP

### Ventajas
- Múltiples motores de base de datos
- Abstracción de datos
- Compatibilidad empresarial

## Herramientas Adicionales

### Generador de Extracciones
- **Nivel**: Usuario final
- **Función**: Creación de extracciones personalizadas
- **Autonomía**: Independencia del departamento técnico

### Editor HTML
- **Integración**: Editor HTML completo
- **Funcionalidad**: Edición WYSIWYG

### Gestor de Incidencias
- **Propósito**: Gestión y seguimiento de incidencias
- **Integración**: Completamente integrado en el sistema

## Características Transversales

### Personalización
- Adaptación por usuario en múltiples objetos
- Configuración flexible de interfaces
- Personalización de iconos y apariencia

### Integración
- Todos los objetos están completamente integrados
- Flujo de datos seamless entre componentes
- Arquitectura cohesiva y escalable

### Escalabilidad
- Soporte para múltiples bases de datos
- Arquitectura modular
- Extensibilidad mediante nuevos objetos

## Consideraciones Técnicas

### Requisitos
- Servidor web con PHP
- Base de datos compatible
- Navegador moderno con soporte JavaScript

### Rendimiento
- Optimización de consultas
- Carga eficiente de componentes
- Gestión inteligente de recursos

### Mantenimiento
- Arquitectura modular facilita mantenimiento
- Separación clara de responsabilidades
- Documentación integrada en ayudas