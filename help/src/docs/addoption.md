# AddOption

## Sintaxis
```
[AddOption] Mode | Field [,Field,Field...] | Options_List [ | Color [,BackgroundColor [,fontWeight ]]; Color [,BackgroundColor [,fontWeight ]] ; ... ]
```

## Descripción
En un control "SELECT" añade más opciones "option" al principio de la lista. Permite definir opciones adicionales para campos de tipo "SV" (Virtual Select) con diversas fuentes de datos y formatos de visualización.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Mode` | String | Modo de aplicación de las opciones |
| `Field` | String | Nombre del campo que aparece en `[Fields]` con tipo de control "SV" |
| `Options_List` | String | Lista de opciones en formato `Valor1,Texto1;Valor2,Texto2;...` |
| `Color` | String | (Opcional) Color del texto para cada opción |
| `BackgroundColor` | String | (Opcional) Color de fondo para cada opción |
| `fontWeight` | String | (Opcional) Grosor de la fuente para cada opción |

## Formatos de Options_List

### 1. Lista de valores estática
```
Valor1,Texto1;Valor2,Texto2;...;ValorN,TextoN
```

### 2. Línea divisoria
Si el valor es igual a `~`, se creará una línea divisoria visual.

### 3. Función PHP
```php
function nombreFuncion() {
    // Debe retornar matriz bidimensional [valor, texto]
    return array(
        array('valor1', 'texto1'),
        array('valor2', 'texto2')
    );
}
```

### 4. Consulta SQL
```sql
SELECT campo_valor, campo_texto FROM tabla ORDER BY campo_orden
```
- Con parámetro adicional `BLANK` para generar opción vacía

### 5. Archivo externo
```
>/_datos/config/archivo.sv
```

### 6. Parámetro de configuración
```
/_datos/config/virtual.sv->parametro
/_datos/config/sql.ini->$variable
```

## Ejemplos de uso

### Ejemplo básico - Lista estática
```
[AddOption] c | _gs_formato_ | H,HTML; P,PDF; X,XLS

[Fields]
FORMATO | _gs_formato_ | X | SV | 1 | | Q | H | |
```

### Ejemplo con función PHP
```
[AddOption] c | _gs_formato_ | Prueba()

[PHPIni] *
function Prueba(){
    $p = array();
    $p[0] = array('H','HTML');
    $p[1] = array('P','PDF');
    $p[2] = array('X','XLS');
    return $p;
}
```

### Ejemplo con archivo externo
```
[AddOption] c | _gs_formato_ | >/_datos/config/select.php
```

**Archivo: /_datos/config/select.php**
```php
<?PHP
$p = array();
$p[0] = array('H','HTML');
$p[1] = array('P','PDF');
$p[2] = array('X','XLS');
return $p;
?>
```

### Ejemplo con consulta SQL
```
[AddOption] ? | cd_auto | select cd_auto, nm_auto from auto order by nm_auto
[AddOption] ? | dt_std  | select dt_std from estadistica order by dt_std | blank
```

### Ejemplo con opciones múltiples
```
[AddOption] * | estado |
    ,
    P,Pendiente
    F,Facturado
    A,Anulado
    E,Enviado
```

### Ejemplos avanzados con filtros
```
[AddOption] c | cd_pais  | )'011'.''(, [ Extranjero ]
[AddOption] c | cd_cobro | ('DT'.'DS'.'DA'),DOMICILIADA *; ('MT'.'MS'.'MA'),MANO *
[AddOption] c | estado   | [ABC],A*; [DEF],B*
```

### Ejemplo con configuración de visualización
```
[AddOption] c | _PDFBREAKPAGE | ,; cd_auto,Autonomía; cd_auto+cd_prov,Provincia
[AddOption] c | _ORDEN_       | nombre,Nombre; P.cd_auto+P.nombre,Autonomía y Nombre
```

## Casos de uso comunes

- **Listas de estados**: Pendiente, Procesado, Completado
- **Formatos de exportación**: HTML, PDF, Excel
- **Categorías dinámicas**: Cargadas desde base de datos
- **Opciones de configuración**: Leídas desde archivos externos
- **Filtros avanzados**: Con condiciones específicas

## Notas importantes

1. El campo debe estar definido en `[Fields]` con tipo de control "SV"
2. Las opciones se añaden al **principio** de la lista existente
3. Se pueden combinar múltiples llamadas a `[AddOption]` para el mismo campo
4. Los colores y estilos son opcionales y se aplican por opción
5. Las funciones PHP deben retornar arrays bidimensionales
6. Los archivos externos deben retornar la estructura de datos correcta