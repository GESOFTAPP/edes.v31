# Sistema de Gestión Avanzado
## Prestaciones Generales
- **Gestor de aplicaciones de gestión** que permite desarrollar aplicaciones con altas prestaciones y calidad homogénea, incluso en equipos amplios de programadores.
- Ahorro del **95% del código** gracias a la gestión incorporada de las funcionalidades principales de las aplicaciones de gestión.
- **Separación total** entre diseño y lógica: el enfoque está en el fondo, con gran automatización en la forma. Los programadores no necesitan acceder directamente a las tablas para leer o escribir datos.
- **Seguridad integrada**:
  - La aplicación oculta URLs y no expone código fuente.
  - Seguridad en el ingreso mediante claves camufladas (MD5).
  - La clave nunca viaja en texto plano.
  - Código de la aplicación protegido bajo HTTP.
  - Seguridad adicional por IP, rango IP, equipo, sesiones por usuario y horarios de uso.


## Conceptos Innovadores

- **IDA**: Los datos contienen información adicional.
- Programación desde la propia aplicación, que actúa como gestor de fuentes.
- **Modos de acción**: con una misma fuente, se pueden realizar diferentes acciones.


## Automatización y Construcción del Entorno

Solo es necesario programar las opciones, ya que todo el entorno se construye automáticamente a partir de:
- Instalación, login y escritorio.
- Árbol de opciones y permisos (usuarios y desarrolladores).
- Gestión de usuarios, nodos/locales, novedades, errores, actualizaciones y copias de seguridad.

## Desarrollo Interno y Acceso

- La programación se realiza desde dentro de la propia aplicación, sin necesidad de localizar ni gestionar manualmente los fuentes.
- Acceso total al PC del cliente.
- Soporte multilenguaje.


## Objetos y Funcionalidades Soportadas

- **Gestión de objetos**:
  - Fichas, Multifichas, Listados, Listados incrustados y editables.
  - Fichas de búsqueda, deslizantes, recuentos.
  - Extracciones y generador de informes personalizados.
  - Generación de PDFs: fichas, etiquetas, sobres, códigos de barras.
  - Informes normales y comparativos.
  - Ventanas, alertas, submenús.
  - Logs de modificaciones y uso.
  - Gestor de ayudas y traductores.
  - Gráficas con Microsoft/SWF Charts.
  - Editor HTML WYSIWYG.


## Funcionalidades Adicionales

- Listados con acceso a últimas opciones pulsadas.
- Visualización de trayectoria en barra de estado y acceso rápido a últimos menús.
- Búsquedas con condiciones complejas.
- Modificación transparente de archivos Office en el servidor.
- Exportación a PDF de fichas, solapas y listados.
- Ordenación, paginación y redimensionamiento de columnas.
- Bloqueo de la intranet para consultas y modificaciones.
- Visualización de condiciones de búsqueda en los listados.


## Tipos de Datos Soportados

Cada tipo de dato tiene restricciones en caracteres permitidos y formato (mayúsculas/minúsculas):

- Texto, Número
- Fecha (8 formatos + calendario)
- Checkbox y Radiobutton personalizados
- Tipo archivo (con datos de escáner)
- Textareas (texto enriquecido y HTML)
- Select personalizados (busqueda, filtrado)
- Subselect automáticos
- Select directos a base de datos
- Selección múltiple
- Enlaces web y email con iconos
- Slide numérico y de período


## Usabilidad y Automatización

- Funciones como Copy/Paste, bloqueo de datos, edición, impresión.
- Apertura de opciones en nuevas subventanas.
- Listados y fichas deslizantes desde listados.
- Automatización en actualizaciones, copias de seguridad y procesos.

## Desarrollo y Control

- Generación automática de mantenimiento de tablas, con acceso automático a lecturas y escrituras.
- Tipos de control y edición.
- Gestión automática de errores (pantalla, base datos, emails).
- Gestor de incidencias y visualización remota de pantallas.
- Favoritos y extracción de documentos.
- Exportación automática a PDF, XLS y Access.
- Personalización del tamaño de pantallas.
- Balanceador de carga para hasta 256 servidores.


## Opciones de Desarrollo

- Menús contextuales para acceso a herramientas de desarrollo.
- Configuración de copias de seguridad en distintos servidores.
- Tipos de copias:
  - Últimos 7 días (configurable).
  - Diarias, semanales, mensuales o anuales (configurables entre 0 y 365 días).
- Gestión de llamadas al servidor (eCallSrv).


## Aplicaciones Integradas

- **gsEdit** con:
  - Interpretes de PHP, SQL, HTML.
  - gsStyle, gsObject, gsCreate, gsTree, gsIcons, gsTranslate.
- **PDFs** soportados si se cuenta con PDFLib.


**Nota:** La generación de PDFs requiere tener PDFLib instalado.
