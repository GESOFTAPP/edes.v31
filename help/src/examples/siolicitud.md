# Solicitudes
```php

[Title] =Solicitud Alta Usuario

[DBTable]  sol_user
[DBOrder]  user_surname, user_name
[DBSerial] cd_sol_user
[DBIndex]  cd_sol_user
[MaxRec]   500


[DBAddFilter] (peticion is null or peticion='')
[OnChange] a  | dni          | eCallSrv(window, 'unfouser.php&dni=' + eGF('dni'))
[RelationFields] cd_auto,cd_prov
[NoEditFilled] * | Session


[AddButton] a | </>Solicitar Alta | | eOkTab();

[Fields] ?
    DNI | dni | DNI | T | 8 |  | AQ |  | # | 
[Fields] else | 2
   -                              | Datos Básicos                  |     |    |          |         | M   |          |   | 
                                  | cd_sol_user                    | X   | T  | 8        |         | *Q* |          |   | 
    DNI                           | dni                            | DNI | T  | 8        |         | MQ  |          | # | 
   ,Nombre                        | user_name                      | X   | T  | 20       |         | M   |          | # | 
 +2 Apellidos                     | user_surname                   | X   | T  | 30       | 328     | M   |          | # | 
    Teléfonos                     | phone                          | 0   | T  | 10       |         | ML  |          |   | 
 +2 E-Mail                        | email                          | @   | T  | 65       | 328     | MLE |          |   | 
    Responsabilidad               | cd_cargo_usu                   | 0   | S  | 3        | 257     | M   |          |   | 
 +2 Departamento\Depar            | cd_depar_usu                   | 0   | S  | 3        | 329     | M   |          |   | 
    Local                         | cd_gs_node                     | X   | S  | 7        | 257     | M   |          | # | 
   -                              | Espacio Asignado               |     |    |          |         |     |          |   | 
    Autonomía\AU                  | cd_auto                        | 0   | S  | 2        | 20, 235 | MIL | _Auto_   |   | 
 +2 Empresa/Grupo\Emp/Grup        | cd_emp                         | CIF | T  | 9        |         | ML  | _Cif_    |   | 
    Provincia\PR                  | cd_prov                        | 0   | Ss | 2        | 20, 235 | MIL | _Prov_   |   | 
 +2 Árbol de Opciones             | cd_gs_tree                     | X   | S  | 2        | 328     | MQ  |          | # | 

   -                              | Permisos Especiales de Gestión |     | +  |          |         | ML  |          |   | 
{Columns}{ 4 | 100%
    Traslados\T                   | traslados                      | X   | C  | 1        |         | M   |          |   | 
 ,2 Gestor\G                      | gestor                         | X   | C  | 1        |         | M   |          |   | 
 ,3 Cobros\E                      | cobros                         | X   | C  | 1        |         | M   |          |   | 
    Empresas\EM                   | empresas                       | X   | C  | 1        |         | M   |          |   | 
 ,2 Emitir                        | emitir                         | X   | C  | 1        |         | M   |          |   | 
 ,3 Regularizaciones\REG          | regulariza                     | X   | C  | 1        |         | M   |          |   | 
 ,4 Gestorias                     | gestorias                      | X   | C  | 1        |         | M   |          |   | 
    Alta Web\AW                   | altaweb                        | X   | C  | 1        |         | M   |          |   | 
 ,2 Pagos                         | pagos                          | X   | C  | 1        |         | M   |          |   | 
 ,3 Webmaster\W                   | webmaster                      | X   | C  | 1        |         | M   |          |   | 
 ,4 Devoluciones\D                | devolucion                     | X   | C  | 1        |         | M   |          |   | 
}
   -                              | Observaciones                  |     | +  |          |         |     |          |   | 
    Observaciones                 | notes                          | X   | A  | 250,85,3 | 705     | ML  |          |   | 

```