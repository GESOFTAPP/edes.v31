# OtherDF

## Sintaxis
```
[OtherDF] Mode | EDF | Condition
```

## Descripción
Incluye otro archivo EDF si hay un sólo registro y cumple la condición especificada. Esta etiqueta solo está activa en el grupo de fichas.

## Parámetros

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| Mode | String | Sí | Los modos permitidos son: `cR`, `mR` o `bR` |
| EDF | String | Sí | Nombre del archivo EDF. Si se quiere usar el mismo modo en el que se está ejecutando, usar `{op}` |
| Condition | String | Sí | Expresión PHP que debe cumplirse para incluir el archivo |

## Modos disponibles

| Modo | Descripción |
|------|-------------|
| `cR` | Modo consulta (read) |
| `mR` | Modo modificación (modify) |
| `bR` | Modo búsqueda (browse) |
| `{op}` | Usar el mismo modo en el que se está ejecutando actualmente |

## Condiciones

Las condiciones se escriben como **expresiones PHP** y pueden incluir:
- Variables del sistema como `$_vF`, `$_Node`
- Operadores de comparación (`!=`, `==`, `>`, `<`, etc.)
- Funciones PHP estándar
- Variables de sesión y contexto

## Ejemplo

```
[OtherDF] cR,mR,bR | FcR:vi/vivienda | $_vF['cd_gs_node'] != $_Node
```

### Análisis del ejemplo:
- **Modos**: `cR,mR,bR` - Se aplica en consulta, modificación y búsqueda
- **Archivo EDF**: `FcR:vi/vivienda` - Incluye el archivo vivienda con modo FcR
- **Condición**: `$_vF['cd_gs_node'] != $_Node` - Solo si el nodo del formulario es diferente al nodo actual

## Casos de uso

### Incluir archivo en modo específico
```
[OtherDF] cR | detalles_extra | $registro_completo == true
```

### Usar el mismo modo actual
```
[OtherDF] {op} | complemento | $_vF['tiene_extras'] == 'S'
```

### Múltiples modos con condición compleja
```
[OtherDF] cR,mR | anexo_especial | $_vF['tipo'] == 'especial' && $_vF['activo'] == 'S'
```

## Funcionamiento

1. **Verificación de registro único**: Solo se activa cuando hay exactamente un registro
2. **Evaluación de condición**: Se evalúa la expresión PHP proporcionada
3. **Inclusión condicional**: Si la condición es verdadera, se incluye el archivo EDF especificado
4. **Aplicación de modo**: Se ejecuta en el modo especificado o en el modo actual si se usa `{op}`

## Notas importantes

- **Solo en grupos de fichas**: Esta etiqueta únicamente funciona en grupos de fichas (GDF)
- **Registro único**: Solo se activa cuando hay exactamente un registro
- **Expresiones PHP**: Las condiciones deben ser expresiones PHP válidas
- **Variables disponibles**: Se pueden usar variables del contexto como `$_vF`, `$_Node`, etc.
- **Modos múltiples**: Se pueden especificar varios modos separados por comas