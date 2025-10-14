# ChangeFilter

## Sintaxis

```
[ChangeFilter] NmField | Function / Sql / Definición Select virtual [ | true ] [ | memory ] [ | full ]
```

## Descripción

En un listado cuando se muestran las condiciones, permite que la condición se pueda cambiar desde el listado mostrando un menú de valores. Si este menú se pulsa con la tecla "Control" presionada, se ejecutará en una subventana.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **NmField** | Nombre del campo a filtrar |
| **Function/Sql/Definición** | Método para obtener los valores del filtro |
| **true** | Permite tener una entrada vacía (solo para SQL) |
| **memory** | Campo oculto que se filtra mediante select |
| **full** | Muestra todas las opciones como botones en lugar de select |

### Métodos de definición

#### 1. Llamada a función de usuario
```
nombreFuncion()
```

#### 2. Sentencia SQL
```
select campo_valor, campo_descripcion from tabla [where condicion] [order by campo]
```

#### 3. Definición de Select Virtual
```
valor1,descripcion1; valor2,descripcion2; valor3,descripcion3
```

### Parámetros adicionales

| Parámetro | Descripción |
|-----------|-------------|
| **true** | Solo para SQL. Permite tener una entrada vacía en el filtro |
| **memory** | El campo está oculto en el listado y se filtra mediante un select |
| **full** | Como memory, pero muestra botones en lugar de select |

## Ejemplos

### Ejemplo 1: Select virtual con valores fijos
```
[ChangeFilter] periodo | 2012-02,2012-02; 2012-01,2012-01
```
Define un filtro para el campo `periodo` con dos opciones fijas.

### Ejemplo 2: Consulta SQL con entrada vacía
```
[ChangeFilter] periodo | select periodo, periodo from dl_transfer group by 1 order by 1 desc | true
```
- Obtiene los valores únicos del campo `periodo` de la tabla `dl_transfer`
- Permite una opción vacía (`true`)
- Ordena descendentemente

### Ejemplo 3: Función de usuario
```
[ChangeFilter] periodo | uGetFilter()
```

Con la función definida:
```php
[PHPIni]
function uGetFilter(){
    $Dim = array();
    qQuery('select periodo from dl_transfer group by 1 order by 1 desc');
    while($r = qArray())
        $Dim[] = array($r['periodo'], $r['periodo']);
    return $Dim;
}
```

### Ejemplo 4: Filtro con campo oculto (memory)
```
[ChangeFilter] estado | activo,Activo; inactivo,Inactivo | | memory
```
El campo `estado` no se muestra en el listado, pero se puede filtrar mediante un select.

### Ejemplo 5: Filtro con botones (full)
```
[ChangeFilter] categoria | select id, nombre from categorias order by nombre | | full
```
Muestra todas las categorías como botones en lugar de un select desplegable.

## Comportamiento especial

- **Tecla Control**: Si se pulsa el filtro mientras se mantiene presionada la tecla Control, se abre en una subventana
- **Campo oculto**: Con el parámetro `memory`, el campo no aparece en las columnas del listado
- **Botones vs Select**: El parámetro `full` cambia la interfaz de select desplegable a botones individuales

## Notas importantes

- La función de usuario debe retornar un array bidimensional: `[valor, descripción]`
- Las consultas SQL deben retornar exactamente dos columnas: valor y descripción
- El parámetro `true` solo funciona con consultas SQL, no con funciones o select virtual