# iSubList

## Sintaxis

```
{iSubList} Mode | Script | RelationField | Size | Options | Acciones [ [ [ | ModoConsulta=false | MinimoNRegistros | innerStyle ] ] ]
```

## Descripción

Crea un iframe con un listado que incluye funcionalidades de mantenimiento. Esta etiqueta permite gestionar registros relacionados de forma integrada dentro del formulario principal.

### Características especiales

- Si existe el archivo `css/ilista.css`, se cargará automáticamente para personalizar los colores del listado
- El campo `RelationField` debe aceptar valores negativos si es numérico, con ancho suficiente para el mayor código de usuario en negativo
- Se invoca automáticamente la función `FUNCTION_iSubList(Accion, Fila)` en cada inserción o modificación
- No se puede usar la función `eGF()` dentro de `FUNCTION_iSubList()` con números decimales

## Parámetros

| Parámetro | Descripción | Requerido |
|-----------|-------------|-----------|
| **Mode** | Modo de despliegue de la SubLista | Sí |
| **Script** | Archivo EDF hijo a ejecutar en la sublista | Sí |
| **RelationField** | Campo de relación entre tablas padre e hija | Sí |
| **Size** | Tamaño del iframe (ancho, alto) | Sí |
| **Options** | Opciones de mantenimiento disponibles | Sí |
| **Acciones** | Configuración adicional de acciones | No |
| **ModoConsulta** | Ejecutar sublista en modo consulta | No |
| **MinimoNRegistros** | Número mínimo de registros a mostrar | No |
| **innerStyle** | Estilos CSS internos del iframe | No |

### Detalles de parámetros

#### Mode
Define cuándo se despliega la SubLista:
- `a`: Automático
- `?R`: Condicional

#### Script
Archivo EDF hijo a ejecutar. Se pueden asignar variables virtuales:
```
sl_isublist_win.edf&_VAR={$nref}
```

#### RelationField
- **Mismo campo**: `cd_exp`
- **Campos diferentes**: `CampoPadre=CampoHijo`
- **Función**: Devuelve texto con campo y valor: `"cd_exp='15'"`

#### Size
**Ancho:**
- Valor numérico: `800` o `800px`
- Relativo a campo: `+NameField`
- Porcentaje: `100%`

**Alto:**
- Valor fijo: `150`
- Valor negativo: `-30` (tamaño inicial recalculable)
- Por filas: `3r` (número de filas a visualizar)

#### Options
- `I`: Insert (Insertar)
- `U`: Update (Actualizar)  
- `V`: View (Ver)
- `D`: Delete (Eliminar)
- `F`: File (Archivo)
- `T`: Tools (Herramientas de listado)
- `M`: Menú
- `-`: Separador de menú
- `uFunction()`: Función de usuario personalizada

#### Acciones
- `-title`: Configuración de títulos
- `-icons`: Configuración de iconos

## Ejemplos

### Ejemplo básico
```
{iSubList} a,?R | prueba | cd_auto | -40,-30 | IUV-DTM
```

### Ejemplo con función personalizada
```
{iSubList} a,?R | prueba | cd_auto | 100%,3r | uFunc() | -title
```

### Ejemplo completo con campos
```
[Fields]
    Código     | cd_auto | 0 | T | 2  |     | A |  | = |
   ,Autonomía  | nm_auto | # | T | 50 | 200 | M |  | # |

{iSubList} a,?R | prueba  | cd_auto | 100%,3r | uFunc() | -title

// En el archivo "prueba.edf"
[Fields]
    cAuto   | cd_auto | #D | T | 2  |  | -  |  |   |
    cProv   | cd_prov | #D | T | 2  |  | AQ |  | # |
    NomProv | nm_prov | #D | T | 40 |  | MQ |  | # |

[PHPIni] l
     function uFunction( $el ){
          if( $el=='TH' ){
               return '<img src="g/l_op_insert.gif" />';
          }else{
               return '<img src="g/l_op_update.gif" />';
          }
     }
```

## Función personalizada de usuario

Las funciones de usuario reciben el parámetro `"TH"` o `"TD"` para indicar la ubicación del icono:

- **TH**: Cabecera de la tabla
- **TD**: Celdas de datos

Para opciones de mantenimiento, usar:
```javascript
onclick='_ModeChange( [Mode] )'
```

Donde Mode puede ser:
- `[i]`: Insert
- `[d]`: Delete  
- `[v]`: View
- `[u]`: Update

## Consideraciones técnicas

### Base de datos
- Las tablas de iSubList no deben tener constraints en el campo de relación
- El campo debe almacenar números negativos temporalmente durante altas
- Para constraints necesarios, definir sufijo en `[DBTable]` y configurar `[DBIndex]`

### Función FUNCTION_iSubList
```php
function FUNCTION_iSubList($Accion, $Fila) {
    // Se ejecuta en cada inserción/modificación
    // NO usar eGF() con decimales aquí
}
```

### Variables virtuales
Se pueden pasar variables al script hijo:
```
script.edf&_VAR={$variable}
```

## Ejemplo avanzado: Sistema de notas

### Formulario principal (persona)
```
[Title] Notas
[DBTable] persona
[DBIndex] dni
[Fields]
-|  Listado de Notas  
{I}	<br>
	{iSubList} mR    | per/notas.edf | cd_persona  | 100%,11r | ID   | -title
	{iSubList} cR,bR | per/notas.edf | cd_persona  | 100%,11r | V-TM | -title
```

### Sublista (per/notas.edf)
```
[Title] Notas
[DBTable] log_persona_nota
[DBIndex] cd_log_persona_nota
[DBSerial] cd_log_persona_nota
[DBOrder] cdi desc
[DBLimit]  100,8,8
[ColsWidth] texto=400, usuario=200
[ShowFields] a, mR | *reg | select count(*) as *reg from persona_nota where cd_persona='{$_vF[cd_persona]}'

[Fields] a,?R
    Id         | cd_log_persona_nota                                                     | + | T | 9        |        | *  |       |  | 
    Nota       | texto                                                                   | # | A | 400,85,3 | 450    | M  |       |  | 
    Usuario    | cd_gs_user{gs_user, cd_gs_user, user_name,' ', user_surname} as usuario | 0 | S | 9        | +texto | -M | _User |  | 
    Fecha      | cdi                                                                     | X | T | 19       |        | *  | #y2s# |  | 
    cd_persona | cd_persona                                                              | X | T | 9        |        | *  |       |  | 
               | dni                                                                     | X | T | 9        |        | *  |       |  | 
               | _reg                                                                    | + | T | 10       |        | *  |       |  | 

[Fields] l
    Id      | cd_log_persona_nota                                                     | + | T | 9        |     | * |  |  | 
    Nota    | texto                                                                   | # | A | 400,85,3 | 450 | M |  |  | 
    Fecha   | cdi                                                                     | X | T | 19       |     | M |  |  | 
    Usuario | cd_gs_user{gs_user, cd_gs_user, user_name,' ', user_surname} as usuario | 0 | S | 9        |     | M |  |  | 

[JSEnd] a
	ePF('dni', _WOPENER.ePGF('dni'));

[JSEnd]	bR
	if (eGF('cd_gs_user')!=_User){
		var TD = DA['OpButtons'][1].rows[0].cells[0];
		TD.innerHTML += '<span style="color:#FF0000;"><b>Sólo el usuario que creó la nota la pueden eliminar</b></span>';	
		eGO('OpExe').style.display='none';
	}
```

### Explicación del ejemplo

Este ejemplo implementa un sistema completo de notas asociadas a personas:

**Características principales:**
- **Doble iSubList**: Una para modo mantenimiento (`mR`) y otra para consulta (`cR,bR`)
- **Diferentes opciones**: `ID` para insertar/eliminar vs `V-TM` para solo visualizar
- **Control de permisos**: Solo el usuario creador puede eliminar sus notas
- **Campos calculados**: Contador de registros y información de usuario
- **Ordenación**: Por fecha descendente (`cdi desc`)

**Funcionalidades implementadas:**
1. **Inserción automática del DNI**: Se copia desde la ventana padre
2. **Restricción de eliminación**: Control por usuario mediante JavaScript
3. **Visualización enriquecida**: Muestra nombre completo del usuario
4. **Conteo de registros**: Información adicional en `ShowFields`

## Casos de uso comunes

1. **Gestión de líneas de pedido**: Dentro de un formulario de pedido
2. **Contactos de empresa**: Lista de contactos asociados a una empresa
3. **Fotografías de producto**: Galería de imágenes relacionadas
4. **Movimientos contables**: Detalle de asientos contables
5. **Sistema de notas**: Como se muestra en el ejemplo avanzado