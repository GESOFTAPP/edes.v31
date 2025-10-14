# MsgAnswer

## Sintaxis

```
[MsgAnswer] Mode | MessageOK [ [ | MessageERROR [ | JSOnClick | sgEjecutaJS ] ]
```

## Descripción

La etiqueta `MsgAnswer` define los mensajes que se mostrarán al usuario después de realizar operaciones de disco en los modos especificados. Si no existe esta etiqueta, se utilizará el valor por defecto del sistema.

### Inclusión de archivos externos

Si el primer carácter del mensaje es `>`, se realizará un include del archivo especificado a continuación, dejando la página vacía antes de la llamada.

En el archivo incluido estará activa la variable `$_MessageType` que indica el tipo de mensaje con los siguientes valores:

| Código | Descripción |
|--------|-------------|
| **OK** | Proceso correcto |
| **NR** | No se han encontrado registros |
| **LE** | Se ha excedido el límite de registros a extraer |
| **DR** | Registro duplicado |
| **FNS** | Fichero no grabado |
| **FND** | Fichero no borrado |
| **F1** | El fichero excede el máximo tamaño permitido |
| **F2** | Fichero demasiado grande |
| **F3** | Fichero incompleto |

### Características del mensaje

- **Contenido HTML**: El mensaje puede contener código HTML
- **Variables PHP**: Se pueden insertar variables PHP usando la sintaxis `{$variable}`
- **Variable serial**: Si la tabla tiene un campo serial, se grabará en la variable global `$_nSerial`
- **Funciones PHP**: Si el mensaje es una función PHP sin parámetros, se mostrará el resultado de esta función. Se considera función si contiene dos paréntesis juntos `()` sin espacios
- **JavaScript**: El argumento mensaje puede contener código JavaScript

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación donde aplicar el mensaje |
| **MessageOK** | Mensaje a mostrar cuando la operación es exitosa |
| **MessageERROR** | Mensaje a mostrar en caso de error (opcional) |
| **JSOnClick** | Código JavaScript a ejecutar (opcional) |
| **sgEjecutaJS** | Script JavaScript adicional (opcional) |

### MessageERROR

El mensaje de error se muestra cuando ocurre alguna de las siguientes situaciones:
- No hay registros
- El número de registros sobrepasa el límite
- Se intenta duplicar un registro

## Ejemplos

### Ejemplo 1: Mensaje simple
```
[MsgAnswer] A | Solicitud cursada
```

### Ejemplo 2: Mensaje con variable PHP
```
[MsgAnswer] A | Solicitud número {$mivariable} cursada.
```

### Ejemplo 3: Mensaje con HTML
```
[MsgAnswer] A | Solicitud <B>de alta</B> cursada.
```

### Ejemplo 4: Inclusión de archivo HTML
```
[MsgAnswer] A | >myconfirmation.htm
```

### Ejemplo 5: Inclusión de archivo PHP
```
[MsgAnswer] A | >myconfirmation.php
```

### Ejemplo 6: Variable de registro
```
[MsgAnswer] A | IdSession: {$_IdRegistro['areas_s']}
```

### Ejemplo 7: Función PHP con HTML y JavaScript
```
[MsgAnswer] M | MyFunction()

[PHPIni] M 
function MyFunction(){ 
    return 'Mensaje en HTML<script>alert("alert() en JavaScript");</script>'; 
}
```

## Variables globales disponibles

- `$_MessageType`: Tipo de mensaje (disponible en archivos incluidos)
- `$_nSerial`: Número serial del registro (si la tabla tiene campo serial)
- `$_IdRegistro`: Array con los IDs de los registros procesados

## Casos de uso

- **Confirmaciones**: Mostrar mensajes de confirmación después de operaciones exitosas
- **Errores personalizados**: Definir mensajes específicos para diferentes tipos de error
- **Redirecciones**: Incluir páginas de confirmación personalizadas
- **Integración**: Combinar HTML, PHP y JavaScript para respuestas dinámicas

## Notas adicionales

- Si no se define `MsgAnswer`, se utilizarán los mensajes por defecto del sistema
- Los mensajes pueden ser dinámicos utilizando variables PHP
- Es posible combinar múltiples tecnologías (HTML, PHP, JavaScript) en un mismo mensaje
- La inclusión de archivos externos permite crear páginas de confirmación complejas