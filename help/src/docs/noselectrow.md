# NoSelectRow

## Sintaxis
```
[NoSelectRow]
```

## Descripción
Desactiva poder seleccionar una fila en un listado de selección.

## Parámetros
Esta etiqueta no requiere parámetros.

## Ejemplo
```
[Title] Extracciones de datos
[DBTable]  gs_exp_file
[DBIndex] cd_gs_user
[DBOrder]  cdi desc
[DBLimit] 10000
[NoSelectRow] 
.[Debug] *| 1
[AutoMenu] l | 1
[Fields] 
#(l)                                | cd_gs_user                                | 0 | T | 4   |      | * |        |  | 
    Dni                             | cd_gs_user{gs_user,cd_gs_user,dni}        | 0 | S | 7   |      | A |        |  | 
    Titulo de Listado<br> o Fichero | descripcion                               | X | T | 60  | 482  | Q |        |  | 
    Estado\E                        | estado                                    | X | T | 1   |      | Q |        |  | 
   ,Tipo\T                          | tipo                                      | X | T | 1   |      | Q |        |  | 
   ,Formato\F                       | formato                                   | X | T | 3   |      | Q |        |  | 
   ,Comprimido\C                    | comprimido                                | 0 | T | 5   |      | Q |        |  | 
   ,Descargado\D                    | descargado                                | 0 | T | 7   |      | Q |        |  | 
    Registros\Nº<br>Reg.            | t_reg                                     | 0 | T | 14  | cdi  | Q |        |  | 
    T.Extra.\Tiempo<br>Extra.       | sg                                        | 0 | T | 14  | cdi  | Q |        |  | 
    Cdi                             | cdi                                       | X | T | 21  |      | Q | #sy2s# |  | 
    Fichero                         | fichero                                   | X | T | 21  |      | Q |        |  | 
    Cadena                          | sql_1                                     | X | T | 255 | 80,3 | - |        |  | 
                                    | sql_2                                     | X | T | 255 | 80,3 | - |        |  | 
                                    | sql_3                                     | X | T | 255 | 80,3 | - |        |  |
```

En este ejemplo se muestra un listado de "Extracciones de datos" donde:
- Se define la tabla `gs_exp_file` como fuente de datos
- Se ordenan los registros por `cdi desc` 
- Se limita a 10000 registros máximo
- **[NoSelectRow]** desactiva la selección de filas, convirtiendo el listado en solo lectura
- Se muestran varios campos como DNI, descripción, estado, tipo, formato, etc.

Esta etiqueta es útil cuando quieres mostrar información en formato de lista pero sin permitir interacción de selección por parte del usuario.