# ISublist

## misNotas.edf 
```php
/* Se define la iSublist en "misNotas.edf" y se gestiona desde "per/notas.edf" */
[Title] Notas

[DBTable] persona
[DBIndex] dni

[P]--

[Fields]
-|  Listado de Notas  
{I}	<br>
	{iSubList} mR    | per/notas.edf | cd_persona  | 100%,11r | ID   | -title
	{iSubList} cR,bR | per/notas.edf | cd_persona  | 100%,11r | V-TM | -title
```



## per/notas.edf 
```php
[Title] Notas

[DBTable] log_persona_nota
[DBIndex] cd_log_persona_nota
[DBSerial] cd_log_persona_nota
[DBOrder] cdi desc


[DBLimit]  100,8,8
[ColsWidth] texto=400, usuario=200
[ShowFields] a, mR | _reg | select count(*) as _reg from persona_nota where cd_persona='{$_vF[cd_persona]}'



[Fields] a,?R
    Id         | cd_log_persona_nota                                                     | + | T | 9        |        | *  |       |  | 
    Nota       | texto                                                                   | # | A | 400,85,3 | 450    | M  |       |  | 
    Usuario    | cd_gs_user{gs_user, cd_gs_user, user_name,' ', user_surname} as usuario | 0 | S | 9        | +texto | -M | _User |  | 
    Fecha      | cdi                                                                     | X | T | 19       |        | *  | #y2s# |  | 
    cd_persona | cd_persona                                                              | X | T | 9        |        | *  |       |  | 
               | dni                                                                     | X | T | 9        |        | *  |       |  | 
               | _reg                                                                    | + | T | 10       |        | *  |       |  | 


[Fields] l
    Id      | cd_log_persona_nota                                                     | + | T | 9        |     | * |  |  | 
    Nota    | texto                                                                   | # | A | 400,85,3 | 450 | M |  |  | 
    Fecha   | cdi                                                                     | X | T | 19       |     | M |  |  | 
    Usuario | cd_gs_user{gs_user, cd_gs_user, user_name,' ', user_surname} as usuario | 0 | S | 9        |     | M |  |  | 



[JSEnd] a
	ePF('dni', _WOPENER.ePGF('dni'));


[JSEnd]	bR
	if (eGF('cd_gs_user')!=_User){
		var TD = DA['OpButtons'][1].rows[0].cells[0];
		TD.innerHTML += '<span style="color:#FF0000;"><b>Sólo el usuario que creó la nota la pueden eliminar</b></span>';	
		eGO('OpExe').style.display='none';
	}


	
```