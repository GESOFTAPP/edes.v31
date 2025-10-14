# slMenu

## SINTAXIS

```
{slMenu} Mode | LabelOpcion:Accion, ... | Fichero de Definición | Campo=NºColumna, ... [ | FormStatic/FormOnLine | Img | CoordX,CoordY ]
```

## DESCRIPCIÓN

Opciones de mantenimiento del formulario de la SubLista. Permite definir las operaciones CRUD (crear, leer, actualizar, eliminar) que se pueden realizar sobre los elementos de una sublista.

### Consideraciones importantes

- En el tipo **FormOnLine**, el último campo de la subficha no puede estar oculto en una sola línea
- Puede estar oculto a continuación de otro campo, pero no completamente oculto, ya que si no, no se vería el botón de submit de la subficha
- Existe una función para borrar toda una sublista: `eSLAction(NmSubList, "DA")` (DeleteAll)

## PARÁMETROS

### Mode
Especifica en qué modos aparece el menú contextual.

### LabelOpcion:Accion
Lista de opciones y el modo de cada una de ellas para ejecutar el EDF.

**Opciones disponibles:**
- `i` - Insert (insertar). Si se especifica `-i`, se anula la opción de insertar
- `u` - Update (actualizar)
- `d` - Delete (eliminar)

**Nota:** Si este parámetro se deja en blanco, no aparecerá el menú contextual y no se verá el botón de alta al cargar la ficha, solo cuando se active la opción de alta de la subficha.

### Fichero de Definición
Nombre del archivo EDF para ejecutar las opciones especificadas. Se busca a partir del directorio `d/`.

### Campo=NºColumna
Especifica en qué columna están los campos índices.

**Ejemplo:**
```
codigo=0, cd_aviso=1
```
- El campo de relación con la tabla padre `codigo` está en la columna `0`
- El campo clave de la tabla hija `cd_aviso` está en la columna `1`

### FormStatic
Si se especifica esta constante, indica que el EDF al que apunta se comportará como un formulario estático. En este EDF habrá que declarar la etiqueta `[FormStatic]` con todos sus parámetros.

### FormOnLine
Especifica que el formulario se comportará como un formulario en línea.

### IMG
Iconos a añadir en el alta de registros de la sublista en modo FormOnLine.

### CoordX,CoordY
Coordenadas para posicionar la subventana. Por defecto se muestra centrada (aplicable a FormStatic).

## EJEMPLOS

### Ejemplo básico con archivo EDF

```
{slMenu} a,mR | Modificar:u, Insertar:i, Borrar:d | foto.edf | codigo=0, cd_foto=1
```

### Ejemplo con FormOnLine y campos personalizados

```
{slMenu} a,mR | Modificar:u, Insertar:i, Borrar:d | ''=IMG, a.cd_gs_node=_cd_gs_node,n.nm_gs_node=*_cd_gs_node,nm_articulo=_nm_articulo,a.cd_marca=_cd_marca,m.nm_marca=*_cd_marca,a.cd_familia=_cd_familia,f.nm_familia=*_cd_familia, a.cd_subfamilia=_cd_subfamilia, s.nm_subfamilia=*_cd_subfamilia,ano=_ano,pvd=_pvd,pvp=_pvp | | FormOnLine | <IMG SRC="g/l_op_update.gif" title="Modificar Articulo" onclick="eSLAction( '_art','u' )"><IMG SRC="g/l_op_delete.gif" title="Borrar Articulo" onclick="eSLAction( '_art','d' )">
```

### Ejemplo con FormOnLine simplificado

```
{slMenu} a,mR | Modificar:u, Insertar:i, Borrar:d | ''=IMG, activo=_activo, tipo=_tipo, tipo as t=*_tipo, telefono=_telefono | | FormOnLine | <IMG SRC="g/l_op_update.gif" title="Modificar Clausula" onclick="eSLAction( '_tlf','u' )"><IMG SRC="g/l_op_delete.gif" title="Borrar Clausula" onclick="eSLAction( '_tlf','d' )">
```

### Ejemplo con FormStatic

```
{slMenu} a,mR | Modificar:u, Insertar:i, Borrar:d | telefono_formstatic.edf | | FormStatic | | 300,100
```

### Ejemplo de implementación completa

```
[FIELDS]
...
< | [fotos] | o |||||||
...

[SubList]
a,A,mR,cR | fotos |
{slSql}
select codigo,cd_foto,nm_foto,fichero,ver,imprimir,'' from foto where codigo='{codigo}' order by nm_foto
{slTH}
codigo,cd_foto,DESCRIPCION,FICHERO,Ver,Imp,<img src='g/album.gif' onclick="VerAlbum()" title='Ver album'>
{slAlign}
o,o,I,I,C,C,C
{slFormat}
,,,,,,<img src='g/d_@.gif' onclick='VerFoto()' title='_@_'>
{slTipIcon}
gif,Ver foto; jpg,Ver foto; png,Ver foto; avi, Ver película
{slWin}
,7
{slMenu}
a,mR | Modificar:u, Insertar:i, Borrar:d | foto.edf | codigo=0, cd_foto=1
```