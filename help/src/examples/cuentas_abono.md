
# Finanzas
```php

[Title] CUENTAS DE ABONO 

[DBTable]  cuenta_abono
[DBIndex]  cd_cuenta_abono
[DBOrder]  cd_cuenta_abono
[DBSerial] cd_cuenta_abono
[SkipTD] * | cd_banco
[Debug] *| 4

[AddOption] * | tipo       | ;N,Nacional;C,Comunidad autónoma;P,provincial;M,Municipal
[AddOption] * | dia_semana | ;L,Lunes;M,Martes;X,Miércoles;J,Jueves;V,Viernes;S,Sábado;D,Domingo

[Fields]
                               | cd_cuenta_abono | * | T |  5 |     | *  ||   |
    Nombre Cuenta              | nm_cuenta_abono | N | T | 36 |     | MQ || # |
{FS}{ Datos Bancarios
   ]Banco                      | cd_banco        | 0 | T |  4 |     | MQ || # |
  ,] &nbsp;&nbsp;Sucursal      | cd_suc          | 0 | T |  4 |     | MQ || # |
  ,] &nbsp;&nbsp;Control&nbsp; | control         | 0 | T |  2 |     | MQ || # |
  ,] &nbsp;&nbsp;CCC           | ccc             | 0 | T | 10 |     | MQ || # |
   ]IBAN                       | iban            | X | T | 24 | 175 | MQ || % |
  ,]SWIFF                      | swiff           | X | T | 11 |     | MQ || % |
}

[FormCheck]
 AM | eOkNCC( {cd_banco}, {cd_suc}, {control}, {ccc} ) | Error en la 'CCC
```