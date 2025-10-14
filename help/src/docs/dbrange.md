# DBRange

## Sintaxis
```
[DBRange] Mode | Field | VarDesde | VarHasta [ | ValoresInclusive=true ] | CopiarEnVarHasta="" ]
```

## Descripción
Rellena el campo especificado con la expresión del contenido de las variables "VarDesde" y "VarHasta", creando una condición de rango. 

### Características principales:
- **Propósito**: Obtener un rango de datos usando dos campos virtuales diferentes
- **Campos virtuales**: Campos que empiezan por "_", solo para el usuario, no se graban en la tabla
- **Tipos de datos**: Se pueden usar todos los tipos de datos disponibles
- **Campos CDI**: Para campos CDI con fechas se pueden añadir horas usando el sufijo "_hours"
- **Prefijo "cdi"**: Si no se usan campos de hora, el campo necesita el prefijo "cdi"

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación |
| **Field** | Nombre del campo sobre el que aplicar el rango |
| **VarDesde** | Variable para contener el valor inicial del rango |
| **VarHasta** | Variable para contener el valor final del rango |
| **ValoresInclusive** | `true/1` o `false/0` - Si la condición incluye los valores límite (por defecto: `true`) |
| **CopiarEnVarHasta** | Si se pone "=" al salir de "VarDesde" copiará el contenido en "VarHasta" |

## Ejemplos

### 1. DBRange de un campo fecha
```
[DBRange] c | dt_alta | _desde | _hasta

[Fields]
    F. Desde | _desde | F4 | T | 10 || QF || |
    F. Hasta | _hasta | F4 | T | 10 || QF || |
```

### 2. DBRange de campo CDI con horas
```
[DBRange] ? | cdi | _desde | _hasta

[Fields]
    CDI Desde | _desde       | F4  | T | 10 || QF |||
   ,          | _desde_hours | H   | T |  8 || Q  |||
   ,Hasta     | _hasta       | F4  | T | 10 || QF |||
   ,          | _hasta_hours | H   | T |  8 || Q  |||
    CDI       | cdi          | CDI | T | 19 || -  |||
```
**Explicación**: El DBRange tomará los cuatro campos para hacer la búsqueda en el campo "cdi".

### 3. DBRange de campo CDI sin campos de hora explícitos
```
[DBRange] ? | cdi | _desde | _hasta

[Fields]
    CDI Desde | _desde | F4  | T | 10 || QF |||
   ,Hasta     | _hasta | F4  | T | 10 || QF |||
    CDI       | cdi    | CDI | T | 19 || -  |||
```
**Explicación**: Al ser un campo tipo CDI con petición en formato fecha:
- Al campo "_desde" se le sumará la hora "00:00:00"
- Al campo "_hasta" (si está relleno) se le sumará la hora "23:59:59"
- **Importante**: El nombre del campo debe empezar o ser "cdi" (ej: "cdi_alta", "cdi[...]", etc.)

### 4. Fecha desde/hasta y edad
```
[DBRange] c | dt_alta | _desde | _hasta | | _edad

[Fields]
     F. Desde | _desde | F4 | T | 10 || QF || |
    ,F. Hasta | _hasta | F4 | T | 10 || QF || |
    ,Edad     | _edad  | +  | T | 3  || Q  || |
```

### 5. Campo fecha y edad
```
[DBRange] c | dt_alta | | | | _edad

[Fields]
     Fecha | dt_alta | F4 | T | 10 || QF || |
    ,Edad  | _edad   | +  | T | 3  || Q  || |
```

### 6. Solo campo edad sobre una fecha
```
[DBRange] c | dt_alta | | | | _edad

[Fields]
    Edad | _edad | + | T | 3 || Q || |
```
**Explicación**: Solo campo edad sobre una fecha (que no hay que definir en Fields).

## Notas importantes
- Los campos virtuales (que empiezan por "_") no se almacenan en la base de datos
- Para campos CDI, el sistema maneja automáticamente las horas si no se especifican campos "_hours"
- El parámetro `ValoresInclusive` determina si los valores límite se incluyen en la búsqueda
- La funcionalidad de `CopiarEnVarHasta` permite copiar automáticamente valores entre campos