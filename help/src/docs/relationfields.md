# RelationFields

## Descripción General

Forma dependencias entre campos para utilizarlos en "SELECT's" anidados. Complementa la etiqueta `[Fields]` donde se deben definir los campos del tipo "Ss" (SubSelect). El primer campo puede ser de cualquier tipo, normalmente será "S" (Select) o "T" (Texto).

Cuando se cargan los subselects se puede ejecutar una función de usuario para, por ejemplo, eliminar algún option (ver ejemplos en la etiqueta OnChange).

## Sintaxis

```
[RelationFields] FieldList [ [ [ | CampoASaltarse ] | Saltar=true ] [ | FieldListInMemory ] ]
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **FieldList** | Lista de campos separados por comas, en orden de dependencia |
| **CampoASaltarse** | Campo intermedio que se puede saltar opcionalmente. Si es el primer campo y está vacío, al hacer clic se mostrará completo |
| **Saltar** | Por defecto `true` si CampoASaltar está definido. Si se establece como `false`, no se saltará por defecto pero tendrá el icono para activar/desactivar |
| **FieldListInMemory** | Lista de campos que se calculan en memoria. Admite el carácter "*" |

## Funcionamiento

Los archivos de definición de subselects se crean automáticamente con el nombre del campo:
- Se quita el prefijo "cd_"
- Se añade la extensión ".ldf"
- Ejemplo: `cd_muni` → `muni.ldf`

## Ejemplos Prácticos

### Ejemplo 1: Dependencia Simple
```
[RelationFields] cd_prov, cd_muni
```
Define una dependencia del campo `cd_muni` respecto del campo `cd_prov`. La selección del subselect se define en el archivo `muni.ldf`.

### Ejemplo 2: Dependencia Múltiple
```
[RelationFields] cd_auto, cd_prov, cd_muni
```
**Estructura de dependencias:**
- `cd_prov` depende de `cd_auto`
- `cd_muni` depende del conjunto `cd_auto` + `cd_prov`

### Ejemplo 3: Select Dinámico por Sexo

```
[RelationFields] sexo, cd_profe

[AddCode] a,A,?R | cd_profe | I | DynamicSQL=SqlProfesion

[PHPIni] a,A,?R
// en multifichas va en el GDF
function SqlProfesion(){
    global $_vF;
    if( $_vF['sexo'] != '' ){
        qQuery( 'select cd_profe,nm_profe_'.mb_strtolower($_vF['sexo']).' from profe_sexo order by 2' );
    } else {
        qQuery( 'select cd_profe,nm_profe_h from profe_sexo order by 2' );
    }
}

[JSIni] a,A,?R
// en multifichas va en el GDF
function SqlProfesion(){
    var Valor = '';
    if( eGO('cd_profe').oValue != undefined ) 
        Valor = eGO('cd_profe').oValue;
    
    if( eGF('sexo') != '' ){
        return Array( 
            'select cd_profe,nm_profe_'+eGF('sexo').toLowerCase()+' from profe_sexo order by 2', 
            Valor 
        );
    } else {
        return Array( 
            'select cd_profe,nm_profe_h from profe_sexo order by 2', 
            Valor 
        );
    }
}

[Fields]
    ...
    Sexo      | sexo                                     | 0 | SV |  6 || M |||
    Profesión | cd_profe{profe_sexo,cd_profe,nm_profe_h} | 0 | Ss | 30 || M |||
    ...
```

**Comportamiento:**
- El select `cd_profe` muestra nombres de profesiones según el sexo seleccionado
- Para hombres: muestra el campo `nm_profe_h`
- Para mujeres: muestra el campo `nm_profe_m`

### Ejemplo 4: Campo Saltable
```
[RelationFields] cd_auto, cd_prov, cd_coma, cd_muni | cd_coma
```

**Funcionalidad:**
- Cuatro selects relacionados en cascada
- Si no se conoce la comarca, se puede saltar haciendo clic en el icono
- Al saltar `cd_coma`, se muestran todos los municipios de la provincia

## Características Avanzadas

### Campos en Memoria
Los campos definidos en `FieldListInMemory` se calculan dinámicamente en memoria, permitiendo lógica más compleja.

### Iconos de Control
Los campos saltables incluyen iconos para activar/desactivar la dependencia según sea necesario.

### Integración con OnChange
Se puede combinar con la etiqueta `OnChange` para ejecutar funciones personalizadas cuando se recargan los subselects.

## Notas Importantes

- Los campos deben estar definidos en la sección `[Fields]` con el tipo apropiado
- El primer campo de la relación puede ser de cualquier tipo
- Los campos dependientes deben ser del tipo "Ss" (SubSelect)
- Los archivos `.ldf` contienen las definiciones de las consultas SQL para los subselects
- Las funciones dinámicas permiten consultas SQL personalizadas según el contexto