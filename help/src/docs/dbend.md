# DBEnd

## Sintaxis
```
[DBEnd] Mode [ [ | NomEDF/else,... ] | ListaDeCampos ] ...
```

## Descripción
Ejecuta operaciones SQL después de la operación del motor. Esta etiqueta permite realizar acciones adicionales una vez que el motor ha completado sus operaciones principales.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación (A=Alta, M=Modificación, etc.) |
| **NomEDF/else** | Nombre del archivo de definición o condición alternativa |
| **ListaDeCampos** | Lista de campos específicos |

### Parámetro especial: NomEDF
En los ficheros de definición "LDF" con tipo de edición SubSelect "Ss", admiten este segundo parámetro para añadir "options" al select al principio cuando es atacado desde determinado sitio.

**Ejemplo de uso:**
```php
[DBEnd] * | muni.edf
```

## Variables disponibles
- **`$_LastValue`**: Contiene los valores anteriores del registro
- **`$_POST`**: Datos enviados desde el formulario
- **`$_User`**: Usuario actual del sistema
- **`$_IdRegistro`**: ID del último registro procesado

## Ejemplos prácticos

### Ejemplo 1: Envío de email tras operación
```php
[DBEnd] A,M
    if( $enviar_email=='S' ){
            // Obtener el email origen
        qQuery("select email,user_name,user_surname from gs_user where cd_gs_user={$_User}");
        $r=qArray();
    
        // Envío de email
        include( eScript('../email/plantilla_0.php') );
        $e = new Plantilla_email_0($r['email'] , $r['user_name'].' '.$r['user_surname']);
        $ret=$e->mail($email,'Gestión de usuarios', $email_text );
        
        $f=eScript('//usu/log_gestion_usuarios.txt');           
        error_log( date('Y-m-d H:i:s')." mail from {$_User} to {$email} cd_sol_gs_user:{$cd_sol_gs_user} cd_sol_gs_user_tarea:{$cd_sol_gs_user_tarea} ret:{$ret}\n",3,$f);
        error_log( 'Texto email: '.$email_text.">>>FIN\n" , 3 , $f);
    }
```
**Explicación**: Se ejecuta tras altas (A) y modificaciones (M). Si la variable `$enviar_email` es 'S', obtiene datos del usuario, envía un email usando una plantilla y registra la operación en un log.

### Ejemplo 2: Obtener ID del último registro insertado
```php
[DBEnd] A
    $cd_gs_user = $_IdRegistro['gs_user']; // ultimo registro insertado
```
**Explicación**: Solo se ejecuta tras altas (A). Captura el ID del último registro insertado para uso posterior.

### Ejemplo 3: Resetear contraseña condicionalmente
```php
[DBEnd] M,A
    if($_resetea=='S'){
        $clave = strtoupper(md5('miclave')); 
        sql_Modifica( 'gs_user', "pass ='{$clave}'" , " email='{$email}'");
    }
```
**Explicación**: Se ejecuta tras modificaciones (M) y altas (A). Si la variable `$_resetea` es 'S', genera una nueva contraseña encriptada y la actualiza en la base de datos.

### Ejemplo 4: Detección de cambios en campos
```php
[DBEnd] M | | cd_forma_cobro
    if( $_LastValue['cd_forma_cobro'] != $_POST['cd_forma_cobro'] ){
        // El campo cd_forma_cobro ha cambiado
        // Realizar acciones específicas
    }
```
**Explicación**: Compara el valor anterior con el nuevo para detectar cambios en campos específicos.

## Casos de uso comunes
- **Notificaciones**: Envío de emails o notificaciones tras cambios
- **Logging**: Registro de operaciones en archivos de log
- **Validaciones post-procesamiento**: Verificaciones adicionales después de la operación
- **Actualizaciones relacionadas**: Modificar datos en tablas relacionadas
- **Cálculos derivados**: Actualizar campos calculados basados en los cambios
- **Integración con sistemas externos**: Sincronizar datos con APIs externas

## Consideraciones importantes
- Se ejecuta **después** de que el motor complete su operación
- Útil para operaciones que dependen del éxito de la operación principal
- Permite acceso a variables del sistema como `$_User`, `$_IdRegistro`, etc.
- Ideal para implementar lógica de negocio post-procesamiento