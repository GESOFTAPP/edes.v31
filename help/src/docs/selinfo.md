# SelInfo

## Sintaxis

### Formato Básico
```
[SelInfo] Mode | Field | SourceFile [ | TAB / T / LIST / L / NOEVENT ]
    TargetField = SourceField
    ...
```

### Formato Inline
```
[SelInfo] Mode | Field | TargetField = SourceField [, TargetField = SourceField ] | SourceFile [ | TAB / T / LIST / L / NOEVENT ]
```

### Formato con Separador de Dos Puntos
```
[SelInfo] Mode | Field | TargetField = SourceField [, TargetField = SourceField ] : SourceFile
```

### Formato con Función
```
[SelInfo] Mode | Field | NomFuncion() : SourceFile
```

## Descripción

Permite la selección de datos desde una ficha auxiliar o listado mediante el código "B" en la columna modo de los campos. El usuario puede buscar registros introduciendo condiciones en una ficha y seleccionando el registro deseado desde la lista resultante.

Esta etiqueta soporta formato multilínea, permitiendo que los parámetros se distribuyan en varias líneas para mejorar la legibilidad.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación del SelInfo |
| **Field** | Nombre del campo que activará la selección |
| **TargetField** | Campo del formulario destino. Si está en otra solapa usar: `FRM1.campo` |
| **SourceField** | Campo del formulario origen, nombre de campo, "onchange" o función de usuario |
| **SourceFile** | Archivo FDF para generar la ficha de selección (sin extensión) |

### Opciones Adicionales
| Opción | Descripción |
|--------|-------------|
| **TAB** / **T** | Mostrar en formato de pestañas |
| **LIST** / **L** | Mostrar en formato de lista |
| **NOEVENT** | Desactivar eventos automáticos |

## Comportamiento Especial

- Si el tercer parámetro está vacío, buscará automáticamente un archivo con el nombre del campo + ".fdf"
- El parámetro de mapeo puede sustituirse por una llamada a función sin parámetros
- Soporta referencias entre formularios usando la notación `FormularioOrigen.campo`

## Ejemplos

### Ejemplo 1: Formato Multilínea
```php
[SelInfo] a,mR | _nm_empre | | cd_emp.fdf | TAB
    cd_empre = cd_empre
    _nm_empre = nm_empre

[Fields]
    Empresa | _nm_empre | Empresa | T | 50 | | B | | |
```

### Ejemplo 2: Formato Inline con Separador
```php
[SelInfo] a | cd_emp | cd_emp=cd_emp, _v_numero=numero, _v_dt_alta=dt_alta, _v_r_social=r_social : cd_emp

[Fields]
    Empresa | cd_emp | CIF | T | 9 | | AB | | |
```

### Ejemplo 3: Con Función Personalizada
```php
[SelInfo] a | cd_emp | uSelEmpresa() : cd_emp

[Fields]
    Empresa | cd_emp | CIF | T | 9 | | AB | | |
```

**Función en cd_emp.fdf:**
```php
[DBEnd] cR
function uSelEmpresa(){
    global $_vF;
    echo "ePPF('cd_emp','{$_vF['cd_emp']}');";
    echo "ePPF('nm_emp','{$_vF['nm_emp']}');";
    //...
}
```

### Ejemplo 4: Formulario Completo con SelInfo
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
    Arbol de Opciones    | cd_gs_tree      | X   | S  | 2  | 310      | MQ  | 10        |                                | 
    Rama                 | cd_departamento | 0   | S  | 2  | 20, 285  | MQI |           |                                | 
    Sector               | cd_departamento | X   | Ss | 1  | 20, 285  | MQI |           |                                | 
    Cod. Centro          | cd_ctro         | #   | T  | 10 | 90       | MBg | *cd*ctro_ |                                |
    Empresa/Grupo        | cd_emp          | CIF | T  | 9  |          | MQ  | *Cif*     | '#'.length==0 or '#'.length==9 | La longitud del CIF tiene que ser de 9
    Nivel de extracción  | export_level    | 0   | SV | 1  | 90       | ML  | 0         | #<4                            | El NIVEL de EXTRACCION es de 0 a 3
```

**Análisis del ejemplo:**
- **SelInfo**: `[SelInfo] a,mR | cd_ctro | cd_ctro=cd_ctro` - Mapeo simple del campo centro
- **Campo relacionado**: `Cod. Centro | cd_ctro | # | T | 10 | 90 | MBg` - Modo "B" para activar la búsqueda
- **Integración**: El campo `cd_ctro` usa el modo "B" (Browse) que activa el SelInfo definido

## Configuración del Campo

Para que funcione correctamente, el campo debe tener:
- **Modo**: Debe incluir "B" (Browse/Buscar)
- **Tipo de control**: Generalmente "T" (Text)
- **Modo de edición**: "A" (Alta), "AB" (Alta/Browse), etc.

## Flujo de Funcionamiento

1. **Activación**: El usuario hace clic en el botón de búsqueda (B) del campo
2. **Búsqueda**: Se abre la ficha auxiliar definida en `SourceFile`
3. **Filtrado**: El usuario introduce criterios de búsqueda
4. **Selección**: Se muestra la lista de resultados
5. **Confirmación**: El usuario selecciona un registro
6. **Mapeo**: Se copian los valores según el mapeo `TargetField = SourceField`
7. **Retorno**: Se cierra la ventana auxiliar y se actualizan los campos

## Notas Técnicas

- Los archivos FDF deben estar en el directorio correspondiente del sistema
- Las funciones personalizadas deben declararse en el contexto apropiado
- El mapeo de campos es bidireccional: origen → destino
- Soporta validaciones y eventos onchange en los campos mapeados