# Assign

## SINTAXIS
```
[Assign] Mode [ | ListaDeCampos ]
```

## DESCRIPCIÓN

La etiqueta `[Assign]` está vinculada a la posición 8 de la etiqueta `[Fields]` que corresponde al "valor por defecto". Esta etiqueta permite controlar cuándo y cómo se asignan los valores por defecto a los campos definidos en la configuración.

### Funcionamiento por defecto
- El motor asigna valores por defecto únicamente en el modo **Altas** (a) de forma predeterminada
- Antes de asignar el valor, se eliminan automáticamente los caracteres `" :-0"` del contenido del campo
- Si después de esta limpieza el campo queda vacío, se procede a sustituir el dato con el valor por defecto

### Modo abreviado
Existe una forma simplificada de asignar valores por defecto en modo "mR" mediante el atributo `"a"` en la columna "modo" de la etiqueta `[Fields]`.

## PARÁMETROS

| Parámetro | Valores | Descripción |
|-----------|---------|-------------|
| **Mode** | `mR` / `bR` | Modo de operación para la asignación |
| **ListaDeCampos** | Lista de campos | Campos específicos donde aplicar el valor por defecto, incluso si ya contienen un valor |

## EJEMPLOS

### Ejemplo 1: Asignación básica
```
[Assign] mR 
[Fields] Fecha | fecha | F4 | T | 10 | | - | #hoy# | |
```

**Comportamiento:**
- Por defecto, solo en el **alta** se asignará la fecha actual
- Con `[Assign] mR`, en el modo **modificación** también se rellenará el campo si está vacío

### Ejemplo 2: Modo abreviado
```
[Fields] Fecha | fecha | F4 | T | 10 | | -a | #hoy# | |
```

**Comportamiento:**
- El atributo `"a"` en la columna modo hace que en modo "mR" también se actualice el campo "fecha"
- Equivale a usar `[Assign] mR` pero de forma más concisa

## NOTAS IMPORTANTES

- La asignación solo ocurre cuando el campo está efectivamente vacío después del proceso de limpieza
- Los valores por defecto se definen en la posición 8 de la etiqueta `[Fields]`
- El comportamiento puede variar según el modo de operación (alta, modificación, etc.)