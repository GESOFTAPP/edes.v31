# DBEnd

## Ejemplo 1

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

## Ejemplo 2

```php
[DBEnd] A
    $cd_gs_user = $_IdRegistro['gs_user']; // ultimo registro insertado
```

## Ejemplo 3

```php
[DBEnd] M,A
    if($_resetea=='S'){
        $clave = strtoupper(md5('miclave')); 
        sql_Modifica( 'gs_user', "pass ='{$clave}'" , " email='{$email}'");
    }
```