# ColsNoRepeat

## Sintaxis

```
[ColsNoRepeat] ,...
```

**Sintaxis alternativa:**
```
[ColsNoRepeat] NomCampo [,...] [ | classNameTD [ NOEMPTY] ]
```

## Descripción

En los listados, especifica qué datos dejar en blanco si se repiten en la fila anterior. Esta etiqueta solo tiene efecto en HTML y PDF. Opcionalmente permite asignar una clase CSS para identificar las celdas afectadas.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `NomCampo` | Nombre del campo o columna a procesar |
| `classNameTD` | Clase CSS opcional para identificar las celdas |

### Modificadores del sistema

| Modificador | Descripción |
|-------------|-------------|
| `NOEMPTY` | No deja el dato en blanco y le aplica otro color |
| `TRANSPARENT` | Clase del sistema para aplicar color muy tenue |

## Comportamiento

- **Por defecto**: Las celdas con valores repetidos se muestran en blanco
- **Con NOEMPTY**: Las celdas mantienen el valor pero con formato diferente
- **Con TRANSPARENT**: Aplica la clase del sistema para color tenue
- **Solo funciona en**: Salidas HTML y PDF

## Ejemplos

### Ejemplo 1: Columnas por posición
```
[ColsNoRepeat] true,1
```
Aplica la funcionalidad a las columnas en las posiciones especificadas.

### Ejemplo 2: Columnas por nombre de campo
```
[ColsNoRepeat] cd_auto,cd_prov
```
Procesa los campos 'cd_auto' y 'cd_prov' para evitar repeticiones.

### Ejemplo 3: Con modificadores
```
[ColsNoRepeat] a, b, c, d | NOEMPTY TRANSPARENT
```
- Procesa los campos a, b, c, d
- Aplica `NOEMPTY`: mantiene los valores visibles
- Aplica `TRANSPARENT`: usa color tenue del sistema