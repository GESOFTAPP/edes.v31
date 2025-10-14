# mTools - Herramientas de Desarrollo

## Descripción General

**mTools** es un submenú de opciones incrustado en el desktop que se visualiza pulsando con el **botón derecho sobre el desktop**. Proporciona opciones de desarrollo desde dentro de la aplicación.

## Funcionalidades Principales

### Get/Put - Consulta y Modificación de Objetos

| Funcionalidad | Descripción |
|---------------|-------------|
| **Consultar objetos** | Permite consultar objetos de la ventana central |
| **Modificar objetos** | Cada entrada se graba automáticamente en el clipboard |
| **Asignación con "="** | Si encuentra "=" realizará una asignación |
| **Consulta sin "="** | Si no hay "=" mostrará los datos |
| **Salida con "<"** | Si empieza por "<" el resultado se copia al clipboard en lugar de mostrarse en alert() |

### Navegación y Controles

| Acción | Descripción |
|--------|-------------|
| **Botón derecho sobre Menú** | Muestra el menú de window |
| **Pulsar fuera del menú** | Oculta el menú |
| **Shift + Derecha** | Entrar en Login gráfico con caracteres en minúsculas |

### Zonas Pulsables del Escritorio

| Zona | Función |
|------|---------|
| **Barra vertical izquierda** | Ocultar/mostrar zona izquierda del escritorio |
| **Barrita horizontal superior** | Ocultar/mostrar zona superior |
| **Barrita horizontal central** | Ocultar/mostrar zona central |

### Información del Sistema

| Ubicación | Información Mostrada |
|-----------|---------------------|
| **Parte inferior izquierda** | Tiempo de carga |
| **Para desarrolladores** | Número de conexión |
| **Segunda línea del tip** | Segundos de carga de la última página |

### Iconos Flotantes

| Acción | Descripción |
|--------|-------------|
| **Botón derecho sobre icono** | Crea una copia flotante del icono |
| **Arrastrar con botón derecho** | Mover el icono flotante |
| **Botón derecho en icono original** | Eliminar el icono flotante |

> **Archivos relacionados:** `$_mf_0.gif`, `$_of_0.gif`

### Información del Usuario

| Acción | Resultado |
|--------|----------|
| **Pasar cursor sobre título** | Aparece el nombre del usuario |

## Submenú de Desarrollo - Página Principal

### Opciones Disponibles

| Opción | Descripción |
|--------|-------------|
| **Editar Fuente** | Editar código fuente |
| **Editar Ayuda** | Editar archivos de ayuda |
| **Editor Windows** | Solicita nombre del fichero a editar |
| **Iconos** | Gestión de iconos |
| **DF Privado** | Acceso a datos privados |
| **Get/Put Objetos** | Memoriza última entrada o contenido del portapapeles |
| **Ver valores de formulario** | View internal data window |
| **Quitar pantalla de Cargando** | Elimina la pantalla de carga |

### Funciones Copy/Paste

| Función | Descripción |
|---------|-------------|
| **Copy** | Copia el contenido de los campos del formulario |
| **Paste** | Rellena el formulario con los campos copiados |

## Menú iTools (Botón Derecho en Cualquier Página)

### Opciones de Desarrollo

| Opción | Descripción |
|--------|-------------|
| **gsEdit** | Edita el script que ha generado la página con gsEdit |
| **gsEdit (en Select)** | Si está sobre un control select con etiqueta [RelationFields], edita el script del SubSelect |
| **gsStyle** | Edición de estilos |
| **EditPlus** | Editor externo (crea el archivo si no existe) |
| **gsObject** | Muestra toda la información del objeto seleccionado |
| **gsHelp** | Edita la ayuda si el EDF tiene la etiqueta "[HELP]" |
| **Reload** | Recarga la página |

> **Nota:** gsEdit y EditPlus crearán el archivo aunque muestre mensaje de que no existe.

## Gestión de Estado de la Web

### Reactivación de Web Desactivada

| Requisito | Descripción |
|-----------|-------------|
| **Usuario autorizado** | PC autorizado con permisos de "Reactivar Web" |
| **Comando de activación** | Escribir `&ACTIVARWEB` después de la clave |
| **Carácter especial** | Para escribir "&" usar **AltGr** |

### Acceso Durante Web Desactivada

| Condición | Archivo Requerido |
|-----------|------------------|
| **Entrada permitida** | `_tmp/error/{$_User}.ord` |

### Archivos del Sistema

| Archivo | Función |
|---------|---------|
| **`_datos/config/stop.php`** | Página ejecutada cuando la Web está parada |
| **`_tmp/error/stop_mod.web`** | Permite consultas |
| **`_tmp/error/stop.web`** | Web parada |

## Captura de Pantalla

### Función de Impresión Avanzada

| Acción | Descripción |
|--------|-------------|
| **Control + Imprimir** | Graba captura de la ficha actual en archivo Word |
| **Ubicación del archivo** | `c:/edes_aplication.doc` |
| **Comportamiento** | Si existe el archivo, añade la imagen al final |

> **Nota:** Funciona tanto en pantalla principal como en subventanas.