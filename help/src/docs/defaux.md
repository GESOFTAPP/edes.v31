# DefAux

## Sintaxis

```
[DefAux] Field | RelationTable, FieldToSave, FieldToShow
```

## Descripción

DefAux es una forma alternativa de especificar el formato IDA para el campo especificado. Esta definición puede realizarse de dos maneras:

1. **A nivel de campo individual**: Directamente en la definición del campo
2. **A nivel global**: Mediante el archivo de configuración `defaux.ini`

### Configuración Global

La definición también se puede hacer a nivel global guardándola en el archivo de configuración `defaux.ini`, el cual:

- Es editable desde **gsEdit** en el apartado "Archivos de configuración"
- Se ubica en el directorio de datos (d)

### Uso de Macros

Para utilizar este archivo de macros:

1. **En la etiqueta [Fields]**: En la definición de los campos, en la columna del nombre del campo, se coloca una almohadilla seguida de un nombre (`#NomMacro`)

2. **En el archivo "defaux.ini"**: Se define la misma macro seguida de una barra vertical como delimitador y la definición por la que se debe sustituir

#### Ejemplo de uso de macros:

**En el EDF:**
```
[Fields]
Agente | #cd_gs_user | + | S | 50 | | A | *User | # |
```

**En el archivo "defaux.ini":**
```
#cd_gs_user | cd_gs_user { gs_user, cd_gs_user, user_name, ', ', user_surname }
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Campo de la tabla definida en [DBTable] |
| **RelationTable** | Tabla de la base de datos |
| **FieldToSave** | Nombre del campo de la tabla RelationTable que se guardará |
| **FieldToShow** | Nombre del campo de la tabla RelationTable que se mostrará |

## Ejemplo

```
[DefAux] cd_gs_user | gs_user, cd_gs_user, user_name, ', ', user_surname
```

En este ejemplo:
- **Campo**: `cd_gs_user`
- **Tabla relacionada**: `gs_user`
- **Campo a guardar**: `cd_gs_user`
- **Campos a mostrar**: `user_name`, `', '`, `user_surname` (nombre, coma, apellido)

## Notas Adicionales

- La definición DefAux permite crear relaciones complejas entre tablas
- Los campos de visualización pueden incluir literales (como la coma en el ejemplo)
- Es útil para crear desplegables y campos de búsqueda con formato personalizado
- La configuración global mediante `defaux.ini` facilita la reutilización de definiciones comunes