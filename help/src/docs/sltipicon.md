# slTipIcon

## SINTAXIS

```
{slTipIcon} TipoIcon,Title; TipoIcon,Title; ...
```

## DESCRIPCIÓN

Define los títulos (tooltips) de los iconos de una columna de iconos en las Sublistas. Permite asignar diferentes títulos según el tipo de archivo o extensión, creando una experiencia de usuario más informativa.

### Funcionamiento

- Se utiliza junto con `{slFormat}` que contiene iconos dinámicos
- El sistema reemplaza automáticamente el placeholder `_@_` en el título con el tipo de icono correspondiente
- Cada tipo de icono puede tener su propio título personalizado

## PARÁMETROS

| Parámetro | Obligatorio | Descripción |
|-----------|-------------|-------------|
| **TipoIcon** | Sí | Extensión o tipo de archivo (ej: gif, jpg, png, avi) |
| **Title** | Sí | Título que aparecerá como tooltip para ese tipo de icono |

### Formato de entrada
- Los pares `TipoIcon,Title` se separan con punto y coma (;)
- Cada par se separa internamente con coma (,)

## EJEMPLOS

### Ejemplo básico con tipos de imagen
```
{slTipIcon} gif,Ver foto; jpg,Ver foto; png,Ver foto; avi,Ver película
```

### Ejemplo de implementación completa

```
[SubList]
a,A,mR,cR | archivos |
{slSql}
select codigo,nombre,extension,ruta 
from archivos 
where codigo_padre='{codigo}' 
order by nombre
{slTH}
codigo,NOMBRE,EXTENSIÓN,ARCHIVO
{slFormat}
,,<img src='g/d_@.gif' onclick='VerArchivo()' title='_@_'>
{slTipIcon}
gif,Ver foto; jpg,Ver foto; png,Ver foto; avi,Ver película; pdf,Ver documento; doc,Ver documento Word; xls,Ver hoja Excel
```

### Ejemplo con diferentes acciones por tipo
```
{slFormat}
,,,<img src='g/icon_@.gif' onclick='abrirArchivo("@")' title='_@_'>
{slTipIcon}
pdf,Abrir PDF; doc,Abrir Word; xls,Abrir Excel; txt,Ver texto; zip,Descomprimir archivo
```

### Ejemplo con iconos de estado
```
{slFormat}
,,<img src='g/status_@.gif' title='_@_'>
{slTipIcon}
activo,Estado: Activo; inactivo,Estado: Inactivo; pendiente,Estado: Pendiente; procesado,Estado: Procesado
```

### Ejemplo completo con múltiples columnas

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
{slTipIcon}
gif,Ver foto; jpg,Ver foto; png,Ver foto; avi,Ver película
```

## NOTAS IMPORTANTES

- **Placeholder `_@_`**: Se reemplaza automáticamente con el título correspondiente al tipo de icono
- **Placeholder `@`**: Se puede usar en onclick para pasar el tipo de archivo como parámetro
- **Orden**: Debe definirse después de `{slFormat}` para que funcione correctamente
- **Compatibilidad**: Funciona con cualquier campo que contenga extensiones o tipos de archivo