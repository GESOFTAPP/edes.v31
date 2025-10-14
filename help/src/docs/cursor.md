# Cursor

## Sintaxis

```
[Cursor]
```

## Descripción

En los listados, resalta la fila sobre la que se sitúa el cursor del ratón. Proporciona retroalimentación visual al usuario al navegar por las filas del listado.

## Configuración global

En el fichero de configuración `sql.ini` se puede activar el cursor por defecto en todos los listados mediante:

```ini
$_CURSOR = true;
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| *(sin parámetros)* | Activa el cursor para el listado |
| `-` | Desactiva el cursor (cuando está activo globalmente) |
| `NO` | Desactiva el cursor (cuando está activo globalmente) |

## Comportamiento

- **Por defecto**: Sin cursor (a menos que esté configurado globalmente)
- **Con parámetro vacío**: Activa el resaltado de fila
- **Con parámetros de desactivación**: Desactiva el cursor aunque esté activo globalmente
- **Efecto visual**: Resalta la fila completa al pasar el ratón sobre ella

## Ejemplos

### Ejemplo 1: Activar cursor
```
[Cursor]
```
Activa el resaltado de fila para este listado.

### Ejemplo 2: Desactivar cursor (método 1)
```
[Cursor] -
```
Desactiva el cursor aunque esté configurado globalmente.

### Ejemplo 3: Desactivar cursor (método 2)
```
[Cursor] NO
```
Alternativa para desactivar el cursor globalmente activo.