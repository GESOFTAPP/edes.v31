# F

## Sintaxis

```
{F} Filename
```

## Descripción

La etiqueta `{F}` permite incluir archivos externos dentro del formulario. Esta etiqueta funciona en conjunción con la etiqueta `[Fields]` y reserva una fila completa del formulario para mostrar el contenido del archivo especificado.

### Características principales:
- **Ámbito**: Funciona dentro de la etiqueta `[Fields]`
- **Espacio reservado**: El motor reserva una fila entera para el contenido del archivo
- **Integración**: Se integra seamlessly con el resto del formulario

## Parámetros

### Filename
Nombre del archivo que se desea incluir en el formulario.

#### Tipos de rutas:
- **Ruta relativa**: Nombre de archivo simple (ej: `archivo.html`)
- **Ruta absoluta**: Si el nombre comienza con `>`, se interpreta como dirección absoluta (ej: `>/ruta/completa/archivo.html`)

## Ejemplos de uso

### Archivo HTML con ruta relativa
```
[Fields]
  ...
  {F} formulario_adicional.html
  ...
```

### Archivo PHP con ruta relativa
```
[Fields]
  ...
  {F} seccion_dinamica.php
  ...
```

### Archivo con ruta absoluta
```
[Fields]
  ...
  {F} >/var/www/html/includes/header.php
  ...
```

### Múltiples archivos en un formulario
```
[Fields]
  DNI | dni | DNI | T | 8 | | AQ | | # |
  {F} seccion_datos_personales.html
  Nombre | user_name | X | T | 20 | | M | | # |
  {F} validaciones.php
  {F} seccion_permisos.html
  ...
```

## Casos de uso comunes

- **Templates reutilizables**: Incluir secciones comunes en múltiples formularios
- **Contenido dinámico**: Cargar contenido HTML o PHP generado dinámicamente
- **Separación de concerns**: Mantener diferentes secciones del formulario en archivos separados
- **Componentes modulares**: Crear componentes reutilizables para diferentes formularios
- **Lógica PHP**: Incluir archivos PHP que generen contenido dinámico basado en datos del servidor
- **Validaciones**: Incorporar archivos PHP con validaciones personalizadas