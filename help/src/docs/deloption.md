# DelOption

## Sintaxis

```
[DelOption] Mode | Field | OptionsList [ | noEmpty ] ...
```

## Descripción

El campo especificado debe ser un campo tipo "select". En el campo indicado, elimina las opciones especificadas en el tercer parámetro.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación. Usar `*` para aplicar en cualquier modo |
| **Field** | Campo que debe existir en la etiqueta `[Fields]` y ser de tipo select |
| **OptionsList** | Lista de valores a eliminar separados por coma. Si algún valor empieza por `$` se considerará una variable y se sustituirá por su valor |
| **noEmpty** | *(Opcional)* Indica que el select no tenga el primer elemento vacío |

## Ejemplos

### Ejemplo 1: Eliminar opciones específicas
```
[DelOption] | campo_estado | opcion1,opcion2,$variable_dinamica
```

**Resultado:** Elimina del campo select `campo_estado` las opciones "opcion1", "opcion2" y el valor contenido en la variable `$variable_dinamica`.

### Ejemplo 2: Eliminar opciones sin elemento vacío
```
[DelOption] | campo_pais | ES,FR,IT | noEmpty
```

**Resultado:** Elimina las opciones "ES", "FR" e "IT" del campo `campo_pais` y además hace que el select no tenga un primer elemento vacío.

### Ejemplo 3: Aplicar en cualquier modo
```
[DelOption] * | cd_cnae | 0000

[Fields] ?
    CNAE | cd_cnae{cnae,codigo_cnae,codigo_cnae a,' - ',txtcnae} | X | S | 100 | | Q | | |
```

**Resultado:** Elimina la opción "0000" del campo select `cd_cnae` en cualquier modo. El campo obtiene sus datos de la tabla `cnae` mostrando el código concatenado con el texto descriptivo.

## Notas Importantes

- El campo debe estar previamente definido en `[Fields]` como tipo select
- Las variables que empiecen con `$` serán sustituidas por su valor actual
- El parámetro `noEmpty` elimina la opción vacía por defecto del select
- Las opciones se eliminan después de que el select haya sido inicialmente poblado