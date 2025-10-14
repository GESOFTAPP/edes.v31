# OnChange

## Descripción General

La etiqueta `OnChange` permite ejecutar código JavaScript cada vez que cambia el valor de un campo específico. Esta funcionalidad es esencial para crear formularios dinámicos e interactivos.

## Sintaxis

```
[OnChange] Mode | Field [,Field,..] | JavaScript [[ | FuncUsuario() | SeEjecutaEnLaCarga ]]
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación |
| **Field** | Campo o lista de campos sobre los que se desea crear el evento |
| **JavaScript** | Código JavaScript a ejecutar. Si la función empieza por "_" no se ejecutará en la carga de la página |
| **FuncUsuario()** | Función de usuario que se llama al recargar un subselect. Puede incluir parámetros y variables PHP entre llaves |
| **SeEjecutaEnLaCarga** | Por defecto `true`. Si se establece como `false`, no se ejecutará en la carga |

## Funcionalidades Especiales

### Función eCallSrv()
Una función muy utilizada es `eCallSrv()`. Para evitar que se ejecute durante la carga de la página, se debe usar con guión bajo: `_eCallSrv()`.

### Archivos SDF (Selection Data Files)
El parámetro JavaScript puede referenciar archivos SDF para la selección de datos de otras tablas.

**Ejemplo de definición:**
```
[OnChange] a,mR | cif | "cif.sdf?CIF="+this.value
```

**Archivo cif.sdf:**
```sql
select nm_empresa from empresa where cif='{$CIF}'
Count = 1
Put: nm_empresa
Count = 0
Clear: cif, nm_empresa
Message: La empresa no existe
```

## Comandos de Archivos SDF

### Variables
- **Variables pasadas por URL:** `{$...NombreVariable...}`
- **Variables de argumentos:** `{$argv[0]}`
- **Resultados de SELECT:** `{$_vF['campo']}`

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `Count` | Evalúa el número de registros (=, >, <, >=, etc.) |
| `Put:` | Asigna valores a campos |
| `Clear:` | Limpia campos especificados |
| `Show` / `Hide` | Muestra/oculta elementos |
| `ShowTR` / `HideTR` | Muestra/oculta filas de tabla |
| `ShowGrpTR` / `HideGrpTR` | Muestra/oculta grupos de filas |
| `ShowTab:` / `HideTab:` | Muestra/oculta pestañas |
| `EditField:` / `NoEditField:` | Habilita/deshabilita edición |
| `Focus:` | Establece el foco en un campo |
| `Tab:` | Abre ficha de selección |
| `List:` | Muestra listado de selección |
| `Message:` | Muestra mensaje al usuario |
| `Help:` | Muestra ayuda |
| `Function:` | Ejecuta función |
| `Php:` | Ejecuta código PHP |

### Comandos de Depuración
- `Trace` - Solo en línea 0
- `Debug:` - Solo en línea 0  
- `SaveSql:` / `SaveSqlH:` - Guarda consultas SQL

## Ejemplos Prácticos

### Ejemplo 1: Validación de CIF
```
[OnChange] a | cif | _eCallSrv( window, 'existe_cif.php&'+this.value )
```
Cuando cambie el valor del campo "cif", ejecutará el script "existe_cif".

### Ejemplo 2: Función de Usuario en Subselect
```
[RelationFields] cd_auto,cd_prov

[OnChange] * | cd_prov | | FuncUsuario()

[JSIni] *
function FuncUsuario(){
    eDelOption('cd_prov','11');
}
```
Al cargar el subselect "cd_prov", elimina una entrada específica.

### Ejemplo 3: Búsqueda de Código Postal

**Archivo.edf:**
```
[OnChange] a,mR | cd_postal | "cp.sdf?CPOSTAL="+this.value
```

**Archivo cp.sdf:**
```sql
select * from postal where cd_postal='{$CPOSTAL}'

empty:
    clear: cd_postal, nm_postal

Count = 0
    clear: cd_postal, nm_postal
    help: Código postal DESCONOCIDO
    focus: cd_postal

Count = 1
    put: nm_postal

Count < 50
    list: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal

Count >= 50
    tab: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal
```

**Comportamiento:**
- **Campo vacío:** Limpia todos los campos relacionados
- **Sin registros:** Limpia campos, muestra mensaje y establece foco
- **Un registro:** Rellena automáticamente los campos
- **2-49 registros:** Muestra listado para seleccionar
- **50+ registros:** Abre ficha de búsqueda avanzada

### Ejemplo 4: Búsqueda con Datos Relacionados

```sql
select * from postal where cd_postal='{$CPOSTAL}'
select * from prov where cd_prov='{$_vF['cd_prov']}'

empty:
    clear: cd_postal, nm_postal, cd_prov, _nm_prov

Count = 0
    clear: cd_postal, nm_postal, cd_prov, _nm_prov
    help: Código postal DESCONOCIDO
    focus: cd_postal

Count = 1
    put: nm_postal, cd_prov, _nm_prov='{$_vF['nm_prov']}'

Count < 50
    list: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal,_nm_prov=nm_prov

Count >= 50
    tab: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal,_nm_prov=nm_prov
```

### Ejemplo 5: Con Función de Usuario Personalizada

```sql
FuncionDeUsuario();
select * from postal where cd_postal='{$CPOSTAL}'

empty:
    clear: cd_postal, nm_postal

Count = -1
    // Lógica personalizada 1

Count = -2
    // Lógica personalizada 2

Count = 0
    clear: cd_postal, nm_postal
    help: Código postal DESCONOCIDO
    focus: cd_postal

Count = 1
    put: cd_postal, nm_postal

Count <= 50
    list: ver_postal.edf&_FILTER=cd_postal='{$CP}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal

Count > 50
    tab: ver_postal.edf&_FILTER=cd_postal='{$CP}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal
```

**Función PHP correspondiente:**
```php
function FuncionDeUsuario(){
    // Lógica personalizada
    if( /* condición 1 */ ) return -1;
    if( /* condición 2 */ ) return -2;
    return $TotalRegistros;
}
```

### Ejemplo 6: Unificación de Datos

```sql
Source: cen/unificar.edf
chkPersona()
select dni as dni1, cd_persona as cd_persona1, nombre as _nom1, 
       concat(apel1,' ',apel2) as _ape1 
from persona 
where dni like '{$DNI}%'

Empty:
    clear: dni1,_nom1,_ape1,cd_persona1

Count = 0
    clear: dni1,_nom1,_ape1,cd_persona1
    help: DNI no encontrado 

Count = 1
    put: dni1, _nom1, _ape1, cd_persona1

Count < 10
    clear: dni1,_nom1,_ape1,cd_persona1
    list: cen/a_personas.edf&_FILTER=dni='{$DNI}'&_ASSIGN=dni1=dni,_nom1=nombre,_ape1=apel1+' '+apel2,cd_persona1=cd_persona

Count >= 10
    clear: dni1,_nom1,_ape1,cd_persona1
    tab: cen/a_personas.edf&_FILTER=dni='{$DNI}'&_ASSIGN=dni1=dni,_nom1=nombre,_ape1=apel1+' '+apel2,cd_persona1=cd_persona
```

### Ejemplo 7: Integración con Iconos

```
[OnChange] a,c | dni1 | 'cd_persona.sdf?DNI='+eGF('dni1');
[AddCode]  a,c | dni1 | A | Seleccionar persona
```

## Características Avanzadas

### Concatenación de Campos
Es posible concatenar cadenas y usar operadores OR en las asignaciones:
```
put: campoDestino = campoOrigen1 || campoOrigen2
```

### Funciones de Cadena
Se puede utilizar `mb_substr()` y otras funciones de manipulación de cadenas.

### Múltiples Scripts
Se puede repetir la etiqueta con el mismo campo, sumándose todos los scripts.

## Notas Importantes

- Las funciones que comienzan con "_" no se ejecutan durante la carga de la página
- Los archivos SDF permiten lógica compleja de selección de datos
- La variable `$_vF` almacena todos los resultados de las consultas SELECT
- Los comandos `Count` permiten implementar lógica condicional basada en el número de registros encontrados

## Referencias

- Utilizar `eGF()` para obtener valores de campos
- Los parámetros de URL se pasan con la sintaxis `{$PARAMETRO}`
- Las funciones de usuario permiten lógica personalizada compleja