# LoadTrigger

## Sintaxis

```
[LoadTrigger] <NomScript> [,<NomScript>,...]
```

## Descripción

Carga uno o varios scripts de trigger que se ejecutarán en respuesta a eventos específicos del sistema. Los triggers permiten automatizar acciones cuando ocurren determinadas condiciones o eventos en la aplicación.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| NomScript | string | Nombre del script de trigger a cargar. Se pueden especificar múltiples scripts separados por comas | Sí |

## Ejemplos

### Ejemplo básico
```
[LoadTrigger] trigger_usuarios
```

### Ejemplo con múltiples triggers
```
[LoadTrigger] trigger_usuarios, trigger_auditoria, trigger_notificaciones
```

### Ejemplo con triggers específicos
```
[LoadTrigger] before_insert_cliente, after_update_producto
```