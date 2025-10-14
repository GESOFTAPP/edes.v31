# slTH

## SINTAXIS

```
{slTH} TitCabe,...
```

## DESCRIPCIÓN

Define los textos de la cabecera de las Sublistas. Permite personalizar los títulos de las columnas que se mostrarán en la tabla de la sublista.

### Características

- **Código HTML permitido**: Se puede incluir código HTML en los títulos de cabecera
- **Separación por comas**: Los títulos se separan mediante comas
- **Orden correlativo**: Los títulos deben seguir el mismo orden que los campos en la consulta SQL

## PARÁMETROS

| Parámetro | Obligatorio | Descripción |
|-----------|-------------|-------------|
| **TitCabe** | Sí | Lista de títulos de cabecera separados por comas |

## EJEMPLOS

### Ejemplo básico
```
{slTH} CÓDIGO,NOMBRE,DESCRIPCIÓN,FECHA
```

### Ejemplo con código HTML
```
{slTH} codigo,cd_foto,DESCRIPCIÓN,FICHERO,Ver,Imp,<img src='g/album.gif' onclick="VerAlbum()" title='Ver album'>
```

### Ejemplo con iconos y eventos
```
{slTH} ID,NOMBRE,ESTADO,<img src='g/edit.gif' title='Acciones'>,<img src='g/delete.gif' onclick='confirmarBorrado()' title='Eliminar'>
```

### Ejemplo con campos ocultos
```
{slTH} ,DESCRIPCIÓN,FECHA,USUARIO,ACCIONES
```
*Nota: La primera coma indica que el primer campo está oculto*

### Ejemplo de implementación completa

```
[SubList]
a,A,mR,cR | fotos |
{slSql}
select codigo,cd_foto,nm_foto,fichero,ver,imprimir,'' 
from foto 
where codigo='{codigo}' 
order by nm_foto
{slTH}
codigo,cd_foto,DESCRIPCIÓN,FICHERO,Ver,Imp,<img src='g/album.gif' onclick="VerAlbum()" title='Ver album'>
{slAlign}
o,o,I,I,C,C,C
{slFormat}
,,,,,,<img src='g/d_@.gif' onclick='VerFoto()' title='_@_'>
```

### Ejemplo con estilos CSS
```
{slTH} ID,<span style='color:blue'>NOMBRE</span>,<b>DESCRIPCIÓN</b>,<span class='header-date'>FECHA</span>
```

### Ejemplo multilínea para claridad
```
{slTH} 
CÓDIGO,
DESCRIPCIÓN,
FECHA_CREACIÓN,
USUARIO,
<img src='g/view.gif' title='Ver detalles'>,
<img src='g/edit.gif' title='Editar'>,
<img src='g/delete.gif' title='Eliminar'>
```