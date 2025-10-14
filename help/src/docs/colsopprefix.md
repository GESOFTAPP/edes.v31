# ColsOpPrefix

## Sintaxis

```
[ColsOpPrefix] PrefijoGrupo1 [ | PrefijoGrupo2 ... ]
```

## Descripción

Cuando se hacen listados con grupos se puede poner un prefijo al valor del grupo. Esta etiqueta siempre va acompañada con `[ColsOp]` y pone el prefijo por cada parámetro de "S" de grupo.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| PrefijoGrupo1 | string | Prefijo para el primer nivel de agrupación (primera "S" en ColsOp) | Requerido |
| PrefijoGrupo2 | string | Prefijo para el segundo nivel de agrupación (segunda "S" en ColsOp) | Opcional |
| ... | string | Prefijos adicionales para más niveles de agrupación | Opcional |

## Ejemplos

### Ejemplo básico con dos niveles

```
[ColsOp] S,S,+,+,+,+,
[ColsOpPrefix] Autonomía: | Provincia:
```

- Primer nivel de agrupación mostrará: "Autonomía: [valor]"
- Segundo nivel de agrupación mostrará: "Provincia: [valor]"

### Ejemplo con un solo nivel

```
[ColsOp] S,+,+,+
[ColsOpPrefix] Categoría:
```

El grupo mostrará: "Categoría: [valor]"

### Ejemplo con múltiples niveles

```
[ColsOp] S,S,S,+,+,+
[ColsOpPrefix] País: | Región: | Ciudad:
```

- Primer nivel: "País: [valor]"
- Segundo nivel: "Región: [valor]"  
- Tercer nivel: "Ciudad: [valor]"

## Notas

- Debe usarse siempre junto con `[ColsOp]` que contenga parámetros "S"
- El orden de los prefijos corresponde al orden de los parámetros "S" en `[ColsOp]`
- Si hay más parámetros "S" que prefijos definidos, los grupos sin prefijo mostrarán solo el valor
- Los prefijos se añaden antes del valor del campo de agrupación
- Es útil para mejorar la legibilidad de listados con agrupaciones jerárquicas