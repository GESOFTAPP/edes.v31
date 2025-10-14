## Permisos 
```php
[Title] Permisos de usuario
[DBTable]  gs_user
[DBIndex]  cd_gs_user
[DBSerial] cd_gs_user

[WhereSelect] a,mR | cd_departamento | nm_departamento[1,5] != "INFOR"
[AddOption] * | export_level | 0,Sin permiso; 1,Básico; 2,Medio; 3,Total
[SelInfo]  a,mR | cd_ctro | cd_ctro=cd_ctro

[RelationFields] cd_departamento,cd_seccion
[AddCode] * | export_level | i | style='margin-left:50'

[Fields]
    Organizacion         | filtro_depart   	| X   | T  | 8  |          | *   |           |                                | 
    Arbol de Opciones    | cd_gs_tree   	| X   | S  | 2  | 310      | MQ  | 10        |                                | 
    Rama                 | cd_departamento  | 0   | S  | 2  | 20, 285  | MQI | 		     |                                | 
    Sector               | cd_departamento 	| X   | Ss | 1  | 20, 285  | MQI |           |                                | 
    Cod. Centro          | cd_ctro          | #   | T  | 10 | 90       | MBg | _cd_ctro_ |                                |
    Empresa/Grupo        | cd_emp       	| CIF | T  | 9  |          | MQ  | _Cif_     | '#'.length==0 or '#'.length==9 | La longitud del CIF tiene que ser de 9
    Nivel de extracción  | export_level     | 0   | SV | 1  | 90       | ML  | 0         | #<4                            | El NIVEL de EXTRACCION es de 0 a 3
```