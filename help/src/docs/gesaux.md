# GesAux

## Sintaxis

```
[GesAux] Mode | Field | Script | Operations
```

## Descripción

Permite el mantenimiento de una tabla auxiliar desde el campo select. Esta funcionalidad facilita la gestión de datos auxiliares directamente desde la interfaz de usuario, proporcionando opciones para insertar, actualizar y eliminar registros en tablas relacionadas.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo en el que se ejecuta la opción. Valores permitidos: `a` (agregar) y `mR` (modo restringido) |
| **Field** | Nombre del campo que mantendrá la tabla auxiliar |
| **Script** | Nombre del script que se ejecutará para realizar las operaciones |
| **Operations** | Modos de ejecución disponibles:<br>• `i` - Insert (insertar)<br>• `u` - Update (actualizar)<br>• `d` - Delete (eliminar) |

## Ejemplo de Uso

```
#(w)[GesAux] * | cd_estado | man/estado | i,u,d
```

### Explicación del Ejemplo

- `#(w)` - Indica que es una opción exclusiva para usuarios con permisos de webmaster
- `[GesAux]` - Invoca la funcionalidad de gestión auxiliar
- `*` - Mode configurado como comodín
- `cd_estado` - Campo que se mantendrá
- `man/estado` - Script ubicado en el directorio `man` con nombre `estado`
- `i,u,d` - Operaciones permitidas: insertar, actualizar y eliminar

## Notas Importantes

- La funcionalidad requiere permisos específicos según el modo configurado
- El script especificado debe existir en la ruta indicada
- Las operaciones se ejecutan según los permisos del usuario y la configuración del sistema