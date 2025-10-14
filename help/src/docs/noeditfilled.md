# NoEditFilled

## Sintaxis

```
[NoEditFilled] Mode [ [ | session ] | ListaDeCampos ]
```

## Descripción

La directiva `NoEditFilled` evita la edición de los campos que estén rellenos con un valor por defecto cuando este tenga contenido. Esta funcionalidad es útil para proteger datos existentes y permitir diferentes niveles de acceso de edición según el tipo de usuario o contexto.

## Parámetros

### Mode
- **Tipo**: Obligatorio
- **Descripción**: Modo de ejecución de la directiva

### session (Opcional)
- **Tipo**: Parámetro opcional
- **Descripción**: Cuando se especifica este parámetro, la directiva evitará únicamente la edición de las variables de sesión que estén rellenas, permitiendo la edición de otros campos aunque tengan contenido

### ListaDeCampos (Opcional)
- **Tipo**: Lista de campos separados por comas
- **Descripción**: Especifica una lista de campos específicos que no podrán ser editados cuando estén rellenos. Solo afecta a los campos incluidos en esta lista

## Ejemplos de Uso

### Ejemplo 1: Bloqueo general
```
[NoEditFilled] a
```
**Comportamiento**: No permitirá editar ningún campo que esté relleno, independientemente de su origen o tipo.

### Ejemplo 2: Bloqueo solo para variables de sesión
```
[NoEditFilled] a | session
```
**Comportamiento**: 
- No permitirá editar campos rellenos mediante variables de sesión
- Permitirá editar campos rellenos que no provengan de variables de sesión

### Ejemplo 3: Bloqueo selectivo por campos
```
[NoEditFilled] a | | campo1, campo2
```
**Comportamiento**: No permitirá editar únicamente los campos `campo1` y `campo2` cuando estén rellenos. El resto de campos podrán editarse normalmente aunque tengan contenido.

## Casos de Uso

- **Protección de datos críticos**: Evitar la modificación accidental de información importante ya existente
- **Control de acceso diferenciado**: Permitir diferentes niveles de edición según el contexto de la sesión
- **Validación de formularios**: Mantener la integridad de campos específicos una vez que han sido completados
- **Flujos de trabajo con múltiples usuarios**: Control granular sobre qué campos pueden ser modificados por diferentes tipos de usuarios

## Notas Importantes

- La directiva solo afecta a campos que ya tienen contenido
- Los campos vacíos siempre permanecen editables
- El parámetro `session` y `ListaDeCampos` son mutuamente excluyentes
- La lista de campos debe separarse por comas sin espacios adicionales para un funcionamiento óptimo