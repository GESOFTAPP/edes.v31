# Grid

## Sintaxis

```
[Grid] Field [ | [%][M][2][b] [ | Definicion ] ] ...
```

## Descripción

En un listado hace el cruce entre varios campos. A continuación de la etiqueta se puede introducir el código del interior de la función para calcular la columna donde se colocará el dato. El parámetro que recibe es `$Value` y este código tiene que terminar con el comando `return` y el número de columna donde se colocará el dato.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Campo sobre el cual se realizará el cruce |
| **Formato** | Opciones de formato para los valores |
| **Definicion** | Define las columnas del cruce mediante consulta SQL o lista de valores |

### Opciones de formato

| Opción | Descripción |
|--------|-------------|
| **%** | Muestra porcentajes |
| **M** | Añade separador de miles |
| **2** | Número de decimales (1-9) |
| **b** | No muestra valores cero |

### Tipos de definición

#### Consulta SQL
Se puede usar una consulta SQL para definir las columnas del cruce:
```sql
select campo_id, campo_descripcion from tabla order by campo_orden
```

#### Lista de valores
Se puede usar una lista separada por punto y coma:
```
valor1,descripcion1; valor2,descripcion2; valor3,descripcion3
```

## Ejemplos

### Ejemplo 1: Cruce básico
```
[Grid] cd_propiedad
```
Realiza un cruce simple por el campo `cd_propiedad`.

### Ejemplo 2: Cruce con porcentajes y consulta SQL
```
[Grid] cd_propiedad | % | select cd_propiedad, abreviatura from propiedad order by abreviatura
```
Muestra porcentajes y usa una consulta SQL para definir las columnas del cruce.

### Ejemplo 3: Cruce con consulta SQL condicional
```
[Grid] cd_propiedad | | select cd_propiedad, nm_propiedad from propiedad where tipo='{Field}' order by cd_propiedad
```
Usa una consulta SQL con condición basada en el campo actual.

### Ejemplo 4: Cruce con lista de valores
```
[Grid] cd_propiedad | | A,AA; B,BB; C,CC
```
Define las columnas usando una lista de valores separados por punto y coma.

### Ejemplo 5: Cruce con lógica personalizada
```
[Grid] f_nacimiento | | 1,Niños; 2,Adultos; 3,Ancianos
$edad = $Hoy-$Value;
if( $Value < 20 ){
    $p = 1;
} else if( $Value > 65 ){
    $p = 3;
} else {
    $p = 2;
}
return $p;
```

Este ejemplo:
- Define tres categorías de edad: Niños, Adultos, Ancianos
- Calcula la edad restando la fecha de nacimiento del año actual
- Asigna cada registro a una categoría según la edad
- Retorna el número de columna correspondiente (1, 2 o 3)

> **Nota**: El código PHP personalizado debe terminar siempre con `return` seguido del número de columna donde se colocará el dato.