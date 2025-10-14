# ¿Cómo funciona SUID?

SUID es un entorno basado cien por cien en el navegador y su versión 3 exclusivamente en Internet Explorer de Microsoft. Nos permite desde cualquier punto del planeta diseñar un formulario, hacer una modificación de una tabla, cambiar un report, etc. Solo depende de las reglas impuestas por los cortafuegos de las Intranets de cada organización, cliente, empresa o usuario particular.

## Arquitectura del Sistema

Como ya explicamos en el apartado "¿Qué es?", SUID está dividido en dos partes: el **Entorno de Desarrollo** y el **Motor de Órdenes**.

### Entorno de Desarrollo

El Entorno de Desarrollo se instala y configura siguiendo los pasos definidos, sobre el servidor web o estación de trabajo. A continuación ejecutamos una página HTML sobre el servidor de páginas que nos da acceso a configurar todo el sistema de Intranet que pretendemos montar. Esta aplicación es **gsMain**.

Los derechos sobre esta aplicación están restringidos al:
- Jefe de proyecto
- Analista Jefe
- Responsable del proyecto

Quien deberá activar usuarios y permisos.

## Proceso de Desarrollo

### 1. Configuración Inicial
Después de terminar con la configuración generaremos una maqueta del proyecto.

### 2. Programación
A partir de ese momento activaremos el programa **gsEdit** desde la maqueta para iniciar la programación de todos los formularios, listados, etc.

### 3. Generación del Proyecto Final
Finalizado el proyecto, generaremos el proyecto definitivo y será instalado en el servidor Web del cliente final.

## Composición del Proyecto

El proyecto se compone de:
- Todos los ficheros de configuración
- **El Motor de Órdenes**

## Mantenimiento y Actualizaciones

Los desarrolladores podrán generar versiones y parches del programa desde la maqueta de desarrollo y enviarlas automáticamente al servidor web del cliente, facilitando el mantenimiento continuo del sistema.