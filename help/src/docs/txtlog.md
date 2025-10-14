# TXTLog

## Sintaxis

```
[TXTLog] mode | ficheroDeLog [ | prefijo [ | y/ym ] ]
```

## Descripción

Se graba en un fichero plano en los modos "A", "B" y "M" la petición POST y GET.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `mode` | Modo de grabación (A, B, M) |
| `ficheroDeLog` | Nombre del fichero donde se guardará el log |
| `prefijo` | Prefijo opcional para las entradas del log |
| `y/ym` | Formato de fecha: `y` para año, `ym` para año-mes |

## Ejemplos

### Ejemplo 1: Log básico
```
[TXTLog] A | access.log
```

### Ejemplo 2: Log con prefijo
```
[TXTLog] B | requests.log | REQ
```

### Ejemplo 3: Log con formato de fecha
```
[TXTLog] M | debug.log | DEBUG | ym
```