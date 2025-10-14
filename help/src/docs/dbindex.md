# DBIndex

## SINTAXIS

```
[DBIndex] FieldsList [[; FieldsList [; FieldsList [ | Edit [ | CheckIndex [ | ShowFields [ | Message [ | FuncUser [ | DDBB ] ] ] ] ] ] ] ]
```

## DESCRIPCIÓN

Define los índices únicos de la tabla seleccionada en `[DBTable]`. El primer `FieldsList` es el índice único principal de actualización, y los siguientes son índices únicos secundarios opcionales.

### Comportamiento especial:
- Si no se define y la tabla tiene un solo registro, se puede modificar y consultar directamente con `#mR:script` o `#cR:script`
- Permite validación automática de duplicados
- Controla la edición de campos índice

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **FieldsList** | Lista de campos separados por comas que forman el índice único principal |
| **; FieldsList** | Índices únicos secundarios (separados por `;`). Si tiene un solo campo, no valida si está vacío |
| **Edit** | Constante para permitir editar el campo índice cuando tiene un solo campo (solo en fichas) |
| **CheckIndex** | `true` o `t` para validar campos del índice después de introducir valores, antes de rellenar la ficha |
| **ShowFields** | Lista de campos a mostrar cuando el registro ya existe |
| **Message** | Mensaje personalizado si el registro ya existe. Puede incluir HTML y título/subtítulo separados por `\` |
| **FuncUser** | Nombre de función de usuario a llamar si el registro ya existe |
| **DDBB** | Nombre del archivo de definición para bases de datos alternativas |

## FUNCIONAMIENTO DEL CHECKINDEX

Cuando `CheckIndex` está activado (`true` o `t`):
- Se validan los campos del índice tras introducir valores
- Si el registro existe, muestra: "El registro ya existe."
- Solo funciona con:
  - Un índice con uno o más segmentos
  - Dos índices donde uno es serial

## EJEMPLOS

### Ejemplo 1: Índice simple
```
[DBIndex] cd_cliente
```

### Ejemplo 2: Índice compuesto
```
[DBIndex] cd_empresa, cd_sucursal
```

### Ejemplo 3: Múltiples índices únicos
```
[DBIndex] cd_obra; cd_obra2
```

### Ejemplo 4: Con validación y mensaje personalizado
```
[DBIndex] cd_obra; cd_obra2 || true | cd_obra2, nm_obra | LA OBRA YA ESTA DADA DE ALTA
```

### Ejemplo 5: Con función de usuario
```
[DBIndex] cd_cliente | | true | cd_cliente, nm_cliente | Cliente duplicado | ValidarCliente
```

### Ejemplo 6: Con base de datos alternativa
```
[DBIndex] cd_producto | | true | | | | archivo_productos
```

## CASOS DE USO

### Validación de códigos únicos
```
[DBIndex] codigo_producto | | true | codigo_producto, descripcion | PRODUCTO YA REGISTRADO
```

### Índices múltiples con validación
```
[DBIndex] nif; email | | true | nif, nombre, email | CLIENTE DUPLICADO\Revise los datos
```

### Permitir edición de campo índice
```
[DBIndex] cd_usuario | Edit
```

## FORMATO DEL MESSAGE

El parámetro `Message` permite:
- **Texto simple**: `Registro duplicado`
- **Con HTML**: `<b>Error:</b> Registro duplicado`
- **Título y subtítulo**: `Título Principal\Subtítulo Secundario`

## NOTAS IMPORTANTES

- El primer `FieldsList` es obligatorio para el índice principal
- Los índices secundarios se separan con `;`
- `CheckIndex` mejora la experiencia de usuario al validar antes
- `ShowFields` ayuda a identificar el registro duplicado
- Útil para mantener integridad de datos y mejorar usabilidad
- En índices de un solo campo vacío, no se valida la unicidad