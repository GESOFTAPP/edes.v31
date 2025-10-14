# MNoSelectRow
```php

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