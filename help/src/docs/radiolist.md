# RadioList

## Sintaxis

```
[RadioList] Field | NmCol | Field/Select/FuncUser/OptionList [ | TypeList='' [ | AltoEnPx ]]
```

## Descripción

Muestra un grupo de radiobuttons organizados en columnas. Permite crear opciones excluyentes a partir de diferentes fuentes de datos como consultas SQL, campos relacionados o funciones personalizadas.

## Parámetros

### Field
- **Tipo**: String
- **Descripción**: Nombre del campo de tipo varchar que almacenará el valor seleccionado
- **Obligatorio**: Sí

### NmCol
- **Tipo**: Integer
- **Descripción**: Número de columnas para organizar los radiobuttons
- **Obligatorio**: Sí

### Field/Select/FuncUser/OptionList
- **Tipo**: String
- **Descripción**: Fuente de datos para generar los radiobuttons. Puede ser:
  - **Select**: Consulta SQL que devuelve código y descripción
  - **Campo IDA**: Nombre de campo del tipo `cd_[NmTable]` (relación IDA)
  - **Función de usuario**: Función PHP que devuelve matriz bidimensional
  - **Lista de opciones**: Como en la etiqueta `[AddOption]` (formato: `Valor,Texto;Valor,Texto`)
- **Obligatorio**: Sí

### TypeList
- **Tipo**: String
- **Descripción**: Tipo de visualización en los listados
- **Valores**:
  - **Vacío**: Se muestran los códigos
  - **Text**: Se muestran los literales
  - **All**: Se muestra código y literal
  - **Title**: Se muestran códigos con literales en tooltip (prestación futura)
- **Por defecto**: Vacío
- **Obligatorio**: No

### AltoEnPx
- **Tipo**: Integer
- **Descripción**: Define el alto en píxeles del contenedor
- **Valores**:
  - **Sin valor**: No hay contenedor
  - **0**: Contenedor ajustado al tamaño del objeto
  - **Número**: Alto específico en píxeles
- **Obligatorio**: No

## Ejemplos

### Ejemplo con Consulta SQL
```
[RadioList] prueba | 4 | select cd_auto, nm_auto from auto order by 2 | Text

[Fields]
    Prueba | prueba | o | T | 40 | | M | | |
```
En el campo "prueba" se guardará una selección de autonomías, en un listado se verá cada autonomía seleccionada en una línea.

### Ejemplo con Campo IDA
```
[RadioList] prueba | 4 | cd_auto
```

### Ejemplo con Lista de Opciones
```
[RadioList] prueba | 4 | C,Consultas;M,Modificaciones;B,Borrado | wrap | 4
```

### Ejemplo con Función de Usuario
```
[RadioList] prueba | 4 | uCargar()

[PHPIni] *
function uCargar(){
    $Dim = array();
    $Dim[] = array(1,1111);
    $Dim[] = array(2,2222);
    $Dim[] = array(3,3333);
    return $Dim;
}
```

## Ejemplo Completo de Implementación

```
[RadioList] _contacto | 2 | Contacto() 
[RadioList] _cobro    | 2 | Cobro()
[RadioList] _forma    | 3 | Forma()

[Fields] 
    Contacto         | _contacto   | o  | SV | 20 |  | Q   |       |  | 
   ,Cobro            | _cobro      | o  | SV | 20 |  | Q   |       |  | 
    Persona          | _forma      | o  | SV | 20 |  | Q   |       |  | 

[PHPIni] *
function Contacto(){
    $p = array();
    $p[] = array("S","Contactado");
    $p[] = array("N","No Contactado");
    $p[] = array("","Todos");
    return $p;
}

function Cobro(){
    $p = array();
    sql_Query("SELECT cd_cobro, nm_cobro from cobro where tipo=1");
    while($row=sql_Fila()){
        $p[] = array($row[0],$row[1]);
    }
    $p[] = array("","Todas");
    return $p;
}

function Forma(){
    $p = array();
    sql_Query("SELECT cd_forma, nm_forma from forma");
    while($row=sql_Fila()){
        $p[] = array($row[0],$row[1]);
    }
    if (count($p)==0){
        eMessage("NO FORMAS DE COBRO","HS");
    }
    return $p;
}
```

## Estructura de Datos para Funciones PHP

Las funciones PHP deben devolver un array bidimensional con la siguiente estructura:
```php
$resultado = array();
$resultado[] = array("codigo", "descripcion");
$resultado[] = array("codigo2", "descripcion2");
// ...
return $resultado;
```

## Características Técnicas

### Integración con Base de Datos
- Compatible con consultas SQL directas
- Soporta campos relacionados (IDA)
- Permite validación de datos mediante control de errores

### Funciones del Framework
- **sql_Query()**: Ejecuta consultas SQL
- **sql_Fila()**: Obtiene filas del resultado
- **eMessage()**: Muestra mensajes de error y termina ejecución

### Tipos de Control
- Se integra con el sistema de campos `[Fields]`
- Tipo de control: `SV` (Select Value)
- Modo `Q`: Consulta/Filtro

## Casos de Uso Comunes

1. **Filtros de búsqueda**: Estados, categorías, tipos
2. **Selección de configuraciones**: Modos de operación, preferencias
3. **Clasificaciones**: Por departamento, región, tipo de cliente
4. **Estados de proceso**: Contactado/No contactado, Activo/Inactivo
5. **Opciones de cobro**: Formas de pago, tipos de cuota

## Ventajas vs Radio Simple

- **Fuente dinámica**: Los datos provienen de base de datos o funciones
- **Organización**: Distribución automática en columnas
- **Escalabilidad**: Maneja listas grandes de opciones
- **Integración**: Conexión directa con tablas relacionadas
- **Flexibilidad**: Múltiples fuentes de datos (SQL, funciones, listas estáticas)