# Tab

## Sintaxis
```
[Tab] Mode | [{srcIcon}] TabText | [-]EDF [ | TitleOpMenu [ | FuncUser ] ]  [-NoZone]
```

## Descripción
Se utiliza en la definición de los grupos de fichas (GDF). Con esta etiqueta se le indica al sistema cuáles son las fichas (.EDF) que van a componer el grupo de fichas.

En cada solapa se accede solo a una tabla, pudiendo varias solapas apuntar a la misma tabla. Si se quiere tener campos en una ficha de varias tablas se pondrán campos espejo [Mirror] y campos calcos (espejo editable) [EditMirror].

Si incluimos delante del nombre de la ficha un guión "-", la ficha se enviará al cliente pero estará oculta, pudiendo visualizarla con la función `eTabShow()`.

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| Mode | String | Sí | Modo en el que se ejecuta. Los modos pueden ser: `i`, `d`, `v`, `u` |
| TabText | String | Sí | El texto que se ubicará dentro de la solapa. Puede incluir iconos |
| EDF | String | Sí | Nombre de un archivo EDF. Si se precede por "-", la solapa estará oculta |
| TitleOpMenu | String | No | Title de la opción de la solapa |
| FuncUser | String | No | Nombre de función a ejecutar al mostrar la solapa |
| -NoZone | Flag | No | Parámetro al final de la línea para ocultar la zona fija en las solapas donde se encuentre (requiere [FixZone]) |

## Modos disponibles

| Modo | Descripción |
|------|-------------|
| `i` | Insertar/Alta |
| `d` | Eliminar |
| `v` | Visualizar |
| `u` | Actualizar/Modificar |

Los modos se pueden combinar: `ivu`, `iu`, `dv`, etc.

## Opciones de iconos en TabText

### Icono desde archivo
```
[Tab] ivu | [g/mail.gif] Comunicado | archivo.edf
```

### Icono del sistema con eIcon()
```
[Tab] ivu | [setup] Label | archivo.edf
```

### Icono con código especial
```
[Tab] ivu | [Ä"] Setup | archivo.edf
```

### Sin icono
```
[Tab] ivu | Label | archivo.edf
```

## Configuración global de iconos

En el archivo `sql.ini` se puede definir un icono por defecto para todas las opciones:

```php
$_IconMenu = 'g/buscar.gif';  // Archivo de imagen
$_IconMenu = 'v';             // Icono del sistema
$_IconMenu = 'Ä"';            // Código especial
```

## Ejemplos

### Ejemplo básico sin iconos
```
[Tab] ivu | Comunicado          | aqs/queja.edf
[Tab] ivu | Ciudadano           | aqs/ciudadano.edf
[Tab] ivu | Ayuntamiento        | aqs/ayuntamiento.edf
[Tab] ivu | Otra Administración | aqs/administracion.edf
[Tab] ivu | Otra Entidad        | aqs/entidad.edf
[Tab]  vu | Respuesta           |-aqs/respuesta.edf           // Solapa Oculta
```

### Ejemplo con iconos
```
[Tab] ivu | [g/mail.gif] Comunicado  | aqs/queja.edf
[Tab] ivu | [g/ciudad.gif] Ciudadano | aqs/ciudadano.edf
```

### Ejemplo con parámetros adicionales
```
[Tab] ivu | Datos | cliente.edf | Información del cliente | validarCliente
[Tab] vu  | Historial | historial.edf | Historial de movimientos | cargarHistorial -NoZone
```

## Solapas ocultas

Para crear una solapa oculta, preceder el nombre del archivo EDF con "-":

```
[Tab] vu | Respuesta | -aqs/respuesta.edf
```

La solapa se puede mostrar posteriormente usando la función JavaScript `eTabShow()`.

## Configuración adicional

### Alineación del menú
Para alinear el borde superior del menú de la multificha con el interior de la ficha:

```php
// En sql.ini
$_TABGroupEmpty = 'TABHeader';
```

### Zona fija
Para ocultar la zona fija en solapas específicas, usar el parámetro `-NoZone` (requiere [FixZone] definido).

## Notas importantes

- **Solo en grupos de fichas**: Esta etiqueta se usa únicamente en archivos GDF
- **Una tabla por solapa**: Cada solapa accede a una sola tabla
- **Nomenclatura**: Se recomienda que el archivo GDF tenga el mismo nombre que la primera solapa
- **Etiquetas de código**: Las etiquetas [JS...], [HTM...] y [PHP...] van en el archivo GDF
- **Campos multi-tabla**: Usar [Mirror] y [EditMirror] para campos de múltiples tablas