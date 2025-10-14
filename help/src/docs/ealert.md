# eAlert

## Descripción

Sustituye las funciones de JavaScript `alert()`, `prompt()` y `confirm()` unificándolas en una sola para unificar la estética de toda la aplicación y ampliando la función `prompt()` en varios campos. A diferencia de las funciones originales, la ejecución del programa no se detiene al ejecutar esta función, por lo que es necesario pasar el nombre de la función a ejecutar después de aceptar los datos.

## Sintaxis

```php
eAlert(Titulo, Descripción [, Botones, Img, MyFunc, DimForm, DimParametros, MyFuncCheck])
```

## Parámetros

### Parámetros Básicos

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| **Titulo** | String | Título de la ventana o cadena vacía | No |
| **Descripción** | String/Object | Descripción o cadena vacía. Para salto de línea usar "n" | No |
| **Botones** | String | Cadena separada por comas con nombres de botones | **Sí** |
| **Img** | String | Nombre de imagen (ver tabla de iconos) | No |
| **MyFunc** | Function | Función de usuario a ejecutar | No |
| **DimForm** | Array | Matriz para generar formulario | No |
| **DimParametros** | Array | Datos adicionales para función de usuario | No |
| **MyFuncCheck** | Function | Función llamada en inicio, cambio y salida | No |

### Valores de Botones

| Valor | Código | Descripción |
|-------|--------|-------------|
| ACCEPT | 2 | Botón de aceptar |
| YES | 1 | Botón de sí |
| NO | 0 | Botón de no |
| CANCEL | -1 | Botón de cancelar |

### Iconos Disponibles

| Inicial | Archivo | Descripción |
|---------|---------|-------------|
| DH | g/sys_dialog_asks.gif | Diálogo de pregunta |
| DI | g/sys_dialog_info.gif | Diálogo de información |
| E | g/sys_error.gif | Error |
| H | g/sys_help.gif | Ayuda |
| I | g/sys_info.gif | Información |
| N | g/sys_note.gif | Nota |
| P | g/sys_printer.gif | Impresora |
| S | g/sys_seek.gif | Búsqueda |
| W | g/sys_warning.gif | Advertencia |

### Estructura de Descripción como Tabla

```json
{
  class: [], // por defecto "INFO" (también "GRILL")
  style: [], // [L]eft, [C]enter, [R]ight, [B]old
  head: [], // cabecera (opcional)
  body: [], // contenido (obligatorio)
  foot: [] // pie (opcional)
}
```

### Estructura de DimForm

| Índice | Descripción | Valores Posibles |
|--------|-------------|------------------|
| 0 | Label del campo | String |
| 1 | Longitud del control | Número (input), "0" (imagen), "ancho,alto" (textarea) |
| 2 | Expresión regular escritura | RegExp, null (no editable), Array (select) |
| 3 | Expresión regular salida | RegExp |
| 4 | Valor por defecto | String |

### Parámetros MyFuncCheck

| Momento | Parámetros |
|---------|------------|
| Inicio | "I", ListaDeCampos, null |
| Cambio de campo | "C", ListaDeCampos, ObjActual |
| Salida | "E", ListaDeCampos, null, Op, MatrizDeDatos |

## Funcionalidad

- Permite usar teclas "F10", "Enter" y "ESC" para aceptar y cancelar
- La función de usuario recibe: Accion (ACCEPT=2, YES=1, NO=0, CANCEL=-1), Matriz con datos del formulario, Matriz a pasar a la función, Objeto del foco
- Soporta formularios complejos con validación regex
- Permite mostrar tablas con formato personalizado

## Ejemplos

### Ejemplo 1: Alerta simple
```php
top.eAlert("ERROR", "Error indeterminado", "ACCEPT", "g/stop.gif", MyFunction);
```

### Ejemplo 2: Mensaje de impresión
```php
top.eAlert("MENSAJE DE IMPRESION", "Coloque papel blanco en la impresora y pulse aceptar.", "accept,cancel", "sys_printer.gif", MyFunction);
```

### Ejemplo 3: Formulario de entrada de datos
```php
top.eAlert("ENTRADA DE DATOS", "", "accept,cancel", null, MyFunction, Array(
  Array('Precio', 20, '^[0-9]*$'),
  Array('Artículo', 30, '^[A-Zs]*$'),
  Array('Periodo', 7, '^[0-9-]*$', '^[12][0-9]{3}-[0-1]{1}[0-9]{1}', '2007-01'),
  Array('Nota', "60,10", '^[a-zA-Z0-9 áéíóúñÑüÜçÇºª_-/()<>{}¡!¿?;.:,%@'"srn]*$')
));
```