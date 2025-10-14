# ShowFields

## Sintaxis
```
[ShowFields] Mode | Field [,Field,...] | SearchExpr
```

## Descripción

Muestra campos que no existen en la tabla actual. En los modos indicados muestra en el campo indicado por Field la información establecida por el tercero de los parámetros (SearchExpr), cuya sintaxis es la siguiente:

```
SourceField{ Table, FieldToSave, FieldToShow }
```

Rellena etiquetas generadas con una "B" en modo (ver [Fields]). Se puede poner más de una expresión de búsqueda sumando los campos con un más "+".

## Parámetros

**Field**: Nombre de campo destino, lo habitual será un campo virtual (son los que empiezan por "_").

**SearchExpr**: Expresión de búsqueda. La sintaxis es la siguiente:

```
CampoDeRelación { TablaRelacionada, CampoDeRelación, CampoAMostrar }
```

El "Campo a mostrar" se verá en el parámetro "Field".

También puede relacionarse por más de un campo uniéndolos con el símbolo "+" ej:

```
Campo1+Campo2 [+CampoN+...]{ TablaRelacionada, Campo1+Campo2[+CampoN], CampoAMostrar }
```

Y se puede mostrar más de un campo separándolos por comas y poner constantes como un espacio entre campos ' ' o un guión '-'.

También admite un select, en este caso iguala nombre del campo destino con nombre del campo del select.

## Ejemplos

```php
[ShowFields] mR,cR | *habitantes     | cd*postal{ poblacion, cd_poblacion, num_habitantes }

[ShowFields] mR,cR | *habitantes, m2 | cd*postal{ poblacion, cd_poblacion, num_habitantes, m2 }

[ShowFields]    cR | *nombre         | cd*gs_user{ gs_user, cd_gs_user, user_name,' ',user_surname }

[ShowFields] mR,cR | *pro*dni, *pro*nombre, *pro*apellidos | cd_prop{ propietario, cd_prop, dni, nombre, apellidos }

[ShowFields] mR,cR | *pro*apellidos | cd_prop{ propietario, cd_prop, nombre,', ',apellidos }

[ShowFields] ?R | campo1, campo2 | select campo3 as campo1, campo2 from TABLA where campo3='{$_vF[campo3]}'
```

En el primer ejemplo se quiere mostrar un campo de otra tabla "poblacion.num_habitantes" y el campo de relación es "cd_postal", el where será "cd_poblacion='{$cd_postal}'".

## Ejemplo Completo - Filtro de Comunicación

```php
[Title]    FILTRO COMUNICACIÓN
[DBTable]  cofiltro
[DBIndex]  cd_cofiltro
[DBOrder]  dt_alta
[DBSerial] cd_cofiltro

[RelationFields] cd_auto,cd_prov
[ShowFields] * | *cd*gs_user | cd_gs_user{gs_user,cd_gs_user,user_name,' ',user_surname}
[AddButton] a,mR | Filtro |  | showFiltro()

[Fields]
    Código         | cd_cofiltro | +  | T  |   8 | 70     | *  |         |   |
    Descripción    | nm_cofiltro | X  | T  | 255 | 350    | MQ |         | # |
    Fecha Creación | fe_alta     | F4 | T  |  10 | 70     | *  | #today# |   |
    Usuario        | cd_gs_user  | X  | T  |   4 |        | *  | _User   |   |
    Autonomía      | cd_auto     | 0  | S  |   2 | 26,325 | *  | *Auto*  |   |
    Provincia      | cd_prov     | 0  | Ss |   2 | 26,325 | *  | *Prov*  |   |

[JSIni] a,mR
function showFiltro(){
    top.eSWOpen(window,'edes.php?Fc:varios/unfiltro.edf','Filtro');
}
```

**Análisis del ejemplo:**
- El campo `*cd*gs_user` es virtual y muestra el nombre completo del usuario
- Se concatena `user_name` + espacio + `user_surname` de la tabla `gs_user`
- El campo `cd_gs_user` almacena el código, pero se muestra el texto descriptivo