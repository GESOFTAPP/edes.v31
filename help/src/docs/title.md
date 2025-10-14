# Title

## Descripción

Establece el título de una ficha, grupo de fichas o listado. Permite usar etiquetas HTML y proporciona diferentes comportamientos según el modo de operación. El título se puede referenciar desde `[HTMIni]` con `ID=TITULO` para mantener consistencia de estilo.

### Características especiales:
- Soporte para etiquetas HTML en el texto
- Funciones especiales como `eChangeListCondition()` para modificar condiciones
- Sustitución automática de cadenas entre llaves por iconos
- Comportamiento diferente según el modo (ficha/listado)
- Manejo de títulos constantes y variables

## Sintaxis

### Sintaxis básica
```
[Title] Text [ [ | ModeCondicion / FuncionDeUsuario ] | NoTitle ]
```

### Sintaxis con pestañas
```
[Title] Text Tab | Text List [ [ | ModeCondicion / FuncionDeUsuario ] | NoTitle ]
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Text` | Requerido | Texto del título. Si empieza con `=` será constante. Si empieza con `$` muestra el contenido de la variable. Acepta funciones con paréntesis |
| `ModeCondicion` | Opcional | Modo de visualización de condiciones del listado. Valores: `WINDOW`, `IWORK` |
| `FuncionDeUsuario` | Opcional | Función que devuelve matriz con condiciones personalizadas (solo en modo listado) |
| `NoTitle` | Opcional | En subventanas oculta el título de la ficha |

### Notas sobre parámetros:
- **Texto constante**: Prefijo `=` indica que el título no se modificará
- **Variables**: Prefijo `$` muestra contenido de variables. Múltiples variables entre llaves `{$var1} {$var2}`
- **Funciones**: Texto con paréntesis se ejecuta como función con parámetro del modo
- **Separación**: Valor negativo en píxeles (ej: `-10px`) para separar campos superiores
- **Iconos**: Cadenas entre llaves se sustituyen por iconos

## Comportamiento por Modo

| Modo | Título Ficha | Botón |
|------|-------------|-------|
| `b,c,m` | SELECCIONAR [title] | Buscar |
| `a` | FICHA DE [Title] | Insertar |
| `bR` | FICHA DE [Title] | Borrar |
| `cR` | FICHA DE [Title] | Nueva Consulta |
| `mR` | FICHA DE [Title] | Modificar |
| `l` | LISTA DE [Title] | - |

### Manejo de Singular/Plural
- **Separador `/`**: Texto antes del `/` para singular, texto completo sin `/` para plural
- **Escape**: Usar `\/` o `\\` para mostrar el símbolo literal `/`

## Ejemplos

### Ejemplo básico: Singular/Plural
```
[Title] PERSONA/S
```
**Resultado**:
- Consulta singular: "CONSULTA DE PERSONA"
- Listado plural: "LISTA DE PERSONAS"
- Selección: "¿QUE PERSONA?"
- Listado de selección: "¿SELECCIONA PERSONA?"

### Ejemplo con condiciones
```
[Title] PERSONA/S | ?l
```
**Resultado**: Muestra las condiciones introducidas en la ventana de consulta para los modos `cl`, `ml` y `bl`.

### Ejemplo con título constante y función
```
[Title] =PREOC-OBRA | userFiltro()
[PHPIni] l
function userFiltro(){
    $Dim[] = 'CONDICIONES ESPECIALES'; // Título opcional
    $Dim[] = array( 'Label1', 'Contenido condición 1' );
    $Dim[] = array( 'Label2', 'Contenido condición 2' );
    return $Dim;
}
```

### Ejemplo con función de modificación de condiciones
```
[PHPIni] l
function eChangeListCondition( $DimCondicion ){
    $Dim = array();
    for( $n=0; $n<count($DimCondicion); $n++ ){
        $DimCondicion[$n] = trim( str_replace( 'y <> 00-00-0000', '', $DimCondicion[$n] ));
        $DimCondicion[$n] = trim( str_replace( 'FECHA DE BAJA <> 00-00-0000', '', $DimCondicion[$n] ));
        if( $DimCondicion[$n]!='' ) $Dim[] = $DimCondicion[$n];
    }
    return $Dim;
}
```

### Ejemplo con iconos y opciones especiales
```
[Title] noTitle
[Title] {v} Icono de consultar
[Title] {g/buscar.png} Icono de buscar
```

### Ejemplo con variables
```
[Title] $nombreEmpresa
[Title] {$cliente} - {$proyecto}
```

### Ejemplo con separación de campos
```
[Title] -10px
```

## Funciones Especiales

### eChangeListCondition()
Modifica las condiciones mostradas en el listado. Recibe la matriz de condiciones actual y devuelve la nueva matriz.

### Variables Especiales
- `$_LABELCONDITION[Field]`: Cambia el label de una condición específica
- `$_WinNoTitle`: Controla visibilidad de condiciones en subventanas (false para mostrar)

## Configuración

### Archivo group.var
- `SubWindowInIWork`: Define si las fichas se abren en zona de trabajo o subventana
- Valores: `WINDOW`, `IWORK`

## Ventajas

- **Flexibilidad**: Múltiples sintaxis para diferentes necesidades
- **Personalización**: Funciones de usuario para condiciones personalizadas
- **Consistencia**: Integración con estilos via HTMIni
- **Iconos**: Soporte nativo para iconos en títulos
- **Responsive**: Diferentes comportamientos según el contexto de uso