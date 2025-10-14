# Datos de usuario
```php

[Title]    Datos de usuario

[DBTable]  gs_user
[DBIndex]  cd_gs_user
[DBSerial] cd_gs_user
[DBLog]    cd_gs_user

[SelectMultiple] * | filtro | 50
[AddOption] * | filtro | ;1,Empresas A;2,Empresas B;3,Empresas C;4,Personas A;5,Personas B;6,Personas C;7,Usuarios A;8,Usuarios B;9,Usuarios C;10,Usuarios D


[Fields] 3
    Traslados\T               | traslados           | X | C  | 1  |     | MQ |  |  | 
 ,2 Gestión                   | gestion             | X | C  | 1  |     | MQ |  |  | 
 ,3 Cobros          		  | cobros              | X | C  | 1  |     | MQ |  |  | 
    Empresas		          | empresas            | X | C  | 1  |     | MQ |  |  | 
 ,2 Emitir 		              | emitir              | X | C  | 1  |     | MQ |  |  | 
 ,3 Recuperaciones            | recu                | X | C  | 1  |     | MQ |  |  | 
    Recibos                   | recibos             | X | C  | 1  |     | MQ |  |  | 
 ,2 Alta Web\A WEB            | alta_web            | X | C  | 1  |     | MQ |  |  | 
 ,3 Pagos                     | pagos               | X | C  | 1  |     | MQ |  |  | 
    Webmaster                 | webmaster           | X | C  | 1  |     | MQ |  |  | 
 ,2 Devoluciones  			  | devolucion          | X | C  | 1  |     | MQ |  |  | 
 ,3 Gestión Usuarios          | gestion_usu         | X | C  | 1  |     | MQ |  |  | 
-| Comunicaciones
    Filtros de envío          | filtro      		| X | SV | 2  | 298 | M  |  |  | 	
```	