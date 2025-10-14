# LoadProcedure

## Sintaxis

```
[LoadProcedure] <NomProcedure> [,<NomProcedure>,...]
```

## Descripción

Lee uno o varios procedimientos almacenados de la base de datos, permitiendo su posterior modificación. Esta funcionalidad es útil para cargar procedimientos que necesitan ser editados dinámicamente o actualizados durante la ejecución de la aplicación.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| NomProcedure | string | Nombre del procedimiento almacenado a cargar. Se pueden especificar múltiples procedimientos separados por comas | Sí |

## Ejemplos

### Ejemplo básico
```
[LoadProcedure] gestionar_cobros
```

### Ejemplo con múltiples procedimientos
```
[LoadProcedure] gestionar_cobros, gestionar_devoluciones
```

### Ejemplo con procedimientos relacionados
```
[LoadProcedure] proc_usuarios, proc_permisos, proc_auditoria
```