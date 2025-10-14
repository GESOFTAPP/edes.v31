# Selección de usuario (sel_usuario.fdf)
```php
/*
Viene del ejemplo "Alumnos"
[AddCode] a,m,b | _dni  | A | <img src='./g/buscar.gif' onClick='FunPadre(this,"B","FRM1;_dni=dni, cd_gs_user=cd_gs_user, _nombre=user_name, _apel=user_surname, cd_rama=cd_rama, cd_auto=cd_auto, cd_prov=cd_prov, cd_coma=cd_coma : sel_usuario")'> 
//llama en los modos "a,m,b " subventana que se abre a sel_usuario.fdf
*/

[Title]  SELECCIONA USUARIO

[DBTable]  gs_user
[DBOrder]  user_name, user_surname
#include(*) dni.inc

[WinTitle]  VENTANA DE SELECCIÓN
[NoSort]
[Fields]
    DNI / NIF  | dni          | DNI | T | 8  |        | MQ   |        | # | 
    Nombre     | user_name    | X   | T | 20 |        | MQ   |        | # | 
   ,Apellidos  | user_surname | X   | T | 30 |        | MQ   |        | # | 
    Cargo      | cd_cargo_usu | 0   | T | 3  |        | *    |        |   | 
   ,           | cd_gs_user   | DNI | T | 8  |        | *    |        | # |

```