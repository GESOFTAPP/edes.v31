# CheckList

## Sintaxis
```
[CheckList] Field | NmCol | Field/Select/FuncUser/OptionList [ | TypeList='' | NmRowPDF=1 [ | AltoEnPx ]]
```

## Descripción
En un campo "Field" se puede guardar "n" selecciones de una lista de checkbox. El número de selecciones depende del ancho del campo "Field" que debería ser un varchar. Permite crear listas de verificación múltiple donde el usuario puede seleccionar varios elementos de una lista predefinida.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Field` | String | Nombre del campo (tipo varchar) donde se guardan las selecciones |
| `NmCol` | Integer | Número de columnas de checkbox para la visualización |
| `Field/Select/FuncUser/OptionList` | String | Fuente de datos para generar los checkbox |
| `TypeList` | String | (Opcional) Tipo de visualización en listados |
| `NmRowPDF` | Integer | (Opcional) Número máximo de líneas en PDF cuando TypeList=wrap |
| `AltoEnPx` | Integer | (Opcional) Alto en píxeles del contenedor |

## Tipos de fuente de datos

### 1. Consulta SQL
```sql
select campo_valor, campo_texto from tabla order by campo_orden
```

### 2. Campo de relación
```
cd_[NmTable]
```
Nombre de campo del tipo "cd_[NmTable]" (IDA - Identificador de Tabla)

### 3. Función de usuario
```
nombreFuncion()
```
Función que debe devolver una matriz de dos dimensiones

### 4. Lista de opciones
```
Valor1,Texto1; Valor2,Texto2; ...
```
Lista de opciones como en la etiqueta `[AddOption]`

## Tipos de visualización (TypeList)

| Valor | Descripción |
|-------|-------------|
| `''` (Vacío) | Se ven los códigos |
| `wrap` | Se verán los literales cada uno en una línea |
| `nowrap` | Se verán los literales en una sola línea separados por coma |
| `box` | (Futura prestación) Se verán los códigos y al ponerte encima los literales |

## Parámetros adicionales

### NmRowPDF
- Solo aplica cuando `TypeList=wrap`
- Indica el número máximo de líneas a mostrar en un PDF

### AltoEnPx
- Define el alto en píxeles del contenedor
- Por defecto no hay contenedor
- Si se pone "0" se pondrá contenedor ajustado al tamaño del objeto

## Funciones JavaScript

### Incluir librería
```javascript
[JSInclude] * | $js/eCheckListAll
```

### Marcar/desmarcar todos
```javascript
eCheckListAll("NmField", true);   // Marcar todos
eCheckListAll("NmField", false);  // Desmarcar todos
```

### Marcar elementos específicos
```javascript
eCheckListAll("NmField", ",01,15,09,");  // Marcar elementos específicos
```

### Establecer valores
```javascript
eCheckListPut("Campo", "ValoresSeparadosPorComa");
```

## Ejemplos de uso

### Ejemplo 1: CheckList con consulta SQL
```
[CheckList] prueba | 4 | select cd_auto, nm_auto from auto order by 2 | wrap | 4

[Fields]
Prueba | prueba | o | T | 40 | | M | | |
```
En el campo "prueba" se guardará una selección de autonomías. En un listado se verá cada autonomía seleccionada en una línea y al sacarlo por PDF como máximo se verán 4 selecciones.

### Ejemplo 2: CheckList con campo de relación
```
[CheckList] prueba | 4 | cd_auto
```

### Ejemplo 3: CheckList con lista de opciones
```
[CheckList] prueba | 4 | C,Consultas; M,Modificaciones; B,Borrado | wrap | 4
```

### Ejemplo 4: CheckList con función de usuario
```
[CheckList] prueba | 4 | uCargar()

[PHPIni] *
function uCargar(){
    $Dim = array();
    $Dim[] = array(1, '1111');
    $Dim[] = array(2, '2222');
    $Dim[] = array(3, '3333');
    return $Dim;
}
```

### Ejemplo 5: Implementación completa con JavaScript
```
[CheckList] permisos | 3 | select cd_permiso, nm_permiso from permisos order by nm_permiso | wrap | 2 | 200

[JSInclude] * | $js/eCheckListAll

[JSEnd] *
// Marcar todos los permisos por defecto
eCheckListAll("permisos", true);

// Función para marcar permisos específicos
function marcarPermisosBasicos() {
    eCheckListPut("permisos", "1,3,5");
}

// Función para limpiar selección
function limpiarPermisos() {
    eCheckListAll("permisos", false);
}

[Fields]
Permisos | permisos | o | T | 100 | | M | | |
```

## Formato de almacenamiento

Los valores seleccionados se almacenan en el campo como una cadena separada por comas:
```
,valor1,valor2,valor3,
```

## Casos de uso comunes

1. **Permisos de usuario**: Selección múltiple de permisos
2. **Categorías**: Asignación de múltiples categorías a un elemento
3. **Características**: Selección de características de un producto
4. **Departamentos**: Asignación a múltiples departamentos
5. **Etiquetas**: Sistema de etiquetado múltiple
6. **Opciones de configuración**: Múltiples configuraciones activas

## Consideraciones técnicas

- El campo debe ser de tipo `varchar` con longitud suficiente
- Los valores se almacenan separados por comas con comas al inicio y final
- La función `eCheckListAll` requiere incluir la librería JavaScript
- Los checkboxes se organizan en columnas según el parámetro `NmCol`
- La visualización en PDF se puede limitar con `NmRowPDF`

## Validación y manejo de errores

```javascript
// Verificar si hay selecciones
function tieneSelecciones(campo) {
    var valor = eGF(campo);
    return valor && valor.length > 2; // Más que solo las comas
}

// Contar selecciones
function contarSelecciones(campo) {
    var valor = eGF(campo);
    if (!valor || valor.length <= 2) return 0;
    return (valor.match(/,/g) || []).length - 1;
}
```

## Integración con formularios

```
[FormCheck] *
if (!tieneSelecciones('permisos')) {
    alert('Debe seleccionar al menos un permiso');
    return false;
}
```

## Notas importantes

- Los valores se almacenan como cadena, no como array
- La búsqueda en base de datos requiere usar `LIKE` o funciones de cadena
- El orden de las columnas se define por `NmCol`
- Para PDF, considerar el espacio disponible al definir `NmRowPDF`
- Las funciones PHP deben devolver arrays bidimensionales [valor, texto]