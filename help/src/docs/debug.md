# Debug

## Sintaxis

```
[Debug] Mode | Type [ [ | Usuario ] | LabelARastrear ]
```

## Descripción

Ejecutar el archivo de definición en modo debug, en el grupo de fichas sólo está disponible en el GDF.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `Mode` | Modo de debug |
| `Type` | Tipo de debug (ver tabla de valores) |
| `Usuario` | Número de usuario. La etiqueta solo tendrá efecto para ese usuario. Se puede usar valor numérico o literal en DF, pero para modificar en código PHP debe usar valor numérico |
| `LabelARastrear` | Cuando `Type==TMP`, puede ser el nombre de la etiqueta a rastrear o "JS" para todos los javascript. En etiquetas multilínea usa la variable `__eLINE__` para detectar errores. Añadir ",console" genera `console.log()` en lugar de variable de rastreo |

## Valores de Type

| Valor | Nombre | Descripción |
|-------|--------|-------------|
| 0 | OFF | Desactivado |
| 1 | SQL | Se imprimen todas las salidas SQL |
| 2 | TMP | No se borran del subdirectorio temporal los includes PHP del usuario como "DBIni" y "PHPForm" |
| 3 | BORDER | Pinta los bordes de las celdas del formulario |
| 4 | SaveSQL | Se graban todas las sentencias SQL en el modo indicado |
| 5 | InOut | Muestra tabla con campos de entrada y valores a grabar en DB (Alta/Modificación) sin modificar |
| 6 | WInOut | Igual que 5 pero se abre en ventana nueva descargando la página |
| 7 | NoZip | Desactiva compresión de página (útil para ver código fuente) |
| 8 | Flag | En etiquetas multilínea JavaScript muestra `alert()` indicando inicio y fin del código |
| 9 | DF | Muestra el código del DF (Definition File) a ejecutar |
| 10 | SaveSQLH | Igual que SaveSQL pero mantiene el historial |
| 11 | SaveDF | Graba en gsTron el código del DF (Definition File) a ejecutar |
| 12 | phpInfo | Muestra sólo el resultado de la función `phpinfo()` |
| 13 | ViewFields | Muestra ventana con campos antes de enviar al servidor (alta/modificación) |
| 14 | Eval | (futuro valor) |
| 15 | Observe | Hace saltar el debug al modificar value de campo, propiedad o atributo style |
| 20 | SelInfo | Rastrea todas las operaciones de la etiqueta [SELINFO] |
| 30 | ErrSQL | Las funciones SQL devuelven -1 si hay error y no para la ejecución |
| 31 | HTM | Graba páginas a enviar al PC en `/_tmp/log/[_User]_ddHHiiss.htm` |
| - | DATA | Muestra información de matrices $_POST, $_GET y $_FILE |

## Ejemplos

### Ejemplo 1: Debug básico SQL
```
[Debug] mR | SQL
```

### Ejemplo 2: Debug para usuario específico
```
[Debug] mR | TMP | 123
```

### Ejemplo 3: Debug con observe en campo específico
```
[Debug] mR | observe || :cd_banco
```
Al modificar el campo cd_banco.

### Ejemplo 4: Debug observe con style y atributos
```
[Debug] mR | observe || :cd_banco | style,leng
```
Al cambiar el style o el atributo "leng" del campo cd_banco.

### Ejemplo 5: Debug observe en grupo de campos
```
[Debug] mR | observe || :cd_banco_grupo
```
Al modificar el campo cd_banco_grupo.

## Notas

- El parámetro 4 identifica al objeto (":" fields, "#" id, "." class)
- El parámetro 5 especifica "style" y/o cualquier nombre de atributo
- Para Type==9 o Type==11, la etiqueta debe ponerse al principio del script o temporalmente en "sql.ini"
- La etiqueta observe se puede repetir múltiples veces