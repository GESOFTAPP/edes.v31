# SkipTD

## SINTAXIS
```
[SkipTD] Mode | FieldsList
```

## DESCRIPCIÓN
Optimiza el layout de formularios evitando celdas vacías. En un formulario estándar con formato "Etiqueta + Control", cuando se omite una etiqueta o se posiciona encima del control, se genera una celda vacía en la posición donde debería estar la etiqueta. SkipTD soluciona este problema desplazando el control hacia la izquierda, eliminando el espacio vacío y mejorando la presentación visual.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de operación:<br>• **\*** : Aplica a todos los campos |
| **FieldsList** | Lista de campos específicos separados por comas que deben existir en la etiqueta [Fields]. Define qué campos se verán afectados por el ajuste de layout |

## CASOS DE USO
- **Formularios con etiquetas opcionales**: Cuando algunos campos no requieren etiqueta visible
- **Layouts compactos**: Para maximizar el uso del espacio disponible
- **Campos de solo lectura**: Especialmente útil para campos calculados o de información

## EJEMPLO

En este ejemplo, el campo `cd_banco` utilizará SkipTD para optimizar su presentación:

```
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
 AM | eOkNCC( {cd_banco}, {cd_suc}, {control}, {ccc} ) | Error en la 'CCC'
```

### Resultado
El campo `cd_banco` se desplazará hacia la izquierda eliminando cualquier celda vacía que pudiera generarse por la ausencia o posicionamiento especial de su etiqueta.