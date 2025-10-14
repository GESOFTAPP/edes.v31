# NoEdit

## Sintaxis

```
[NoEdit] Mode | FieldsList
```

## Descripción

Establece restricciones de edición para campos específicos según el modo de operación. Los campos incluidos en la lista no serán editables cuando el formulario esté en los modos especificados, proporcionando control granular sobre qué campos pueden ser modificados en diferentes contextos.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación en el que se aplicará la restricción |
| **FieldsList** | Lista de campos separados por comas que deben existir en la etiqueta `[Fields]` |

## Modos de Operación Comunes

- **Insert** - Modo de inserción/creación de registros
- **Update** - Modo de actualización/modificación de registros
- **View** - Modo de visualización (solo lectura)
- **Custom** - Modos personalizados definidos por la aplicación

## Ejemplos de Uso

### Ejemplo 1: Campos No Editables en Actualización

```
[NoEdit] Update | id, fechaCreacion, usuarioCreador
```

**Resultado:** En modo Update, los campos `id`, `fechaCreacion` y `usuarioCreador` no serán editables.

### Ejemplo 2: Restricción en Modo Inserción

```
[NoEdit] Insert | fechaModificacion, usuarioModificador
```

**Resultado:** En modo Insert, los campos de modificación no serán editables ya que no tienen sentido en la creación inicial.

### Ejemplo 3: Múltiples Restricciones

```
[NoEdit] Update | codigo
[NoEdit] View | password, tokenAcceso
```

**Resultado:** 
- En modo Update: el campo `codigo` no es editable
- En modo View: los campos `password` y `tokenAcceso` no son editables

## Casos de Uso Comunes

- **Campos de auditoría**: Fechas de creación, usuarios creadores, timestamps
- **Identificadores únicos**: Códigos, IDs, referencias externas
- **Campos calculados**: Totales, contadores, valores derivados
- **Información sensible**: Contraseñas, tokens, datos de seguridad

## Notas Importantes

- Los campos especificados deben existir previamente en la etiqueta `[Fields]`
- La restricción se aplica solo al modo especificado
- Se pueden definir múltiples reglas `[NoEdit]` para diferentes modos
- Los campos restringidos pueden seguir siendo visibles, pero no modificables
- Esta funcionalidad es complementaria a otros controles de acceso del sistema