# SubListDF

## Sintaxis

```
[SubListDF] NameSubList | FileName | FieldRelation
```

## Descripción

Indica el DF (Data Form) que mantiene las Sublistas. Esta etiqueta establece la relación entre el formulario actual y un subformulario que contiene datos relacionados, permitiendo la gestión de listas dependientes o detalle dentro de un registro maestro.

## Parámetros

| Parámetro | Descripción | Requerido |
|-----------|-------------|-----------|
| **NameSubList** | Nombre identificador de la sublista | Sí |
| **FileName** | Ruta y nombre del archivo DF que contiene la sublista | Sí |
| **FieldRelation** | Campo que establece la relación entre el DF principal y la sublista | Sí |

### Detalles de los parámetros

- **NameSubList**: Identificador único para referenciar la sublista dentro del contexto del formulario principal
- **FileName**: Ruta relativa al archivo `.edf` que define la estructura de la sublista
- **FieldRelation**: Campo clave que vincula los registros del formulario principal con los de la sublista

## Ejemplo

### Uso básico
```
[SubListDF] fotos | vi/v_fotos.edf | codigo
```

Este ejemplo indica que:
- La sublista se identifica como "fotos"
- El archivo de definición está en `vi/v_fotos.edf` 
- La relación se establece a través del campo "codigo"

### Casos de uso comunes

#### Gestión de fotografías de productos
```
[SubListDF] fotos_producto | productos/fotos.edf | id_producto
```

#### Lista de contactos de una empresa
```
[SubListDF] contactos | empresas/contactos.edf | id_empresa
```

#### Detalles de una factura
```
[SubListDF] lineas_factura | facturacion/lineas.edf | num_factura
```

## Funcionamiento

1. **Relación maestro-detalle**: El DF actual actúa como maestro, mientras que el archivo especificado contiene los detalles
2. **Filtrado automático**: Los registros de la sublista se filtran automáticamente según el valor del campo de relación
3. **Mantenimiento integrado**: Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) en la sublista desde el formulario principal

## Consideraciones

- El archivo DF especificado debe existir y ser accesible
- El campo de relación debe existir tanto en el formulario principal como en la sublista
- La sublista se actualiza automáticamente cuando cambia el registro principal
- Es importante mantener la integridad referencial entre los datos maestros y de detalle