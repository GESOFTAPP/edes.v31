# DBInsert
## Ejemplo 1
```php
[Title]   DATOS BASICOS USUARIOS
[DBTable] usuarios
[DBIndex] dni
[DBOrder] dni

[Fields] 
    DNI o NIE             | dni                                        | DNI | T  | 8  |              | A  |         | # | 
    F.Nacimiento          | fnacim                                     | F4  | T  | 10 |              | AF |         |   | 
    F.Alta                | f_alta                                     | F4  | T  | 7  |              | *  | #today# |   | 
    Apellidos             | apellido1                                  | N   | T  | 30 |              | A  |         | # | 
   ,                      | apellido2                                  | N   | T  | 30 |              | A  |         | # | 
    Nombre                | nombre                                     | N   | T  | 30 |              | A  |         | # | 
   ,Sexo                  | sexo                                       | N   | SV | 5  |              | A  |         | # | 
 

[WinClose]

[DBInsert] A
   global $ValorDB;
   echo 'if( window.name == "Pag" ) return;';

   for( $n=0; $n<count($ValorDB); $n++ ) $ValorDB[$n][0] = $ValorDB[$n][1];

   echo "var uO = window.frameElement.WOPENER;";
   $nombreCompleto =$nombre." ".$apellido1." ".$apellido2;
   echo "ePPF('_nm_persona','".$nombreCompleto."');";
   echo "ePPF('_sexo','".$sexo."');";
   echo "ePPF('_fnacim','".$fnacim."');";
   qSelect('personas','id_usuario',"dni='{$dni}'" ); 
   $row = qArray();
   echo "ePPF('id_usuario','".$row['id_usuario']."');";
```



 ## Ejemplo 2 
 ```php
 // despues de insertar recarga la ventana padre con la siguiente url para hacer lo que sea
 [DBInsert] A
   eInit();
   echo "<script>window.frameElement.WOPENER.location.replace('edes.php?Ll:verifica_user.edf&_ASSIGN=l&sol_usu=".$_vF['_su']."&modo=".$_vF['_mo']."');";
   echo 'top.eSWClose(window);</script>';
   eEnd();  
  ```php