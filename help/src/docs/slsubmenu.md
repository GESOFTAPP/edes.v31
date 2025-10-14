# slSubMenu

## SINTAXIS

```
{slSubMenu} Mode | ListaDeOpciones [ | LugarIcono [ | THAddIcon [ | TDAddIcon [ | FormOnLine / ... [ | Coordenadas ] ] ] ] ]
```

## DESCRIPCIÓN

Define las opciones disponibles en las Sublistas y especifica el lugar donde se realizará la edición de los registros.

## PARÁMETROS

| Parámetro | Obligatorio | Descripción |
|-----------|-------------|-------------|
| **Mode** | Sí | En qué modos aparece el menú |
| **ListaDeOpciones** | Sí | Lista de opciones disponibles en la SubLista |
| **LugarIcono** | No | Ubicación de la columna de opciones con iconos |
| **THAddIcon** | No | Iconos a añadir en la columna de opciones en la fila del TH |
| **TDAddIcon** | No | Iconos a añadir en las filas de datos |
| **FormOnLine** | No | Tipo de formulario de edición |
| **Coordenadas** | No | Coordenadas x,y para posicionar la subventana de edición |

### Opciones disponibles (ListaDeOpciones)

| Opción | Descripción |
|--------|-------------|
| **i** | Insert (Insertar) |
| **u** | Update (Actualizar) |
| **d** | Delete (Eliminar) |
| **v** | View (Ver) |
| **F** | Ver File (Ver archivo) |
| **E** | Edit File (Editar archivo) |

### Valores para LugarIcono

| Valor | Descripción |
|-------|-------------|
| **Before** | Visualiza la columna de opciones en la primera columna |
| **After** | Visualiza la columna de opciones en la última columna |
| *(vacío)* | Las opciones serán accesibles desde un submenú contextual (botón derecho) |

### Valores para FormOnLine

| Valor | Descripción |
|-------|-------------|
| **FormOnLine** | La edición se hace dentro de la propia ficha (valor por defecto) |
| **FormStatic** | La edición se hace en una ventana nueva. Requiere declarar la etiqueta `[FormStatic]` |

## EJEMPLOS

### Ejemplo básico con iconos antes
```
{slSubMenu} a,mR | i,u,d,v | Before
```

### Ejemplo solo visualización
```
{slSubMenu} bR,cR | v | Before
```

### Ejemplo con menú contextual
```
{slSubMenu} a,mR | i,u,d
```

### Ejemplo con FormStatic y coordenadas
```
{slSubMenu} a,mR | i,u,d | After | | | FormStatic | 300,200
```

### Ejemplo de implementación completa

```
[Fields]
... 
#(a,mR,bR,cR){ 
- | SUBFICHA "__w_viajero"
apellidos | *apellidos | N   | T | 60 | | M | | |
nombre    | *nombre    | N   | T | 30 | | M | | |
dni       | *dni       | DNI | T |  8 | | M | | |
,dt*nac   | *dt*nac    | F4  | T | 10 | | M | | |
- | LISTADO "__w_viajero" | [__w_viajero]| o | | | | | | |
}

[SubList] 
a,mR,bR,cR | __w_viajero
{slGL}
Sql | Align | ColsWidth | TypeData | Format | ColsOp | Fields     | TH
.cd_w_tpv  |   I   |           |    0     |        |        | *cd*w_tpv  | 
apellidos  |   I   |           |    #D    |        |        | *apellidos | APELLIDOS
nombre     |   I   |           |    #D    |        |        | *nombre    | NOMBRE
dni        |   I   |           |    #D    |        |        | *dni       | DNI
dt*nac     |   I   |           |    F4    |        |        | *dt*nac    | F.NACIMIENTO
{slSql}
select # from w_viajero where cd_w_tpv='{cd_w_tpv}' order by apellidos, nombre
{slSubMenu}
a,mR | i,u,d,v | Before
{slSubMenu}
bR,cR | v | Before
{slWin}
,5
```

### Ejemplo con iconos personalizados

```
{slSubMenu} a,mR | i,u,d | After | <img src='g/add.gif' title='Nuevo'> | <img src='g/edit.gif' onclick='editRecord()' title='Editar'>
```