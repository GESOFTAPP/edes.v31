# LockFile

## Sintaxis

```
[LockFile] dd/hh:mm (NºUsuario)
```

## Descripción

Bloquea el fichero para escritura dejándolo visible para el resto de usuarios. Solo puede ser desbloqueado por el usuario que lo bloqueó o por el supervisor. Esta etiqueta únicamente se puede poner y quitar desde el icono de gsEdit.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| dd | número | Día del mes (formato numérico) | Sí |
| hh:mm | tiempo | Hora y minutos del bloqueo (formato 24 horas) | Sí |
| NºUsuario | número | Número identificador del usuario que realiza el bloqueo | Sí |

## Ejemplos

### Ejemplo básico
```
[LockFile] 15/14:30 (123)
```

### Ejemplo con diferentes usuarios
```
[LockFile] 01/09:15 (456)
[LockFile] 28/16:45 (789)
```

### Ejemplo con horarios diversos
```
[LockFile] 05/08:00 (100)
[LockFile] 12/23:59 (200)
```

## Notas importantes

- El fichero permanece visible para todos los usuarios, pero solo lectura
- Solo el usuario que creó el bloqueo o un supervisor pueden desbloquearlo
- La gestión de esta etiqueta se realiza exclusivamente desde gsEdit