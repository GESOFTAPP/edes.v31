# DBSql

## Sintaxis
```
[DBSql] Mode [ | NomDF/else,... [ UNIQUE/Condition ] ] ...
```

## Descripción
En los listados, impide que el motor genere la sentencia SQL automáticamente y utiliza la indicada por el usuario. Esta etiqueta detiene la generación automática de SQL del formulario y envía al motor de base de datos la sentencia creada posteriormente por el usuario.

### Características principales:
- **Control manual de SQL**: Permite definir sentencias SQL personalizadas
- **Gestión de cursor**: Como el motor no genera el cursor automáticamente, hay que gestionar manualmente el número de registros
- **Listados paginados**: Solo se ejecuta en la primera página
- **Visualización de condiciones**: El motor muestra las condiciones de la última sentencia SQL ejecutada

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación |
| **NomDF/else** | Nombre del formulario o condición alternativa |
| **UNIQUE/Condition** | Condición única o específica |

## Variables del sistema

### Variables obligatorias
- **`$_TReg`**: Número total de registros a extraer (obligatorio, excepto si se genera `$usuCursor`)
- **`$usuCursor`**: Variable alternativa para generar cursor automático

### Variables opcionales
- **`$_SQL_`**: Almacena la última sentencia SQL ejecutada
- **`$_SQLExecute`**: SQL que el sistema debe ejecutar
- **`$_CountExecute`**: SQL para realizar el COUNT de registros afectados
- **`$EmptyList`**: Si se establece como `true`, genera un listado sin registros

## Comportamiento del sistema

### Ejecución de SQL
```php
// Para que el sistema ejecute un SQL personalizado
$_SQLExecute = "SELECT * FROM tabla WHERE condicion";

// Para el conteo de registros
$_CountExecute = "SELECT COUNT(*) FROM tabla WHERE condicion";
```

### Listado vacío
```php
// Para generar un listado sin registros
$EmptyList = true;
```

### Asignación del total de registros
```php
// Obligatorio cuando no se usa $usuCursor
$_TReg = 150; // Número total de registros
```

## Consideraciones importantes

### ⚠️ Limitaciones en listados paginados
- La etiqueta **solo se ejecuta en la primera página**
- Las variables modificadas aquí **no se tendrán en cuenta en paginaciones posteriores**
- Planificar la lógica considerando esta limitación

### 🔍 Visualización de condiciones
- El motor muestra las condiciones de la **última sentencia SQL ejecutada**
- Si esa sentencia no indica la condición correcta, usar la variable `$_SQL_`
- Esta variable guarda la última sentencia SQL para referencia

### 📊 Gestión del cursor
- **Sin `$usuCursor`**: Obligatorio asignar `$_TReg`
- **Con `$usuCursor`**: El sistema genera el cursor automáticamente
- Elegir el método según las necesidades del listado

## Ejemplo práctico: Listado de recibos

### Definición de campos
```
[Fields] 
                      | id_recibo         | +  | T  | 8    |  | * |  |   | 
    Fecha             | fecha             | X  | T  | 38   |  | - |  | = | 
    Pago              | estado            | X  | SV | 30   |  | - |  |   | 
    Periodo·inicial   | p_ini_pago        | X  | T  | 38   |  | - |  | = | 
    Periodo·final     | p_fin_pago        | X  | T  | 38   |  | - |  | = | 
    Importe           | importe           | +, | T  | 11,2 |  | - |  |   | 
    Emitido           | emitido           | X  | T  | 1    |  | * |  | = | 
```

### Implementación con DBSql
```php
[DBSql] l
    //LISTADO DE EMISIONES RECIBOS  
    $usuCursor = array();
    sql_Query( "select 
                    id_recibo, date(fe_insert) fecha, estado, p_ini_pago, p_fin_pago, importe, emitido
                from 
                    recibo    
                where 
                    id_persona={$persona}
                order by 
                    fe_insert desc", $p );
    while( $row = qArray($p) ){
        array_push( $usuCursor, 
                    array( 
                            $row['id_recibo'],
                            $row['fecha'],
                            $row['estado'],
                            $row['p_ini_pago'],
                            $row['p_fin_pago'],
                            $row['importe'],
                            $row['emitido']
                        )
                 );
    }
```

### Explicación del ejemplo:
- **Uso de `$usuCursor`**: Se crea un array para almacenar los datos del cursor
- **Consulta SQL personalizada**: Selecciona datos de la tabla `recibo` con formato de fecha personalizado
- **Filtrado por persona**: Utiliza la variable `{$persona}` para filtrar los recibos
- **Ordenación**: Los resultados se ordenan por fecha de inserción descendente
- **Construcción del cursor**: Cada fila se añade al array `$usuCursor` manteniendo el orden de los campos definidos en `[Fields]`

## Casos de uso
- **Consultas complejas**: Cuando se necesitan JOINs o subconsultas específicas
- **Optimización**: Para mejorar el rendimiento con SQL optimizado
- **Lógica personalizada**: Cuando la generación automática no cubre los requisitos
- **Listados especiales**: Para casos que requieren procesamiento particular de datos