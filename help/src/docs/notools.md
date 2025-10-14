# NoTools

## Sintaxis
```
[NoTools] OpcionesADesactivar[S] [ [ | FuncionDeUsuario [ | UserFilterFunction [ | ExtensionesAdicionales [ | NºColumnasIguales ] ] ] ]
```

## Descripción
Desactiva todas o algunas de las utilidades del listado. Si ponemos el nombre de una función de usuario esta se ejecutará al ejecutar las extracciones enviando la inicial de la acción a ejecutar y pudiendo devolver parámetros adicionales para la llamada por la URL al servidor.

Existe una función de usuario denominada "**uFileSupport()**" que si existe es llamada antes de descargar un listado en formato PDF, XLS, XML, MDB, TXT o CSV a esta función se le pasa el nombre del fichero, uno de los usos de esta función es que quede constancia de las extracciones que lo hará el desarrollador.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| OpcionesADesactivar | String | Opciones a desactivar (ver tabla de opciones) |
| FuncionDeUsuario | String | Función de usuario a ejecutar al pulsar el icono (opcional) |
| UserFilterFunction | String | Al filtrar datos pasará por la función de usuario indicada pasando el parámetro de lo que se va a buscar (opcional) |
| ExtensionesAdicionales | String | Formato PDF, XLS, XML, TXT, MDB, CVS (aunque el usuario no lo tenga se podrá extraer en estos formatos). Si se pone solamente la constante CMP aparecerá un icono para comparar listados o informes (opcional) |
| NºColumnasIguales | Number | Solo se define cuando el parámetro anterior es CMP e indica el nº de columnas que son iguales en la comparación (tendrán que estar al principio) (opcional) |

## Opciones a Desactivar

| Opción | Descripción |
|--------|-------------|
| * | Desactiva todas las utilidades |
| S | Ordenación (Sort) |
| L | Buscar datos (Location) |
| P | Imprimir (Printer) |
| x | Extraer a Excel (XLS) |
| p | Extraer a PDF (PDF) |
| m | Extraer a XML |
| t | Extraer a TXT |
| v | Extraer a CSV |
| C | Chart |
| W | Modo SubVentana |
| 2 | Ejecutar en background |
| - | No muestra la barra de utilidades |

## Ejemplos

### Ejemplo 1: Desactivar extracciones específicas
```
[NoTools] pxm
```
Desactiva las extracciones a PDF, XLS y MDB.

### Ejemplo 2: Función de usuario
```
[NoTools] | uFuncUsuario

[JSIni] l
function uFuncUsuario( Tipo ){
    return 'Variable=Valor&Variable=Valor';
}
```
Llama a una función de usuario para pasar variables adicionales al servidor.

### Ejemplo 3: Extensiones adicionales
```
[NoTools] | | | TXT, XML
```
Añade las extracciones en formato TXT y XML para el edf actual.

### Ejemplo 4: Comparación de listados
```
[NoTools] | | | CMP | 2
```
Compara dos listados/informes igualando las dos primeras columnas.

## Notas importantes
- El parámetro CMP solo estará activo en informes que no sobrepasen una página y no esté presente la etiqueta [ColsOp] con "S" de grupos
- La función **uFileSupport()** se ejecuta automáticamente antes de cualquier descarga si está definida
- Las extensiones adicionales permiten formatos de exportación aunque el usuario no tenga permisos normalmente