# SaveTrace

## Sintaxis

```
[SaveTrace] Mode
```

## Descripción

Deja el rastro en el LOG en el proceso actual. Debe estar activada la estadística global.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `Mode` | Modo de activación del rastro. Valores posibles: `a`, `c`, `b`, `mR`, `A`, `M`, `cR`, etc. |

## Ejemplos

### Ejemplo 1: Modo básico
```
[SaveTrace] a
```

### Ejemplo 2: Modo con configuración específica
```
[SaveTrace] mR
```

### Ejemplo 3: Modo completo
```
[SaveTrace] A
```