# PagRotate

## Sintaxis

```
[PagRotate]
```

## Descripción

Rota la página al imprimir, poniéndola en orientación horizontal. Para definir una configuración general se añadirá la variable en el fichero de configuración "sql.ini".

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| - | - | No requiere parámetros | - | - |

## Ejemplos

### Ejemplo básico
```
[PagRotate]
```

### Configuración en sql.ini
Para aplicar la rotación de página de forma global, añadir en el archivo de configuración:
```ini
[Configuracion]
PagRotate=true
```