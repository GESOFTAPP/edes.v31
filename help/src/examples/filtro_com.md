# Comunicaciones
```php

[Title]    FILTRO COMUNICACIÓN

[DBTable]  cofiltro
[DBIndex]  cd_cofiltro
[DBOrder]  dt_alta
[DBSerial] cd_cofiltro

[RelationFields] cd_auto,cd_prov
[ShowFields] * | _cd_gs_user | cd_gs_user{gs_user,cd_gs_user,user_name,' ',user_surname}

[AddButton] a,mR | Filtro |  | showFiltro()

[Fields]
    Código         | cd_cofiltro | +  | T  |   8 | 70     | *  |         |   |
    Descripción    | nm_cofiltro | X  | T  | 255 | 350    | MQ |         | # |
    Fecha Creación | fe_alta     | F4 | T  |  10 | 70     | *  | #today# |   |
    Usuario        | cd_gs_user  | X  | T  |   4 |        | *  | _User   |   |
    Autonomía      | cd_auto     | 0  | S  |   2 | 26,325 | *  | _Auto_  |   |
    Provincia      | cd_prov     | 0  | Ss |   2 | 26,325 | *  | _Prov_  |   |

[JSIni] a,mR
function showFiltro(){
	top.eSWOpen(window,'edes.php?Fc:varios/unfiltro.edf','Filtro');
}
```