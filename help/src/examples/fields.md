# Etiqueta [Fields]
```php

[Fields] else
...
{FS}{Persona | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <DNI o NIE       | dni                                                        | X   | T  | 8        | 62     | LMcp |        | # | 
    Apellidos       | apellido                                                   | N   | T  | 30       | 230    | -    |        |   | 
    Nombre          | nombre                                                     | N   | T  | 30       | 230    | -    |        |   | 
    Número          | persona                                                    | X   | T  | 8        |        | *    |        |   | 
}
{FS}{Datos de origen | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <Empresa         | cd_empresa_origen                                          | #D  | T  | 9        | 70     | -ML  |        |   | 
    Centro          | cd_centro_origen                                           | -   | T  | 9        | 70     | -L   |        |   | 
    ,               | _nm_centro_orige                                           | D   | T  | 60       | 250    | -    |        |   | 
    Departamento    | depart_origen                                              | X   | T  | 8        | 70     | -ML  |        |   | 
   ,                | _depart_origen                                             | X   | T  | 45       | 250    | -ML  |        |   | 
                    | cd_muni_origen                                             | #D  | T  | 3        |        | *    |        |   | 
}
{FS}{Datos de destino | WIDTH:450; PADDING-LEFT:15; PADDING-BOTTOM:2; PADDING-TOP:2;
   <Empresa         | cd_empresa_destino                                         | #D  | T  | 9        | 70     | -ML  |        |   | 
    Centro          | cd_centro_destino                                          | -   | T  | 9        | 70     | ML   |        | # | 
    ,               | _nm_centro_destino                                         | D   | T  | 60       | 250    | -    |        |   | 
    Departamento    | depart_destino                                             | X   | T  | 8        | 70     | -ML  |        |   | 
   ,                | _depart_destino                                            | X   | T  | 45       | 250    | -ML  |        |   | 
                    | cd_muni_destino                                            | #D  | T  | 3        |        | *    |        |   | 
}
...
```
