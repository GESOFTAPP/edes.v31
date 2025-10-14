# Mirror

## Sintaxis
```
[Mirror] FieldsToReflect
```

## Descripción
Sólo en fichas que componen grupos de fichas. Refleja campos de otras solapas (Tabs) para ser visualizados en la ficha actual. Estos campos serán sólo de visualización, el usuario **NO** podrá introducir datos. Para permitir edición, utilizar la etiqueta [EditMirror].

Para poder utilizar un campo tipo Mirror, se debe colocar el código adecuado en dos ficheros de definición:

- **En el fichero de definición donde tenemos originariamente el campo que queremos reflejar**: debemos incluir el campo afectado como parámetro de la etiqueta [Mirror]
- **En el fichero de definición donde vamos a reflejar nuestro campo**: el nombre del campo destino (parámetro 2 de la etiqueta [Fields]) debe ser el mismo que el originario pero comenzando con "_", y en el parámetro 4 de la etiqueta [Fields] se debe colocar el signo de campo espejo "[ ]"

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| FieldsToReflect | String | Sí | Serie de campos separados por comas que se van a reflejar en otras fichas |

## Configuración de campos

### Ficha origen (donde se define [Mirror])
- **Campos normales**: Tipo T (editable)
- **Etiqueta [Mirror]**: Lista los campos que se reflejarán

### Ficha destino (donde se visualizan los campos)
- **Nombres de campo**: Mismo nombre que el original pero con "_" al inicio
- **Tipo de campo**: [ ] (solo lectura)
- **Acceso**: - (solo visualización)

## Ejemplo

### Ficha a reflejar (origen)
```
[Title]   EMPRESA
[DBTable] emp
[DBIndex] cd_emp
[DBOrder] cd_emp

[Mirror] cd_emp,nm_emp

[Fields]
Empresa\Codigo    | cd_emp | 0 | T |  8 || AQ |||
,\Nombre Empresa  | nm_emp | N | T | 50 || MQ |||
-||color=#c8c8c8
Teléfonos         | tlf    | X | T |  9 || M  |||
```

### Ficha reflejada (destino)
```
[Title]   INFORMACION
[DBTable] emp
[DBIndex] cd_emp

[Fields]
Empresa\Codigo | *cd*emp | 0 | [] |        8 |  | - |||
,              | *nm*emp | N | [] |       50 |  | - |||
-||color=#6A4325
Notas          | notas   | X  | A | 255,65,4 |  | M |||
```

## Funcionamiento

1. **Ficha origen**: Define campos normales y especifica cuáles reflejar con [Mirror]
2. **Ficha destino**: Define campos espejo con nombres precedidos por "_" y tipo [ ]
3. **Sincronización**: Los valores se muestran automáticamente en la ficha destino
4. **Solo lectura**: Los campos reflejados no permiten edición

## Diferencias con [EditMirror]

| Característica | [Mirror] | [EditMirror] |
|----------------|----------|--------------|
| **Edición** | Solo lectura | Editable |
| **Tipo de campo** | [ ] | [*] |
| **Acceso** | - (visualización) | Permite escritura |
| **Sincronización** | Unidireccional | Bidireccional |

## Notas importantes

- **Solo para grupos de fichas**: Funciona únicamente en grupos de fichas (GDF)
- **Nomenclatura**: Los campos destino deben comenzar con "_"
- **Tipo de campo**: Usar [ ] para campos de solo lectura
- **Acceso**: Configurar con "-" para evitar edición
- **Colores**: Se pueden aplicar estilos diferentes en cada ficha