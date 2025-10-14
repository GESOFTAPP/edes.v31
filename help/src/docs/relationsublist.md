# RelationSubList

## Descripción General

Relaciona dos sublistas mediante un campo de relación específico. Permite crear dependencias entre sublistas donde los cambios en la sublista padre filtran automáticamente los datos de la sublista hija.

## Sintaxis

```
[RelationSubList] SubListPadre, SubListHija, CampoDeRelación [ | functionUser ]
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **SubListPadre** | Nombre de la sublista padre |
| **SubListHija** | Nombre de la sublista hija que depende de la padre |
| **CampoDeRelación** | Campo que establece la relación. Si los nombres difieren: `CampoSubListPadre=CampoSubListHija` |
| **functionUser** | Función JavaScript opcional que se ejecuta cuando se establece la relación |

## Ejemplo Completo: Autonomías → Provincias → Comarcas

### Definición de la Relación
```
[RelationSubList] __prov, __coma, cd_prov
```

### Estructura de Base de Datos
```
[Title]    AUTONOMIA/S

[DBTable]  auto
[DBIndex]  cd_auto
[DBOrder]  serial
[DBSerial] serial
```

### Definición de Campos
```
[Fields]
    Cd auto           | cd_auto          | D  | T | 4   |  | AQ |  | # |
    Nm auto           | nm_auto          | D  | T | 40  |  | MQ |  | # |

#(a,mR,bR,cR)?
   - | SUBFICHA "__prov"
    Cd prov XXX       | _cd_prov         | 0  | T | 2   |  | A  |  | # |
    Nm prov           | _nm_prov         | D  | T | 15  |  | M  |  | # |
    Texto             | _texto           | D  | T | 10  |  | M  |  |   |
   - | LISTADO "prov"
                      | [__prov]         | o  |   |     |  |    |  |   |
?

#(a,mR,bR,cR)?
   - | SUBFICHA "__coma"
    Cd prov           | _cd_prov2        | 0  | T | 15  |  | *  |  | # |
    Cd coma           | _cd_coma         | D  | T | 2   |  | MQ |  | # |
    Nm coma           | _nm_coma         | D  | T | 45  |  | M  |  | # | 
   - | LISTADO "coma"
                      | [__coma]         | o  |   |     |  |    |  |   |
?
```

### Configuración de SubList Padre (__prov)
```
[SubList] a,mR,bR,cR | __prov
{slGL} Sql | Align | ColsWidth | TypeData | Format | ColsOp | Fields   | TH
   ''      |   L   |   4825    |          | AMBp() |        | IMG      | <IMG SRC='g/l_op_insert.gif' title='' onclick='eSLAction(null,"i")'>
   cd_prov |   I   |           |    D     |        |        | _cd_prov | CD
   nm_prov |   I   |           |    D     |        |        | _nm_prov | NM PROV
   texto   |   I   |           |    D     |        |        | _texto   | TEXTO

{slSql} select # from prov where cd_auto='{cd_auto}' order by cd_auto,cd_prov

{slMenu}  a,mR | Borrar:d, Consultar:v, Insertar:i, Modificar:u | # || FormOnLine | <IMG SRC='g/l_op_delete.gif' title='Borrar' onclick=eSLAction(null,'d')><IMG SRC='g/l_op_view.gif' title='Consultar' onclick=eSLAction(null,'v')><IMG SRC='g/l_op_update.gif' title='Modificar' onclick=eSLAction(null,'u')>

{slMenu} cR,bR |           Consultar:v                          | # || FormOnLine |

{slWin} ,10
```

### Configuración de SubList Hija (__coma)
```
[SubList] a,mR,bR,cR | __coma
{slGL} Sql  | Align | ColsWidth | TypeData | Format | ColsOp | Fields    | TH
   ''       |   L   |   4825    |          | AMBc() |        | IMG       | <IMG SRC='g/l_op_insert.gif' title='' onclick='eSLAction(null,"i")'>
   cd_prov  |   H   |           |    0     |        |        | _cd_prov2 | CD PROV
   cd_coma  |   I   |           |    D     |        |        | _cd_coma  | CD COMA
   nm_coma  |   I   |           |    D     |        |        | _nm_coma  | NM COMA

{slSql} select # from coma where cd_auto='{cd_auto}' order by cd_prov,cd_coma,cd_auto | idcoma

{slMenu}  a,mR | Borrar:d, Consultar:v, Insertar:i, Modificar:u | # || FormOnLine | <IMG SRC='g/l_op_delete.gif' title='Borrar' onclick=eSLAction(null,'d')><IMG SRC='g/l_op_view.gif' title='Consultar' onclick=eSLAction(null,'v')><IMG SRC='g/l_op_update.gif' title='Modificar' onclick=eSLAction(null,'u')>

{slMenu} cR,bR |           Consultar:v                          | # || FormOnLine |

{slWin} ,10
```

### Funciones PHP para Menús Contextuales

**Para Provincias:**
```php
[PHPIni] cR,bR
function AMBp(){
    echo '<IMG SRC="g/l_op_view.gif" title="Consultar" onclick=eSLAction(null,"v")>';
}

[PHPIni] a,mR
function AMBp(){
    echo '<IMG SRC="g/l_op_delete.gif" title="Borrar" onclick=eSLAction(null,"d")>';
    echo '<IMG SRC="g/l_op_view.gif" title="Consultar" onclick=eSLAction(null,"v")>';
    echo '<IMG SRC="g/l_op_update.gif" title="Modificar" onclick=eSLAction(null,"u")>';
}
```

**Para Comarcas:**
```php
[PHPIni] cR,bR
function AMBc(){
    echo '<IMG SRC="g/l_op_view.gif" title="Consultar" onclick=eSLAction(null,"v")>';
}

[PHPIni] a,mR
function AMBc(){
    echo '<IMG SRC="g/l_op_delete.gif" title="Borrar" onclick=eSLAction(null,"d")>';
    echo '<IMG SRC="g/l_op_view.gif" title="Consultar" onclick=eSLAction(null,"v")>';
    echo '<IMG SRC="g/l_op_update.gif" title="Modificar" onclick=eSLAction(null,"u")>';
}
```

## Ejemplo con Función de Usuario

### Relación con Campos Diferentes
```
[RelationSubList] __prov, __coma, cd_prov=cd_prov | uFunction
```

### Función JavaScript Personalizada
```javascript
[JSIni] *
function uFunction(data){
    // Objetos disponibles en el contexto:
    // - tableParent: oTableParent
    // - tableChild: oTableChild  
    // - trParent: oTrParent
    // - fieldParent: fieldParent
    // - fieldChild: fieldChild
    
    // Lógica personalizada cuando se establece la relación
    console.log('Relación establecida entre sublistas');
    console.log('Tabla padre:', data.tableParent);
    console.log('Tabla hija:', data.tableChild);
}
```

## Funcionamiento

### Flujo de Trabajo
1. **Selección en Sublista Padre**: Al seleccionar una fila en `__prov`
2. **Filtrado Automático**: La sublista `__coma` se filtra automáticamente usando `cd_prov`
3. **Actualización Dinámica**: Solo se muestran las comarcas de la provincia seleccionada
4. **Función de Usuario**: Si está definida, se ejecuta tras establecer la relación

### Estructura de Datos
- **Autonomías** (tabla principal)
  - **Provincias** (sublista padre: `__prov`)
    - **Comarcas** (sublista hija: `__coma`)

## Características Avanzadas

### Campos de Relación con Nombres Diferentes
Si el campo de relación tiene diferentes nombres en las sublistas:
```
[RelationSubList] __padre, __hija, campo_padre=campo_hija
```

### Funciones de Usuario
Las funciones de usuario reciben un objeto `data` con información completa sobre:
- Tablas padre e hija
- Filas seleccionadas
- Campos de relación

### Menús Contextuales Dinámicos
Los menús se adaptan según el modo de operación:
- **Consulta/Borrado**: Solo visualización
- **Alta/Modificación**: Operaciones completas

## Notas Importantes

- Las sublistas deben estar definidas previamente con `[SubList]`
- El campo de relación debe existir en ambas sublistas
- La función de usuario es opcional pero útil para lógica personalizada
- Los menús contextuales se definen mediante funciones PHP
- Las consultas SQL se filtran automáticamente por el campo de relación

## Casos de Uso Típicos

- **Gestión Geográfica**: Comunidades → Provincias → Municipios
- **Catalogación**: Categorías → Subcategorías → Productos  
- **Organización**: Departamentos → Secciones → Empleados
- **Inventario**: Almacenes → Estanterías → Productos