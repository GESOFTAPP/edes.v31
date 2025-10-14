# ForUsers

## Sintaxis

```
[ForUsers] Modo | ListaDeUsuarios/CondicionPHP/SQL/Permiso [| MensajeAMostrar]
```

## Descripción

La función `ForUsers` es un mecanismo de control de acceso que restringe la ejecución de funciones del sistema (DF) únicamente a usuarios autorizados. Permite establecer condiciones de acceso basadas en listas de usuarios, condiciones PHP, consultas SQL o permisos específicos.

El sistema evaluará la condición especificada y permitirá o denegará el acceso según el resultado. Si no se especifica un mensaje personalizado, se mostrará el mensaje de acceso denegado por defecto.

## Parámetros

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| `Modo` | String | Modo de ejecución del sistema (a=admin, *=todos, u=usuario, etc.) | Sí |
| `ListaDeUsuarios` | String | Lista de códigos de usuario separados por comas | Condicional* |
| `CondicionPHP` | String | Expresión PHP que debe evaluarse como verdadera | Condicional* |
| `SQL` | String | Consulta SQL tipo COUNT que debe retornar 1 para permitir acceso | Condicional* |
| `Permiso` | String | Nombre del permiso precedido por # | Condicional* |
| `MensajeAMostrar` | String | Mensaje personalizado cuando se deniega el acceso | No |

*Al menos uno de estos parámetros debe estar presente

## Ejemplos

### Control por lista de usuarios específicos
```php
[ForUsers] a | 5,203,54 | ACCESO DENEGADO
```
**Descripción**: Solo permite acceso en modo admin a los usuarios con códigos 5, 203 y 54. Si el acceso es denegado, muestra "ACCESO DENEGADO".

### Control por condición PHP
```php
[ForUsers] * | $_Node==2 | ACCESO DENEGADO
```
**Descripción**: Permite acceso en cualquier modo solo si la variable `$_Node` es igual a 2. Si no se cumple la condición, muestra "ACCESO DENEGADO".

### Control por consulta SQL
```php
[ForUsers] * | select count(*) from gs_user where cd_gs_user='{$_User}' and cd_gs_tree=9
```
**Descripción**: Ejecuta una consulta SQL que verifica si el usuario actual pertenece al árbol 9. Si la consulta retorna 1, permite el acceso.

### Control por permisos del sistema
```php
[ForUsers] * | #namePermission
```
**Descripción**: Verifica si el usuario actual tiene el permiso llamado "namePermission". Solo permite acceso si el usuario posee dicho permiso.

### Control por lista de usuarios con mensaje por defecto
```php
[ForUsers] u | 100,101,102,103
```
**Descripción**: Solo permite acceso en modo usuario a los códigos 100, 101, 102 y 103. Si se deniega el acceso, muestra el mensaje por defecto del sistema.

### Control combinado con condición PHP compleja
```php
[ForUsers] * | ($_User > 50 && $_Department == 'IT') | Solo personal de IT con código mayor a 50
```
**Descripción**: Permite acceso solo a usuarios del departamento IT que tengan un código mayor a 50.

### Control por consulta SQL con parámetros múltiples
```php
[ForUsers] a | select count(*) from user_permissions where user_id='{$_User}' and permission='admin' and status='active' | No tiene permisos de administrador activos
```
**Descripción**: Verifica mediante SQL si el usuario tiene permisos de administrador activos antes de permitir el acceso en modo admin.

## Notas Importantes

- Los modos más comunes son: `a` (admin), `u` (usuario), `*` (todos)
- Las consultas SQL deben retornar exactamente 1 para permitir acceso
- Las condiciones PHP se evalúan en el contexto del sistema
- Los permisos se especifican con el prefijo `#`
- Si no se especifica mensaje, se usa el mensaje por defecto del sistema