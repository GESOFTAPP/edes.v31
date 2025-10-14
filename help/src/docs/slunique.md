# slUnique

## Sintaxis
```
{slUnique} ListaDeCampos [ | MensajeDeError]
```

## Descripción
Evita duplicados dentro de las sublistas, etiqueta [SubList].

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| ListaDeCampos | String | Sí | Lista de campos separados por coma que no se pueden repetir. Si en la SubLista el nombre de los campos tiene alias, habrá que poner en slUnique los nombres de los campos con alias |
| MensajeDeError | String | No | Mensaje opcional que se muestra cuando se detecta un duplicado. Se pueden usar saltos de línea `\n` y el símbolo `#` que será sustituido por el número de la fila que tiene los mismos valores en la sublista |

## Ejemplos

### Ejemplo básico con mensaje de error
```
{slUnique} talla, modelo, color | Artículo repetido Compruebe la lista.
```

### Ejemplo con alias
```
{slUnique} a.nm_articulo
```

### Ejemplo completo con SubList

```
- | SUBFICHA "Usuario"
     Usuario         | _cd_gs_user{gs_user,cd_gs_user, email} | + | S | 60 | | M | | # |
     ...
- | LISTADO "Usuarios"
          | [__gs_chat_user] | o                                      |   |   |    | |   | |

[SubList] a,?R | __gs_chat_user
     {slGL} Sql  | TypeData | Align | ColsWidth | Format        | ColsOp | Menu         | TH
            ""   |          |   I   |           | [v][d][u]\[v] |        | IMG          | [i]\
     c.cd_gs_user| T        |   H   |           |               |        | _cd_gs_user  | Usuario
     u.email     | T        |   I   |           |               |        | *_cd_gs_user | EMail
     c.msg_send  | C        |   C   |           |               |        | _msg_send    | Mensages·Enviar
     ...

{slUnique} u.email                                   // Campo literal del select
{slUnique} c.msg_send | Registro ya insertado        // Con un checkbox
{slUnique} c.msg_send                                //
```

## Casos de uso

### 1. Campo literal del select
```
{slUnique} u.email
```
Evita duplicados en el campo email de la tabla u.

### 2. Con checkbox y mensaje personalizado
```
{slUnique} c.msg_send | Registro ya insertado
```
Evita duplicados en el campo msg_send de la tabla c, mostrando un mensaje personalizado.

### 3. Múltiples campos
```
{slUnique} talla, modelo, color | Artículo repetido Compruebe la lista.
```
Evita duplicados considerando la combinación de los tres campos: talla, modelo y color.